import * as fs from 'fs';
import { ElementoBibliografico } from './elemento-bibliografico'
import { ArticuloRevista } from './articulo-revista';
import { CapituloLibro } from './capitulo-libro';
import { ContribucionCongreso } from './contribucion-congreso';
import { Libro } from './libro';
import { TrabajoFinGrado } from './trabajo-fin-grado';
import { TrabajoFinMaster } from './trabajo-fin-master';

/**
 * Clase que representa un gestor de referencias bibliográficas.
 */
export class GestorBibliografico {
  /**
   * Constructor de la clase GestorBibliografico.
   * @param elementos Array de elementos bibliográficos.
   * @usage
   * ```typescript
   * const gestor = new GestorBibliografico([]);
   * ```
   */
  constructor(private elementos: ElementoBibliografico[]) {
    /// Constructor
  }
  
  getElementos(): ElementoBibliografico[] {
    return this.elementos;
  }

  /**
   * Inserta un nuevo elemento bibliográfico en el gestor.
   * @param elemento Elemento bibliográfico a insertar.
   * @usage
   * ```typescript
   * const nuevoElemento = new Libro("Título del libro", ["Autor 1", "Autor 2"], ["Palabra clave 1", "Palabra clave 2"], "Resumen del libro", new Date(), 300, "Editorial");
   * gestor.insertarElemento(nuevoElemento);
   * ```
   */
  insertarElemento(elemento: ElementoBibliografico): void {
    this.elementos.push(elemento);
  }
  
  /**
   * Muestra la información de los elementos bibliográficos en formato de tabla.
   * @param listaElementos Lista opcional de elementos bibliográficos a mostrar.
   * @usage
   * ```typescript
   * gestor.mostrarInformacion();
   * gestor.mostrarInformacion([elemento1, elemento2]);
   * ```
   */
  mostrarInformacion(listaElementos?: ElementoBibliografico[]): void {
    if (!listaElementos) {
      console.table(this.elementos, ['titulo', 'autor', 'palabrasClave', 'resumen', 'fechaPublicacion', 'paginas', 'editorial']);
    } else {
      console.table(listaElementos, ['titulo', 'autor', 'palabrasClave', 'resumen', 'fechaPublicacion', 'paginas', 'editorial']);
    }
  }

  /**
   * Filtra los elementos bibliográficos según una clave de búsqueda y un campo opcional.
   * @param claveBusqueda Clave de búsqueda.
   * @param campoBusqueda Campo de búsqueda opcional.
   * @param exportar Indica si se deben exportar los resultados en formato IEEE.
   * @param ficheroSalida Nombre del archivo de salida para la exportación.
   * @returns Lista de elementos bibliográficos que coinciden con la búsqueda.
   * @usage
   * ```typescript
   * const resultados = gestor.filtrar("Título");
   * ```
   */
  filtrar(claveBusqueda: string, campoBusqueda?: string): string {
    let resultadosBusqueda: ElementoBibliografico[] = [];
    this.elementos.forEach(elemento => {
      let coincidencia: boolean = false;
      if (!campoBusqueda || campoBusqueda === 'titulo') {
        coincidencia = coincidencia || elemento.titulo.includes(claveBusqueda);
      }
      if (!campoBusqueda || campoBusqueda === 'autor') {
        coincidencia = coincidencia || elemento.autor.some(autor => autor.includes(claveBusqueda));
      }
      if (!campoBusqueda || campoBusqueda === 'palabrasClave') {
        coincidencia = coincidencia || elemento.palabrasClave.includes(claveBusqueda);
      }
      if (!campoBusqueda || campoBusqueda === 'fechaPublicacion') {
        coincidencia = coincidencia || elemento.fechaPublicacion.toString().includes(claveBusqueda);
      }
      if (!campoBusqueda || campoBusqueda === 'editorial') {
        coincidencia = coincidencia || elemento.editorial.includes(claveBusqueda);
      }
      if (coincidencia) {
        resultadosBusqueda.push(elemento);
      }
    });
    const datosExportar: string = resultadosBusqueda.map(elemento => { return elemento.toIEEEFormat() }).join(`\n`);
    return datosExportar;
  }
  
  /**
   * Filtra los elementos bibliográficos según una expresión regular y otros criterios opcionales.
   * @param claveBusqueda Expresión regular para la búsqueda.
   * @param campoBusqueda Campo de búsqueda opcional.
   * @param exportar Indica si se deben exportar los resultados en formato IEEE.
   * @param ficheroSalida Nombre del archivo de salida para la exportación.
   * @returns Lista de elementos bibliográficos que coinciden con la búsqueda.
   * @usage
   * ```typescript
   * const resultados = gestor.filtrarExpresion(/Título/);
   * ```
   */
  filtrarExpresion(claveBusqueda: RegExp, campoBusqueda?: string): string {
    let resultadosBusqueda: ElementoBibliografico[] = [];
    this.elementos.forEach(elemento => {
      let coincidencia: boolean = false;
      if (!campoBusqueda || campoBusqueda === 'titulo') {
        coincidencia = coincidencia || claveBusqueda.test(elemento.titulo);
      }
      if (!campoBusqueda || campoBusqueda === 'autor') {
        coincidencia = coincidencia || elemento.autor.some(autorSel => {
          return claveBusqueda.test(autorSel); // Corregido: Agrega el retorno aquí
        });
      }
      if (!campoBusqueda || campoBusqueda === 'palabrasClave') {
        coincidencia = coincidencia || elemento.palabrasClave.some(palabra => {
          return claveBusqueda.test(palabra); // Corregido: Agrega el retorno aquí
        });
      }
      if (!campoBusqueda || campoBusqueda === 'fechaPublicacion') {
        coincidencia = coincidencia || claveBusqueda.test(elemento.fechaPublicacion.toString());
      }
      if (!campoBusqueda || campoBusqueda === 'editorial') {
        coincidencia = coincidencia || claveBusqueda.test(elemento.editorial);
      }
      if (coincidencia) {
        resultadosBusqueda.push(elemento);
      }
    });
    let datosExportar: string = "";
    if (resultadosBusqueda.length > 0) { // Corregido: Verifica si hay resultados
      datosExportar = resultadosBusqueda.map(elemento => { return elemento.toIEEEFormat() }).join(`\n`);
    }
    return datosExportar;
  }  
}