/** @flow */
import sequest from 'sequest';

const ComponentObjects = null // TODO 

const toBase64 = (x:string|Buffer): string => null // TODO
const fromBase64 = () => null // TODO;
type SSHUrl = null // TODO
const unpack = () => null // TODO

// import ConsumerComponent from '../../../consumer/component'; // TODO a way to serialze output

////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// start key getter component ////////////////////////
////////////////////////////////////////////////////////////////////////////////////

const userHome = require('user-home');
const fs = require('fs');
const path = require('path');

const GLOBAL_CONFIG = path.join(CACHE_ROOT, 'config');

const GLOBAL_CONFIG_FILE = 'config.json';

function getPath() {
  return path.join(GLOBAL_CONFIG, GLOBAL_CONFIG_FILE);
}

class Config {
  constructor(object) {

  }

  toPlainObject() {
    return mapToObject(this);
  }

  toJson() {
    return JSON.stringify(this.toPlainObject());
  }

  static loadSync(): Config {
    try {
      const contents = fs.readFileSync(getPath());
      return new Config(JSON.parse(contents.toString()));
    } catch (err) {
      if (err.code !== 'ENOENT') return err;
      return new Config({});
    }
  }
}

function getSync(key: string): ?string {
  const config = GlobalConfig.loadSync();
  return config.get(key);
}

const CFG_SSH_KEY_FILE_KEY = 'ssh_key_file';
const DEFAULT_SSH_KEY_FILE = `${userHome}/.ssh/id_rsa`;

function getPathToIdentityFile() {
  const identityFile = getSync(CFG_SSH_KEY_FILE_KEY);
  return identityFile || DEFAULT_SSH_KEY_FILE;
}

function keyGetter(keyPath: ?string) {
  if (keyPath) return fs.readFileSync(keyPath);
  return fs.readFileSync(getPathToIdentityFile());
}

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// end key getter component /////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function absolutePath(path: string) {
  if (!path.startsWith('/')) return `~/${path}`;
  return path;
}

function clean(str: string) {
  return str.replace('\n', '');
}

function errorHandler(err, optionalId) {
  return err;
  // switch (err.code) {
  //   default:
  //     return new UnexpectedNetworkError();
  //   case 127:
  //     return new ComponentNotFound(err.id || optionalId);
  //   case 128:
  //     return new PermissionDenied();
  //   case 129:
  //     return new RemoteScopeNotFound();
  //   case 130:
  //     return new PermissionDenied();
  // }
}

type SSHProps = {
  path: string,
  username: string,
  port: number,
  host: string
};

/**
 * an ssh client for consuming bit components from a remote scope
 * @param {type} name
 * @returns {type}
 * @example 
 */
export default class ScopeSSHClient {
  connection: any;
  path: string;
  username: string;
  port: number;
  host: string;

  constructor({ path, username, port, host }: SSHProps) {
    this.path = path;
    this.username = username;
    this.port = port;
    this.host = host || '';
  }

  buildCmd(commandName: string, ...args: string[]): string {
    function serialize() {
      return args
        .map(val => toBase64(val))
        .join(' ');
    }

    return `bit ${commandName} ${serialize()}`;
  }

  exec(commandName: string, ...args: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      const cmd = this.buildCmd(commandName, absolutePath(this.path || ''), ...args);
      this.connection(cmd, function (err, res, o) {
        if (!o) return reject(new UnexpectedNetworkError());
        if (err && o.code && o.code !== 0) return reject(errorHandler(err, res));
        return resolve(clean(res));
      });
    });
  }

  fetch(ids: BitIds, noDeps: bool = false): Promise<ComponentObjects[]> {
    let options = '';
    ids = ids.map(bitId => bitId.toString());
    if (noDeps) options = '-n';
    return this.exec(`_fetch ${options}`, ...ids)
      .then((str: string) => {
        const components = unpack(str);
        return components.map((raw) => {
          return ComponentObjects.fromString(raw);
        });
      });
  }

  close() {
    this.connection.end();
    return this;
  }

  composeConnectionUrl() {
    return `${this.username}@${this.host}:${this.port}`;
  }

  connect(sshUrl: SSHUrl, key: ?string): Promise<ScopeSSHClient> {
    this.connection = sequest.connect(this.composeConnectionUrl(), {
      privateKey: keyGetter(key)
    });

    return Promise.resolve(this);
  }
};