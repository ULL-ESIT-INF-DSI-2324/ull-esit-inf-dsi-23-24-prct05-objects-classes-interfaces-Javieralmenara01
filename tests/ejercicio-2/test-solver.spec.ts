import 'mocha'
import { expect } from 'chai';
import { Dish } from '../../src/ejercicio-2/menu-instance';
import { MenuInstance } from '../../src/ejercicio-2/menu-instance';
import { MenuSolution } from '../../src/ejercicio-2/menu-solution';
import { Solver } from '../../src/ejercicio-2/solver'

describe('Solver', () => {
  describe('getSolution', () => {
    it('should return three MenuSolution objects', () => {
      // Arrange
      const dishes: Dish[] = [
        { nutritionalScore: 10, unhealthinessScore: 5 },
        { nutritionalScore: 8, unhealthinessScore: 4 },
        { nutritionalScore: 6, unhealthinessScore: 3 }
      ];
      const maxUnhealthinessScore = 10;
      const menu = new MenuInstance(dishes, maxUnhealthinessScore);
      const solver = new Solver(menu);

      // Act
      const solutions = solver.getSolution();

      // Assert
      expect(solutions).to.be.an('array').with.lengthOf(3);
      solutions.forEach(solution => {
        expect(solution).to.be.an.instanceOf(MenuSolution);
      });
    });

    it('should return solutions based on different heuristics', () => {
      // Arrange
      const dishes: Dish[] = [
        { nutritionalScore: 10, unhealthinessScore: 5 },
        { nutritionalScore: 8, unhealthinessScore: 4 },
        { nutritionalScore: 6, unhealthinessScore: 3 }
      ];
      const maxUnhealthinessScore = 10;
      const menu = new MenuInstance(dishes, maxUnhealthinessScore);
      const solver = new Solver(menu);

      // Act
      const solutions = solver.getSolution();

      // Assert
      // First solution: Sort dishes by nutritional score descendingly
      // Second solution: Sort dishes by unhealthiness score ascendingly
      // Third solution: Sort dishes by nutritional/unhealthiness ratio descendingly
      expect(solutions[0].listDishesSolution).to.deep.equal([true, true, false]);
      expect(solutions[1].listDishesSolution).to.deep.equal([false, true, true]);
      expect(solutions[2].listDishesSolution).to.deep.equal([true, true, false]);
    });

    it('should return an empty solution if no dishes fit the max unhealthiness score', () => {
      // Arrange
      const dishes: Dish[] = [
        { nutritionalScore: 10, unhealthinessScore: 6 },
        { nutritionalScore: 8, unhealthinessScore: 5 },
        { nutritionalScore: 6, unhealthinessScore: 4 }
      ];
      const maxUnhealthinessScore = 0;
      const menu = new MenuInstance(dishes, maxUnhealthinessScore);
      const solver = new Solver(menu);

      // Act
      const solutions = solver.getSolution();

      // Assert
      expect(solutions[0].listDishesSolution).to.deep.equal([false, false, false]);
      expect(solutions[1].listDishesSolution).to.deep.equal([false, false, false]);
      expect(solutions[2].listDishesSolution).to.deep.equal([false, false, false]);
    });

    it('should handle edge cases with empty menu', () => {
      // Arrange
      const dishes: Dish[] = [];
      const maxUnhealthinessScore = 10;
      const menu = new MenuInstance(dishes, maxUnhealthinessScore);
      const solver = new Solver(menu);

      // Act
      const solutions = solver.getSolution();

      // Assert
      expect(solutions[0].listDishesSolution).to.deep.equal([]);
      expect(solutions[1].listDishesSolution).to.deep.equal([]);
      expect(solutions[2].listDishesSolution).to.deep.equal([]);
    });
  });
});