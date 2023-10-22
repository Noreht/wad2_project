
<template>
    <div class=" mt-3 bg-[rgb(255,255,255,0.3)] rounded-2xl border-2 border-amber-700">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="  underline underline-offset-2 text-2xl text-yellow-800 py-5 leading-10 font-semibold tracking-normal">{{ header }}</h2>
          <p class=" pb-5 text-sm leading-5 font-semibold w-3/4 text-black">{{ body }}</p>
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
  };
</script>
