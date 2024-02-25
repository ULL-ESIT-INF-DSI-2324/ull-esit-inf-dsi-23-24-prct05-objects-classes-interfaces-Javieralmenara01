import 'mocha'
import { expect } from 'chai';
import { Dish } from '../../src/ejercicio-2/menu-instance';
import { SecondHeuristic } from '../../src/ejercicio-2/second-heuristic'
describe('SecondHeuristic', () => {
  let secondHeuristic: SecondHeuristic;

  beforeEach(() => {
    secondHeuristic = new SecondHeuristic();
  });

  describe('#compareFunction', () => {
    it('should return 1 if the unhealthiness score of the first dish is less than the second dish', () => {
      const dishA: Dish = { nutritionalScore: 200, unhealthinessScore: 50 };
      const dishB: Dish = { nutritionalScore: 300, unhealthinessScore: 40 };
      expect(secondHeuristic.compareFunction(dishA, dishB)).to.equal(1);
    });

    it('should return -1 if the unhealthiness score of the first dish is greater than the second dish', () => {
      const dishA: Dish = { nutritionalScore: 300, unhealthinessScore: 40 };
      const dishB: Dish = { nutritionalScore: 200, unhealthinessScore: 50 };
      expect(secondHeuristic.compareFunction(dishA, dishB)).to.equal(-1);
    });

    it('should return 0 if the unhealthiness score of the first dish is equal to the second dish', () => {
      const dishA: Dish = { nutritionalScore: 200, unhealthinessScore: 50 };
      const dishB: Dish = { nutritionalScore: 200, unhealthinessScore: 50 };
      expect(secondHeuristic.compareFunction(dishA, dishB)).to.equal(0);
    });

    it('should work with negative unhealthiness scores', () => {
      const dishA: Dish = { nutritionalScore: 200, unhealthinessScore: -50 };
      const dishB: Dish = { nutritionalScore: 300, unhealthinessScore: -40 };
      expect(secondHeuristic.compareFunction(dishA, dishB)).to.equal(-1);
    });
  });
});
