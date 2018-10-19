import Dependency from './dependency';
import createObservableProxy from './observable/createProxy';
import validateTarget from './observable/validateTarget';

export const observify = (target, subscribers) => {
  validateTarget(target);

  const dep = new Dependency(target, subscribers);
  const proxy = createObservableProxy(dep.target, dep);

  dep._observable = proxy;

  return proxy;
};
