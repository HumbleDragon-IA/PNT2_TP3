<template >

  <section class="src-components-formulario">
    <div class="jumbotron">
    <h2>Formularios</h2>
    <hr >
      
      <form  @submit.prevent="enviar" >

        <div class="form-group">
          <label for="nombre" class="nombre">nombre</label>
          <input id="nombre" type="text" class="form-control" v-model.trim="formData.nombre" @input="formDirty.nombre=true">
          <div v-if="(!formData.nombre || formData.nombre.length<5 || formData.nombre.length>15) && formDirty.nombre" class="alert alert-danger mt-1">
            <span v-if="!formData.nombre">Campo Requerido</span>
            <span v-else-if="formData.nombre.length<5">El nombre debe contener al menos 5 caracteres</span>
            <span v-else>El nombre no debe contener más 15 caracteres</span>
          </div>
        </div>

        <div class="form-group">
          <label for="edad" class="edad">edad</label>
          <input id="edad" type="number" class="form-control" v-model.trim="formData.edad" @input="formDirty.edad=true">
          <div v-if="(!formData.edad || formData.edad < 18 || formData.edad > 120) && formDirty.edad" class="alert alert-danger mt-1">
            <span v-if="!formData.edad">Campo Requerido</span>
            <span v-else-if="formData.edad < 18">Edad minima requerida 18 años</span>
            <span v-else>Edad maxima permitida 120 años</span>
          </div>
        </div>

        <div class="form-group">
          <label for="email" class="email">email</label>
          <input id="email" type="email" class="form-control" v-model.trim="formData.email" @input="formDirty.email=true">
          <div v-if="(!formData.email || !this.emailOk())  &&  formDirty.email" class="alert alert-danger mt-1">
            <span v-if="!formData.email">Campo Requerido</span>
            <span v-else-if="!this.emailOk()">Formato de email ingresado es incorrecto</span> 
         
            
          </div>
        </div>

        <div class="table-responsive">
   <table  class="table table-dark">
    
     <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Email</th>
     </tr>
    
     <tr >
      <td>{{ formData.nombre }}</td>
      <td>{{ formData.edad }}</td>
      <td>{{ formData.email }}</td>
     </tr>
   </table>
  </div>
        <button class="btn btn-success my-3" v-if="this.datosOk()" type="submit" @click="this.enviar" >Enviar</button>
  </form>

  
</div>
  </section>

</template>

<script >



  export default  {
    name: 'src-components-formulario',
    props: [],
    
    mounted () {

    },

    data () {
      return {
        formData: this.inicializarData(),
        formDirty: this.inicializarData(),
      
      }
    },
    methods: {

      edadOk(){
        return  this.formData.edad >=18 && this.formData.edad <=120
      },

      nombreOk(){
        return this.caracterMax() && this.caracterMin()
      },
      datosOk(){
        return this.emailOk() && this.edadOk() && this.nombreOk()
      },

      caracterMin(){
        return this.formData.nombre!=null && this.formData.nombre.length>=5;
      },
      caracterMax(){
        return this.formData.nombre!=null && this.formData.nombre.length<=15;
      },

       enviar(){
        console.log({...this.formData})
        
        
        this.formData = this.inicializarData();
        this.formDirty=this.inicializarData();

      },
      inicializarData() {
       return { 
        nombre: null,
        edad: null,
        email: null,
      }
      },

    
      emailOk(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.formData.email)
                
      },
   
    },
    computed: {
      edadMin: 18,
      edadMax: 120,
    }
}


</script>

<style scoped lang="css">
.jumbotron {
    background: grey;
    color: brown;
  }
  
  h1 {
    color: brown;
  }
  hr {
    background-color: 
    black;
  }
  
  .table td, .table th{
    vertical-align: middle;
  }

  label {
    text-transform: capitalize;
  }
 
</style>
