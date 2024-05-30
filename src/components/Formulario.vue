<template >

  <section class="src-components-formulario">
    <div class="jumbotron">
    <h2>Formularios</h2>
    <hr>

      <form novalidate @submit.prevent="enviar">

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
          <input id="email" type="email" class="form-control" v-model.trim="formData.email" @input="formDirty.email=true && emailOk" >
          <div v-if="(!formData.email || !emailOk) && formDirty.email" class="alert alert-danger mt-1">
            <span v-if="!formData.email">Campo Requerido</span>
            <span v-else-if="!emailOk">Formato de email ingresado es incorrecto</span>
            
          </div>
        </div>

      

      </form>
      <p>mail</p>
      <pre> {{this.emailOk()}} </pre>
    <hr>
    <p><u>formData</u></p>
    <pre>{{formData}}</pre>

    <hr>
    <p><u>formDirty</u></p>
    <pre>{{formDirty}}</pre>

    
  </div>
  </section>

</template>

<script lang="js">

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

      caracterMin(){
        return this.formData.nombre.length<5;
      },
      caracterMax(){
        return this.formData.nombre.length>15;
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
                
      } 
    },
    computed: {
      edadMin: 18,
      edadMax: 120,
    }
}


</script>

<style scoped lang="css">
.jumbotron {
    background: pink;
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
