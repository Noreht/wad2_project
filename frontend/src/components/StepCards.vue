
<template>
    <div class=" py-5 bg-[rgb(255,255,255,0.3)] rounded-2xl border-2 border-amber-700">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="min-[1030px]:grid grid-cols-4 mx-auto lg:mx-0">
            <h2 class="col-span-3 text-2xl sm:text-3xl text-black py-5 leading-10 font-semibold tracking-normal">{{ header }}</h2>
            
            <p class=" order-last col-span-3 pb-5 sm:text-xl leading-5 font-semibold text-black">{{ body }}</p>
            <div 
                class=" flex justify-center max-h-60 mb-4 border-black rounded-t-xl col-span-1 row-span-2 place-self-center"
                >
                <img class="max-h-60" :src='image'>
            </div>
            

          
        </div>
      </div>
    </div>
  </template>
  





<script>
export default {
    props: {
      header: String, 
      body: String,
      image: String

    }
  };
</script>
