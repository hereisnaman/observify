export const getTrap = dep => (target, key, context) => {
  if (['_subscribe', '_unsubscribe'].includes(key)) {
    return dep[key.substring(1)];
  }

  return Reflect.get(target, key, context);
};
