<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a VUE CLI</h1>
      <h2>Componente Principal (App)</h2>
      <br>

      <Formulario/>

      
       
      

  </div>
</div>
  
</template>

<script>
import Formulario from './components/Formulario.vue'

export default {
  name: 'App',
  components: {
    Formulario,
  }
}
</script>

<style>
#app {
 
}
</style>
