export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidade() {
    return this.produtos.length;
  }

  total(): number {
    return this.produtos.reduce((ac, value) => {
      return ac + value.preco;
    }, 0);
  }
}

class Produto {
  constructor(public name: string, public preco: number) {}
}

const produto1 = new Produto('Camisa', 49.9);
const produto2 = new Produto('Caneca', 25);
const produto3 = new Produto('Caneta', 2);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras.total());
