export const getMeasurement = (
  size?: string | number,
  defaultValue?: string,
) => {
  if (size) {
    if (typeof size === 'string') {
      return size;
    }
    return `${size}px`;
  }

  return defaultValue || '100%';
};
