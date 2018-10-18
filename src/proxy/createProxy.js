import { getProxyHandler } from './getProxyHandler';

export const createProxy = (target, dep) => new Proxy(target, getProxyHandler(dep));
