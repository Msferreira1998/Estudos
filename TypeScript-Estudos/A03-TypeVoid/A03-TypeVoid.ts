function semRetorno(...args: string[]): void{
    console.log(args.join(' '));
}

const pessoa ={
    nome: 'Matheus',
    sobrenome: 'Ferreira',

    exibirNome(): void{
        console.log(this.nome + ' ' + this.sobrenome)
    }
};

semRetorno('Matheus', 'Ferreira');
pessoa.exibirNome();
