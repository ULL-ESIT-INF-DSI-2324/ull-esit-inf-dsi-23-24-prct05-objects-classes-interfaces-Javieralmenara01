import 'mocha'
import { expect } from 'chai';
import { Dish } from '../../src/ejercicio-2/menu-instance';
import { FirstHeuristic } from '../../src/ejercicio-2/first-heuristic'

describe('FirstHeuristic', () => {
  let firstHeuristic: FirstHeuristic;

  beforeEach(() => {
    firstHeuristic = new FirstHeuristic();
  });

  describe('#compareFunction', () => {
    it('should return 1 if the nutritional score of the first dish is lower than the second dish', () => {
      const dishA: Dish = { nutritionalScore: 200, unhealthinessScore: 50 };
      const dishB: Dish = { nutritionalScore: 300, unhealthinessScore: 40 };
      expect(firstHeuristic.compareFunction(dishA, dishB)).to.be.equal(1);
    });

    it('should return -1 if the nutritional score of the first dish is higher than the second dish', () => {
      const dishA: Dish = { nutritionalScore: 300, unhealthinessScore: 40 };
      const dishB: Dish = { nutritionalScore: 200, unhealthinessScore: 50 };
      expect(firstHeuristic.compareFunction(dishA, dishB)).to.be.equal(-1);
    });

    it('should return 0 if the nutritional score of the first dish is equal to the second dish', () => {
      const dishA: Dish = { nutritionalScore: 200, unhealthinessScore: 50 };
      const dishB: Dish = { nutritionalScore: 200, unhealthinessScore: 40 };
      expect(firstHeuristic.compareFunction(dishA, dishB)).to.be.equal(0);
    });

    it('should work with negative nutritional scores', () => {
      const dishA: Dish = { nutritionalScore: -200, unhealthinessScore: 50 };
      const dishB: Dish = { nutritionalScore: -100, unhealthinessScore: 40 };
      expect(firstHeuristic.compareFunction(dishA, dishB)).to.be.equal(1);
    });
  });
});