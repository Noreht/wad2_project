<template>
  <div class="grid grid-cols-12 bg-gradient-to-t from-amber-300 to-orange-50 min-w-[400px]">
    <div class="col-span-2 p-4"></div>
    <div class="col-span-8 p-4 place-content-center">
      <!-- ADD THE COMPONENTS AND STYLING HERE -->
      <h1
        class="text-center drop-shadow-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:min-w-[400px] xs:min-h-[95px] sm: -mb-[20px] typewriter"
      >
        <span
          v-for="(char, index) in typewriterText"
          :key="index"
          :class="{
            'text-amber-400': index >= typewriterText.length - 10 && index<=typewriterText.length - 7,
            }"
          >{{ char }}</span
        >
      </h1>

      <h3
        class="py-4 text-center text-lg xs:text-base md:text-xl lg:text-2xl font-semibold leading-10"
      >
        Explore and kick start your journey today!
      </h3>
      <ResourceGuidesSummary
        :header="'What is Composting?'"
        :body="'Composting is an aerobic process that transforms organic materials into nutrient-rich, earthy-smelling compost through natural decomposition. Microorganisms use carbon, nitrogen, water, and oxygen to break down kitchen scraps and yard waste, allowing you to compost at home!'"
      />

      <form class="mt-8">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            v-model="searchText"
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-orange-400 focus:border-orange-400"
            placeholder="Search Guides"
            required
          />
        </div>
      </form>

      <div v-if="searchText == ''">
        <div id="beginner" class="fixed-container">
          <h3 class="text-2xl font-semibold mt-8">Starter's Haven</h3>
          <h3 class="text-lg font-normal mb-3">For precious beginners</h3>
          <div
            class="border-4 border-black rounded-3xl p-4 bg-green-200 overflow-x-auto overflow-hidden flex first:pl-6 last:pr-6"
          >

            <ResourceGuidesCard
              v-for="guide in ResourceGuideList1"
              :title="guide.comp.title"
              :image="guide.comp.image"
              :url1="guide.comp.url"
            >
            </ResourceGuidesCard>
          </div>
        </div>

        <div id="intermediate" class="fixed-container mb-8">
          <h3 class="text-2xl font-semibold mt-8">Next-Level Navigators</h3>
          <h3 class="text-lg font-normal mb-3">For experienced composters</h3>
          <div
            class="border-4 p-4 rounded-3xl border-black bg-green-300 overflow-x-auto overflow-hidden flex"
          >
            <ResourceGuidesCard
              v-for="guide in ResourceGuideList2"
              :title="guide.comp.title"
              :image="guide.comp.image"
              :url1="guide.comp.url"
            >
            </ResourceGuidesCard>

          </div>
        </div>
      </div>

      <div
        class="border-4 border-black rounded-3xl my-4 p-4 bg-green-200 overflow-x-auto overflow-hidden flex first:pl-6 last:pr-6 "
        v-else-if="filteredResourceGuideList.length > 0"
      >
        <ResourceGuidesCard
          v-for="guide in filteredResourceGuideList"
          :title="guide.comp.title"
          :image="guide.comp.image"
          :url1="guide.comp.url"
        >
        </ResourceGuidesCard>
      </div>

      <div v-else class="min-h-[202px]"></div>
    </div>
  </div>
  <div class="col-span-2 px-4"></div>

  <div></div>
  <Foot />
</template>

<script>
import ResourceGuidesCard from "../components/ResourceGuidesCard.vue";
import ResourceGuidesSummary from "@/components/ResourceGuidesSummary.vue";
import Foot from "@/components/Footer.vue";

const words = ["Resources and Guides"];
const typeSpeed = 100; // Adjust the speed as needed (in milliseconds)

