/**
 * Clase que representa una solución de menú.
 */
export class MenuSolution {
  listDishesSolution: boolean[]; // Lista de soluciones para los platos en el menú

  /**
   * Constructor de la clase MenuSolution.
   * @param listDishesSolution Lista de soluciones para los platos en el menú.
   */
  constructor(listDishesSolution: boolean[]) {
    this.listDishesSolution = listDishesSolution;
  }

  /**
   * Establece la solución para un plato específico en el menú.
   * @param index Índice del plato en la lista de soluciones.
   * @param value Valor de la solución (true/false).
   */
  setSolution(index: number, value: boolean): void {
    this.listDishesSolution[index] = value;
  }

  /**
   * Obtiene la lista de soluciones para los platos en el menú.
   * @returns Lista de soluciones para los platos en el menú.
   */
  getlistDishesSolution(): boolean[] {
    return this.listDishesSolution;
  }
}