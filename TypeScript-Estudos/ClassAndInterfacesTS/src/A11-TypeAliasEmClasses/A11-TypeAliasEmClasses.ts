type TipoPessoa = {
  name: string;

  sobrenome: string;
};

type NomeCompleto = {
  nomeCompleto(): string;
};

class Pessoa implements TipoPessoa, NomeCompleto {
  constructor(public name: string, public sobrenome: string) {}

  nomeCompleto() {
    return `${this.name} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Matheus', 'Ferreira');
