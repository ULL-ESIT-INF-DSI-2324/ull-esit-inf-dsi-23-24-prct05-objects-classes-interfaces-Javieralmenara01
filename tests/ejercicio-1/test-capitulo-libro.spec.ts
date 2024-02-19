import 'mocha'
import { expect } from 'chai';
import { CapituloLibro } from '../../src/ejercicio-1/capitulo-libro';

describe('CapituloLibro', () => {
  it('should format to IEEE correctly', () => {
      const capitulo = new CapituloLibro(
          'Título del capítulo',
          ['Autor 1', 'Autor 2'],
          ['Palabra clave 1', 'Palabra clave 2'],
          'Resumen del capítulo',
          new Date(),
          '30-40',
          'Editorial',
          'Título del libro'
      );
      const expected = 'Autor 1, Autor 2, "Título del capítulo", in Título del libro, Editorial, ' + new Date().getFullYear() + ', pp. 30-40';
      expect(capitulo.toIEEEFormat()).to.equal(expected);
  });
});