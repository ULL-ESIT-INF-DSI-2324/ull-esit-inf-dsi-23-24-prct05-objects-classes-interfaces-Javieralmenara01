import 'mocha'
import { expect } from 'chai';
import { TrabajoFinGrado } from '../../src/ejercicio-1/trabajo-fin-grado';

describe('TrabajoFinGrado', () => {
  it('should format to IEEE correctly', () => {
      const trabajo = new TrabajoFinGrado(
          'Título del trabajo de fin de grado',
          ['Autor 1', 'Autor 2'],
          ['Palabra clave 1', 'Palabra clave 2'],
          'Resumen del trabajo de fin de grado',
          new Date(),
          '90-100',
          'Editorial',
          'Titulo del Grado'
      );
      const expected = 'Autor 1, Autor 2, "Título del trabajo de fin de grado", Editorial, ' + new Date().getFullYear() + ', pp. 90-100';
      expect(trabajo.toIEEEFormat()).to.equal(expected);
  });
});