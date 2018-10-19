import { getTrap, setTrap, applyTrap, definePropertyTrap, deletePropertyTrap } from './traps/';

export default (target, dep) =>
  new Proxy(target, {
    apply: applyTrap(dep),
    get: getTrap(dep),
    defineProperty: definePropertyTrap(dep),
    deleteProperty: deletePropertyTrap(dep),
    set: setTrap(dep),
  });
