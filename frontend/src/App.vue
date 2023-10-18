<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <HelloWorld msg="Vite + Vue" />
  <p class="text-3xl text-red-600">HELLO</p>
  <!-- Anything that is in public will be in root folder -->
  <img src="/ThreadsIcon.svg" alt="Threads logo" /> 
  <HelloWorld></HelloWorld>


</template>