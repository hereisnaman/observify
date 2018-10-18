import { getTrap, setTrap } from './traps/';

export default (target, dep) =>
  new Proxy(target, {
    get: getTrap(dep),
    set: setTrap(dep),
  });
