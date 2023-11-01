<template>
  <a
    href="https://donate.stripe.com/test_7sIeVDeaU6FoaEo002"
    class="button z-20 rounded-full fixed right-5 bottom-5 scroll-behavior: smooth text-xl"
    type="button" target="blank"
    @click="handleClick"
    >
      <span class="icon">☕</span>
      <!-- <img src="DonateFoodScrapIcon.svg" class="w-9 h-8 mr-2 icon" alt="Image" /> -->
      <span class="text">Buy us a coffee</span>
    </a>
  </template>
  <style scoped>
  .button {
    background-color: rgb(6 78 59);
    color: white;
    text-decoration: none;
    border-radius: 60px;
    height: 60px;
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    width: auto;
    max-width: 60px; /** I'm animating max-width because width needs to be auto, and auto can't be animated **/
    -webkit-transition: max-width 0.5s;
    transition: max-width 0.5s;
    padding-left: 11px;
  }

  .button:hover {
    max-width: 300px;
  }

  .icon {
    font-family: "Font Awesome 5 Free";
    font-size: 43px;
    margin-right: 5px;
    margin-left: -9px;
    display: flex;
    align-items: center;
  }

  .text {
    white-space: nowrap;
    margin-right: 11px;
  }
  </style>
  
<script>

</script>
