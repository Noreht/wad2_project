<script>
import Navbar from "@/components/Navbar.vue";
import DonateScrapsButton from "@/components/DonateScrapsButton.vue";
export default {
  name: "App",

  components: {
    Navbar,
    DonateScrapsButton
  },

  computed: {
    isLoginPage() {
      return this.$route.path === '/login';
    },

    isRegistrationPage() {
      return this.$route.path === '/registration';
    }

  }

};

</script>

<template>

<div>
  <template v-if="!isLoginPage && !isRegistrationPage">
    <Navbar/>
    <DonateScrapsButton/>
  </template>
  <router-view />
</div>

</template>