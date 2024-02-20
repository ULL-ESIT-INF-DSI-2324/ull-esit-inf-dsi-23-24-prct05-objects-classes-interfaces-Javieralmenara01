# **Práctica 5: Objetos, clases e interfaces**

- 👨‍💻 Javier Almenara Herrera
- ✉️ alu0101466552@ull.edu.es

## **Índice**
- Introducción
- Ejercicios
- Modificación
- Conclusiones
- Referencias

### **Introducción**
En la práctica actual, se espera que se profundice en la comprensión y aplicación de los conceptos de objetos, clases e interfaces en TypeScript. A través de ejercicios de programación, se busca desarrollar habilidades prácticas en la implementación de estos conceptos. 

Se solicita al estudiante resolver problemas, crear pruebas mediante la metodología TDD, así como documentar las soluciones. Se recomienda familiarizarse con los principios SOLID y herramientas como Instanbul y Coveralls para evaluación del código y pruebas, aunque su uso no es obligatorio en esta práctica.

### **Ejercicios**
#### Ejercicio 1 - Gestor de referencias bibliográficas
Se propone el diseño e implementación de un sistema capaz de gestionar información bibliográfica diversa. En respuesta a este requerimiento, se han diseñado clases que permiten representar elementos bibliográficos y cumplir con la funcionalidad especificada.

Se ha creado una clase abstracta denominada "ElementoBibliografico" que encapsula los atributos comunes de todos los elementos, como título, autores, palabras clave, resumen, fecha de publicación, páginas y editorial. A partir de esta clase base, se han definido clases concretas para tipos específicos de elementos bibliográficos, como "ArticuloRevista", "ContribucionCongreso", "CapituloLibro", "Libro", "TrabajoFinGrado" y "TrabajoFinMaster".

Cada clase concreta implementa su propio método para generar una referencia en formato IEEE, adaptado a las peculiaridades de cada tipo de elemento. Además, se ha incorporado un método en el gestor bibliográfico para realizar búsquedas por palabras clave y filtrar los resultados por diversos criterios, como título, autores, fecha de publicación y editorial. También se ha provisto una función para exportar los resultados de búsqueda en formato IEEE.

Para evaluar el funcionamiento del gestor bibliográfico, se han proporcionado ejemplos representativos de diferentes tipos de elementos bibliográficos, que abarcan desde artículos de revista hasta trabajos de fin de grado y máster. Estos ejemplos permiten probar la capacidad del sistema para manejar una variedad de datos bibliográficos y generar referencias en formato IEEE de manera precisa.

Finalmente, se plantea la comparación del gestor bibliográfico desarrollado con herramientas similares como Zotero o Mendeley, con el objetivo de evaluar su rendimiento y funcionalidades frente a soluciones existentes en el mercado. Esta comparación proporcionará información valiosa sobre la eficacia y utilidad del gestor bibliográfico implementado en este ejercicio.

**Clase Abstracta ElementoBibliográfico**
```typescript
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
```

