import { getTrap, setTrap } from './traps/';

export const getProxyHandler = dep => ({
  get: getTrap(dep),
  set: setTrap(dep),
});
