import mappedDepProps from './mappedDepProps';

export default target => {
  Object.keys(target).forEach(key => {
    if (mappedDepProps.includes(key)) {
      throw new Error(`Invalid private ${key} property present in target object`);
    }
  });
};
