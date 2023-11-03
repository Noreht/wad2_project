<template>
  <div class="pb-10">
    <slot>
      <div v-if="isModalOpen" class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        ></div>
      </div>
    </slot>
    <h1
      class="drop-shadow-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl xl:text-8xl lg:min-w-[300px] max-h-[50px] min-h-[90px] typewriter mb-2"
    >
      <span
        v-for="(char, index) in typewriterText"
        :key="index"
        :class="{ 'text-amber-400': index >= typewriterText.length - 7 }"
        >{{ char }}</span
      >
    </h1>
    <div class="grid grid-cols-2 w-full gap-x-2">
      <div class="bg-gray-300 rounded-3xl px-2">
        <h1 class="text-2xl pl-2 pt-2 flex items-center font-bold">
          Community Events
          <div
            class="ml-2 w-5 h-5 text-lg bg-blue-500 rounded-full flex items-center justify-center text-white"
          >
            2
          </div>
          <div>
            <button
              type="button"
              @click="NewEvent"
              class="rounded-full p-1 bg-black text-white shadow-sm hover:bg-gray-200 place-self-end flex items-center justify-center"
            >
              <PlusIcon class="h-3 w-3" aria-hidden="true" />
            </button>
          </div>
        </h1>

        <hr class="border-2 border-black w-11/12 ml-2 rounded" />
        <div>
          <div class="rounded-xl h-[515px] overflow-y-scroll my-2">
            <suspense>
              <CommunityEventItem
                :name="'Regular Composting Session 5'"
                :eventDate="'21 Dec'"
                :eventDesc="'We will be activating our soil and adding new composts'"
                :eventSignups="'3'"
              />
            </suspense>
            <suspense>
              <CommunityEventItem
                :name="'Regular Composting Session 6'"
                :eventDate="'27 Dec'"
                :eventDesc="'We will be preparing for the new year by upgrading the farm!'"
                :eventSignups="'9'"
              />
            </suspense>
            <suspense>
              <CommunityEventItem
                :name="'Regular Composting Session 7'"
                :eventDate="'3 Jan'"
                :eventDesc="'Starting off the new year well by introducing new members!'"
                :eventSignups="'3'"
              />
            </suspense>
            <suspense>
              <CommunityEventItem
                :name="'Regular Composting Session 8'"
                :eventDate="'10 Jan'"
                :eventDesc="'Loving it! We will be activating our soil and adding new composts'"
                :eventSignups="'4'"
              />
            </suspense>
            <suspense>
              <CommunityEventItem
                :name="'Regular Composting Session 9'"
                :eventDate="'17 Jan'"
                :eventDesc="'Just a chill regular session :D'"
                :eventSignups="'5'"
              />
            </suspense>
          </div>
        </div>
      </div>

      <div class="bg-amber-300 rounded-3xl px-2">
        <h1 class="text-2xl pl-2 pt-2 flex items-center font-bold">
          BlackGold Public Events
          <div
            class="ml-2 w-5 h-5 text-lg bg-blue-500 rounded-full flex items-center justify-center text-white"
          >
            2
          </div>
        </h1>

        <hr class="border-2 border-green-800 w-11/12 ml-2 rounded" />

        <Suspense
          ><div class="rounded-xl h-[515px] overflow-y-scroll my-2">
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
          </div>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script>
import CommunityEventItem from "./CommunityEventItem.vue";
import { getAllEvents, getAllRegisteredEvents } from "@/utils/firebase";
import { PlusIcon } from "@heroicons/vue/20/solid";

const words = ["Discover Events:"];
const typeSpeed = 200; // Adjust the speed as needed (in milliseconds)

export default {
  components: {
    CommunityEventItem,
    PlusIcon,
  },

  async setup() {
    console.log("Setup Initiated for CommunityEvents");
    const eventList = await getAllEvents();
    const registeredList = await getAllRegisteredEvents();
    //console.log(eventList[0].EventType);

    return {
      eventList, registeredList
    };
  },

  data() {
    return {
      typewriterText: "",
      isGoldVisible: false,
      loopTyping: true,
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
    async type() {
      while (this.loopTyping) {
        for (const word of words) {
          let isDeleting = false;
          let j = 0;

          while (j >= 0 && j < word.length) {
            this.typewriterText = word.substring(0, j + 1);
            if (word[j] === "G") {
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
            if (word[j] === "G") {
              this.isGoldVisible = true;
            } else {
              this.isGoldVisible = false;
            }
            await this.delay(typeSpeed / 2);
            j--;
          }
        }
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
};
</script>
