export class Pessoa {
  static idadePadrao = 0;

  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('oi');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Matheus', 'Ferreira', 23, '000.000.000-00');
pessoa.cpf = '700.333.800-28';
console.log(pessoa.cpf);
Pessoa.falaOi();
const pessoa2 = Pessoa.criaPessoa('AAAAAAAAA', 'BBBBBBBBBBB');
