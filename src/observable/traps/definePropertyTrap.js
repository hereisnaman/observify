import mappedDepProps from '../mappedDepProps';

export const definePropertyTrap = dep => (target, key, descriptor) => {
  if (mappedDepProps.includes(key)) {
    throw new Error(`Invalid attempt to define private ${key} property`);
  }

  return Object.defineProperty(target, key, descriptor);
};
