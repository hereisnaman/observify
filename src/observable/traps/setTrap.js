import equal from 'deep-equal';

export const setTrap = dep => (target, key, value, context) => {
  const previousValue = target[key];

  // update property
  const success = Reflect.set(target, key, value, context);

  if (success) {
    // deep compare with previous property value
    if (equal(Reflect.get(target, key, context), previousValue)) {
      return success;
    }

    // notify subscribers
    dep.notify();
  }

  return success;
};
