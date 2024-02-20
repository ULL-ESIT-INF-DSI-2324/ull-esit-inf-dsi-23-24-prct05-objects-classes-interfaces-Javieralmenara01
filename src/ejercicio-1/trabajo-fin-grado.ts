import { ElementoBibliografico } from "./elemento-bibliografico";

/**
 * Clase concreta para representar un trabajo de final de grado.
 */
export class TrabajoFinGrado extends ElementoBibliografico {
  /**
   * Constructor de la clase TrabajoFinGrado.
   * @param titulo Título del trabajo de final de grado.
   * @param autor Lista de autores del trabajo de final de grado.
   * @param palabrasClave Lista de palabras clave del trabajo de final de grado.
   * @param resumen Resumen del trabajo de final de grado.
   * @param fechaPublicacion Fecha de publicación del trabajo de final de grado.
   * @param paginas Páginas del trabajo de final de grado.
   * @param editorial Editorial del trabajo de final de grado.
   * @param grado Grado al que pertenece el trabajo final.
   */
  constructor(
    titulo: string,
    autor: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: string,
    editorial: string,
    public readonly grado: string
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