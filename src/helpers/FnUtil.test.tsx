import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { getFontSize, getMeasurement, Sizes } from './FnUtil';

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

  describe('getFontSize', () => {
    it('Deve retornar 4px a menos quando passado xs', () => {
      const fontBase = 16;

      render(
        <div style={{ fontSize: getFontSize(Sizes.xs, fontBase) }}>Teste</div>,
      );

      expect(screen.getByText('Teste')).toHaveStyle(
        `font-size: ${getFontSize(Sizes.xs, fontBase)}`,
      );
    });
    it('Deve retornar 2px a menos quando passado sm', () => {
      const fontBase = 16;

      render(
        <div style={{ fontSize: getFontSize(Sizes.sm, fontBase) }}>Teste</div>,
      );

      expect(screen.getByText('Teste')).toHaveStyle(
        `font-size: ${getFontSize(Sizes.sm, fontBase)}`,
      );
    });
    it('Deve retornar o tamanho da fontBase quando passado md', () => {
      const fontBase = 16;

      render(
        <div style={{ fontSize: getFontSize(Sizes.md, fontBase) }}>Teste</div>,
      );

      expect(screen.getByText('Teste')).toHaveStyle(
        `font-size: ${getFontSize(Sizes.md, fontBase)}`,
      );
    });
    it('Deve retornar 2px a mais quando passado lg', () => {
      const fontBase = 16;

      render(
        <div style={{ fontSize: getFontSize(Sizes.lg, fontBase) }}>Teste</div>,
      );

      expect(screen.getByText('Teste')).toHaveStyle(
        `font-size: ${getFontSize(Sizes.lg, fontBase)}`,
      );
    });
    it('Deve retornar 4px a mais quando passado xl', () => {
      const fontBase = 16;

      render(
        <div style={{ fontSize: getFontSize(Sizes.xl, fontBase) }}>Teste</div>,
      );

      expect(screen.getByText('Teste')).toHaveStyle(
        `font-size: ${getFontSize(Sizes.xl, fontBase)}`,
      );
    });
  });
});
