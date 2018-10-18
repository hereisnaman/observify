export const setTrap = (dep, key, value) => {
  Reflect.set(dep.target, key, value);

  dep.notify();
  return true;
};
