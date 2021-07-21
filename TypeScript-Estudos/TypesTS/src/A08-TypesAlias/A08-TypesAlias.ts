type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type Cores = 'Vermelho' | 'Azul' | 'Amarelo' | 'Verde';
type Cores2 = 'Rosa' | 'Branco' | 'Roxo';
type CorPreferida = Cores | Cores2;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Matheus',
  salario: 200000,
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

setCorPreferida(pessoa, 'Roxo');

export default 1;
