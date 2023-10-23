<template >
    <div class=" me-3 w-[70%] max-w-[200px] min-w-[200px] flex-none rounded-2xl border-4 border-green-900">

    <!-- <img class="rounded-2" src={{image}} alt="Sunset in the mountains"> -->
    <div
        class=" h-[150px] border-green-900 rounded-t-xl border-b-4"
        :style="{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }"
      ></div>
        
    <div class="h-[92px] bg-green-500 px-3 py-2 bg-[rgb(0,0,0,)] rounded-b-xl">
        <div class="font-bold text-sm mb-2">How to:</div>
        <p class="text-gray-900 text-base">
            {{title}}
        </p>
    </div>
    <!-- <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div> -->
    </div>
</template>




<script>
export default {
    props: {
      title: String,    // title name
      image: String,    // image URL

    }
  };


</script>