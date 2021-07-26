class VotoProgramacao {
  static votoInicial = 0;

  constructor(
    private python: number,
    private javascript: number,
    private typescript: number,
  ) {}

  votoPython(): void {
    this.python += 1;
  }

  votoJS(): void {
    this.javascript += 1;
  }

  votoTS(): void {
    this.typescript += 1;
  }

  votos(): void {
    console.log(`Python: ${this.python}`);
    console.log(`JavaScript: ${this.javascript}`);
    console.log(`TypeScript: ${this.typescript}`);
  }
}

const votoProgramacao = new VotoProgramacao(
  VotoProgramacao.votoInicial,
  VotoProgramacao.votoInicial,
  VotoProgramacao.votoInicial,
);

votoProgramacao.votoJS();
votoProgramacao.votoJS();
votoProgramacao.votoJS();
votoProgramacao.votoJS();
votoProgramacao.votoPython();
votoProgramacao.votoPython();
votoProgramacao.votoPython();
votoProgramacao.votoTS();
votoProgramacao.votoTS();

votoProgramacao.votos();
