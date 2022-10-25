export abstract class Cocktail {
  protected description: string;
  protected cost: number;

  constructor() {
    this.description = '그냥 물입니다';
    this.cost = 0;
  }

  public abstract getCost(): number;
  public abstract getDesc(): string;
}
