let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; //eslint-disable-line

const pessoa = {
  nome: 'Matheus' as const, // as const atribui um tipo literal a chave ou variavel
  sobrenome: 'Ferreira',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Azul')); //eslint-disable-line

console.log(x, y, a, pessoa, ); //eslint-disable-line

export default 1;
