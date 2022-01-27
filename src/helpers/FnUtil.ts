export type sizesTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const Sizes: Record<sizesTypes, sizesTypes> = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

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

export const getFontSize = (
  defaultSize: sizesTypes,
  sizeBase: string | number,
) => {
  switch (defaultSize) {
    case Sizes.xs:
      return `calc(${getMeasurement(sizeBase)} - 0.25rem)`;
    case Sizes.sm:
      return `calc(${getMeasurement(sizeBase)} - 0.125rem)`;
    case Sizes.md:
      return getMeasurement(sizeBase);
    case Sizes.lg:
      return `calc(${getMeasurement(sizeBase)} + 0.125rem)`;
    case Sizes.xl:
      return `calc(${getMeasurement(sizeBase)} + 0.25rem)`;
    default:
      return getMeasurement(sizeBase);
  }
};
