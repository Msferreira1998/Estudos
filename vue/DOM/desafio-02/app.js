new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        aviso(e){
            alert('Botão clicado')
        },
        campoKeyDown(e){
            this.valor = e.target.value
        }
    }
})