import { getProxyHandler } from './getProxyHandler';

export const createProxy = dep => new Proxy(dep, getProxyHandler());
