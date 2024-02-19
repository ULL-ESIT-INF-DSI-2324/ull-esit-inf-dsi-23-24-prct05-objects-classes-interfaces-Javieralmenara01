import 'mocha'
import { expect } from 'chai';
import { Libro } from '../../src/ejercicio-1/libro';

describe('Libro', () => {
  it('should format to IEEE correctly', () => {
      const libro = new Libro(
          'Título del libro',
          ['Autor 1', 'Autor 2'],
          ['Palabra clave 1', 'Palabra clave 2'],
          'Resumen del libro',
          new Date(),
          '70-80',
          'Editorial',
          'ISBN123456789'
      );
      const expected = 'Autor 1, Autor 2, "Título del libro", Editorial, ' + new Date().getFullYear() + ', pp. 70-80';
      expect(libro.toIEEEFormat()).to.equal(expected);
  });
});