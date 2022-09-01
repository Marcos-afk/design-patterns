import { IMealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { ComposedMeal } from './composed-meal';
import { Beans, Beverage, Dessert, Potato, Rice } from './meals';

export class MainDishBuilder implements IMealBuilderProtocol {
  private _meal: ComposedMeal = new ComposedMeal();

  reset(): this {
    this._meal = new ComposedMeal();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 10);
    const beans = new Beans('Feijão', 15);
    const potato = new Potato('Batata', 20);

    this._meal.add(rice, beans, potato);
    return this;
  }

  makeBeverage(): this {
    const coca = new Beverage('Coca', 10);
    const orangeJuice = new Beverage('Orange juice', 5);
    this._meal.add(coca, orangeJuice);
    return this;
  }

  makeDessert(): this {
    const cake = new Dessert('Cake', 8);
    this._meal.add(cake);
    return this;
  }

  getMeal(): ComposedMeal {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
