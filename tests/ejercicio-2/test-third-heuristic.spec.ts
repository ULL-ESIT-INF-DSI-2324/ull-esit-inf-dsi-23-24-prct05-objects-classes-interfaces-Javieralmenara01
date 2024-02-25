import 'mocha'
import { expect } from 'chai';
import { Dish } from '../../src/ejercicio-2/menu-instance';
import { ThirdHeuristic } from '../../src/ejercicio-2/third-heuristic'

describe('ThirdHeuristic', () => {
  let thirdHeuristic: ThirdHeuristic;

  beforeEach(() => {
    thirdHeuristic = new ThirdHeuristic();
  });

  describe('#compareFunction', () => {
    it('should return 1 if the ratio of nutritional score to unhealthiness score of the first dish is greater than the second dish', () => {
      const dishA: Dish = { nutritionalScore: 200, unhealthinessScore: 50 };
      const dishB: Dish = { nutritionalScore: 300, unhealthinessScore: 40 };
      expect(thirdHeuristic.compareFunction(dishA, dishB)).to.be.equal(1);
    });

    it('should return -1 if the ratio of nutritional score to unhealthiness score of the first dish is less than the second dish', () => {
      const dishA: Dish = { nutritionalScore: 300, unhealthinessScore: 40 };
      const dishB: Dish = { nutritionalScore: 200, unhealthinessScore: 50 };
      expect(thirdHeuristic.compareFunction(dishA, dishB)).to.be.equal(-1);
    });

    it('should return 1 if the ratio of nutritional score to unhealthiness score of the first dish is equal to the second dish', () => {
      const dishA: Dish = { nutritionalScore: 200, unhealthinessScore: 50 };
      const dishB: Dish = { nutritionalScore: 200, unhealthinessScore: 40 };
      expect(thirdHeuristic.compareFunction(dishA, dishB)).to.be.equal(1);
    });

    it('should return 0 if both dishes have zero unhealthiness score', () => {
      const dishA: Dish = { nutritionalScore: 200, unhealthinessScore: 0 };
      const dishB: Dish = { nutritionalScore: 300, unhealthinessScore: 0 };
      expect(thirdHeuristic.compareFunction(dishA, dishB)).to.equal(0);
    });
  });
});
