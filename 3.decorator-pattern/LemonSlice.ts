import { Cocktail } from "./Cocktail";
import { CondimentDecorator } from "./CondimentDecorator";

export class LemonSlice extends CondimentDecorator {
  constructor(cocktail: Cocktail) {
    super(cocktail);
  }

  public getCost(): number {
    return this.cocktail.getCost() + 500; 
  }

  public getDesc(): string {
    return '레몬 슬라이스로 장식한 ' + this.cocktail.getDesc();
  }
}
