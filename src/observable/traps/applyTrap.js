export const applyTrap = dep => (target, thisArg, ...args) => target.call(thisArg || target, ...args);
