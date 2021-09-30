// Tentativa 1
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

// Tentativa 2

// type VoteOption = {
//   option: string;
//   numVotos: number;
// };

// class VotationOptions {
//   private _votationOption: VoteOption[] = [];

//   constructor(public details: string) {}

//   addOption(voteOption: VoteOption) {
//     this.votationOption.push(voteOption);
//   }

//   vote(indexOption: number): void {
//     if (!this.votationOption[indexOption]) return;
//     this.votationOption[indexOption].numVotos += 1;
//   }

//   get votationOption() {
//     return this._votationOption;
//   }
// }

// class ResultVotation {
//   votations: VotationOptions[] = [];

//   addVote(votation: VotationOptions) {
//     this.votations.push(votation);
//   }

//   showVotes() {
//     for (const votation of this.votations) {
//       console.log(votation.details);
//       for (const votationOption of votation.votationOption)
//         console.log(votationOption.option, votationOption.numVotos);
//     }
//   }
// }

// const voto1 = new VotationOptions('Qual a sua cor favorita');
// voto1.addOption({ option: 'Azul', numVotos: 0 });
// voto1.addOption({ option: 'vermelho', numVotos: 0 });
// voto1.vote(0);

// const votationApp = new ResultVotation();
// votationApp.addVote(voto1);
// votationApp.showVotes();
