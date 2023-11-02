<template>
  <div class=" lg:space-x-4 h-full pt-6 px-5 bg-slate-200">
    <!-- Static sidebar for desktop -->
    <div class="hidden lg:contents">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div>
        <nav class="flex flex-1 flex-col">

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
                        : 'text-black hover:text-amber-600 hover:bg-gray-50',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                    ]"
                  >
                    <span
                      :class="[
                        team.current
                          ? 'text-black border-amber-600'
                          : 'text-gray-400 border-gray-200 group-hover:border-amber-600 group-hover:text-black',
                        ' h-6 w-6 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white',
                      ]"
                      >{{ team.initial }}</span
                    >
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>

              <div class="text-base leading-6 font-bold mt-8">
                Your Events
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="event in events" :key="event.name">
                  <a
                    :class="[
                      event.current
                        ? 'bg-gray-50 text-black'
                        : 'text-gray-400 hover:text-amber-600 hover:bg-gray-50',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                    ]"
                  >
                    <span
                      :class="[
                        event.current
                          ? 'text-black border-amber-600'
                          : 'text-gray-400 border-gray-200 group-hover:border-amber-600 group-hover:text-black',
                        'flex h-6 w-12 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white',
                      ]"
                      >{{ event.date.replace(" 2023", "") }}</span
                    >
                    <span class="truncate text-black">{{ event.name }}</span>
                  </a>
                </li>
              </ul>
        </nav>
      </div>
    </div>

    <div
    >
      <button
        type="button"
        class=" text-gray-700 lg:hidden sticky top-0 bg-green-100 py-4 shadow-sm sm:px-6"
        @click="sidebarOpen = true"
      >
        Dashboard
      
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      
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
import {
  Bars3Icon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

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

const sidebarOpen = ref(false);

export default {
  async setup() {
    // console.log("Setup Initiated")
    const events = await getAllRegisteredEvents();
    const communities = await getAllJoinedCommunities();
    console.log(events[0]);

    return {
      events,
      communities,
    };
  },
};
</script>
