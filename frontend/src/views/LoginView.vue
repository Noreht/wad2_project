<template>



  <div class="grid min-h-full grid-cols-1 xl:grid-cols-2 items-center min-w-[600px]">
    <div class="flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <LoginCard/>
    </div>

    <div class="flex-col justify-center xl:px-24 hidden xl:block">
      <swiper-container
        :slides-per-view="1"
        :space-between="spaceBetween"
        :centered-slides="true"
        @swiperprogress="onProgress"
        @swiperslidechange="onSlideChange"
        :autoplay="{ delay: 2500 }"
        :loop="true"
      >
    <swiper-slide>          
      <LoginImageCard
        :feature="'Nature\'s Recycler'"
        :content="'Composting: Reviving the Earth, One Pile at a Time'"
        :image="'LoginImageCards/HandsCompost.svg'"
        :hoverImage="'LoginImageCards/HandsCompost.jpg'"
      />
    </swiper-slide>
    <swiper-slide>
      <LoginImageCard
            :feature="'Compost Magic'"
            :content="'Turning Kitchen Scraps into Garden Gold'"
            :image="'LoginImageCards/CompostBinWaste.svg'"
            :hoverImage="'ImpactCards/Contributor.jpg'"
          />
    </swiper-slide>
    <swiper-slide>
      <LoginImageCard
            :feature="'Waste to Wealth'"
            :content="'Where Waste Becomes Wonder'"
            :image="'LoginImageCards/GardenFruits.svg'"
            :hoverImage="'LoginImageCards/GardenFruits.svg'"
          />
    </swiper-slide>
      <swiper-slide>
        <LoginImageCard
            :feature="'Get Dirty'"
            :content="'Composting Feeds the World'"
            :image="'LoginImageCards/GardeningSolarPunk.svg'"
            :hoverImage="'LoginImageCards/GardeningSolarPunk.svg'"
          />
      </swiper-slide>

  </swiper-container>
      
</div>


</div>

  
</template>


  <script>
  
  import LoginCard from "@/components/LoginCard.vue";
  import LoginImageCard from "@/components/LoginImageCard.vue";
  import 'flowbite/dist/flowbite.min.js';
  import { register } from 'swiper/element/bundle';

  register();

  export default {
    name: "LoginView",
    
    setup() {
      const spaceBetween = 10;
      const onProgress = (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress)
      };

      const onSlideChange = (e) => {
        console.log('slide changed')
      }

      return {
        spaceBetween,
        onProgress,
        onSlideChange,
      }

    },


    components: {
      LoginCard,
      LoginImageCard
    }

  };
  
  </script>