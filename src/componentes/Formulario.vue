<template>

  <section class="src-componentes-formulario">
    <div class="jumbotron">
      <h2>Formulario</h2>
      <hr>
      <br>

      <form @submit.prevent="enviar()">
        
        <!-- Campo nombre -->
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input 
            id="nombre" 
            type="text" 
            class="form-control" 
            v-model.trim="formData.nombre"
            @input="formDirty.nombre=true"
          >
          <!-- carteles de validación -->
          <div v-if="(!formData.nombre || formData.nombre.length < 5 || formData.nombre.length > 15) && formDirty.nombre" class="alert alert-danger mt-1">
            <span v-if="!formData.nombre">Campo requerido</span> 
            <span v-else-if="formData.nombre.length < 5">El nombre debe poseer al menos 5 caracteres</span>
            <span v-else>El nombre no debe poseer mas de 15 caracteres</span>
          </div>
        </div>

        <!-- Campo edad -->
        <div class="form-group">
          <label for="edad">Edad</label>
          <input 
            id="edad" 
            type="number" 
            class="form-control" 
            v-model.trim="formData.edad"
            @input="formDirty.edad=true"
          >
          <!-- carteles de validación -->
          <div v-if="(!formData.edad || formData.edad < 18 || formData.edad > 120) && formDirty.edad" class="alert alert-danger mt-1">
            <span v-if="!formData.edad">Campo requerido</span>
            <span v-else-if="formData.edad < 18">La edad debe ser mayor a 18 años</span> 
            <span v-else>La edad debe ser menor a 120 años</span>
          </div>
        </div>

        <!-- Campo email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            id="email" 
            type="email" 
            class="form-control" 
            v-model.trim="formData.email"
            @input="formDirty.email=true"
          >
          <!-- carteles de validación -->
          <div v-if="!formData.email && formDirty.email" class="alert alert-danger mt-1">
            <span v-if="!formData.email">Campo requerido</span> 
          </div>
        </div>
      
        
        <button class="btn btn-success my-3" :disabled="validarBotonEnvio()" type="submit">Enviar</button>
      </form>

      <br>
      <hr>

      <!-- Tabla para representar los datos ingresados -->
      <h2>Detalles del Formulario</h2>
      <br>

      <div v-if="datos.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
          <tr v-for="(dato,index) in datos" :key="index">
            <td>{{ dato.nombre }}</td>
            <td>{{ dato.edad }}</td>
            <td>{{ dato.email }}</td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-info">No hay datos ingresados</h4>
    </div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formData : this.getInitialData(),
        formDirty: this.getInitialData(),
        datos : []
      }
    },
    methods: {
      getInitialData() {
        return {
          nombre : null,
          edad: null,
          email: null,
        }
      },

      validarBotonEnvio() {
        return (!this.formData.nombre || this.formData.nombre.length < 5 || this.formData.nombre.length > 15) ||
        (!this.formData.edad || this.formData.edad < 18 || this.formData.edad > 120) ||
        !this.formData.email
      },       

      enviar() {
        const datos = {...this.formData}
        this.datos.push(datos)

        this.formData = this.getInitialData()
        this.formDirty = this.getInitialData()
      },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">

.jumbotron {
    background-color: #DAAADA;
  }
  
</style>
