import { Dependency } from './dependency';
import { createProxy } from './proxy/';

export const observify = (target, subscribers) => {
  const dep = new Dependency(target, subscribers);

  return createProxy(dep);
};
