import { IMealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export abstract class AbstractMeal implements IMealCompositeProtocol {
  constructor(private name: string, private price: number) {}

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }
}
