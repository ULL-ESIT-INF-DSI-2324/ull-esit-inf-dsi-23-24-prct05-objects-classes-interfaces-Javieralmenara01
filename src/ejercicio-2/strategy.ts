import { Dish } from "./menu-instance";

/**
 * Interfaz Strategy que define un método `compareFunction`
 */
export interface Strategy {
  compareFunction(a: Dish, b: Dish): number;
}

