<template>



  <div class="grid min-h-full grid-cols-1 xl:grid-cols-2 items-center">
    <div class="flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <LoginCard/>
    </div>

    <div class="flex-col justify-center xl:px-24 hidden xl:block">
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <div class="relative overflow-hidden rounded-lg xl:py-72">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <LoginImageCard
            :feature="'Nature\'s Recycler'"
            :content="'Composting: Reviving the Earth, One Pile at a Time'"
            :image="'LoginImageCards/HandsCompost.svg'"
            :hoverImage="'LoginImageCards/HandsCompost.jpg'"
          />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <LoginImageCard
            :feature="'Compost Magic'"
            :content="'Turning Kitchen Scraps into Garden Gold'"
            :image="'LoginImageCards/CompostBinWaste.svg'"
            :hoverImage="'ImpactCards/Contributor.jpg'"
          />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <LoginImageCard
            :feature="'Waste to Wealth'"
            :content="'Where Waste Becomes Wonder'"
            :image="'LoginImageCards/GardenFruits.svg'"
            :hoverImage="'LoginImageCards/GardenFruits.svg'"
          />
        </div>

        <!-- Reset transition properties for the first slide -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <LoginImageCard
            :feature="'Get Dirty'"
            :content="'Composting Feeds the World'"
            :image="'LoginImageCards/GardeningSolarPunk.svg'"
            :hoverImage="'LoginImageCards/GardeningSolarPunk.svg'"
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