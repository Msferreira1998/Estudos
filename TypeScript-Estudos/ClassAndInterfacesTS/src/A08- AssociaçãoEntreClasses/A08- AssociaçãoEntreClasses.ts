class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  write(): void {
    if (this._ferramenta === null) {
      console.log('Não posso escrever sem uma ferramenta...');
      return;
    }
    this._ferramenta.write();
  }
}

abstract class Ferramenta {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  abstract write(): void;
}

class Caneta extends Ferramenta {
  write() {
    console.log(`${this.name} está escrevendo`);
  }
}
class MaquinaEscrever extends Ferramenta {
  write() {
    console.log(`${this.name} está Digitando`);
  }
}

const escritor = new Escritor('Matheus');
const caneta = new Caneta('bic');
const maquinaEscrever = new MaquinaEscrever('Thompson');

escritor.ferramenta = caneta;
escritor.write();
