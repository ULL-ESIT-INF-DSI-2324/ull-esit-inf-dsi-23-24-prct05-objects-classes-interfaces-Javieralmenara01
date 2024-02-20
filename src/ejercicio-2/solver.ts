import { Strategy } from "./strategy"; 
import { Dish } from "./menu-instance";
import { MenuInstance } from "./menu-instance";
import { MenuSolution } from "./menu-solution";

/**
 * Clase que representa un solver para encontrar soluciones de menú.
 */
export class Solver {
  /**
   * Constructor de la clase Solver.
   * @param menu Instancia del menú sobre el cual se ejecutará el solver.
   */
  constructor(public readonly menu: MenuInstance, private heuristic: Strategy) {
    this.menu = menu;
  }

  setHeuristic(newHeuristic: Strategy) {
    this.heuristic = newHeuristic;
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
  getSolution(): MenuSolution {
    const solution = this.calculateSolution(this.heuristic.compareFunction); 
    return solution;
  }
}
