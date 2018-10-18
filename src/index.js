import { Dependency } from './dependency';
import { createProxy } from './proxy/';

export const observify = (target, subscribers) => {
  const dep = new Dependency(subscribers);

  return createProxy(target, dep);
};
