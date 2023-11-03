<template>
  <div class="h-full bg-gray-300 z-50">
    <!-- Static sidebar for desktop -->
    <div
      class="top-0 z-40 flex px-2.5 lg:z-0 bg-gray-300 w-[100%] py-4 shadow-sm"
    >
      <button
        type="button"
        class="p-3 text-gray-700 bg-amber-500 rounded-full text-base font-bold w-[100%]"
        v-on:click="sidebarops()"
      >
        Dashboard
      </button>
    </div>
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="h-full">
      <nav
        class="flex flex-1 flex-col bg-gray-300 h-full px-2.5 pt-05"
        v-if="sidebarOpen"
      >
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <div class="text-base font-bold leading-6 text-black">
              Your Communities
            </div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li v-for="team in communities" :key="team.name">
                <a
                  :href="team.href"
                  :class="[
                    team.current
                      ? 'bg-gray-50 text-black'
                      : 'text-gray-400 hover:text-amber-600 hover:bg-gray-50',
                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                  ]"
                >
                  <span
                    :class="[
                      team.current
                        ? 'text-black border-amber-600'
                        : 'text-gray-400 border-gray-200 group-hover:border-amber-600 group-hover:text-black',
                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white',
                    ]"
                    >{{ team.initial }}</span
                  >
                  <span class="truncate text-black">{{ team.name }}</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="max-w-[100%]">
            <div class="text-base font-bold leading-6 text-black">
              Upcoming Events
            </div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li v-for="(event, index) in eventList" :key="event.name">
                <span
                  :class="[
                    event.current
                      ? 'bg-gray-50 text-black'
                      : 'text-gray-400 hover:text-amber-600 hover:bg-gray-50',
                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                  ]"
                  @mouseover="wantsToQuit[index].w1 ? showButton[index].button1 = false : showButton[index].button1 = true "
                  @mouseleave="showButton[index].button1 = false"
                >
                  <span
                    :class="[
                      event.current
                        ? 'text-black border-amber-600'
                        : 'text-gray-600 border-gray-200 group-hover:border-amber-600 group-hover:text-black',
                      'flex h-6 w-12 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-bold bg-white',
                    ]"
                    >{{ event.date.replace(" 2023", "") }}</span
                  >
                  <span class="truncate text-black"
                    >{{ event.name }}
                    <span class="flex">
                      <button
                        v-if="showButton[index].button1"
                        @click="showButton[index].button1 = true, confirm(index)"
                        class="  bg-red-600 text-white rounded-full px-1 -py-0.5 text-sm font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        v-if="this.wantsToQuit[index].w1"
                        @click="leave(event.name, index)"
                        class=" bg-red-600 text-white rounded-full px-1 text-sm leading-6 font-semibold"
                      >
                        Confirm cancel
                      </button>
                      <button
                        v-if="this.wantsToQuit[index].w1"
                        @click="this.wantsToQuit[index].w1=false"
                        class="ml-1 bg-green-600 text-white rounded-full px-1 text-sm leading-6 font-semibold"
                      >
                        Don't Cancel
                      </button>
                    </span>
                    </span>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

import {
  deletedoc,
  Query,
  Collection,
  Where,
  getdocs,
  document,
} from "@/utils/firebase/firebaseInit.js";
import { db } from "@/utils/firebase/firebaseInit.js";

import {
  getAllRegisteredEvents,
  getAllJoinedCommunities,
} from "@/utils/firebase";

// const navigation = [
//   { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
//   { name: 'Friends', href: '#', icon: UsersIcon, current: false },
// ]
//const teams = [
//   { id: 1, name: 'Punggol CC', href: '#', initial: 'PC', current: false },
//   { id: 2, name: 'Pasir Ris CC', href: '#', initial: 'PRC', current: false },
// ]

// const events = [
//   { id: 1, name: 'Composting Session', href: '#', date: '27/10', current: false },
//   { id: 2, name: 'Roof Repair', href: '#', date: '23/12', current: false },
// ]

const hover = ref(false);

export default {
  async setup() {
    // console.log("Setup Initiated")
    const events = await getAllRegisteredEvents();
    const communities = await getAllJoinedCommunities();
    //console.log(events[0])
    return {
      events,
      communities,
    };
  },
  data() {
    return {
      sidebarOpen: false,
      pageWidth: window.innerWidth,
      showButton: [
        { button1: false },
        { button1: false },
        { button1: false },
        { button1: false },
        { button1: false },
        { button1: false },
        { button1: false },
        { button1: false },
        { button1: false },
        { button1: false },
      ],

      wantsToQuit: [
        { w1: false },
        { w1: false },
        { w1: false },
        { w1: false },
        { w1: false },
        { w1: false },
        { w1: false },
        { w1: false },
        { w1: false },
        { w1: false },
      ],

      eventList: this.events,
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
      if (this.pageWidth >= 1440) {
        this.sidebarOpen = true;
        console.log("booyah12345");
      } else if (this.pageWidth < 1440) {
        this.sidebarOpen = false;
      }
    },
    sidebarops() {
      console.log(this.sidebarOpen);
      this.sidebarOpen = !this.sidebarOpen;
    },

    confirm(index) {
      console.log("index:", index);
      console.log(this.wantsToQuit[index]);
      return (
        (this.wantsToQuit[index].w1 = true), (this.showButton[index].button1 = false)
      );
    },

    async deleteThis(id, index) {
      console.log("Deleting event...");
      await deletedoc(document(db, "UserRegisteredEvents", id));
      this.eventList.splice(index, 1);
      console.log("Event deleted");
    },

    async leave(name, index) {
      console.log("Quitting Event");
      console.log(name);
      const q = Query(
        Collection(db, "UserRegisteredEvents"),
        Where("name", "==", name)
      );
      const querySnap = await getdocs(q);
      this.wantsToQuit[index].w1 = false;
      querySnap.forEach((doc) => {
        console.log(doc.id);
        this.deleteThis(doc.id, index);
      });
    },
  },
};
</script>
