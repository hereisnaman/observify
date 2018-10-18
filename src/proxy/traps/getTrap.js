export const getTrap = (dep, key, context) => {
  if (['_subscribe', '_unsubscribe'].includes(key)) {
    return dep[key.substring(1)];
  }

  return Reflect.get(dep.target, key, context);
};
