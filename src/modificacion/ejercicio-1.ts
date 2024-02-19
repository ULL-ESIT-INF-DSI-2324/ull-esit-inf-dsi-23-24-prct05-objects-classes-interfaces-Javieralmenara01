/**
 * Una prueba de alérgenos produce un valor numérico (entero positivo) único, 
 * el cual contiene información sobre las alergias de una persona. La lista de 
 * posibles alérgenos es la siguiente:
    
    Huevo (1)
    Cacahuete (2)
    Marisco (4)
    Fresa (8)
    Tomate (16)
    Chocolate (32)
    Polen (64)
    Gato (128)
    Por ejemplo, si alguien fuera alérgico a los gatos y al tomate, obtendría una puntuación igual a 128 + 16 = 144.

    Escriba una función getAllergens que reciba una puntuación de alérgenos de una persona y 
    que devuelva una lista con los alérgenos a los que la persona es alérgica.

    Por último, tenga en cuenta que la función podría recibir una puntuación que incluya alérgenos no 
    contemplados en la lista, esto es, alérgenos cuya puntuación sea 256, 512, 1024, etc. Además, si el 
    valor pasado como argumento no es entero y positivo, la función deberá devolver el valor undefined.
  */

/**
 * Enumeracion de Alergenos
 */

console.log("Hola");

export enum alergenos {
  "Huevo" = 1,
  "Cacahuete" = 2,
  "Marisco" = 4,
  "Fresa" = 8,
  "Tomate" = 16, 
  "Chocolate" = 32, 
  "Polen" = 64, 
  "Gato" = 128
}

/**
 * Getallergens. Dada una puntuación podemos obtener una lista de alérgenos de la persona
 * @param puntuacion: puntaación del alergeno
 * @returns La lista de alérgenos
 */
export function getAllergens(puntuacion: number): string[] | undefined {
  if (puntuacion > 256 || puntuacion < 0) {
    return undefined;
  }
  let result: string[] = [];
  for (let i = 1; i <= puntuacion; i *= 2) {
    if (puntuacion & i) {
      if (i <= 128) {
        result.push(alergenos[i]);
      }
    }
  }
  return result;
}