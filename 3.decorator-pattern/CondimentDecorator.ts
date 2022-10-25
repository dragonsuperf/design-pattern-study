import { Cocktail } from "./Cocktail";

export abstract class CondimentDecorator extends Cocktail {
  cocktail: Cocktail;

  constructor(cocktail: Cocktail) {
    super();
    this.cocktail = cocktail;
  }

  public abstract getDesc(): string;
  public abstract getCost(): number;
}
