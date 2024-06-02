<template >

  <section class="src-componentes-api">
   
      
    <button class="btn btn-info my-3 mr-2" @click="getUsuarios">Listar Usuarios</button>
    <div v-if="usuarios.length" class="table-responsive">
  <table class="table table-dark">
  <tr>
    <th>id</th>
    <th>nombreCompleto</th>
    <th>email</th>
    <th>telefono</th>

    
   

    </tr>
    
    <tr v-for="(usuario, index) in usuarios" :key="index">
      <td>{{ usuario.id }}</td>
      <td>{{ usuario.nombre }}</td>
      <td>{{ usuario.email }}</td>
      <td>{{ usuario.telefono }}</td>
  
    </tr>
    
</table>

</div>  

    
  </section>

</template>

<script>
import * as serviciosUsuarios from '../servicios/usuarios'


 export default  {
    name: 'src-componentes-api',
    props: [],
    mounted () {
     
    },
    data () {
      return {
        usuarios: []

      }
    },
    methods: {
    async getUsuarios(){
        const usuarios = await serviciosUsuarios.getAll()
        this.usuarios= usuarios
        console.log('get')
      },

     
   },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-api th {

  text-transform: uppercase;
  }
  
</style>
