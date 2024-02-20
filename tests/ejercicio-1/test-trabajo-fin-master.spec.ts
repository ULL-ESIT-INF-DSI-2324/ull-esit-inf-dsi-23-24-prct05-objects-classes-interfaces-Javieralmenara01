import 'mocha'
import { expect } from 'chai';
import { TrabajoFinMaster } from '../../src/ejercicio-1/trabajo-fin-master';

describe('TrabajoFinMaster', () => {
  it('should format to IEEE correctly', () => {
      const trabajo = new TrabajoFinMaster(
          'Título del trabajo de fin de máster',
          ['Autor 1', 'Autor 2'],
          ['Palabra clave 1', 'Palabra clave 2'],
          'Resumen del trabajo de fin de máster',
          new Date(),
          '110-120',
          'Editorial',
          'Titulo del Máster'
      );
      const expected = 'Autor 1, Autor 2, "Título del trabajo de fin de máster", Editorial, ' + new Date().getFullYear() + ', pp. 110-120';
      expect(trabajo.toIEEEFormat()).to.equal(expected);
  });
});