export const getTrap = dep => (target, key) => {
  if (key === '_subscribe') {
    return dep.subscribe;
  }

  return Reflect.get(target, key);
};
