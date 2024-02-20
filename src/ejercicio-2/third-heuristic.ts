import { Dish } from "./menu-instance";
import { Strategy } from "./strategy";

/**
 * Clase que implementa una tercera heurística
 */
export class ThirdHeuristic implements Strategy {
  /**
   * Función de heurística para ordenar los platos por la relación entre puntuación nutricional y de salud de forma descendente.
   * @param a Primer plato a comparar.
   * @param b Segundo plato a comparar.
   * @returns -1 si la relación de a es mayor que la de b, 1 si la relación de a es menor que la de b, 0 si son iguales.
   */
  compareFunction(a: Dish, b: Dish): number {
    if ((a.nutritionalScore / a.unhealthinessScore) > (b.nutritionalScore / b.unhealthinessScore)) {
      return -1;
    } else if ((a.nutritionalScore / a.unhealthinessScore) < (b.nutritionalScore / b.unhealthinessScore)) {
      return 1;
    }
    return 0;
  }
}