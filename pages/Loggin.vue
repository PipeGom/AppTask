<template>
 
    <div class="d-flex align-center justify-center" style="height: 100vh">
        
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail @submit.prevent="login">
                <v-text-field v-model="username" label="User Name"></v-text-field>

                <v-text-field v-model="password" label="password"></v-text-field>
                <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

                <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>

            </v-form>
           
        </v-sheet>
    </div>

</template>
<script>
definePageMeta({
    layout: "blank",
  });
</script>

