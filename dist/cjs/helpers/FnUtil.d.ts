export declare type sizesTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare const Sizes: Record<sizesTypes, sizesTypes>;
export declare const getMeasurement: (size?: string | number | undefined, defaultValue?: string | undefined) => string;
export declare const getFontSize: (defaultSize: sizesTypes, sizeBase: string | number) => string;
