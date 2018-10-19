import { getTrap, setTrap, definePropertyTrap, deletePropertyTrap } from './traps/';

export default (target, dep) =>
  new Proxy(target, {
    get: getTrap(dep),
    defineProperty: definePropertyTrap(dep),
    deleteProperty: deletePropertyTrap(dep),
    set: setTrap(dep),
  });
