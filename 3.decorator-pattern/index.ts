import { Cocktail } from "./Cocktail";
import { GinFizz } from "./GinFizz";
import { GinTonic } from "./GinTonic";
import { LemonSlice } from "./LemonSlice";

// 책에 나온 스타일
let ginTonic: Cocktail = new GinTonic();
ginTonic = new LemonSlice(ginTonic);

console.log(ginTonic.getDesc(), `: ${ginTonic.getCost()}원`);

// 문법 설탕 스타일
const ginFizz = new GinFizz();

console.log(ginFizz.getDesc(), `: ${ginFizz.getCost()}원`);
