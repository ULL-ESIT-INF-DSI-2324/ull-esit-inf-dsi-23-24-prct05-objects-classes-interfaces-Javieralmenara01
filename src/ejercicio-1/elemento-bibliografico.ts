/**
 * Clase base abstracta que implementa la interfaz ElementoBibliografico.
 * Contiene el constructor común para todas las clases concretas.
 */
export abstract class ElementoBibliografico {
  /**
   * Constructor de la clase ElementoBibliografico.
   * @param titulo Título del elemento bibliográfico.
   * @param autor Lista de autores del elemento bibliográfico.
   * @param palabrasClave Lista de palabras clave del elemento bibliográfico.
   * @param resumen Resumen del elemento bibliográfico.
   * @param fechaPublicacion Fecha de publicación del elemento bibliográfico.
   * @param paginas Páginas del elemento bibliográfico.
   * @param editorial Editorial del elemento bibliográfico.
   */
  constructor(
    public readonly titulo: string,
    public readonly autor: string[],
    public readonly palabrasClave: string[],
    public readonly resumen: string,
    public readonly fechaPublicacion: Date,
    public readonly paginas: string,
    public readonly editorial: string
  ) {}

  /**
   * Devuelve una representación en formato IEEE del elemento bibliográfico.
   * @returns Cadena que representa el elemento bibliográfico en formato IEEE.
   */
  abstract toIEEEFormat(): string;
}