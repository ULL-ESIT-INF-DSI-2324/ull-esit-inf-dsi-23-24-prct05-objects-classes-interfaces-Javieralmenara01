import 'mocha'
import { expect } from 'chai';
import { Dish } from '../../src/ejercicio-2/menu-instance';
import { MenuInstance } from '../../src/ejercicio-2/menu-instance'

describe('MenuInstance', () => {
  describe('constructor', () => {
    it('should create a MenuInstance object', () => {
      const dishes: Dish[] = [
        { nutritionalScore: 10, unhealthinessScore: 5 },
        { nutritionalScore: 8, unhealthinessScore: 4 },
        { nutritionalScore: 6, unhealthinessScore: 3 }
      ];
      const maxUnhealthinessScore = 10;
      const menu = new MenuInstance(dishes, maxUnhealthinessScore);
      expect(menu).to.be.an.instanceOf(MenuInstance);
      expect(menu.listDishes).to.deep.equal(dishes);
      expect(menu.maxUnhealthinessScore).to.equal(maxUnhealthinessScore);
    });
  });

});