<template>

<div class="grid min-h-full grid-cols-1 xl:grid-cols-1 items-center">
    
  
  <div class="flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <RegistrationCard/>
  </div>


</div>


</template>
  
  
  <script>
  import RegistrationCard from "@/components/RegistrationCard.vue";
  // import LoginImageCard from "@/components/LoginImageCard.vue";
  import 'flowbite/dist/flowbite.min.js';
  export default {
    name: "RegistrationView",
    components: {
      RegistrationCard,
      // LoginImageCard
    }

  };
  
  </script>