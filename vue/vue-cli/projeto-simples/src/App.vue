<template>
  <div>
    <h1>{{ titulo }}</h1>
    <button @click="titulo += '#'">Add #</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: 'Olá Mundo'
    }
  }
}
</script>

<style>
  #app {
    background-color: chocolate;
    color: white;
  }
</style>