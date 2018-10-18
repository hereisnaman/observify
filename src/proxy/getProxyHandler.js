import { getTrap, setTrap } from './traps/';

export const getProxyHandler = () => ({
  get: getTrap,
  set: setTrap,
});
