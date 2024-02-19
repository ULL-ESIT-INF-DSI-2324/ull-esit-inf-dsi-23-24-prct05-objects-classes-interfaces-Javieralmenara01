/**
 * Interfaz que define la estructura de un plato.
 */
export interface Dish {
  nutritionalScore: number; // Puntuación nutricional del plato
  unhealthinessScore: number; // Puntuación de falta de salud del plato
}

/**
 * Clase que representa una instancia de menú.
 */
export class MenuInstance {
  listDishes: Dish[];
  maxUnhealthinessScore: number; 
  
  /**
   * Constructor de la clase MenuInstance.
   * @param listDishes Lista de platos en el menú.
   * @param maxUnhealthinessScore Puntuación máxima de falta de salud permitida en el menú.
   */
  constructor(listDishes: Dish[], maxUnhealthinessScore: number) {
    this.listDishes = listDishes;
    this.maxUnhealthinessScore = maxUnhealthinessScore;
  }

  /**
   * Agrega un nuevo plato al menú.
   * @param newDish Nuevo plato a agregar.
   */
  addDish(newDish: Dish): void {
    this.listDishes.push(newDish);
  }

  /**
   * Obtiene la lista de platos en el menú.
   * @returns Lista de platos en el menú.
   */
  getlistDishes(): Dish[] {
    return this.listDishes;
  }  

  /**
   * Obtiene la puntuación máxima de falta de salud permitida en el menú.
   * @returns Puntuación máxima de falta de salud permitida en el menú.
   */
  getmaxUnhealthinessScore(): number {
    return this.maxUnhealthinessScore;
  }

  /**
   * Establece la puntuación máxima de falta de salud permitida en el menú.
   * @param newMaxUnhealthinessScore Nueva puntuación máxima de falta de salud permitida en el menú.
   */
  setmaxUnhealthinessScore(newMaxUnhealthinessScore: number): void {
    this.maxUnhealthinessScore = newMaxUnhealthinessScore;
  }
}
