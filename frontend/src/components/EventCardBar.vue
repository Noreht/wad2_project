<template>
  <TabGroup>
    <TabList>
      <div class="justify-center gap-2 flex items-stretch space-between">
        <Tab
          :class="{
            'bg-yellow-300': selectedTab === 1,
            'bg-yellow-100': selectedTab !== 1,
          }"
          @click="selectedTab = 1"
          class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-1.5 text-md font-bold text-black shadow-sm hover:underline"
        >
          <!-- <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" /> -->
          Ad-hoc Volunteering
        </Tab>

        <tab
          :class="{
            'bg-yellow-300': selectedTab === 2,
            'bg-yellow-100': selectedTab !== 2,
          }"
          @click="selectedTab = 2"
          class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-1.5 text-md font-bold text-black shadow-sm hover:underline"
        >
          <!-- <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" /> -->
          Workshops
        </tab>

        <Tab
          :class="{
            'bg-yellow-300': selectedTab === 3,
            'bg-yellow-100': selectedTab !== 3,
          }"
          @click="selectedTab = 3"
          class="inline-flex items-center gap-x-1.5 rounded-md py-1.5 text-md font-bold text-black hover:underline"
        >
          <!-- <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" /> -->
          Community Events
        </Tab>
      </div>
    </TabList>
    <TabPanels class="w-[100%] border-yellow-900 border-4 rounded-xl my-[10px] p-[15px]">
      <TabPanel>
        <div
          class="overflow-x-scroll overflow-hidden flex flex-row flex-shrink-0 gap-2 first:pl-3 last:pr-3 content-stretch"
          v-if="pageWidth >= 768"
        >
          <template v-for="(event, index) in eventList" class="content-stretch">
              <ImpactCard
              class=" w-4/6 min-w-[350px] max-w-[400px] content-stretch"
              v-if="event.EventType == 'Ad-hoc Volunteering'"
                :feature="event.EventName"
                :content="event.EventDescription"
                :date="event.EventOrganiser + ', ' + event.EventDate"
                :image="this.images[index]"
                :hoverImage="this.images[index]"
              />
          </template>
        </div>
        <div
          id="listings"
          class="listings pb-4 flex-1 flex-col overflow-y-auto overflow-hidden overscroll-none w-full h-full"
          v-if="pageWidth <= 768"
        >
          <ul class="last:pb-50">
            <template v-for="(event, index) in eventList">
              <li
                v-if="event.EventType == 'Ad-hoc Volunteering'"
                :key="index"
                class="overflow-auto bg-amber-200 px-2 py-2 shadow sm:rounded-md sm:px-6 my-2"
              >
                <h1 class="font-bold">
                  {{ event.EventName }}, {{ event.EventDate }}
                </h1>
                <p class="italic text-sm">
                  Organiser: {{ event.EventOrganiser }}
                </p>
                <button z-20 class="bg-black text-white rounded-lg p-1 disabled:bg-gray-400" :disabled = "this.joinedEvent.includes(event.EventName)" v-if="userAuthentication" @click="Signup(event.EventName,event.EventDate)"> {{this.joinedEvent.includes(event.EventName) ? "Registered" : "Sign Up" }} </button>
              </li>
            </template>
          </ul>
        </div>
      </TabPanel>
      <TabPanel>
        <div
          class="overflow-x-scroll overflow-hidden flex flex-row flex-shrink-0 gap-2 first:pl-3 last:pr-3 content-stretch"
          v-if="pageWidth >= 768"
        >
        <template v-for="(event, index) in eventList" class="content-stretch">
              <ImpactCard
              class=" w-3/4 content-stretch min-w-[350px] max-w-[400px]"
              v-if="event.EventType == 'Workshops'"
                :feature="event.EventName"
                :content="event.EventDescription"
                :date="event.EventOrganiser + ', ' + event.EventDate"
                :image="this.images[index]"
                :hoverImage="this.images[index]"
              />
          </template>
        </div>

        <div
          id="listings"
          class="listings pb-4 flex-1 flex-col overflow-y-auto overflow-hidden overscroll-none w-full h-full"
          v-if="pageWidth <= 768"
        >
            <template v-for="(event, index) in eventList">
              <li
                v-if="event.EventType == 'Workshops'"
                :key="index"
                class="overflow-auto bg-amber-200 px-2 py-2 shadow sm:rounded-md sm:px-6 my-2"
              >
                <h1 class="font-bold">
                  {{ event.EventName }}, {{ event.EventDate }}
                </h1>
                <p class="italic text-sm">
                  Organiser: {{ event.EventOrganiser }}
                </p>
                <button z-20 class="bg-black text-white rounded-lg p-1 disabled:bg-gray-400" :disabled = "this.joinedEvent.includes(event.EventName)" v-if="userAuthentication" @click="Signup(event.EventName,event.EventDate)"> {{this.joinedEvent.includes(event.EventName) ? "Registered" : "Sign Up" }} </button>
              </li>
            </template>

        </div>
      </TabPanel>
      <TabPanel>
        <div
          class="overflow-x-scroll overflow-hidden flex flex-row flex-shrink-0 gap-2 first:pl-3 last:pr-3"
          v-if="pageWidth >= 768"
        >
          <template v-for="(event, index) in eventList">
            <div
              class="w-4/6 items-stretch min-w-[350px] max-w-[400px]"
              v-if="event.EventType == 'Community Events'"
            >
              <ImpactCard
                :feature="event.EventName"
                :content="event.EventDescription"
                :date="event.EventOrganiser + ', ' + event.EventDate"
                :image="this.images[index]"
                :hoverImage="this.images[index]"
              />
            </div>
          </template>
        </div>

        <div
          id="listings"
          class="listings pb-4 flex-1 flex-col overflow-y-auto overflow-hidden overscroll-none w-full h-full"
          v-if="pageWidth <= 768"
        >
          <ul class="last:pb-50">
            <template v-for="(event, index) in eventList">
              <li
                v-if="event.EventType == 'Community Events'"
                :key="index"
                class="overflow-auto bg-amber-200 px-2 py-2 shadow sm:rounded-md sm:px-6 my-2"
              >
                <h1 class="font-bold">
                  {{ event.EventName }}, {{ event.EventDate }}
                </h1>
                <p class="italic text-sm">
                  Organiser: {{ event.EventOrganiser }}
                </p>
                <button z-20 class="bg-black text-white rounded-lg p-1 disabled:bg-gray-400" :disabled = "this.joinedEvent.includes(event.EventName)" v-if="userAuthentication" @click="Signup(event.EventName,event.EventDate)"> {{this.joinedEvent.includes(event.EventName) ? "Registered" : "Sign Up" }} </button>
              </li>
            </template>
          </ul>
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { CheckCircleIcon } from "@heroicons/vue/20/solid";
import ImpactCard from "@/components/ImpactCard.vue";
// import { eventCard } from '@/components/EventCard.vue'
import { getAllEvents, isLoggedIn, getAllRegisteredEvents } from "@/utils/firebase";
import { document, updatedoc, setdoc, Query, Where, Collection, getdocs, db} from "@/utils/firebase/firebaseInit.js";
import { ref, onMounted } from "vue";

