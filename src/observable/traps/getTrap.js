import mappedDepProps from '../mappedDepProps';

export const getTrap = dep => (target, key, context) => {
  if (mappedDepProps.includes(key)) {
    return dep[key.substring(1)];
  }

  return Reflect.get(target, key, context);
};
