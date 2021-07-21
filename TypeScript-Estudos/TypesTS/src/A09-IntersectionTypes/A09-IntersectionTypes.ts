type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'a' | 'b';
type AC = 'a' | 'c';
type AD = 'd' | 'a';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Matheus',
  sobrenome: 'Ferreira',
  idade: 23,
};

console.log(pessoa);

export default 1;
