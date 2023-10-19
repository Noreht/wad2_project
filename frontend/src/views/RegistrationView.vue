<template>
    <div class="flex h-[calc(100vh-9rem)] md:h-[calc(100vh-5rem)]">
      <div class="m-auto justify-center">
        <RegistrationCard />
      </div>
    </div>
  </template>
  
  
  <script>
  import RegistrationCard from "@/components/RegistrationCard.vue";
  
  export default {
    name: "RegistrationView",
    components: { RegistrationCard },
  };
  </script>