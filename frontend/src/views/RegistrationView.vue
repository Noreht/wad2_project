<template>

<div class="grid min-h-full grid-cols-1 xl:grid-cols-1 items-center min-w-[600px]">
    
  
  <div class="flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <RegistrationCard/>
  </div>


</div>


</template>
  
  
  <script>
  import RegistrationCard from "@/components/RegistrationCard.vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  import { auth } from "@/utils/firebase";
  import { computed } from "vue";



  export default {
    name: "RegistrationView",


    setup() {
      const store = useStore();
      const router = useRouter();

      const user = computed(() => {
        return store.getters.user;
      });

      auth.onAuthStateChanged((user) => {
        store.dispatch("fetchUser", user);
      });

      if (user.value !== undefined && user.value.loggedIn) {
        console.log(user.value);
        router.push("/");
      }

      return { user, router };
    },


    components: {
      RegistrationCard,
    }





  };
  
  </script>