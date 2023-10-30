<template>
  <div class="grid grid-cols-12 bg-gradient-to-t from-amber-300 to-orange-50">
    <div class="col-span-2 p-4"></div>
    <div class="col-span-8 p-4 place-content-center">
      <!-- ADD THE COMPONENTS AND STYLING HERE -->
      <h1 class="text-center text-5xl sm:text-6xl font-semibold">
        {{ title }}
      </h1>
      <br>
      <a
        href="/resourceguides"
        class="mt-6 xs:text-base rounded-md bg-amber-400 px-3.5 py-2.5 text-3xl font-semibold transition duration-300 ease-in-out text-black drop-shadow-lg hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
      >
        Back
      </a>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 rounded-3xl border-4 border-orange-800 mt-8 min-w-[200px] shadow-2xl">
        <h1 class="mt-8 mb-6 text-4xl  sm:text-5xl font-semibold">{{ description['title'] }}</h1>
        <h3 class="pb-5 mb-3 sm:text-xl leading-10 font-semibold text-black">{{ description['body'] }}</h3>
      </div>
      <div
        class="rounded-3xl border-4 border-orange-700 mt-8 min-w-[200px] shadow-2xl"
      >
        <div class="min-[1280px]:max-h-96 lg:grid grid-cols-2 grid-rows-3">
          <div class="col-span-2">
            <h2 class="mt-4 pl-8 text-4xl sm:text-5xl font-semibold">
              Do it together!
            </h2>
            <h3 class="mt-4 pl-8 text-2xl sm:text-3xl font-semibold">
              What you'll need:
            </h3>
          </div>

          <div class="row-span-2">
            <div class="md:grid grid-cols-2">
              <div v-for="chunk in manipulateList" class="mb-4 mt-4 space-y-5">
                <div
                  v-for="item in chunk"
                  class="pl-8 relative flex items-center"
                >
                  <div class="md:my-2 flex h-6">
                    <input
                      :id="item"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      class="min-[1280px]:h-6 min-[1280px]:w-6 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div class=" md:my-2 ml-3 sm:text-xl leading-6">
                    <label
                      :for="item"
                      class=" min-[1280px]:text-2xl sm:text-xl font-normal text-gray-500"
                      >{{ item }}</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row-span-2 place-self-center">
            <img class="w-[100%]" :src="requiredimage" />
          </div>
        </div>
        <div v-for="step in thesteps" class="my-8 mx-5 mb-4">
          <StepCards
            :header="step['name']"
            :body="step['text']"
            :image="step['image']"
          />
        </div>
        <p class="px-4 text-4xl sm:text-5xl text-center my-10 font-semibold">
          That's All! Happy Composting!
        </p>
      </div>
      <div class="relative">
        <img
          class="absolute w-32 -left-20 -top-10 -rotate-45"
          src="/quicktips.png"
        />
        <div
          class="rounded-3xl border-4 border-orange-600 mt-5 py-3 min-w-[200px] shadow-2xl"
        >
          <p class="mt-4 pl-8 text-2xl sm:text-3xl font-semibold">Tips:</p>
          <ul class="mt-5 px-14 list-disc">
            <li class="my-4 sm:text-xl font-semibold" v-for="tip in tips">
              {{ tip }}
            </li>
          </ul>
        </div>
      </div>

      <div class="rounded-3xl border-4 border-amber-600 mt-5 px-8 py-1 min-w-[200px] shadow-2xl">
        <p class="mt-4 text-2xl sm:text-3xl font-semibold">More Guides:</p>
        <div id="beginner" class="">
        <h3 class="text-2xl font-semibold mt-3">Starter's Haven</h3>
        <h3 class="text-lg font-normal mb-3">For precious beginners</h3>
        <div class="border-4 border-black rounded-3xl p-4 bg-green-200 overflow-x-auto overflow-hidden flex first:pl-6 last:pr-6">
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
      

    
    <div class="col-span-2 p-4"></div>
  </div>
  
  
</template>

<script>
import StepCards from "@/components/StepCards.vue";
import ResourceGuidesCard from "@/components/ResourceGuidesCard.vue";

export default {
  components: {
    StepCards, ResourceGuidesCard,
  },
  props: {
    title: String,
    description: {type: Object, required: true},
    requireditems: { type: Array, required: true },
    requiredimage: String,
    thesteps: { type: Array, required: true },
    tips: { type: Array, required: true },
  },
  // data(){
  //     return {
  //         modifiedList: this.requireditems.slice() // Create a copy of the prop
  //     }
  // },
  computed: {
    manipulateList() {
      // Manipulate the local copy of the list

      const chunkSize = 3;
      const chunks = [];
      for (let i = 0; i < this.requireditems.length; i += chunkSize) {
        const chunk = this.requireditems.slice(i, i + chunkSize);
        chunks.push(chunk);
      }
      return chunks;
    },
  },
};
</script>