**Clase Articulo Revista**
```typescript
/**
 * Clase concreta para representar un artículo de revista.
 */
export class ArticuloRevista extends ElementoBibliografico {
  /**
   * Constructor de la clase ArticuloRevista.
   * @param titulo Título del artículo.
   * @param autor Lista de autores del artículo.
   * @param palabrasClave Lista de palabras clave del artículo.
   * @param resumen Resumen del artículo.
   * @param fechaPublicacion Fecha de publicación del artículo.
   * @param paginas Páginas del artículo.
   * @param editorial Editorial de la revista.
   * @param numeroRevista Número de la revista.
   * @param volumen Volumen de la revista.
   */
  constructor(
    titulo: string,
    autor: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: string,
    editorial: string,
    public readonly numeroRevista: string,
    public readonly volumen: number
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
    resultIEEE += this.editorial + ", vol. " + this.volumen + ", no. " + this.numeroRevista + ", ";
    resultIEEE += "pp. " + this.paginas + ", ";
    resultIEEE += this.fechaPublicacion.getFullYear();
    return resultIEEE;
  }
}
```
**Clase Capitulo Libro**
```typescript
/**
 * Clase concreta para representar un capítulo de un libro.
 */
export class CapituloLibro extends ElementoBibliografico {
  /**
   * Constructor de la clase CapituloLibro.
   * @param titulo Título del capítulo.
   * @param autor Lista de autores del capítulo.
   * @param palabrasClave Lista de palabras clave del capítulo.
   * @param resumen Resumen del capítulo.
   * @param fechaPublicacion Fecha de publicación del capítulo.
   * @param paginas Páginas del capítulo.
   * @param editorial Editorial del libro.
   * @param tituloLibro Título del libro al que pertenece el capítulo.
   */
  constructor(
    titulo: string,
    autor: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: string,
    editorial: string,
    public readonly tituloLibro: string
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
    resultIEEE += "in " + this.tituloLibro + ", "
    resultIEEE += this.editorial + ", ";
    resultIEEE += this.fechaPublicacion.getFullYear() + ", ";
    resultIEEE += "pp. " + this.paginas;
    return resultIEEE;
  }
}
```
**Clase Contribución Congreso**
```typescript

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
```
**Clase Libro**
```typescript
/**
 * Clase concreta para representar un libro.
 */
export class Libro extends ElementoBibliografico {
  /**
   * Constructor de la clase Libro.
   * @param titulo Título del libro.
   * @param autor Lista de autores del libro.
   * @param palabrasClave Lista de palabras clave del libro.
   * @param resumen Resumen del libro.
   * @param fechaPublicacion Fecha de publicación del libro.
   * @param paginas Páginas del libro.
   * @param editorial Editorial del libro.
   * @param ISBN ISBN del libro.
   */
  constructor(
    titulo: string,
    autor: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: string,
    editorial: string,
    public readonly ISBN: string
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
    resultIEEE += this.fechaPublicacion.getFullYear() + ", ";
    resultIEEE += "pp. " + this.paginas;
    return resultIEEE;
  }
}
```
**Clase Trabajo Fin Grado**
```typescript
/**
 * Clase concreta para representar un trabajo de final de grado.
 */
export class TrabajoFinGrado extends ElementoBibliografico {
  /**
   * Constructor de la clase TrabajoFinGrado.
   * @param titulo Título del trabajo de final de grado.
   * @param autor Lista de autores del trabajo de final de grado.
   * @param palabrasClave Lista de palabras clave del trabajo de final de grado.
   * @param resumen Resumen del trabajo de final de grado.
   * @param fechaPublicacion Fecha de publicación del trabajo de final de grado.
   * @param paginas Páginas del trabajo de final de grado.
   * @param editorial Editorial del trabajo de final de grado.
   * @param grado Grado al que pertenece el trabajo final.
   */
  constructor(
    titulo: string,
    autor: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: string,
    editorial: string,
    public readonly grado: string
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
    resultIEEE += this.fechaPublicacion.getFullYear() + ", ";
    resultIEEE += "pp. " + this.paginas;
    return resultIEEE;
  }

}
```
**Clase Trabajo Fin Máster**
```typescript
/**
 * Clase concreta para representar un trabajo de final de master.
 */
export class TrabajoFinMaster extends ElementoBibliografico {
  /**
   * Constructor de la clase TrabajoFinMaster.
   * @param titulo Título del trabajo de final de master.
   * @param autor Lista de autores del trabajo de final de master.
   * @param palabrasClave Lista de palabras clave del trabajo de final de master.
   * @param resumen Resumen del trabajo de final de master.
   * @param fechaPublicacion Fecha de publicación del trabajo de final de master.
   * @param paginas Páginas del trabajo de final de master.
   * @param editorial Editorial del trabajo de final de master.
   * @param master Master al que pertenece el trabajo final.
   */
  constructor(
    titulo: string,
    autor: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: string,
    editorial: string,
    public readonly master: string 
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
    resultIEEE += this.fechaPublicacion.getFullYear() + ", ";
    resultIEEE += "pp. " + this.paginas;
    return resultIEEE;
  }

}
```
**Clase Gestor Bibliográfico**
```typescript
/**
 * Clase que representa un gestor de referencias bibliográficas.
 */
export class GestorBibliografico {
  /**
   * Constructor de la clase GestorBibliografico.
   * @param elementos Array de elementos bibliográficos.
   * @usage
   * ```typescript
   * const gestor = new GestorBibliografico([]);
   * ```
   */
  constructor(private elementos: ElementoBibliografico[]) {
    /// Constructor
  }
  
  getElementos(): ElementoBibliografico[] {
    return this.elementos;
  }

  /**
   * Inserta un nuevo elemento bibliográfico en el gestor.
   * @param elemento Elemento bibliográfico a insertar.
   * @usage
   * ```typescript
   * const nuevoElemento = new Libro("Título del libro", ["Autor 1", "Autor 2"], ["Palabra clave 1", "Palabra clave 2"], "Resumen del libro", new Date(), 300, "Editorial");
   * gestor.insertarElemento(nuevoElemento);
   * ```
   */
  insertarElemento(elemento: ElementoBibliografico): void {
    this.elementos.push(elemento);
  }
  
  /**
   * Muestra la información de los elementos bibliográficos en formato de tabla.
   * @param listaElementos Lista opcional de elementos bibliográficos a mostrar.
   * @usage
   * ```typescript
   * gestor.mostrarInformacion();
   * gestor.mostrarInformacion([elemento1, elemento2]);
   * ```
   */
  mostrarInformacion(listaElementos?: ElementoBibliografico[]): void {
    if (!listaElementos) {
      console.table(this.elementos, ['titulo', 'autor', 'palabrasClave', 'resumen', 'fechaPublicacion', 'paginas', 'editorial']);
    } else {
      console.table(listaElementos, ['titulo', 'autor', 'palabrasClave', 'resumen', 'fechaPublicacion', 'paginas', 'editorial']);
    }
  }

  /**
   * Filtra los elementos bibliográficos según una clave de búsqueda y un campo opcional.
   * @param claveBusqueda Clave de búsqueda.
   * @param campoBusqueda Campo de búsqueda opcional.
   * @param exportar Indica si se deben exportar los resultados en formato IEEE.
   * @param ficheroSalida Nombre del archivo de salida para la exportación.
   * @returns Lista de elementos bibliográficos que coinciden con la búsqueda.
   * @usage
   * ```typescript
   * const resultados = gestor.filtrar("Título");
   * ```
   */
  filtrar(claveBusqueda: string, campoBusqueda?: string): string {
    let resultadosBusqueda: ElementoBibliografico[] = [];
    this.elementos.forEach(elemento => {
      let coincidencia: boolean = false;
      if (!campoBusqueda || campoBusqueda === 'titulo') {
        coincidencia = coincidencia || elemento.titulo.includes(claveBusqueda);
      }
      if (!campoBusqueda || campoBusqueda === 'autor') {
        coincidencia = coincidencia || elemento.autor.some(autor => autor.includes(claveBusqueda));
      }
      if (!campoBusqueda || campoBusqueda === 'palabrasClave') {
        coincidencia = coincidencia || elemento.palabrasClave.includes(claveBusqueda);
      }
      if (!campoBusqueda || campoBusqueda === 'fechaPublicacion') {
        coincidencia = coincidencia || elemento.fechaPublicacion.toString().includes(claveBusqueda);
      }
      if (!campoBusqueda || campoBusqueda === 'editorial') {
        coincidencia = coincidencia || elemento.editorial.includes(claveBusqueda);
      }
      if (coincidencia) {
        resultadosBusqueda.push(elemento);
      }
    });
    const datosExportar: string = resultadosBusqueda.map(elemento => { return elemento.toIEEEFormat() }).join(`\n`);
    return datosExportar;
  }
  
  /**
   * Filtra los elementos bibliográficos según una expresión regular y otros criterios opcionales.
   * @param claveBusqueda Expresión regular para la búsqueda.
   * @param campoBusqueda Campo de búsqueda opcional.
   * @param exportar Indica si se deben exportar los resultados en formato IEEE.
   * @param ficheroSalida Nombre del archivo de salida para la exportación.
   * @returns Lista de elementos bibliográficos que coinciden con la búsqueda.
   * @usage
   * ```typescript
   * const resultados = gestor.filtrarExpresion(/Título/);
   * ```
   */
  filtrarExpresion(claveBusqueda: RegExp, campoBusqueda?: string): string {
    let resultadosBusqueda: ElementoBibliografico[] = [];
    this.elementos.forEach(elemento => {
      let coincidencia: boolean = false;
      if (!campoBusqueda || campoBusqueda === 'titulo') {
        coincidencia = coincidencia || claveBusqueda.test(elemento.titulo);
      }
      if (!campoBusqueda || campoBusqueda === 'autor') {
        coincidencia = coincidencia || elemento.autor.some(autorSel => {
          return claveBusqueda.test(autorSel); // Corregido: Agrega el retorno aquí
        });
      }
      if (!campoBusqueda || campoBusqueda === 'palabrasClave') {
        coincidencia = coincidencia || elemento.palabrasClave.some(palabra => {
          return claveBusqueda.test(palabra); // Corregido: Agrega el retorno aquí
        });
      }
      if (!campoBusqueda || campoBusqueda === 'fechaPublicacion') {
        coincidencia = coincidencia || claveBusqueda.test(elemento.fechaPublicacion.toString());
      }
      if (!campoBusqueda || campoBusqueda === 'editorial') {
        coincidencia = coincidencia || claveBusqueda.test(elemento.editorial);
      }
      if (coincidencia) {
        resultadosBusqueda.push(elemento);
      }
    });
    let datosExportar: string = "";
    if (resultadosBusqueda.length > 0) { // Corregido: Verifica si hay resultados
      datosExportar = resultadosBusqueda.map(elemento => { return elemento.toIEEEFormat() }).join(`\n`);
    }
    return datosExportar;
  }  
}
```

