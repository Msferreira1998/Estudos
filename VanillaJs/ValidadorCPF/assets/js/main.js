const btn = document.getElementById('enviar');
const inputCPF = document.getElementById('cpf');
const res = document.getElementById('res')

function executar(cpf){
    const pessoa = new Pessoa(cpf);
    res.innerHTML = pessoa.cpfValidation
}

btn.addEventListener('click', (e=>{
    executar(inputCPF.value);
}))

document.addEventListener('keypress', (e)=>{
    if(e.target === inputCPF && e.key === 'Enter'){
        executar(inputCPF.value);
    }
    return
})

class Pessoa{
    constructor(cpf){
        this.cpf = cpf
    }
    get cpfValidation(){
        const CPFvalidado = this.validaCPF(this.cpf);
        return CPFvalidado;
    }
    
    validaCPF(cpf){
        const CPFcDig = Pessoa.tratarCPF(cpf);
        const CPFsDig = CPFcDig.slice(0, 9);
        const CPFsDigN = CPFsDig;

        if(CPFcDig === 'Erro') return 'CPF Inválido'; 

        const sequencia = CPFcDig[0].repeat(CPFcDig.length);
        if(sequencia === CPFcDig || CPFcDig.length !== 11){
            return "CPF Inválido";
        }
    
        const CPFArray = Array.from(CPFsDigN);
        
        const multi1 = [];

        for(let i = 0; i < 9; i++){
            let mult = CPFArray[i] * (10-i);
            multi1.push(Number(mult));
        }
        
        const multi1Soma = multi1.reduce((ac, val)=>{
            return ac += val;
        }, 0);
        
        let primeiroDigito = 11 - (multi1Soma % 11);
        if(primeiroDigito > 9){
            primeiroDigito = 0;
        }
        
        CPFArray.push(primeiroDigito.toString());
        
        const multi2 =[]
        for(let i = 0; i < 10; i++){
            let mult = CPFArray[i] * (11-i);
            multi2.push(Number(mult));
        }
        
        const multi2Soma = multi2.reduce((ac, val)=>{
            return ac += val;
        }, 0);
        
        let segundoDigito = 11 - (multi2Soma % 11);
        if(segundoDigito > 9){
            segundoDigito = 0;
        }
        
        CPFArray.push(segundoDigito.toString());
        
        const cpfCalc = CPFArray.join('').toString()
    
        if(cpfCalc === CPFcDig){
            return 'CPF VÁLIDO'
        }

        return 'CPF INVÁLIDO'
    }

    static tratarCPF(cpf){
        const CPFLimpo = cpf.replace(/\D+/g, '');
        if (!CPFLimpo) return'Erro';
        return CPFLimpo;
    }

}