export class Empresa {
  public readonly nome: string; // Public é redundante

  private readonly colaboradores: Colaborador[] = [];

  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(Colaborador: Colaborador): void {
    this.colaboradores.push(Colaborador);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Google', '11.111.111/0001-11');
console.log(empresa1.nome);

const colaborador1 = new Colaborador('Matheus', 'Ferreira');
console.log(colaborador1.nome);
const colaborador2 = new Colaborador('Maria', 'Ferreira');
console.log(colaborador2.nome);
const colaborador3 = new Colaborador('Luiz', 'Ferreira');
console.log(colaborador3.nome);

empresa1.addColaborador(colaborador1);

export default 1;
