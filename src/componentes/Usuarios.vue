<template>

  <section class="src-componentes-usuarios">
    <div class="jumbotron">
      <h2>Usuarios</h2>
      <hr>
      <br>

      <button class="btn btn-info my-3 mr-2" @click="getUsuarios()">GET</button>
      
      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-secondary">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Numero de telefono</th>
          </tr>
          <tr v-for="(usuario, index) in usuarios" :key="index">
            <td> {{ usuario.nombre }} </td>
            <td> {{ usuario.email }} </td>
            <td> {{ usuario.telefono }} </td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-info"> No se encontraron usuarios </h4>

    </div>
  </section>

</template>

<script>
import * as servicioUsuarios from '../servicios/usuarios'


  export default  {
    name: 'src-componentes-usuarios',
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
        console.log('getUsuarios')
        const usuarios = await servicioUsuarios.getAll()
        this.usuarios = usuarios
      }

    },
    computed: {

    }
}


</script>
  

<style scoped lang="css">

  .jumbotron {
    background-color: #D88DD8;
  }
  
</style>
