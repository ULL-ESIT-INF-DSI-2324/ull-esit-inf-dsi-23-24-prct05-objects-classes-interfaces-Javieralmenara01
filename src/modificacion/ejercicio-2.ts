/**
 * Una nevera inteligente puede contener alimentos y/o bebidas. 
 * Tanto un alimento como una bebida tienen características comunes, como un nombre e 
 * información nutricional asociada, por ejemplo. Luego, también poseen características 
 * diferenciadoras como, por ejemplo, la cantidad (en gramos para los alimentos y litros para las bebidas).
 * 
 * La nevera debe llevar un control de las unidades disponibles de cada alimento y/o bebida 
 * almacenada en su interior. Cuando la cantidad de un alimento o bebida llegue a cero, debe 
 * añadir dicho alimento o bebida a una lista de la compra. El usuario de la nevera puede 
 * añadir o consumir alimentos y/o bebidas, así como consultar la lista de la compra en cualquier momento.
 * 
 * Programe las entidades necesarias para modelar lo anterior y cree múltiples instancias de diferentes 
 * alimentos y/o bebidas.
 * Recuerde que deberá incluir la documentación haciendo uso de TypeDoc, así como seguir una metodología 
 * TDD utilizando el framework de pruebas Mocha y la librería de aserciones Chai. Como entrega de esta 
 * tarea deberá indicar, de nuevo, el enlace a dicho repositorio GitHub con los ejercicios solicitados.
 */

/**
 * Interfaz que implementa un objeto de la nevera
 */
export interface ObjetoNevera {
  nombre: string,
  informacionNutricional: number
}

/**
 * Clase que implementa un alimento
 */
export class Alimento implements ObjetoNevera {
  constructor(public nombre: string, public informacionNutricional: number, public cantidadGramos: number) {
    /// Empty
  }
  toString() {
    return this.nombre;
  }
}

/**
 * Clase que implementa una bebida
 */
export class Bebida implements ObjetoNevera {
  constructor(public nombre: string, public informacionNutricional: number, public cantidadLitros: number, public alcoholic: boolean) {
    /// Empty
  }
  toString() {
    return this.nombre;
  }
}

export type Cantidades = [ObjetoNevera, number]

/**
 * Clase que implementa una nevera
 */
export class Nevera {
  private listaCompra: ObjetoNevera[] = [];
  constructor(public listaAlimentos: Cantidades[]) {}

  /**
   * Añade elementos que no quedan a la lista de la compra
   */
  añadirCompra() {
    this.listaAlimentos.forEach(element => {
      if (element[1] === 0) {
        this.listaCompra.push(element[0]);
      }
    });
  }

  /**
   * Añade elementos a la nevera
   * @nuevoObjeto: objeto a añadir a la nevera
   */
  añadirElemento(nuevoObjeto: Cantidades) {
    this.listaAlimentos.push(nuevoObjeto);
  }

  /**
   * Extrae elementos a la nevera
   * @param nombreElemento: nombre elemento a coger
   */
  cogerElemento(nombreElemento: string) {
    this.listaAlimentos.forEach(element => {
      if ('toString' in element[0]) {
        if (element[0].toString() == nombreElemento) {
          if (element[1] > 1) {
            element[1] = element[1] - 1;
          } else {
            console.log('Sin Existencias');
          }
          this.añadirCompra();
        }
      }
    });
  }

  /**
   * Extrae elementos a la nevera
   */
  mostrarContenido() {
    let result: string = "En la nevera hay: \n";
    this.listaAlimentos.forEach(element => {
      if ('toString' in element[0]) {
        result += `${element[0].toString()} -> ${element[1]}\n`;
        console.log(`${element[0].toString()} -> ${element[1]}`);
      }
    });
    return result;
  }

  mostrarListaCompra() {
    let result: string = "Cosas que comprar: \n";
    console.log(`Cosas que comprar: `);
    this.listaCompra.forEach(element => {
      result += `- ${element}`;
      console.log(`- ${element}`);
    });
    return result;
  }
}

const alimento1 = new Alimento("Queso", 1230, 250);
const alimento2 = new Alimento("Jamón", 2340, 300);

const bebida1 = new Bebida("Leche", 120, 100, false);
const bebida2 = new Bebida("Agua", 10, 1000, false);

const objetosActuales: Cantidades[] = [[alimento1, 0], [alimento2, 2], [bebida1, 2], [bebida2, 1]];
const myNevera: Nevera = new Nevera(objetosActuales);
myNevera.mostrarContenido();
myNevera.añadirCompra();
console.log(myNevera.mostrarListaCompra())
myNevera.cogerElemento("Leche");
myNevera.mostrarContenido();
