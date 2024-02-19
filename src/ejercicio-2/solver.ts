import { Dish } from "./menu-instance";
import { MenuInstance } from "./menu-instance";
import { MenuSolution } from "./menu-solution";

/**
 * Clase que representa un solver para encontrar soluciones de menú.
 */
export class Solver {
  menu: MenuInstance; // Instancia del menú sobre el cual se ejecutará el solver

  /**
   * Constructor de la clase Solver.
   * @param menu Instancia del menú sobre el cual se ejecutará el solver.
   */
  constructor(menu: MenuInstance) {
    this.menu = menu;
  }

  /**
   * Función de heurística para ordenar los platos por puntuación nutricional de forma descendente.
   * @param a Primer plato a comparar.
   * @param b Segundo plato a comparar.
   * @returns 1 si a es menor que b, -1 si a es mayor que b, 0 si son iguales.
   */
  private firstHeuristic(a: Dish, b: Dish): number {
    if (a.nutritionalScore < b.nutritionalScore) {
      return 1;
    } else if (a.nutritionalScore > b.nutritionalScore) {
      return -1;
    }
    return 0;
  }

  /**
   * Función de heurística para ordenar los platos por puntuación de salud de forma ascendente.
   * @param a Primer plato a comparar.
   * @param b Segundo plato a comparar.
   * @returns -1 si a es menor que b, 1 si a es mayor que b, 0 si son iguales.
   */
  private secondHeuristic(a: Dish, b: Dish): number {
    if (a.unhealthinessScore < b.unhealthinessScore) {
      return -1;
    } else if (a.unhealthinessScore > b.unhealthinessScore) {
      return 1;
    }
    return 0;
  }

  /**
   * Función de heurística para ordenar los platos por la relación entre puntuación nutricional y de salud de forma descendente.
   * @param a Primer plato a comparar.
   * @param b Segundo plato a comparar.
   * @returns -1 si la relación de a es mayor que la de b, 1 si la relación de a es menor que la de b, 0 si son iguales.
   */
  private thirdHeuristic(a: Dish, b: Dish): number {
    if ((a.nutritionalScore / a.unhealthinessScore) > (b.nutritionalScore / b.unhealthinessScore)) {
      return -1;
    } else if ((a.nutritionalScore / a.unhealthinessScore) < (b.nutritionalScore / b.unhealthinessScore)) {
      return 1;
    }
    return 0;
  }

  /**
   * Calcula una solución para el menú utilizando la función de comparación especificada.
   * @param compareFunction Función de comparación a utilizar para ordenar los platos.
   * @returns Objeto MenuSolution que representa la solución encontrada.
   */
  private calculateSolution(compareFunction: (a: Dish, b: Dish) => number): MenuSolution {
    let solution: boolean[] = new Array(this.menu.listDishes.length).fill(false);
    let sortedDishes: Dish[] = [...this.menu.listDishes].sort(compareFunction);
    let maxUnhealthyScoreTemp: number = 0;
    let index: number = 0;
    
    while (maxUnhealthyScoreTemp <= this.menu.maxUnhealthinessScore && index < sortedDishes.length) {
      let position: number = this.menu.listDishes.findIndex((DishSelect) => DishSelect === sortedDishes[index]); // Obtiene la posición del plato en la lista original
      if ((sortedDishes[index].unhealthinessScore + maxUnhealthyScoreTemp) <= this.menu.maxUnhealthinessScore) {
        maxUnhealthyScoreTemp += sortedDishes[index].unhealthinessScore;
        solution[position] = true;
      }
      index++;
    }
    return new MenuSolution(solution); // Devuelve la solución encontrada
  }

  /**
   * Obtiene las soluciones para el menú utilizando diferentes heurísticas.
   * @returns Un arreglo de objetos MenuSolution que representan las soluciones encontradas.
   */
  getSolution(): MenuSolution[] {
    const firstSolution = this.calculateSolution(this.firstHeuristic); 
    const secondSolution = this.calculateSolution(this.secondHeuristic);
    const thirdSolution = this.calculateSolution(this.thirdHeuristic);
    return [firstSolution, secondSolution, thirdSolution];
  }
}
