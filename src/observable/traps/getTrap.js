import mappedDepProps from '../mappedDepProps';

export const getTrap = dep => (target, key, context) => {
  if (mappedDepProps.includes(key)) {
    return dep[key.substring(1)];
  }

  let property = Reflect.get(target, key, context);

  if (typeof property === 'function') {
    property = property.bind(dep._observable);
  }

  return property;
};
