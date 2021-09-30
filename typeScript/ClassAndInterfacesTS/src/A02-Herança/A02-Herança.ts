export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade() {
    return this.idade;
  }

  getCpf() {
    return this.cpf;
  }

  getNomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto() {
    return `ALUNO: ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto() {
    return `CLIENTE: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Matheus', 'Ferreira', 23, '000.000.000-00');
const aluno = new Aluno('Matheus', 'Ferreira', 23, '000.000.000-00');
const cliente = new Cliente('Matheus', 'Ferreira', 23, '000.000.000-00');
