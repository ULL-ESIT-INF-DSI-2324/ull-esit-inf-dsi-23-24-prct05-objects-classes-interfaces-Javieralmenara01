import { ElementoBibliografico } from './elemento-bibliografico'

/**
 * Clase concreta para representar un artículo de revista.
 */
export class ArticuloRevista extends ElementoBibliografico {
  /**
   * Constructor de la clase ArticuloRevista.
   * @param titulo Título del artículo.
   * @param autor Lista de autores del artículo.
   * @param palabrasClave Lista de palabras clave del artículo.
   * @param resumen Resumen del artículo.
   * @param fechaPublicacion Fecha de publicación del artículo.
   * @param paginas Páginas del artículo.
   * @param editorial Editorial de la revista.
   * @param numeroRevista Número de la revista.
   * @param volumen Volumen de la revista.
   */
  constructor(
    titulo: string,
    autor: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: string,
    editorial: string,
    public readonly numeroRevista: string,
    public readonly volumen: number
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
    resultIEEE += this.editorial + ", vol. " + this.volumen + ", no. " + this.numeroRevista + ", ";
    resultIEEE += "pp. " + this.paginas + ", ";
    resultIEEE += this.fechaPublicacion.getFullYear();
    return resultIEEE;
  }
}