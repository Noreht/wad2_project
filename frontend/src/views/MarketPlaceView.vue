<template>
    <div class="grid grid-cols-12  min-w-[400px] h-screen">
        <div class="col-span-2 p-4"></div>
        <div class="h-screen bg-green-100 col-span-8 p-4 place-content-center"> <div>
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
            placeholder="Search Items"
            required
          />
        </div>
      </form>

      <div v-if="pageWidth >= 904 && pageWidth <=1359">
          <div class="mt-8 grid grid-cols-2 gap-y-12 sm:gap-x-6 xl:gap-x-8">
            <marketplacecard v-for="product in products"
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

        <div v-else-if="pageWidth >= 1360 && pageWidth <= 1779">
          <div class="mt-8 grid grid-cols-3 gap-y-12 sm:gap-x-6 xl:gap-x-8">
            <marketplacecard v-for="product in products"
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

        <div v-else-if="pageWidth >= 1780">
          <div class="mt-8 grid grid-cols-4 gap-y-12 sm:gap-x-6 xl:gap-x-8">
            <marketplacecard v-for="product in products"
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

        <div v-else>
          <div class="mt-8 grid grid-cols-1 gap-y-12 sm:gap-x-6 xl:gap-x-8">
            <marketplacecard v-for="product in products"
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
    components:{marketplacecard},
    data(){
      return{
        pageWidth: window.innerWidth,
        isModalVisible: false,
        products:[
            {
              id: 1,
              name: 'Hammer and Spanner',
              condition: 'Like new',
              location: 'Chinatown',
              owner:'@batman6969',
              href: '#',
              imageSrc: '/Marketplace/hammer.png',
              details: 'Heavily used hammer. Selling because I have a new one.',
              price: 'Free',
            },
            {
              id: 2,
              name: 'Compost Bin',
              condition: 'Like new',
              location: 'Ang Mo Kio',
              owner:'@batman6969',
              href: '#',
              imageSrc: '/Marketplace/compostbin.png',
              imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
              price: 'S$5',
            },
            {
              id: 3,
              name: 'Pails',
              condition: 'Like new',
              location: 'Pasir Ris',
              owner:'@batman6969',
              href: '#',
              imageSrc: '/Marketplace/pails.png',
              imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
              price: 'S$10',
            },
            {
              id: 4,
              name: 'Composted Chicken Manure',
              condition: 'Like new',
              location: 'Geylang',
              owner:'@batman6969',
              href: '#',
              imageSrc: '/Marketplace/compost.png',
              imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
              price: 'S$10',
            },
          ]}
    },
    mounted() {
            window.addEventListener('resize', this.handleResize);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            handleResize() {
                this.pageWidth = window.innerWidth;
            },
    
  }
  }


</script>