import { ElementoBibliografico } from "./elemento-bibliografico";

/**
 * Clase concreta para representar un trabajo de final de master.
 */
export class TrabajoFinMaster extends ElementoBibliografico {
  /**
   * Constructor de la clase TrabajoFinMaster.
   * @param titulo Título del trabajo de final de master.
   * @param autor Lista de autores del trabajo de final de master.
   * @param palabrasClave Lista de palabras clave del trabajo de final de master.
   * @param resumen Resumen del trabajo de final de master.
   * @param fechaPublicacion Fecha de publicación del trabajo de final de master.
   * @param paginas Páginas del trabajo de final de master.
   * @param editorial Editorial del trabajo de final de master.
   */
  constructor(
    titulo: string,
    autor: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: string,
    editorial: string
  ) {
    super(titulo, autor, palabrasClave, resumen, fechaPublicacion, paginas, editorial);
  }

  /**
   * Devuelve una representación en formato IEEE del elemento bibliográfico.
   * @returns Cadena que representa el elemento bibliográfico en formato IEEE.
   */
  toIEEEFormat(): string {
    let resultIEEE: string = "";
    resultIEEE += this.autor.join(", ") + ", ";
    resultIEEE += '"' + this.titulo + '", ';
    resultIEEE += this.editorial + ", ";
    resultIEEE += this.fechaPublicacion.getFullYear() + ", ";
    resultIEEE += "pp. " + this.paginas;
    return resultIEEE;
  }

}