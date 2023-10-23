<template>
  <div class="grid grid-cols-12 bg-gradient-to-t from-amber-300 to-orange-50">
    <div class="col-span-2 p-4"></div>
    <div class="col-span-8 p-4 place-content-center">
      <!-- ADD THE COMPONENTS AND STYLING HERE -->
      <h1 class="text-center text-5xl sm:text-6xl font-semibold">Resources and Guides</h1>
      <h3 class=" py-4 text-center text-lg sm:text-xl font-semibold leading-10">
        Explore and kick start your journey today!
      </h3>
      <ResourceGuidesSummary
        :header="'What is Composting?'"
        :body="'Composting is an aerobic process that transforms organic materials into nutrient-rich, earthy-smelling compost through natural decomposition. Microorganisms use carbon, nitrogen, water, and oxygen to break down kitchen scraps and yard waste, allowing you to compost at home!'"
      />

      <form class="mt-8">   
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-orange-400 focus:border-orange-400" placeholder="Search Guides" required>
              <button type="submit" class=" place-content-center absolute top-1 right-1 h-5/6 p-2.5 text-sm font-medium text-white bg-green-600 rounded-3xl border border-green-600 hover:bg-green-900 focus:ring-2 focus:outline-none focus:ring-green-400">
                <span class="text-sm mx-3">Search</span>
              </button>
          </div>
      </form>

      <div id="beginner" class="">
        <h3 class="text-2xl font-semibold mt-8">Starter's Haven</h3>
        <h3 class="text-lg font-normal mb-3">For precious beginners</h3>
        <div class="border-4 border-black rounded-3xl p-4 bg-green-200 overflow-x-auto overflow-hidden flex first:pl-6 last:pr-6">
          <ResourceGuidesCard
            :title="'Make a Basic Compost?'"
            :image="'ResourceGuidesCards/compostbin1.png'"
          />
          <ResourceGuidesCard
            :title="'Build a Composting Bin?'"
            :image="'ResourceGuidesCards/compostbin.png'"
          />
          <ResourceGuidesCard
            :title="'Keep your Compost Warm?'"
            :image="'ResourceGuidesCards/warm.png'"
          />
          <ResourceGuidesCard
            :title="'Speed up Composting Process?'"
            :image="'ResourceGuidesCards/time.png'"
          />
          <ResourceGuidesCard
            :title="'Keep your Compost from Smelling?'"
            :image="'ResourceGuidesCards/odor.png'"
          />
          <ResourceGuidesCard
            :title="'Process Food Waste before using?'"
            :image="'ResourceGuidesCards/food.png'"
          />
        </div>
      </div>

      <div id="intermediate" class="mb-8">
          <h3 class="text-2xl font-semibold mt-8">Next-Level Navigators</h3>
          <h3 class="text-lg font-normal mb-3">For experienced composters</h3>
          <div class="border-4 p-4 rounded-3xl border-black bg-green-300 overflow-x-auto overflow-hidden flex">
            <ResourceGuidesCard 
            :title="'Build a Tumbling Composter?'"
            :image="'ResourceGuidesCards/tumbling.png'"
            />
            <ResourceGuidesCard 
            :title="'Apply Mulch to Compost?'"
            :image="'ResourceGuidesCards/mulch.png'" />
            <ResourceGuidesCard 
            :title="'Make a Worm Compost System?'"
            :image="'ResourceGuidesCards/wormcompost.png'" />
            <ResourceGuidesCard 
            :title="'Upscale your Compost Bin'"
            :image="'ResourceGuidesCards/compostbox.png'" />
            <ResourceGuidesCard 
            :title="'Make a Compost Tea?'"
            :image="'ResourceGuidesCards/composttea.png'" />
            <ResourceGuidesCard 
            :title="'Add Nitrogen to Compost?'"
            :image="'ResourceGuidesCards/nitrogen.png'" />
          </div>
      </div>
    </div>
    </div>
    <div class="col-span-2 px-4"></div>

  <Foot />
</template>

<script>
import ResourceGuidesCard from "@/components/ResourceGuidesCard.vue";
import ResourceGuidesSummary from "@/components/ResourceGuidesSummary.vue";
import Foot from "@/components/Footer.vue";

export default {
  name: "ResourceGuidesView",
  components: { ResourceGuidesCard, ResourceGuidesSummary, Foot },
};
</script>
