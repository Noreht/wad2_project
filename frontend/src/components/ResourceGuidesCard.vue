<template>
  <a
    v-if="url1"
    :href="url1"
    class="me-3 w-[70%] max-w-[200px] min-w-[140px] flex-none rounded-2xl border-4 border-green-900"
  >
    <!-- <img class="rounded-2" src={{image}} alt="Sunset in the mountains"> -->
    <div
      class="h-[150px] border-green-900 rounded-t-xl border-b-4"
      :style="{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }"
    ></div>

    <div class="px-3 py-2 bg-[rgb(0,0,0,)] rounded-b-xl">
      <div class="font-bold text-sm mb-2">How to:</div>
      <p class="text-gray-700 text-base">
        {{ title }}
      </p>
    </div>
    <!-- <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div> -->
  </a>

  <a
    v-else
    class="relative me-3 w-[70%] max-w-[200px] min-w-[140px] flex-none rounded-2xl border-4 border-green-900"
    ><div class="bg-white/50 absolute z-10 h-[100%] w-[100%] rounded-xl"></div>
    <div
      class="font-bold text-4xl italic absolute z-20 w-[100%] h-[100%] text-center align-middle mt-20 ml-7"
      style="
        -ms-transform: rotate(-10deg); /* IE 9 */
        -webkit-transform: rotate(-20deg); /* Chrome, Safari, Opera */
        -moz-transform: rotate(-10deg); /* Mozilla */
        transform: rotate(-20deg);
      "
    >
      Coming Soon...
    </div>
    <!-- <img class="rounded-2" src={{image}} alt="Sunset in the mountains"> -->
    <div
      class="h-[150px] border-green-900 rounded-t-xl border-b-4"
      :style="{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }"
    ></div>

    <div class="px-3 py-2 bg-[rgb(0,0,0,)] rounded-b-xl">
      <div class="font-bold text-sm mb-2">How to:</div>
      <p class="text-gray-700 text-base">
        {{ title }}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: String, // title name
    image: String, // image URL
    url1: String,
  },
};
</script>
