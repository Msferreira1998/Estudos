new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: ''
    },
    watch:{
        valor(){
            this.resultado = this.valor !== 37 ? 'Valor Diferente' : 'Valor Igual'
        },
        resultado(){
            
            setTimeout(()=>{
                this.valor = 0;
            }, 5000)
            
        }
    }
});