<template>
  <div class="modal-backdrop">
    <div class=" rounded-xl modal h-auto w-[350px]" v-if="pageWidth < 904">
      <div class="grid grid-cols-1 py-10 px-10">
        <img :src="imgSrc" class="rounded-xl w-[270px] h-auto">
        <div class="w-[270px] h-auto pt-4">
          <p class="relative text-xl font-bold text-black">{{ itemprice }}</p>
          <h3 class="text-lg font-semi-bold text-black">{{ itemname }}</h3>
          <p class="pb-2 mt-1 text-sm text-gray-500">{{ itemlocation }}</p>
          
          <hr>
          <p class="mt-2 text-lg font-bold">Condition</p>
          <p>{{ itemcondition }}</p>
          <p class="mt-2 text-lg font-bold">Details</p>
          <p class="text-md text-gray-500">Listed by</p>
          <p class="pb-2 text-sm text-blue-700">{{ itemowner }}</p>
          <p class="text-md text-gray-500">Description</p>
          <p class="pb-2">{{ itemdetails }}</p>
          
          <hr>
          <div class="pt-4">
            <textarea cols='28'  class="mb-4" :placeholder='"Send a message to " + itemowner' v-model="newMessage" ></textarea>
            <button type="button" class="bg-green-400 px-4 py-2 rounded-lg mr-4"  @click="onSubmit">
              Send Message
            </button>
            <button
              type="button"
              class="bg-amber-600 px-4 py-2 rounded-lg"
              @click="closeModal111"
            >
              Close
            </button>
          </div>
          
        </div>
      </div>
    </div>

    <div class="modal rounded-lg h-[300px] w-[1000px]" v-if="pageWidth >= 904 && pageWidth<=1359">
      <div class="grid grid-cols-4 grid-rows-4 h-[100%] w-[100%] py-10 px-10 place-content-center">
        <img :src="imgSrc" class="row-span-4 rounded-xl w-[400px] h-auto">
        <p class="px-4 col-span-3 w-[100%] relative text-2xl font-bold text-black">{{ itemname }}</p>
        <div class="w-[100%] pl-4 row-span-2 col-span-2">
          <p class=" text-xl font-bold -mt-[15px]">Details</p>
          <p class="text-lg text-gray-500">Listed by<span class="pb-2 text-md text-blue-700">{{ itemowner }}</span>