export default {
  name: "ResourceGuidesView",
  components: { ResourceGuidesCard, ResourceGuidesSummary, Foot },
  // ResourceGuideList:[{search:'how to build a basic compost',comp:{title:'Make a Basic Compost',image:'ResourceGuidesCards/compostbin1.png',url:'/basiccompost'}},{search:'how to build a composting bin',comp:{title:'Build a Composting Bin',image:'ResourceGuidesCards/compostbin.png',url:''}}]
  data() {
    return {
      typewriterText: "",
      isGoldVisible: false,
      loopTyping: true,
      ResourceGuideList1: [
        {
          search: "how to make a basic compost",
          comp: {
            title: "Make a Basic Compost",
            image: "ResourceGuidesCards/compostbin1.png",
            url: "/basiccompost",
          },
        },
        {
          search: "how to build a composting bin",
          comp: {
            title: "Build a Composting Bin",
            image: "ResourceGuidesCards/compostbin.png",
            url: "/compostingbin",
          },
        },
        {
          search: "how to keep your compost warm",
          comp: {
            title: "Keep your Compost Warm",
            image: "ResourceGuidesCards/warm.png",
            url: "",
          },
        },
        {
          search: "how to speed up composting process",
          comp: {
            title: "Speed up Composting Process",
            image: "ResourceGuidesCards/time.png",
            url: "",
          },
        },
        {
          search: "how to keep your compost from smelling",
          comp: {
            title: "Keep your Compost from Smelling",
            image: "ResourceGuidesCards/odor.png",
            url: "",
          },
        },
        {
          search: "how to process food waste before using it",
          comp: {
            title: "Process Food Waste before using",
            image: "ResourceGuidesCards/food.png",
            url: "",
          },
        },
      ],

      ResourceGuideList2: [
        {
          search: "how to build a tumbling composter",
          comp: {
            title: "Build a Tumbling Composter",
            image: "ResourceGuidesCards/tumbling.png",
            url: "",
          },
        },
        {
          search: "how to apply mulch to compost",
          comp: {
            title: "Apply Mulch to Compost",
            image: "ResourceGuidesCards/mulch.png",
            url: "",
          },
        },
        {
          search: "how to make a worm compost system",
          comp: {
            title: "Make a Worm Compost System",
            image: "ResourceGuidesCards/wormcompost.png",
            url: "",
          },
        },
        {
          search: "how to upscale your compost bin",
          comp: {
            title: "Upscale your Compost Bin",
            image: "ResourceGuidesCards/compostbox.png",
            url: "",
          },
        },
        {
          search: "how to make compost tea",
          comp: {
            title: "Make Compost Tea",
            image: "ResourceGuidesCards/composttea.png",
            url: "",
          },
        },
        {
          search: "how to add nitrogen to compost",
          comp: {
            title: "Add Nitrogen to Compost",
            image: "ResourceGuidesCards/nitrogen.png",
            url: "",
          },
        },
      ],

      searchText: "",
    };
  },
  methods: {
    async type() {
      try {
        while (this.loopTyping) {
          for (const word of words) {
            let isDeleting = false;
            let j = 0;

            while (j >= 0 && j < word.length) {
              this.typewriterText = word.substring(0, j + 1);
              if (word[j] === "R") {
                this.isGoldVisible = true;
              } else {
                this.isGoldVisible = false;
              }
              if (isDeleting) {
                await this.delay(typeSpeed / 2);
              } else {
                await this.delay(typeSpeed);
              }
              j = isDeleting ? j - 1 : j + 1;
            }

            // Add a pause after typing the full word
            if (j === word.length) {
              await this.delay(typeSpeed * 2);
            }

            // Clear the word with a delay
            while (j >= 0) {
              this.typewriterText = word.substring(0, j);
              if (word[j] === "R") {
                this.isGoldVisible = true;
              } else {
                this.isGoldVisible = false;
              }
              await this.delay(typeSpeed / 2);
              j--;
            }
          }
        }
      } catch (error) {
        console.error("Typing error:", error);
      }
    },
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
  mounted() {
    this.type();
  },
  beforeDestroy() {
    this.loopTyping = false; // Stop the looping when the component is destroyed
  },
  computed: {
    // Manipulate the local copy of the list
    filteredResourceGuideList() {
      const searchLowerCase = this.searchText.toLowerCase();
      var ret;
      if (searchLowerCase == "") {
        ret = [];
      } else {
        let newarray = this.ResourceGuideList1.concat(this.ResourceGuideList2);
        ret = newarray.filter((resource) => {
          return resource.search.toLowerCase().includes(searchLowerCase);
        });
      }

      console.log(ret);
      return ret;
    },
  },
};
</script>
