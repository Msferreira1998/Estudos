interface TipoPessoa {
  name: string;

  sobrenome: string;
}

interface NomeCompleto {
  nomeCompleto(): string;
}

interface TipoPessoa2 extends TipoPessoa, NomeCompleto {}

class Pessoa implements TipoPessoa2 {
  constructor(public name: string, public sobrenome: string) {}

  nomeCompleto() {
    return `${this.name} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Matheus', 'Ferreira');

export default 1;
