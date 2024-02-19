import { ElementoBibliografico } from './elemento-bibliografico'

/**
 * Clase concreta para representar un capítulo de un libro.
 */
export class CapituloLibro extends ElementoBibliografico {
  /**
   * Constructor de la clase CapituloLibro.
   * @param titulo Título del capítulo.
   * @param autor Lista de autores del capítulo.
   * @param palabrasClave Lista de palabras clave del capítulo.
   * @param resumen Resumen del capítulo.
   * @param fechaPublicacion Fecha de publicación del capítulo.
   * @param paginas Páginas del capítulo.
   * @param editorial Editorial del libro.
   * @param tituloLibro Título del libro al que pertenece el capítulo.
   */
  constructor(
    titulo: string,
    autor: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: string,
    editorial: string,
    public readonly tituloLibro: string
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
    resultIEEE += "in " + this.tituloLibro + ", "
    resultIEEE += this.editorial + ", ";
    resultIEEE += this.fechaPublicacion.getFullYear() + ", ";
    resultIEEE += "pp. " + this.paginas;
    return resultIEEE;
  }

}