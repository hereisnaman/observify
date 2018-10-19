import mappedDepProps from '../mappedDepProps';

/* Object.defineProperty or Reflect.defineProperty
 * do not trigger notifications
 */

export const definePropertyTrap = dep => (target, key, descriptor) => {
  if (mappedDepProps.includes(key)) {
    throw new Error(`Invalid attempt to define private ${key} property`);
  }

  // define property
  return Reflect.defineProperty(target, key, descriptor);
};
