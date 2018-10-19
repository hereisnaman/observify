import mappedDepProps from '../mappedDepProps';

export const deletePropertyTrap = dep => (target, key) => {
  if (mappedDepProps.includes(key)) {
    throw new Error(`Invalid attempt to delete private ${key} property`);
  }

  // delete property
  const success = delete target[key];

  if (success) {
    // notify subscribers
    dep.notify();
  }

  return success;
};
