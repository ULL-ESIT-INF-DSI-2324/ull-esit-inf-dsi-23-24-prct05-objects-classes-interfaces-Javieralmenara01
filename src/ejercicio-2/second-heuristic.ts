import { Dish } from "./menu-instance";
import { Strategy } from "./strategy";

/**
 * Clase que implementa una segunda heurística
 */
export class SecondHeuristic implements Strategy {
  /**
   * Función de heurística para ordenar los platos por puntuación de salud de forma ascendente.
   * @param a Primer plato a comparar.
   * @param b Segundo plato a comparar.
   * @returns -1 si a es menor que b, 1 si a es mayor que b, 0 si son iguales.
   */
  compareFunction(a: Dish, b: Dish): number {
    if (a.unhealthinessScore < b.unhealthinessScore) {
      return -1;
    } else if (a.unhealthinessScore > b.unhealthinessScore) {
      return 1;
    }
    return 0;
  }
}