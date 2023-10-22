
<template>
    <div class=" mt-3 bg-[rgb(255,255,255,0.3)] rounded-2xl border-2 border-amber-700">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="md:grid md:grid-cols-4 mx-auto lg:mx-0">
            <h2 class="md:col-span-3 text-2xl text-black py-5 leading-10 font-semibold tracking-normal">{{ header }}</h2>
            <div
                class="mb-4 border-black rounded-t-xl md:col-span-1 md:row-span-2"
                :style="{
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'top center',
                }"
            ></div>
            <p class=" md:col-span-3 pb-5 text-sm leading-5 font-semibold text-black">{{ body }}</p>
            

          
        </div>
      </div>
    </div>
  </template>
  





<script>
export default {
    props: {
      header: String,    // Features list
      body: String,
      image: String

    }
  };
</script>
