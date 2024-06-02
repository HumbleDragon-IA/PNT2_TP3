<template >

  <section class="src-componentes-api">
   
      
    <button class="btn btn-info my-3 mr-2" @click="getUsuarios">Listar Usuarios</button>
    <button class="btn btn-success my-3 mr-2" @click="this.irAFormulario()">Ingresar nuevo Usuario</button>
    
   <!-- <pre> {{ usuarios }}</pre> -->
    <div v-if="usuarios.length" class="table-responsive">
  <table class="table table-dark">
  <tr>
    <th>id</th>
    <th>nombreCompleto</th>
    <th>email</th>
    <th>telefono</th>
    <th>acciones</th>
    
   

    </tr>
    
    <tr v-for="(usuario, index) in usuarios" :key="index">
      <td>{{ usuario.id }}</td>
      <td>{{ usuario.nombre }}</td>
      <td>{{ usuario.email }}</td>
      <td>{{ usuario.telefono }}</td>
  <td>
    <button class="btn btn-warning my-3 mr-2" @click="this.editarUsuario(id)">Actualizar Usuario</button>
    
    <button class="btn btn-danger my-3 mr-2" @click="this.deleteUsuario(usuario.id)">delete</button>
  </td>
  <td v-if="modoEdit">
  
  </td>
      
    </tr>
    
</table>

</div>  

    
  </section>

</template>

<script>
import * as serviciosUsuarios from '../servicios/usuarios'
import router from '../router'

 export default  {
    name: 'src-componentes-api',
    props: [],
    mounted () {
     
    },
    data () {
      return {
        modoEdit: false,
        usuarios: []

      }
    },
    methods: {
      irAFormulario(){

        router.push('/formulario')
      },

      async getUsuarios(){
        const usuarios = await serviciosUsuarios.getAll()
        this.usuarios= usuarios
        console.log('get')
      },

      async postUsuario(usuario){
        const usuarioGuardado = await serviciosUsuarios.post(usuario)
        console.log(usuarioGuardado,"post")
        await this.usuarios.push(usuarioGuardado)
      },

      async putUsuario(id, usuario) {
        const usuarioActualizado = await serviciosUsuarios.put(id, usuario)
        console.log(usuarioActualizado,"post")
        const index = this.usuarios.findIndex(usuario => usuario.id === usuarioActualizado.id)
        this.usuarios.splice(index, 1, usuarioActualizado)

        console.log('put',id,usuario)

        //await this.getUsuarios()
      },

      async deleteUsuario(id){

        const usuarioEliminado = await serviciosUsuarios.del(id)
        console.log(usuarioEliminado,"post")
        
        const index = this.usuarios.findIndex(usuario => usuario.id === usuarioEliminado.id)
        this.usuarios.splice(index, 1)

       // await this.getUsuarios()
      },

      editarUsuario(id){
        router.push({name: 'Formulario', params: {id}})
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