#### Ejercicio 2 - Menús saludables orientados a objetos

El desarrollo del ejercicio presentado demuestra una implementación efectiva del patrón de comportamiento Strategy en el contexto del problema de encontrar soluciones para menús saludables. Se han definido tres clases que representan diferentes estrategias de comparación de platos: `FirstHeuristic`, `SecondHeuristic`, y `ThirdHeuristic`. Cada una de estas clases implementa la interfaz `Strategy`, la cual define la estructura para todas las estrategias de comparación de platos, garantizando consistencia en la implementación de las estrategias.
```typescript
/**
 * Interfaz Strategy que define un método `compareFunction`
 */
export interface Strategy {
  compareFunction(a: Dish, b: Dish): number;
}

/**
 * Clase que implementa una primera heurística
 */
export class FirstHeuristic implements Strategy {
  /**
   * Función de heurística para ordenar los platos por puntuación nutricional de forma descendente.
   * @param a Primer plato a comparar.
   * @param b Segundo plato a comparar.
   * @returns 1 si a es menor que b, -1 si a es mayor que b, 0 si son iguales.
   */
  compareFunction(a: Dish, b: Dish): number {
    if (a.nutritionalScore < b.nutritionalScore) {
      return 1;
    } else if (a.nutritionalScore > b.nutritionalScore) {
      return -1;
    }
    return 0;
  }
}

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
```

