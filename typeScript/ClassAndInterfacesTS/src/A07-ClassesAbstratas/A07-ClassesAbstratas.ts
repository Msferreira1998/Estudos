export abstract class Personagem {
  // class não poder ser instanciada, somente herdada

  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.loseLife(this.attack);
  }

  loseLife(attack: number): void {
    console.log(`${this.name} está sendo atacado`);
    this.life -= attack;
  }

  abstract bordao(): void; // todas as classe estendidas devem possuir uma versão desse método em seu corpo
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(`${this.emoji} AOOOOOOOOOOOOO`);
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(`${this.emoji} GRRRRRRRRR`);
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);

monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
