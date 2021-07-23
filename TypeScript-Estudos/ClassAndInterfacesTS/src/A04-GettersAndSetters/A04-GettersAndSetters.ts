export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  get cpf() {
    console.log('Get CPF');
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(cpf: string) {
    console.log('Set CPF');
    this._cpf = cpf;
  }
}

const pessoa = new Pessoa('Matheus', 'Ferreira', 23, '000.000.000-00');
pessoa.cpf = '700.333.800-28';
console.log(pessoa.cpf);
