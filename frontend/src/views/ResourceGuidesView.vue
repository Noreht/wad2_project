<template>
  <div class="grid grid-cols-12 bg-gradient-to-t from-amber-300 to-orange-50">
    <div class="col-span-2 p-4"></div>
    <div class="col-span-8 p-4 place-content-center">
      <!-- ADD THE COMPONENTS AND STYLING HERE -->
      <h1 class="text-center text-5xl sm:text-6xl font-semibold">
        Resources and Guides
      </h1>
      <h3 class="py-4 text-center text-lg sm:text-xl font-semibold leading-10">
        Explore and kick start your journey today!
      </h3>
      <ResourceGuidesSummary
        :header="'What is Composting?'"
        :body="'Composting is an aerobic process that transforms organic materials into nutrient-rich, earthy-smelling compost through natural decomposition. Microorganisms use carbon, nitrogen, water, and oxygen to break down kitchen scraps and yard waste, allowing you to compost at home!'"
      />
      <div id="beginner" class="">
        <h3 class="text-2xl font-semibold mt-8">Starter's Haven</h3>
        <h3 class="text-lg font-normal mb-3">For precious beginners</h3>
        <div
          class="border-4 border-black rounded-3xl p-4 bg-green-300 overflow-x-auto overflow-hidden flex first:pl-6 last:pr-6"
        >
          <ResourceGuidesCard
            :title="'Make a Basic Compost?'"
            :image="'ResourceGuidesCards/compostbin1.png'"
            :url1="'/basiccompost'"
          />
          <ResourceGuidesCard
            :title="'Build a Composting Bin?'"
            :image="'ResourceGuidesCards/compostbin.png'"
            :url1="''"
          />
          <ResourceGuidesCard
            :title="'Keep your Compost Warm?'"
            :image="'ResourceGuidesCards/warm.png'"
            :url1="''"
          />
          <ResourceGuidesCard
            :title="'Speed up Composting Process?'"
            :image="'ResourceGuidesCards/time.png'"
            :url1="''"
          />
          <ResourceGuidesCard
            :title="'Keep your Compost from Smelling?'"
            :image="'ResourceGuidesCards/odor.png'"
            :url1="''"
          />
          <ResourceGuidesCard
            :title="'Process Food Waste before using?'"
            :image="'ResourceGuidesCards/food.png'"
            :url1="''"
          />
        </div>
      </div>

      <div id="intermediate" class="">
        <h3 class="text-2xl font-semibold mt-8">Next-Level Navigators</h3>
        <h3 class="text-lg font-normal mb-3">For experienced composters</h3>
        <div
          class="border-4 p-4 rounded-3xl border-black bg-green-400 overflow-x-auto overflow-hidden flex"
        >
          <ResourceGuidesCard :title="'Build a Tumbling Composter?'" />
          <ResourceGuidesCard :title="'Apply Mulch to Compost?'" />
          <ResourceGuidesCard :title="'Make a Worm Compost System?'" />
          <ResourceGuidesCard :title="'Upscale your Compost Bin'" />
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
