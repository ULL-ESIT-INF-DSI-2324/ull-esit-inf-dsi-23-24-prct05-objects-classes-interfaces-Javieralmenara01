import { ElementoBibliografico } from './elemento-bibliografico'

/**
 * Clase concreta para representar un libro.
 */
export class Libro extends ElementoBibliografico {
  /**
   * Constructor de la clase Libro.
   * @param titulo Título del libro.
   * @param autor Lista de autores del libro.
   * @param palabrasClave Lista de palabras clave del libro.
   * @param resumen Resumen del libro.
   * @param fechaPublicacion Fecha de publicación del libro.
   * @param paginas Páginas del libro.
   * @param editorial Editorial del libro.
   * @param ISBN ISBN del libro.
   */
  constructor(
    titulo: string,
    autor: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: string,
    editorial: string,
    public readonly ISBN: string
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