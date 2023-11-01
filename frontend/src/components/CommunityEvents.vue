<template>
  <div class="rounded-b-3xl border-4 border-green-800 h-[630px] overflow-y-scroll">
    <slot>
      <div v-if="isModalOpen" class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        ></div>
      </div>
    </slot>
    <div class="grid grid-cols-2 w-full gap-x-2">
      <div class="bg-amber-300 rounded-3xl px-2">
        <h1 class="text-sm pl-2 pt-2 flex items-center">
          Members Only

          <div
            class="ml-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white"
          >
            2
          </div>
          <div>
            <button
              type="button"
              @click="NewEvent"
              class="rounded-full bg-black p-1 text-white shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 place-self-end"
            >
              <PlusIcon class="h-3 w-3" aria-hidden="true" />
            </button>
          </div>
        </h1>

        <hr class="border-5 border-black w-5/6 ml-2 rounded" />

        <CommunityEventItem
          :name="'Regular Composting Session'"
          :eventDate="'21 Dec'"
          :eventDesc="'We will be activating our soil and adding new composts'"
          :eventSignups="'3'"
        />
        <CommunityEventItem
          :name="'Regular Composting Session'"
          :eventDate="'27 Dec'"
          :eventDesc="'We will be preparing for the new year by upgrading the farm!'"
          :eventSignups="'8'"
        />
      </div>

      <div class="bg-gray-300 rounded-3xl px-2">
        <h1 class="text-sm pl-2 pt-2 flex items-center">
          Public Events
          <div
            class="ml-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white"
          >
            2
          </div>
        </h1>

        <hr class="border-5 border-black w-5/6 ml-2 rounded" />
        <Suspense>
          <ul>
            <template v-for="event in eventList">
              <li v-if="event.EventOrganiser == 'Punggol CC'">
                <CommunityEventItem
                  :name="event.EventName"
                  :eventDate="event.EventDate"
                  :eventDesc="event.EventDescription"
                  :eventSignups="event.signups"
                />
              </li>
            </template>
          </ul>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script>
import CommunityEventItem from "./CommunityEventItem.vue";
import { getAllEvents } from "@/utils/firebase";
import { PlusIcon } from "@heroicons/vue/20/solid";

export default {
  components: {
    CommunityEventItem,
    PlusIcon,
  },

  async setup() {
    console.log("Setup Initiated for CommunityEvents");
    const eventList = await getAllEvents();
    console.log(eventList[0].EventType);

    return {
      eventList,
    };
  },

  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    NewEvent() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>
