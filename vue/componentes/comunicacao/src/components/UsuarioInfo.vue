<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong>{{ inverteNome() }}</strong></p>
        <p>Idade do Usuario <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarNomeFn()">CallBack</button>
    </div>
</template>

<script>
export default {
    props:{
        nome: {
            type: String,
            required: true,
            default: 'Anônimo',
            // default: function (){
            //     return Array(10).fill(0).join(',')
            // }
        },
        reiniciarNomeFn:{
            type: Function
        },
        idade:{
            type: Number,
        }
    },
    methods: {
        inverteNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            const antigo = this.nome
            this.nome = 'Pedro';
            this.$emit('nomeMudou', {
                novo: 'Pedro',
                antigo
            }) //cria um evento com o nome idicado e armazena um valor para ser acessado a partir de $event
        },
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
