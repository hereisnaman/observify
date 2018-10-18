export const setTrap = dep => (target, key, value) => {
  Reflect.set(target, key, value);

  dep.notify(target);
  return true;
};
