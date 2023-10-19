<template>

<!-- <div>
    <div class="rounded-lg pl-20 mr-20 border-4 border-slate-500 px-6 py-24 sm:py-32 lg:px-8 mt-5">



    </div>
</div> -->

<div class="grid grid-cols-12 gap-4">
  <div class="col-span-2 bg-blue-200 p-4"></div>
  <div class="col-span-8 bg-green-200 p-4">
    <!-- ADD THE COMPONENTS AND STYLING HERE -->

    <div class="rounded-lg border-4 border-slate-500 px-6 py-24 sm:py-32 lg:px-8 mt-5">
      Black Gold
      52 communities
      At BlackGold, we're dedicated to Singapore's 30 by 30 food security plan by promoting sustainable agri-food practices. Our community-driven composting program reduces food waste, encourages responsible consumption, and boosts environmental sustainability. We connect and support Singaporeans, aiming to transform food waste into valuable compost instead of contributing to landfill greenhouse gases. Join us in making a difference for Singapore's food security and the environment - discover how to turn food waste into compost today!
    </div>

    <div>
      <h1 class="text-3xl text-center font-bold leading-7 text-gray-900 sm:truncate sm:text-4xl sm:tracking-tight border-4 border-slate-500">What Impact Can I Make?</h1>
    </div>

    <div class="lg:flex border-4 border-slate-500 lg:grid md:grid-cols-3 md:gap-5">
      <ImpactCard
        :feature="'Individual'"
        :content="'I’m just looking to try out composting within my household and learning more about the movement!'"
        :date="'23rd March, 2021'"
        :image="'ImpactCards/Individual.svg'"
        :hoverImage="'ImpactCards/Individual.svg'"
      />
      <ImpactCard
        :feature="'Community'"
        :content="'I want to join the larger composting community to promote the movement in Singapore!'"
        :date="'23rd March, 2021'"
        :image="'ImpactCards/Community.svg'"
        :hoverImage="'ImpactCards/Community.svg'"
      />
      <ImpactCard
        :feature="'Contributor'"
        :content="'I don’t have the time to contribute actively, but I have food waste to donate to the movement!'"
        :date="'23rd March, 2021'"
        :image="'ImpactCards/Contributor.svg'"
        :hoverImage="'ImpactCards/Contributor.svg'"
      />
      
    </div>


    <div>

      <div class="mx-auto w-8/12 m-10">
        <div class="pointer-events-none inset-x-0 bottom-0 sm:flex justify-center sm:px-6 sm:pb-5 lg:px-8">
          <div class="sm:flex items-center justify-center gap-x-6 bg-amber-100 px-24 py-8 sm:rounded-xl sm:py-4 sm:pl-5 sm:pr-4.5 border-black border-4">
            <div class="text-2xl leading-6 text-black text-center justify-center items-center">
              <svg viewBox="0 0 2 2" class="mx-2 inline h-2 w-2 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>
              <strong class="font-bold text-4xl">Our Street Cred</strong>
            </div>
          </div>
        </div>

      </div>

    </div>
    
  </div>

  <div class="col-span-2 bg-blue-200 p-4"></div>

</div>
  
</template>



<script>
import ImpactCard from "@/components/ImpactCard.vue";

export default {
    name: "HomepageView",
    components: { ImpactCard },
  };
</script>