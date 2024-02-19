import 'mocha'
import { expect } from 'chai';
import { Dish } from '../../src/ejercicio-2/menu-instance';
import { MenuSolution } from '../../src/ejercicio-2/menu-solution';

describe('MenuSolution', () => {
  describe('constructor', () => {
    it('should create a MenuSolution object', () => {
      const dishesSolution = [true, false, true];
      const solution = new MenuSolution(dishesSolution);
      expect(solution).to.be.an.instanceOf(MenuSolution);
      expect(solution.listDishesSolution).to.deep.equal(dishesSolution);
    });
  });
});