import { ElementoBibliografico } from './elemento-bibliografico'

/**
 * Clase concreta para representar una contribución a congreso.
 */
export class ContribucionCongreso extends ElementoBibliografico {
  /**
   * Constructor de la clase ContribucionCongreso.
   * @param titulo Título de la contribución.
   * @param autor Lista de autores de la contribución.
   * @param palabrasClave Lista de palabras clave de la contribución.
   * @param resumen Resumen de la contribución.
   * @param fechaPublicacion Fecha de publicación de la contribución.
   * @param paginas Páginas de la contribución.
   * @param editorial Editorial de la publicación donde se presenta la contribución.
   * @param nombreConferencia Nombre de la conferencia donde se presenta la contribución.
   * @param lugar Lugar de la conferencia donde se presenta la contribución.
   */
  constructor(
    titulo: string,
    autor: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: string,
    editorial: string,
    public readonly nombreConferencia: string,
    public readonly lugar: string,
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
    resultIEEE += "in " + this.nombreConferencia + ", " + this.lugar + ", ";
    resultIEEE += this.fechaPublicacion.getMonth() + ", " + this.fechaPublicacion.getFullYear() + ", ";
    resultIEEE += "pp. " + this.paginas;
    return resultIEEE;
  }

}