
<template>
    <div class=" min-w-[270px] mt-3 bg-[rgb(255,255,255,0.3)] rounded-2xl border-4 border-amber-900">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 xl:grid grid-cols-3 xl:pb-5">
        <div class="col-span-2">
          <h2 class=" mt-4  text-4xl sm:text-5xl underline underline-offset-4 text-yellow-800 py-5 leading-10 font-semibold tracking-normal">{{ header }}</h2>
          <p class=" pb-5 sm:text-xl leading-5 font-semibold text-black">{{ body }}</p>
        </div>
        <div class=" place-self-center flex place-content-center">
          <img class="mb-5 mt-5 xl:ml-5 xl:mb-0 rounded-md" src="/whatiscomposting.png">
        </div>
          
        
      </div>
    </div>
  </template>
  





<script>
export default {
    props: {
      header: String,    // Features list
      body: String,

    }
  };</script>
