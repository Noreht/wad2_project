<template>
  <a
    href="https://donate.stripe.com/test_7sIeVDeaU6FoaEo002"
    class="button z-40 rounded-full fixed right-5 bottom-5 scroll-behavior: smooth text-xl"
    type="button" target="blank"
    >
      
      
      <span class="text flex items-center"> <img class="icon" src="DonateFoodScrapIcon.png" alt="Image"/> Buy us a coffee</span>
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
    height:50px;
    width:50px;
    margin-right: 10px;
    margin-left: -6px;
    margin-bottom: 10px;
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
