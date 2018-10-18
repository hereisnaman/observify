import Dependency from './dependency';
import createObservableProxy from './observable/createProxy';

export const observify = (target, subscribers) => {
  const dep = new Dependency(target, subscribers);
  const proxy = createObservableProxy(dep.target, dep);

  dep._observable = proxy;

  return proxy;
};
