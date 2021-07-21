/* eslint-disable */

//Básico
let nome: string = 'Matheus';
let idade: number = 23;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

//Arrays
let arrayDeNumbers: Array<number> = [1, 2, 3];
let arrayDeNumbers2: number[] = [1, 2, 3];
let arrayDeString: Array<string> = ['a', 'b'];
let arrayDeString2: string[] = ['a', 'b'];

//Objetos
let pessoa: {nome:string, idade:number, adulto?:boolean} = { //adulto?: é uma chave opcional
  nome: 'Matheus',
  idade: 23,
}

//Função
function soma(x:number, y:number): number{
  return x + y;
}
//           vvvvvvvvvvvv-TYPE-vvvvvvvvvvvv
export const soma2: (x:number, y:number) => number = (x, y) => x + y;
