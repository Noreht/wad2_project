<template>
  <section class="mb-3 lg:w-1/3 h-auto">
    <article
      class="transform duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-2xl group border-4 border-black rounded-3xl hover:scale-105"
    >
      <div
        class="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100"
      >
        <a target="_blank" href="https://unsplash.com/@mehranhadad">
          <svg
            class="w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="rgba(0,0,0,0.5)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
      <ul class="mt-5 font-bold text-black text-center">
        <li class="inline pb-1 border-b-4 border-green-700 text-3xl">
          {{ feature }}
        </li>
      </ul>
      <p
        class="mt-6 text-base lg:text-base leading-7 text-black text-center px-6 lg:px-3 max-h-[90px] min-h-[90px] sm:base"
      >
        {{ content }}
      </p>
      <p class="text-gray-400 mt-5 mx-3 mb-2 font-semibold">{{ date }}</p>
      <div
        class="border-t-[4px] h-[250px] border-black rounded-b-2xl"
        :style="{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }"
      >
        <!-- <img
          class="w-full object-cover h-full overflow-hidden rounded-b-2xl border-black-3"
          :src="image"
          alt=""
        /> -->

        <!-- <img
          class="relative transform duration-500 group-hover:opacity-0 w-full "
          :src="hoverImage"
          alt=""
        /> -->
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    feature: String, // Features list
    content: String, // Main content text
    date: String, // Date
    image: String, // Image source
    hoverImage: String, // Image source on hover
  },
};
</script>
