<template>
  <div class="usu">
      <h2>Usuários</h2>
      <hr>
      <router-view />
      <button sucesso @click="irParaInicio">voltar</button>
  </div>
</template>

<script>
export default {
    methods:{
        irParaInicio(){
            this.$router.push('/')
        }
    },
    
}
</script>

<style>

</style>