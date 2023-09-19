<template>
<div class="box">
<v-sheet width="300" class="mx-auto"  >

    <v-form @submit.prevent class="form" >
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="User Name"
        class="custom-text-field"
      ></v-text-field>

      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="Password"
        class="custom-text-field"
      ></v-text-field>
    
      <v-btn type="submit" block class="mt-2" style="width: 70%;">iniciar sesion</v-btn>
    </v-form>
  </v-sheet>
</div>

</template>
<script>
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
  background-color: #60aaff;
  align-items: center;
  justify-content: center;
}
.custom-text-field .v-input__control {
  background-color: azure; 
}

</style>