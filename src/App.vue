<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1>Trabajo Practico N°3 de PNT</h1>
      
      <br>

      <Navbar/>

      <RouterView />
    

      
       
      

  </div>
</div>
  
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
  Navbar
  }
}
</script>

<style>
#app {
 
}
</style>
