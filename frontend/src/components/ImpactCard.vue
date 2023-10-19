<template>
    <section class="p-5 md:p-0 grid xl:grid-cols-1 gap-5 items-start">
      <article class="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-2xl group border-2 border-gray-500 rounded">
        <div class="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
          <a target="_blank" href="https://unsplash.com/@mehranhadad">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="rgba(0,0,0,0.5)">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <ul class="mt-6 font-semibold text-gray-500">
          <li class="inline mr-3 pb-1 border-b-2 border-green-500">{{ feature }}</li>
        </ul>
        <p class="mt-6 text-xl leading-relaxed text-gray-700">{{ content }}</p>
        <p class="text-gray-400 mt-10 font-semibold">{{ date }}</p>
        <div class="relative max-h-125 overflow-hidden">
          <img class="absolute" :src="image" alt="">

          <img class="relative transform duration-500 group-hover:opacity-0" :src="hoverImage" alt="">
        </div>
      </article>
    </section>
  </template>
    
  <script>
  export default {
    props: {
      feature: String,    // Features list
      content: String,    // Main content text
      date: String,       // Date
      image: String,      // Image source
      hoverImage: String  // Image source on hover
    }
  };
  </script>
  