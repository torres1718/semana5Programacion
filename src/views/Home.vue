<template>
  <div class="home" :style="{'background-image':'url(https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)', 'background-size':'cover', 'height':'800px', 'width':'1550px', display}"  >
    <h3>
     
<img src="https://estudiantes.ugb.edu.sv/img/logologin.png" alt="">
<br>
<br>

<b>Bienvenido usuario a nuestro sitio web </b><br>

<br>
  <b>Programacion Computacional IV</b>
  <br><br>

    <b>Seleccione una opcion en nuestra barra superior</b>

</h3>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
  .home{
    background-color: beige;

}
</style>