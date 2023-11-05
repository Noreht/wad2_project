<template>
  <button
    @click="toggleModal"
    class="border-4 border-transparent min-w-[230px] max-w-[245px] place-self-center rounded-lg hover:-translate-y-1 hover:scale-[110%] text-left"
  >
    <div class="relative">
      <div class="relative h-full w-full overflow-hidden">
        <img
          :src="imgSrc"
          class="h-full w-full object-cover object-center rounded-lg"
        />
      </div>
      <div class="relative mt-2">
        <p class="relative text-xl font-bold text-black">{{ price }}</p>
        <h3 class="text-lg font-medium text-black">{{ name }}</h3>
        <p class="mt-1 text-sm text-gray-500">{{ location }}</p>
      </div>
    </div>
  </button>

  <MarketPlaceModal
    v-show="isModalVisible"
    @close="toggleModal"
    class="z-10"
    :imgSrc="imgSrc"
    :itemname="name"
    :itemprice="price"
    :itemlocation="location"
    :itemcondition="condition"
    :itemdetails="details"
    :itemowner="owner"
  ></MarketPlaceModal>
</template>

<script>
import MarketPlaceModal from "@/components/MarketPlaceModal.vue";

export default {
  components: {
    MarketPlaceModal,
  },
  props: {
    name: String,
    location: String,
    price: String,
    imgSrc: String,
    condition: String,
    details: String,
    owner: String,
  },
  data() {
    return { isModalVisible: false };
  },

  methods: {
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
      console.log("Function called");
      console.log(this.isModalVisible);
    },
  },
};
</script>