La interfaz `Dish` también juega un papel crucial en el diseño, ya que define la estructura de un plato en el sistema. Esta interfaz especifica dos atributos fundamentales para los platos: la puntuación nutricional (`nutritionalScore`) y la puntuación de falta de salud (`unhealthinessScore`). Al definir una interfaz clara y coherente para los platos, se facilita la manipulación y gestión de esta información dentro del sistema, promoviendo una mayor cohesión y modularidad en el diseño.
```typescript
/**
 * Interfaz que define la estructura de un plato.
 */
export interface Dish {
  nutritionalScore: number; // Puntuación nutricional del plato
  unhealthinessScore: number; // Puntuación de falta de salud del plato
}
```

Además, la clase `Solver`, encargada de encontrar soluciones de menú, ha sido diseñada para aceptar una instancia de menú y una estrategia de comparación como parámetros en su constructor. Esto permite que la clase `Solver` utilice la estrategia proporcionada para calcular una solución al menú. Además, la modularización de esta funcionalidad en una clase separada cumple con el principio de responsabilidad única, facilitando la extensibilidad y mantenimiento del código.
```typescript
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
```

Por otro lado, las clases `MenuSolution` y `MenuInstance` también desempeñan un papel fundamental en la estructura del sistema. `MenuSolution` representa una solución específica para un menú, almacenando una lista de booleanos que indican qué platos han sido seleccionados en la solución. Mientras tanto, `MenuInstance` encapsula la información sobre un menú específico, incluyendo una lista de platos y la puntuación máxima de falta de salud permitida en el menú. Estas clases proporcionan una representación clara y coherente de los elementos principales del problema, facilitando su manipulación y gestión dentro del sistema.
```typescript
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
```

