import { property } from 'lodash';

function decorador(
  classPrototype: any,
  nameMethod: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(descriptor);
  return {
    value(...args: any[]) {
      return args[0].toUpperCase();
    },
  };
}
class Pessoa {
  nome: string;

  sobrenome: string;

  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorador
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(value: string) {
    const palavras = value.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new Pessoa('Matheus', 'Ferreira', 23);
const metodo = pessoa.metodo('Olá mundo');
console.log(metodo);
export default 1;
