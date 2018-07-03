import {Fraction} from './fracoes.class.js';

// Fraction(numerator, denominator)
const fr = new Fraction(3, 4); // para representar "três quartos"
console.log(fr.numerator === 3);
console.log(fr.denominator === 4);
console.log(fr.toString()); // imprime, por exemplo: "3/4"
console.log(fr.toString() === '3/4');
// as seguintes linhas não devem funcionar
//fr.numerator = 10;
//fr.denominator = 10;
// -----------------------

const f1 = new Fraction(4, 15);
console.log(f1.toString() === '4/15');

const f2 = new Fraction(5, 15);
console.log(f2.toString() === '5/15');

const f3 = f1.plus(f2); // representaria uma situação de: f1 + f2
console.log(f3.toString()); // imprime "9/15"
console.log(f3.toString() === '9/15');
// TODO: mais 3 casos de teste com plus
const fracTest1 = new Fraction(1, 7);
const fracTest2 = new Fraction(5, 2);
const Test1 = f2.plus(fracTest1);
const Test2 = f2.plus(fracTest2);
const Test3 = fracTest1.plus(fracTest2);
console.log(Test1);
console.log(Test2);
console.log(Test3);

const f4 = new Fraction(1, 3);
console.log(f4.canReduce);
console.log(f4.canReduce === false);

const f5 = new Fraction(9, 15);
console.log(f5.canReduce); 
console.log(f5.canReduce === true);

f5.reduce();
console.log(f5.toString() === '3/5');
console.log(f5.canReduce === false);
// TODO: escreva mais 3 casos de teste com reduce
f1.reduce();
console.log(f1.toString() === '4/15');
console.log(f2.canReduce === false);
f2.reduce();
console.log(f2.toString() === '1/3');
console.log(f2.canReduce === false);
f4.reduce();
console.log(f2.toString() === '1/3');
console.log(f2.canReduce === false);

const f6 = new Fraction(25, 4);
const f7 = new Fraction(2, 5);

const f8 = f6.divide(f7);
console.log(f8); 
// TODO: escreva mais 3 casos de teste com divide
const frac_Test1 = f1.divide(f2);
const frac_Test2 = f2.divide(f4);
const frac_Test3 = f5.divide(f4);
console.log(frac_Test1);
console.log(frac_Test2);
console.log(frac_Test3);

const f9 = new Fraction(3, 7);
const f10 = new Fraction(2, 3);

const f11 = f9.multiply(f10);
console.log(f11.toString()); 
console.log(f11.toString() === '6/21'); 
// TODO: escreva mais 3 casos de teste com multiply
const test4 = f1.multiply(f2);
const test5 = f2.multiply(f4);
const test6 = f5.multiply(f4);
console.log(test4);
console.log(test5);
console.log(test6);

const f12 = new Fraction(7, 8);
const f13 = new Fraction(2, 5);

console.log(f12.greaterThan(f13)); 
console.log(f12.greaterThan(f13) === true);
console.log(f12.lessThan(f13)); 
console.log(f12.lessThan(f13) === false);
console.log(f12.equals(f13)); 
console.log(f12.equals(f13) === false);

const f14 = new Fraction(2, 3);
const f15 = new Fraction(12, 36);
const f16 = new Fraction(1, 3);
// TODO: escreva mais 9 casos de teste com greaterThan, lessThan e equals
console.log(f14.greaterThan(f15)); 
console.log(f15.greaterThan(f16) === false);
console.log(f16.greaterThan(f14)); 
console.log(f14.lessThan(f15) === false);
console.log(f15.lessThan(f16) === false);
console.log(f16.lessThan(f14)); 
console.log(f14.equals(f15)); 
console.log(f15.equals(f16)); 
console.log(f16.equals(f14) === false);

const f17 = new Fraction(4);
// TODO: escreva casos de teste para o valor que se espera de f17
console.log(f17.toString() === '7/1');

const f18 = new Fraction();
// TODO: escreva casos de teste para o valor que se espera de f18
console.log(f18.toString() === '1/0');