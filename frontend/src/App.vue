<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

<div>
  <HelloWorld msg="Vite + Vue" />
  <p class="text-3xl text-red-600">HELLO</p>
  <!-- Anything that is in public will be in root folder -->
  <img src="/ThreadsIcon.svg" alt="Threads logo" class="animate__animated animate__fadeIn from-right"/> 

  <!-- <HelloWorld></HelloWorld> -->
  <div class="animate-pulse flex space-x-4">
    <p>hello</p>
  </div>

  <div class="animate-bounce w-6 h-6 ...">
    <p>byebeybey</p>
    <p>hello</p>
  </div>
</div>

</template>