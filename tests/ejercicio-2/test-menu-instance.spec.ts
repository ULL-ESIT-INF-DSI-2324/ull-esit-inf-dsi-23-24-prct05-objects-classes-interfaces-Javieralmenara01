import 'mocha'
import { expect } from 'chai';
import { Dish } from '../../src/ejercicio-2/menu-instance';
import { MenuInstance } from '../../src/ejercicio-2/menu-instance'

describe('MenuInstance', () => {
  describe('MenuInstance', () => {
    let menu: MenuInstance;
    const initialDishes: Dish[] = [
      { nutritionalScore: 10, unhealthinessScore: 5 },
      { nutritionalScore: 8, unhealthinessScore: 4 },
      { nutritionalScore: 6, unhealthinessScore: 3 }
    ];
    const maxUnhealthinessScore = 10;
  
    beforeEach(() => {
      menu = new MenuInstance(initialDishes, maxUnhealthinessScore);
    });
  
    describe('#addDish', () => {
      it('should add a new dish to the menu', () => {
        const newDish: Dish = { nutritionalScore: 7, unhealthinessScore: 2 };
        menu.addDish(newDish);
        expect(menu.listDishes).to.deep.include(newDish);
      });
    });
  
    describe('#getlistDishes', () => {
      it('should return the list of dishes in the menu', () => {
        expect(menu.getlistDishes()).to.deep.equal(initialDishes);
      });
    });
  
    describe('#getmaxUnhealthinessScore', () => {
      it('should return the maximum unhealthiness score allowed in the menu', () => {
        expect(menu.getmaxUnhealthinessScore()).to.equal(maxUnhealthinessScore);
      });
    });
  
    describe('#setmaxUnhealthinessScore', () => {
      it('should set the maximum unhealthiness score allowed in the menu', () => {
        const newMaxUnhealthinessScore = 15;
        menu.setmaxUnhealthinessScore(newMaxUnhealthinessScore);
        expect(menu.getmaxUnhealthinessScore()).to.equal(newMaxUnhealthinessScore);
      });
    });
  });
});