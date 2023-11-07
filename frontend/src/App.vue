<script>
import Navbar from "@/components/Navbar.vue";
import DonateScrapsButton from "@/components/DonateScrapsButton.vue";

import { useStore } from "vuex";

export default {
  name: "App",

  components: {
    Navbar,
    DonateScrapsButton,

  },

  computed: {
    isLoginPage() {
      return this.$route.path === "/login";
    },

    isRegistrationPage() {
      return this.$route.path === "/registration";
    },
  },
};
</script>

<template>
  <div>
      <Navbar v-if="!isLoginPage && !isRegistrationPage"/>
      
      <DonateScrapsButton v-if="!isLoginPage && !isRegistrationPage"/>
    <router-view />

  </div>
</template>
