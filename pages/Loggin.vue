<template>
<div class="box">
<v-sheet width="300" class=" mx-auto" style="background-color:#60aaff ;"  >

    <v-form @submit.prevent="saveUser" class="form" >
      <img src="/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png" style="width: 50%; height: 15%;">
      <v-text-field
        v-model="user.email"
       
        label="User Name"
        class="custom-text-field"
        required 
      ></v-text-field>

      <v-text-field
        type="password"
        v-model="user.password"
        
        label="Password"
        class="custom-text-field"
        required 
      ></v-text-field>
    
      <v-btn type="submit" class="ml-16 rounded-pill" >iniciar sesion</v-btn>
    </v-form>
  </v-sheet>
</div>

</template>
<script setup>



  const user=ref({email:"PepitoPerez"});  // si no se usa el ref no se carga en el doom, y se tarda mas 
  // se indican las propiedades del usuario, doble llave renderiza variables
  const saveUser = () => {
    console.log(user.value)
  }

  definePageMeta({
    layout: "blank",
  });

  
</script>
<style>
.box{
    display: flex; align-items: center; justify-content: center;   height: 100vh; 
    background-color:#60aaff;
}
.form{ 
  align-items: center;
  justify-content: center;
}
.custom-text-field .v-input__control {
  background-color: azure; 
  border-radius: 10px;
}

</style>