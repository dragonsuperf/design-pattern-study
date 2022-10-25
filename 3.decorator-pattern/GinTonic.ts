import { Cocktail } from "./Cocktail";

export class GinTonic extends Cocktail {
  constructor() {
    super();
    this.cost = 5000;
    this.description = '진&토닉';
  }

  public getCost(): number {
    return this.cost;
  }
  public getDesc(): string {
    return this.description;
  }
}
