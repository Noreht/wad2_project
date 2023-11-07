<template>
  
  <ul
    role="list"
    class="bg-amber-400/80 rounded-2xl border-yellow-700 border-4 mb-[20px] px-[25px] py-[10px] overflow-y-scroll"
  >

  <div>
    <CommunityPictures/>
  </div>
    <li v-for="community in communityList" class="my-2">
      <button
        @click="
          $emit('toggleModal', {
            Title: community.name,
            Description: community.desc,
          })
        "
        class="hover:underline w-[100%] rounded-xl bg-[rgb(255,255,255,0.8)] flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap hover:-translate-y-1 hover:scale-[103%]"
      >
        <div class=" text-left ">
          <p class="pl-5 text-xl font-semibold leading-6 text-gray-900 ">
            {{ community.name }}
          </p>
          <div
            class="pl-5 mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 "
          >
            <p>
              <a class="hover:underline text-base">{{ community.cc }}</a>
            </p>
            <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <p>
              <time :datetime="community.dateTime" class="text-base">
                Active since {{ community.age }}</time
              >
            </p>
          </div>
        </div>
        <dl
          class="flex w-full flex-none justify-between gap-x-8 sm:w-auto pr-3"
        >
          <div class="flex -space-x-0.5 pl-[20px]">
            <dt class="sr-only">Commenters</dt>
            <dd v-for="volunteer in community.volunteerPreview">
              <img
                class="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                :src="volunteer.imageUrl"
                :alt="volunteer.name"
              />
            </dd>
          </div>
          <!-- <div class="flex w-16 gap-x-2.5">
          <dt>
            <span class="sr-only">Total volunteers</span>
          </dt>
          <dd class="text-sm leading-6 text-gray-900">
            {{ community.totalVolunteers }}
          </dd>
        </div> -->
        </dl>
      </button>
    </li>
  </ul>
</template>

<script>
import { ChatBubbleLeftIcon, CheckCircleIcon } from "@heroicons/vue/24/outline";
import { ref, onMounted } from "vue";
import { getAllCommunities } from "@/utils/firebase";
import CommunityPictures from "./CommunityPictures.vue";

export default {
  async setup() {
    //console.log("Community Setup Initiated")
    const communityList = await getAllCommunities();
    //console.log(communityList[0])

    return {
      communityList, 
    };
  },
  components: {CommunityPictures}
};

function toggleModal() {
  console.log("open modal child initiated");
  emit("openModal", true);
}


</script>