const checkPageLoggedIn = ref(null);

    onMounted(async () => {
        const loggedIn = await isLoggedIn();
        checkPageLoggedIn.value = loggedIn;
    });

export default {
  data() {
    return {
      selectedTab: 1,
      pageWidth: window.innerWidth,
      images: ["https://as2.ftcdn.net/v2/jpg/04/16/88/91/1000_F_416889138_FGxmM0mXGlcdw12N2mKeKmiK70NyM6rS.jpg", "https://as1.ftcdn.net/v2/jpg/03/71/76/22/1000_F_371762244_Yw95Ozaiy5Bn4gDklWspAt4RzRHdhQr5.jpg", "https://t3.ftcdn.net/jpg/02/01/20/46/240_F_201204650_4XuG7U4GulgYMB5jEEH18DLaBmoTlFzf.jpg", "https://t3.ftcdn.net/jpg/02/82/11/12/240_F_282111267_0dl5FSUofp0tslSgZdVwF9ldiBfBFJl6.jpg", "https://t3.ftcdn.net/jpg/05/77/80/74/240_F_577807499_ifzuGHCTGspZWVq7jp4Dj1y4wMWalJKY.jpg", "https://t4.ftcdn.net/jpg/06/00/67/75/240_F_600677520_N4fpaLL43yr2LSjvztcW5CFXV9hOLPeb.jpg", "https://t4.ftcdn.net/jpg/05/69/34/09/240_F_569340944_6rb7vtDV65TvWiMcRYcOleqNrIbQbchC.jpg", "https://t4.ftcdn.net/jpg/02/45/24/59/240_F_245245911_kAXFCW93xISiKU42JmxWx41sRTb6tauT.jpg"],
      joinedEvent: []
    };
  },

  async setup() {
      //console.log("Setup Initiated for Event Map")
      const eventList = await getAllEvents();
      //console.log(eventList[0].EventType)
      const loggedIn = await isLoggedIn();
      checkPageLoggedIn.value = loggedIn;
      var userAuthentication = false;
      const registeredEvents = await getAllRegisteredEvents();
      if (checkPageLoggedIn.value) {
          userAuthentication = true;
      } 

      return {
          eventList, userAuthentication, registeredEvents
      };
      
  },
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    CheckCircleIcon,
    // eventCard,
    ImpactCard,
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
    for (let i = 0; i < this.registeredEvents.length; i++) {
          this.joinedEvent.push(this.registeredEvents[i].name)
          //console.log(this.joinedEvent)
      };
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.pageWidth = window.innerWidth;
      for (let i = 0; i < this.registeredEvents.length; i++) {
          this.joinedEvent.push(this.registeredEvents[i].name)
          //console.log(this.joinedEvent)
      };
    },
    async Signup(list1,list3) {
        console.log("event registration started")
        let eventName = list1
        // let eventOrganiser = list2
        let eventDate = list3
        let id = Math.random() * 10
        //console.log("List: ", list1)
        
        await setdoc(document(db, "UserRegisteredEvents", id.toString()), {name: eventName, date: eventDate } )
        this.joinedEvent.push(eventName)
        //console.log("Event registration successful")
    },
  },
};
</script>
