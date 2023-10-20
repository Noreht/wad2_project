<template>
    <section class="p-5 md:p-0 grid xl:grid-cols-1 gap-5 lg:items-stretch md:items-end mb-2 bg-white">
      <article
        class="transform duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-2xl group border-4 border-black rounded-3xl"
      >
      <div
          class="border-b-[4px] h-[350px] border-black rounded-t-2xl"
          :style="{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }"
        >
        </div>

        <ul class="mt-5 font-bold text-black text-center">
          <li class="inline pb-1 border-b-4 border-green-700 text-3xl">
            {{ feature }}
          </li>
        </ul>
        <p class="mt-6 mb-2 text-2xl lg:text-base leading-7 text-black text-center px-6 lg:px-3 max-h-[90px] min-h-[50px]">
          {{ content }}
        </p>
      </article>
    </section>
    
  </template>
  
  <script>
  export default {
    props: {
      feature: String, // Features list
      content: String, // Main content text
      image: String, // Image source
      hoverImage: String, // Image source on hover
    },
  };
  </script>
  