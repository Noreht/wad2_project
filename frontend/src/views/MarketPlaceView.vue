<template>
  <div class="grid grid-cols-12 min-w-[400px] h-screen">
    <div class="col-span-2 px-4"></div>
    <div class="h-full bg-gradient-to-b from-orange-50 to-red-100 col-span-8 px-4 place-content-center">
      <div>
        <div v-if="pageWidth >= 904 && pageWidth <= 1359">
          <form class="mt-4">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="flex justify-center">
              <div class="w-[535px] relative">
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
                  class="block w-[100%] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Search Items"
                  required
                />
              </div>
            </div>
          </form>
          <div class="flex justify-center">
            <div class="mt-8 grid grid-cols-2 gap-y-12 max-w-[700px] gap-x-12">
              <marketplacecard
                v-for="product in products"
                :name="product.name"
                :color="product.color"
                :imgSrc="product.imageSrc"
                :price="product.price"
                :location="product.location"
                :condition="product.condition"
                :details="product.details"
                :owner="product.owner"
              >
              </marketplacecard>
            </div>
          </div>
        </div>

        <div v-else-if="pageWidth >= 1360 && pageWidth <= 1779">
          <form class="mt-4">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="flex justify-center">
              <div class="w-[831px] relative">
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
                  class="block w-[100%] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Search Items"
                  required
                />
              </div>
            </div>
          </form>
          <div class="flex justify-center">
            <div class="mt-8 grid grid-cols-3 gap-y-12 gap-x-12">
              <marketplacecard
                v-for="product in products"
                :name="product.name"
                :color="product.color"
                :imgSrc="product.imageSrc"
                :price="product.price"
                :location="product.location"
                :condition="product.condition"
                :details="product.details"
                :owner="product.owner"
              >
              </marketplacecard>
            </div>
          </div>
        </div>

        <div v-else-if="pageWidth >= 1780">
          <form class="mt-4">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="flex justify-center">
              <div class="w-[1130px] relative">
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
                  class="block w-[100%] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Search Items"
                  required
                />
              </div>
            </div>
          </form>
          <div class="flex justify-center">
            <div class="mt-8 grid grid-cols-4 gap-y-12 gap-x-12">
              <marketplacecard
                v-for="product in products"
                :name="product.name"
                :color="product.color"
                :imgSrc="product.imageSrc"
                :price="product.price"
                :location="product.location"
                :condition="product.condition"
                :details="product.details"
                :owner="product.owner"
              >
              </marketplacecard>
            </div>
          </div>
        </div>

        <div v-else>
          <form class="mt-4">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="flex justify-center">
              <div class="w-[300px] relative">
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
                  class="block w-[100%] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Search Items"
                  required
                />
              </div>
            </div>
          </form>
          <div
            class="mt-8 gap-y-12 sm:gap-x-6 xl:gap-x-8 flex flex-col items-center justify-center"
          >
            <marketplacecard
              v-for="product in products"
              :name="product.name"
              :color="product.color"
              :imgSrc="product.imageSrc"
              :price="product.price"
              :location="product.location"
              :condition="product.condition"
              :details="product.details"
              :owner="product.owner"
            >
            </marketplacecard>
          </div>
        </div>

        <!-- <div >
        <marketplacecard></marketplacecard>
      </div> -->
      </div>
      <div class="col-span-2 px-4"></div>
    </div>
  </div>
  <Foot />
</template>

<script>
import marketplacecard from "@/components/MarketPlaceCard.vue";

export default {
  name: "MarketPlace",
  components: { marketplacecard },
  data() {
    return {
      pageWidth: window.innerWidth,
      isModalVisible: false,
      products: [
        {
          id: 1,
          name: "Hammer and Spanner",
          condition: "Like new",
          location: "Chinatown",
          owner: "@batman6969",
          imageSrc: "/Marketplace/hammer.png",
          details: "Heavily used hammer. Selling because I have a new one.",
          price: "Free",
        },
        {
          id: 2,
          name: "Compost Bin",
          condition: "Heavily used",
          location: "Ang Mo Kio",
          owner: "@farmlandsmuth",
          imageSrc: "/Marketplace/compostbin.png",
          details: "Old compost bin.",
          price: "S$5",
        },
        {
          id: 3,
          name: "Pails",
          condition: "Used",
          location: "Pasir Ris",
          owner: "@seefarmer",
          imageSrc: "/Marketplace/pails.png",
          details: "Extra pails for sale",
          price: "S$5",
        },
        {
          id: 4,
          name: "Composted Chicken Manure",
          condition: "New",
          location: "Geylang",
          owner: "@chimpanzeecheep",
          imageSrc: "/Marketplace/compost.png",
          details: "Fresh homemade compost",
          price: "S$10",
        },
        {
          id: 5,
          name: "Composting Worms",
          condition: "New",
          location: "Changi",
          owner: "@windingchampion",
          imageSrc: "/Marketplace/compostingworms.png",
          details: "Lively warms. Best for composting",
          price: "S$12",
        },
        {
          id: 6,
          name: "Ikea Watering Can",
          condition: "New",
          location: "Jurong",
          owner: "@userphony",
          imageSrc: "/Marketplace/wateringcan.png",
          details: "Ikea Watering Can. Willing to Nego.",
          price: "S$6",
        },
        {
          id: 7,
          name: "12 Plant Pots",
          condition: "Lightly Used",
          location: "Yew Tee",
          owner: "@unrighteoussaddle",
          imageSrc: "/Marketplace/pots.png",
          details: "Contact me for bulk purchase.",
          price: "S$5",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.pageWidth = window.innerWidth;
    },
  },
};
</script>
