function inverteNomeECor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T) {
    return class extends target {
      cor: string;

      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return `${valor.split('').reverse().join('') + param1} ${param2}`;
      }
    };
  };
}

@inverteNomeECor('valor1', 'valor2')
class Animal {
  constructor(public nome: string, public cor: string) {}
}

const animal = new Animal('Matheus', 'roxo');
console.log(animal);
