import 'mocha'
import { expect } from 'chai';
import { ArticuloRevista } from '../../src/ejercicio-1/articulo-revista';

describe('ArticuloRevista', () => {
  it('should format to IEEE correctly', () => {
      const articulo = new ArticuloRevista(
          'Título del artículo',
          ['Autor 1', 'Autor 2'],
          ['Palabra clave 1', 'Palabra clave 2'],
          'Resumen del artículo',
          new Date(),
          '10-20',
          'Editorial',
          '1',
          2
      );
      const expected = 'Autor 1, Autor 2, "Título del artículo", Editorial, vol. 2, no. 1, pp. 10-20, ' + new Date().getFullYear();
      expect(articulo.toIEEEFormat()).to.equal(expected);
  });
});