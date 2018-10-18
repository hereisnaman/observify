import equal from 'deep-equal';

export const setTrap = dep => (target, key, value, context) => {
  if (equal(Reflect.get(dep.target, key, context), value)) {
    return true;
  }

  // update key
  if (Reflect.set(target, key, value, context)) {
    // notify subscribers
    dep.notify();

    return true;
  }

  return false;
};
