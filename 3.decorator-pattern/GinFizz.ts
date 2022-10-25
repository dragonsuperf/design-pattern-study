import { Cocktail } from "./Cocktail";

function withGarnish(name: string, price: number) {
  return function (constructor: typeof Cocktail) {
    const getCost = constructor.prototype.getCost;
    const getDesc = constructor.prototype.getDesc;

    constructor.prototype.getCost = function () {
      return getCost() + price;
    }
    constructor.prototype.getDesc = function () {
      return `${name}로 장식한 ` + getDesc() ;
    }
  }
}

@withGarnish('라임 웨지', 500)
export class GinFizz extends Cocktail {
  constructor() {
    super();
  }

  public getCost(): number {
    return 5000;
  }
  public getDesc(): string {
    return '진피즈';
  }
}
