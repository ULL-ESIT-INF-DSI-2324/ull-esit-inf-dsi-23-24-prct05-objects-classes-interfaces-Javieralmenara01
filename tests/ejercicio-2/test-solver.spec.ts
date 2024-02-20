import 'mocha'
import { expect } from 'chai';
import { Dish } from '../../src/ejercicio-2/menu-instance';
import { MenuInstance } from '../../src/ejercicio-2/menu-instance';
import { MenuSolution } from '../../src/ejercicio-2/menu-solution';
import { Solver } from '../../src/ejercicio-2/solver'
import { FirstHeuristic } from '../../src/ejercicio-2/first-heuristic'
import { SecondHeuristic } from '../../src/ejercicio-2/second-heuristic'
import { ThirdHeuristic } from '../../src/ejercicio-2/third-heuristic'


describe('Solver', () => {
  describe('getSolution', () => {
    it('should return one MenuSolution object', () => {
      const dishes: Dish[] = [
        { nutritionalScore: 10, unhealthinessScore: 5 },
        { nutritionalScore: 8, unhealthinessScore: 4 },
        { nutritionalScore: 6, unhealthinessScore: 3 }
      ];
      const maxUnhealthinessScore = 10;
      const menu = new MenuInstance(dishes, maxUnhealthinessScore);
      const solver = new Solver(menu, new FirstHeuristic());

      const solution = solver.getSolution();
      expect(solution).to.be.an.instanceOf(MenuSolution);
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
      const solver = new Solver(menu, new FirstHeuristic());
      let solution = solver.getSolution();

      expect(solution.listDishesSolution).to.be.deep.equal([true, true, false]);
      
      solver.setHeuristic(new SecondHeuristic());
      solution = solver.getSolution();
      expect(solution.listDishesSolution).to.be.deep.equal([false, true, true]);

      solver.setHeuristic(new ThirdHeuristic());
      solution = solver.getSolution();
      expect(solution.listDishesSolution).to.be.deep.equal([true, true, false]);
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
      const solver = new Solver(menu, new FirstHeuristic());
      let solution = solver.getSolution();
      expect(solution.listDishesSolution).to.deep.equal([false, false, false]);
      
      solver.setHeuristic(new SecondHeuristic());
      solution = solver.getSolution();
      expect(solution.listDishesSolution).to.deep.equal([false, false, false]);

      solver.setHeuristic(new ThirdHeuristic());
      solution = solver.getSolution();
      expect(solution.listDishesSolution).to.deep.equal([false, false, false]);
    });

    it('should handle edge cases with empty menu', () => {
      const dishes: Dish[] = [];
      const maxUnhealthinessScore = 10;
      const menu = new MenuInstance(dishes, maxUnhealthinessScore);
      const solver = new Solver(menu, new FirstHeuristic());
      let solution = solver.getSolution();
      expect(solution.listDishesSolution).to.deep.equal([]);

      solver.setHeuristic(new SecondHeuristic());
      solution = solver.getSolution();
      expect(solution.listDishesSolution).to.deep.equal([]);

      solver.setHeuristic(new ThirdHeuristic());
      solution = solver.getSolution();
      expect(solution.listDishesSolution).to.deep.equal([]);
    });
  });
});