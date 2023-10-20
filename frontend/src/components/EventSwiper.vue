<!-- Git Ignored!-->

<template>
    <swiper
      class="border-b-2 cursor-grab border-gray-500 max-w-screen-lg m-auto p-4 mt-24"
      :modules="modules"
      :space-between="20"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 7000,
        disabledInteraction: false,
        pauseOnMouseEnter: true,
      }"
    >
      <swiper-slide
        v-for="text in SwiperTextBase"
        :key="text.description"
        class="pb-14 sm:flex sm:justify-evenly"
      >
        <div>
          <h1 class="font-bold text-2xl pb-6 lg:text-3xl">{{ text.location }}</h1>
          <p>{{ text.description }}</p>
        </div>
        <img :src="text.img" alt="image" />
      </swiper-slide>
    </swiper>
  </template>
  
  <script>
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/autoplay";
  import { ref } from "vue";
  
  
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay, Pagination } from "swiper/modules";
  
  
  
  export default {
    setup() {
      const swiperTextBase = ref(
        value=[
          {
            location: "Elon Musk",
            description: "When something is impt",
            img: "@/public/vite.svg",
          },
        ]);
        return {modules: [Pagination, Autoplay], swiperTextBase}
    }
  };
  </script>
  