import 'mocha'
import { expect } from 'chai';
import { ContribucionCongreso } from '../../src/ejercicio-1/contribucion-congreso';

describe('ContribucionCongreso', () => {
  it('should format to IEEE correctly', () => {
      const contribucion = new ContribucionCongreso(
          'Título de la contribución',
          ['Autor 1', 'Autor 2'],
          ['Palabra clave 1', 'Palabra clave 2'],
          'Resumen de la contribución',
          new Date(),
          '50-60',
          'Editorial',
          'Nombre de la conferencia',
          'Lugar de la conferencia'
      );
      const expected = 'Autor 1, Autor 2, "Título de la contribución", Editorial, in Nombre de la conferencia, Lugar de la conferencia, ' + new Date().getMonth() + ', ' + new Date().getFullYear() + ', pp. 50-60';
      expect(contribucion.toIEEEFormat()).to.equal(expected);
  });
});