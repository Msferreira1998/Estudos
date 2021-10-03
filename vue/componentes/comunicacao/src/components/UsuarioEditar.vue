<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuario <strong>{{ idade }}</strong></p>
        <button @click="alterarIdadeFn()">Alterar Idade</button>
    </div>
</template>

<script>
export default {
   props:{
        idade:{
            type: Number,
        },
        alterarIdadeFn:{
            type: Function,
        }
    },
    methods: {
    
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