</p>
          <p class="text-lg text-gray-500">Description</p>
          <p class="text-md">{{ itemdetails }}</p>
        </div>
        <div class=" row-span-1 col-span-1 w-[100%] h-auto relative">
          <h3 class="text-xl font-bold text-black -mt-[15px]">{{ itemprice }}</h3>
          <p class="pb-2 mt-1 text-md text-gray-500 ">{{ itemlocation }}</p>
          
        </div>
        <div class="row-span-1 col-span-1 -mt-[15px]">
          <p class="mt-2 text-xl font-bold">Condition</p>
          <p class="text-md">{{ itemcondition }}</p>
        </div>
        <div class="row-span-1 col-span-2 -mt-[15px]">
        <textarea v-model="newMessage" cols='45' rows='2' class="mt-2 ml-4 mb-2" :placeholder="'Send a message to ' + itemowner"> {{ errorText }}</textarea>
          
        </div>
        <div class="col-span-1 flex">
            <button type="button" class="bg-green-400 px-4 py-2 rounded-lg mr-4" @click="onSubmit">
              Send Message
            </button>
            <button
              type="button"
              class="bg-amber-600 px-4 py-2 rounded-lg"
              @click="closeModal111"
            >
              Close
            </button>
          </div>
      </div>
    </div>

    <div class=" rounded-xl modal h-[450px] w-[1200px]" v-if="pageWidth >= 1360 && pageWidth <= 1779">
      <div class="grid grid-cols-3 grid-rows-6 h-[100%] w-[100%] py-10 px-10 place-content-center">
        <img :src="imgSrc" class="row-span-6 rounded-xl w-[400px] h-auto">
        <p class="px-6 col-span-2 w-[100%] relative text-3xl font-bold text-black">{{ itemname }}</p>
        <div class=" row-span-3 w-[100%] h-auto px-6 relative">
          <h3 class="text-2xl font-bold text-black">{{ itemprice }}</h3>
          <p class="pb-2 mt-1 text-lg text-gray-500">{{ itemlocation }}</p>
          <p class="mt-2 text-2xl font-bold">Condition</p>
          <p class="text-lg">{{ itemcondition }}</p>
        </div>

        <div class="w-[100%] pl-6 row-span-2">
          <p class=" text-2xl font-bold">Details</p>
          <p class="text-xl text-gray-500">Listed by</p>
          <p class="pb-2 text-lg text-blue-700">{{ itemowner }}</p>
          <p class="text-xl text-gray-500">Description</p>
          <p class="text-lg">{{ itemdetails }}</p>
        </div>

        <div class=" px-2 row-span-2 col-span-2">
        <textarea cols='80' rows='2' class="mt-2 ml-4 mb-2" :placeholder='"Send a message to " + itemowner' v-model="newMessage" ></textarea>
          <div class="ml-4">
            <button type="button" class="bg-green-400 px-4 py-2 rounded-lg mr-4" @click="onSubmit">
              Send Message
            </button>
            <button
              type="button"
              class="bg-amber-600 px-4 py-2 rounded-lg"
              @click="closeModal111"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class=" rounded-xl modal h-[450px] w-[1200px]" v-if="pageWidth >= 1780">
      <div class="grid grid-cols-3 grid-rows-6 h-[100%] w-[100%] py-10 px-10 place-content-center">
        <img :src="imgSrc" class="row-span-6 rounded-xl w-[400px] h-auto">
        <p class="px-6 col-span-2 w-[100%] relative text-3xl font-bold text-black">{{ itemname }}</p>
        <div class=" row-span-3 w-[100%] h-auto px-6 relative">
          <h3 class="text-2xl font-bold text-black">{{ itemprice }}</h3>
          <p class="pb-2 mt-1 text-lg text-gray-500">{{ itemlocation }}</p>
          <p class="mt-2 text-2xl font-bold">Condition</p>
          <p class="text-lg">{{ itemcondition }}</p>
        </div>

        <div class="w-[100%] pl-6 row-span-2">
          <p class=" text-2xl font-bold">Details</p>
          <p class="text-xl text-gray-500">Listed by</p>
          <p class="pb-2 text-lg text-blue-700">{{ itemowner }}</p>
          <p class="text-xl text-gray-500">Description</p>
          <p class="text-lg">{{ itemdetails }}</p>
        </div>

        <div class="px-2 row-span-2 col-span-2">
        <textarea cols='80' rows='2' class="mt-2 ml-4 mb-2" :placeholder='"Send a message to " + itemowner' v-model="newMessage"></textarea>
          <div class="ml-4">
            <button type="button" class="bg-green-400 px-4 py-2 rounded-lg mr-4" @click="onSubmit">
              Send Message
            </button>
            <button
              type="button"
              class="bg-amber-600 px-4 py-2 rounded-lg"
              @click="closeModal111"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import { db,updatedoc, document, setdoc } from "@/utils/firebase/firebaseInit.js";

export default {
  props:{
    imgSrc:String,
    itemname: String,
    itemprice: String,
    itemlocation: String,
    itemcondition: String,
    itemdetails: String,
    itemowner: String

  },
  data(){
    return{
      pageWidth: window.innerWidth, newMessage:""
      
    }
  },

  methods: {
    async onSubmit() {
      let id = Math.random()
      const currentMessages = document(db, `MarketplaceMessages`, id.toString());
      console.log(this.newMessage)
                  
      if (this.newMessage != "") {
        console.log("Adding to doc")
        await setdoc(currentMessages, {
          text: this.newMessage,
          author: "Bryan",
        }

        )
        console.log("success!")
      }
      
      else {
        this.newMessage = null;
        this.errorText = null;
        console.log("MessageNotFound")
        this.errorText = "A message must be entered first!";
        }
      },

    
    handleResize() {
        this.pageWidth = window.innerWidth;
    },
    closeModal111() {
      console.log('booya');
      this.$emit('close');
    },
    },
  mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    // methods: {
    //     handleResize() {
    //         this.pageWidth = window.innerWidth;
    //     },
    //     closeModal111() {
    //       console.log('booya');
    //       this.$emit('close');
    //     },
        
  // }
}
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>