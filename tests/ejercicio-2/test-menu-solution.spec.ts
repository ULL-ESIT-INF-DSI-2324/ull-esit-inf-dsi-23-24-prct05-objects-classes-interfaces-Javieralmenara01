import 'mocha'
import { expect } from 'chai';
import { Dish } from '../../src/ejercicio-2/menu-instance';
import { MenuSolution } from '../../src/ejercicio-2/menu-solution';

describe('MenuSolution', () => {
  let solution: MenuSolution;
  const initialDishesSolution: boolean[] = [true, false, true];

  beforeEach(() => {
    solution = new MenuSolution(initialDishesSolution);
  });

  describe('#setSolution', () => {
    it('should set the solution for a specific dish in the menu', () => {
      const index = 1;
      const newValue = true;
      solution.setSolution(index, newValue);
      expect(solution.listDishesSolution[index]).to.equal(newValue);
    });
  });

  describe('#getlistDishesSolution', () => {
    it('should return the list of solutions for the dishes in the menu', () => {
      expect(solution.getlistDishesSolution()).to.deep.equal(initialDishesSolution);
    });
  });
});