<template>



  <div class="grid min-h-full grid-cols-1 xl:grid-cols-2 items-center">
  <div class="flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <LoginCard/>
  </div>

  <div class="flex-col justify-center xl:px-24  hidden xl:block">
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <div class="relative overflow-hidden rounded-lg xl:py-72">  
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <LoginImageCard
          :feature="'Contributor'"
          :content="'I don’t have the time to contribute actively, but I have food waste to donate to the movement!'"
          :image="'ImpactCards/Contributor.jpg'"
          :hoverImage="'ImpactCards/Contributor.jpg'"
          />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <LoginImageCard
          :feature="'Contributor'"
          :content="'I don’t have the time to contribute actively, but I have food waste to donate to the movement!'"
          :image="'ImpactCards/Contributor.jpg'"
          :hoverImage="'ImpactCards/Contributor.jpg'"
          />
        </div>
      </div>

    </div>
    
  </div>


</div>

  
</template>


  <script>
  
  import LoginCard from "@/components/LoginCard.vue";
  import LoginImageCard from "@/components/LoginImageCard.vue";
  import 'flowbite/dist/flowbite.min.js';
  export default {
    name: "LoginView",
    components: {
      LoginCard,
      LoginImageCard
    }

  };
  
  </script>