En el método `getSolution()` de la clase `Solver`, se calcula la solución del menú utilizando la estrategia proporcionada. Este proceso implica ordenar los platos según la estrategia de comparación correspondiente y luego seleccionar los platos que cumplan con la puntuación máxima de falta de salud permitida en el menú. Este enfoque basado en estrategias ofrece flexibilidad al usuario al permitirle seleccionar la estrategia de comparación más adecuada según sus preferencias o requisitos específicos.

En resumen, la aplicación del patrón de comportamiento Strategy en este contexto proporciona una estructura modular y flexible para resolver el problema de encontrar soluciones de menú saludables. La separación de las estrategias de comparación en clases independientes permite una implementación limpia y escalable, promoviendo un diseño robusto y mantenible del sistema.

### **Modificación**
**Ejercicio 1**

La función `getAllergens` recibe como parámetro una puntuación que representa las alergias de una persona. Esta puntuación es un valor numérico entero positivo único que contiene información sobre las alergias. La función devuelve una lista con los alérgenos a los que la persona es alérgica, basándose en la puntuación proporcionada.

La enumeración `alergenos` enumera los posibles alérgenos junto con su correspondiente puntuación.

La función `getAllergens` verifica si la puntuación proporcionada es un número entero positivo dentro del rango permitido (0 a 256). Si la puntuación no cumple con estos criterios, la función devuelve `undefined`. De lo contrario, inicializa una matriz vacía `result` para almacenar los alérgenos encontrados.

Luego, la función realiza un bucle a través de los valores de la enumeración `alergenos`, comenzando desde 1 e incrementando en potencias de 2. Para cada valor de la enumeración, verifica si el bit correspondiente está activo en la puntuación proporcionada utilizando la operación bitwise `&`. Si el bit está activo, significa que la persona es alérgica a ese alérgeno, por lo que se agrega el nombre del alérgeno a la lista `result`.

Finalmente, la función devuelve la lista de alérgenos encontrados.
```typescript
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
```

**Ejercicio 2**

La implementación proporciona una representación de una nevera inteligente que puede contener alimentos y bebidas. Cada alimento y bebida tiene un nombre, información nutricional asociada y una cantidad específica (en gramos para alimentos y litros para bebidas).

