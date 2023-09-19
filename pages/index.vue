<template>
  <div>
    <center>
      <h1>Bienvenidos a la app de tareas</h1>
      <p>Esta es una aplicación que permite gestionar las tareas de los estudiantes</p>

      <a href="/tareas">Click para iniciar (sin nuxtLink)</a>
      <br>
      <br>
      <a href="/Loggin">Click para iniciar sesion</a>
<br>
<br>
      <NuxtLink to="/tareas">
        Click para iniciar (Con nuxtLink)
      </NuxtLink>
    </center>

  </div>

</template>

<script>
  

definePageMeta({
  layout: "blank",
});

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccount } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiAccount,
    }
  }
}

</script>