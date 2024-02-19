import 'mocha'
import { expect } from 'chai';
import { ObjetoNevera, Alimento, Bebida, Nevera, Cantidades } from '../../src/modificacion/ejercicio-2'

describe('Nevera', () => {
  let nevera: Nevera;

  beforeEach(() => {
    const alimento1 = new Alimento("Queso", 1230, 250);
    const alimento2 = new Alimento("Jamón", 2340, 300);
    const bebida1 = new Bebida("Leche", 120, 100, false);
    const bebida2 = new Bebida("Agua", 10, 1000, false);
    const objetosActuales: Cantidades[] = [[alimento1, 0], [alimento2, 2], [bebida1, 2], [bebida2, 1]];
    nevera = new Nevera(objetosActuales);
  });

  it('Mostrar el contenido correctamente', () => {
    const contenido = nevera.mostrarContenido();
    expect(contenido).to.include('Queso -> 0');
    expect(contenido).to.include('Jamón -> 2');
    expect(contenido).to.include('Leche -> 2');
    expect(contenido).to.include('Agua -> 1');
  });

  it('Añadir elementos a la lista de la compra cuando la cantidad es cero', () => {
    nevera.añadirCompra();
    const listaCompra = nevera.mostrarListaCompra();
    expect(listaCompra).to.include('Queso');
  });

  it('Coger un elemento y actualizar las cantidadess', () => {
    nevera.cogerElemento('Leche');
    const contenido = nevera.mostrarContenido();
    expect(contenido).to.include('Leche -> 1');
  });

  it('Mostrar la lista de la compra correctamente', () => {
    nevera.añadirCompra();
    const listaCompra = nevera.mostrarListaCompra();
    expect(listaCompra).to.include('Queso');
    expect(listaCompra).to.not.include('Jamón');
  });
});
