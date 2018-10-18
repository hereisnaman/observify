import { getTrap, setTrap, definePropertyTrap } from './traps/';

export default (target, dep) =>
  new Proxy(target, {
    get: getTrap(dep),
    set: setTrap(dep),
    defineProperty: definePropertyTrap(dep),
  });