La clase `Nevera` modela la nevera y su funcionalidad. Contiene una lista de elementos almacenados y una lista de la compra. Permite agregar elementos, tomar elementos de la nevera, mostrar el contenido de la nevera y mostrar la lista de la compra. Cuando la cantidad de un elemento en la nevera alcanza cero, se agrega a la lista de la compra.
```typescript
export type Cantidades = [ObjetoNevera, number]

/**
 * Clase que implementa una nevera
 */
export class Nevera {
  private listaCompra: ObjetoNevera[] = [];
  constructor(public listaAlimentos: Cantidades[]) {}

  /**
   * Añade elementos que no quedan a la lista de la compra
   */
  añadirCompra() {
    this.listaAlimentos.forEach(element => {
      if (element[1] === 0) {
        this.listaCompra.push(element[0]);
      }
    });
  }

  /**
   * Añade elementos a la nevera
   * @nuevoObjeto: objeto a añadir a la nevera
   */
  añadirElemento(nuevoObjeto: Cantidades) {
    this.listaAlimentos.push(nuevoObjeto);
  }

  /**
   * Extrae elementos a la nevera
   * @param nombreElemento: nombre elemento a coger
   */
  cogerElemento(nombreElemento: string) {
    this.listaAlimentos.forEach(element => {
      if ('toString' in element[0]) {
        if (element[0].toString() == nombreElemento) {
          if (element[1] > 1) {
            element[1] = element[1] - 1;
          } else {
            console.log('Sin Existencias');
          }
          this.añadirCompra();
        }
      }
    });
  }

  /**
   * Extrae elementos a la nevera
   */
  mostrarContenido() {
    let result: string = "En la nevera hay: \n";
    this.listaAlimentos.forEach(element => {
      if ('toString' in element[0]) {
        result += `${element[0].toString()} -> ${element[1]}\n`;
        console.log(`${element[0].toString()} -> ${element[1]}`);
      }
    });
    return result;
  }

  mostrarListaCompra() {
    let result: string = "Cosas que comprar: \n";
    console.log(`Cosas que comprar: `);
    this.listaCompra.forEach(element => {
      result += `- ${element}`;
      console.log(`- ${element}`);
    });
    return result;
  }
}
```

La clase `Alimento` representa un alimento y la clase `Bebida` representa una bebida, ambas implementan la interfaz `ObjetoNevera` para garantizar la coherencia en la estructura de datos.
```typescript
/**
 * Interfaz que implementa un objeto de la nevera
 */
export interface ObjetoNevera {
  nombre: string,
  informacionNutricional: number
}

/**
 * Clase que implementa un alimento
 */
export class Alimento implements ObjetoNevera {
  constructor(public nombre: string, public informacionNutricional: number, public cantidadGramos: number) {
    /// Empty
  }
  toString() {
    return this.nombre;
  }
}

/**
 * Clase que implementa una bebida
 */
export class Bebida implements ObjetoNevera {
  constructor(public nombre: string, public informacionNutricional: number, public cantidadLitros: number, public alcoholic: boolean) {
    /// Empty
  }
  toString() {
    return this.nombre;
  }
}
```

Se utilizan buenas prácticas de programación orientada a objetos y se proporciona una funcionalidad completa para la gestión de la nevera y la lista de la compra.

### **Conclusiones**
En conclusión, el enfoque riguroso y la aplicación práctica de los conceptos de objetos, clases e interfaces en TypeScript durante esta práctica proporcionan una base sólida para abordar con confianza los desafíos venideros en el desarrollo de software. La combinación de nuevas herramientas y la profundización en la comprensión de estas estructuras fundamentales contribuyen significativamente al crecimiento profesional y la capacidad para enfrentar proyectos futuros con éxito.

### **Un paso más allá**
El desarrollo de este sistema para encontrar soluciones de menús saludables se ha llevado a cabo siguiendo una metodología de desarrollo dirigida por pruebas (TDD) y adoptando principios de diseño limpio y modular. Se ha utilizado el patrón de comportamiento Strategy para implementar diferentes estrategias de comparación de platos, lo que permite una fácil extensión y mantenimiento del código. Además, se ha documentado exhaustivamente el código utilizando TypeDoc, asegurando una comprensión clara de la estructura y funcionalidad del sistema. En cuanto a las pruebas, se han desarrollado pruebas unitarias que confirman el correcto funcionamiento del código en escenarios normales, así como pruebas adicionales para garantizar que el software maneje adecuadamente entradas no válidas o inesperadas, cumpliendo así con el principio de que "los errores nunca deben pasar silenciosamente". Este enfoque garantiza la calidad y fiabilidad del sistema, así como su capacidad para adaptarse a futuros cambios y requisitos.

### **Referencias**
[https://ull-esit-inf-dsi-2324.github.io/prct05-objects-classes-interfaces/](https://ull-esit-inf-dsi-2324.github.io/prct05-objects-classes-interfaces/)
[https://coveralls.io/](https://coveralls.io/)
[https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-objects-classes-interfaces.html](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-objects-classes-interfaces.html)


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/FvgIFuXc)
