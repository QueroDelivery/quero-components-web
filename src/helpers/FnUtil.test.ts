import '@testing-library/jest-dom/extend-expect';
import { getMeasurement } from './FnUtil';

describe('FnUtils functions', () => {
  describe('getMeasurement', () => {
    it('Deve retornar um valor em pixels quando passado um número', () => {
      const pixels = 50;

      expect(getMeasurement(pixels)).toEqual(`${pixels}px`);
    });

    it('Deve retornar o valor passado no default caso não haja valor', () => {
      const defaultValue = 'auto';

      expect(getMeasurement(undefined)).toEqual('100%');
      expect(getMeasurement(undefined, defaultValue)).toEqual(defaultValue);
    });

    it('Deve retornar o valor da string sem alteração', () => {
      const measurement = '100px';

      expect(getMeasurement(measurement)).toEqual(measurement);
      expect(getMeasurement(measurement)).toStrictEqual(measurement);
    });
  });
});
