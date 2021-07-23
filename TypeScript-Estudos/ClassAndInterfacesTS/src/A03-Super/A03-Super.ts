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
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto() {
    console.log('Fazer algo antes');
    return `${super.getNomeCompleto()} Heeey`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto() {
    return `CLIENTE: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Matheus', 'Ferreira', 23, '000.000.000-00');
const aluno = new Aluno('Matheus', 'Ferreira', 23, '000.000.000-00', '3A');
const cliente = new Cliente('Matheus', 'Ferreira', 23, '000.000.000-00');
