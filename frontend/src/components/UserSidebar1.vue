<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-gray-50">
      <body class="h-full">
      ```
    -->
    <div>
      <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>
  
          <div class="fixed inset-0 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
              <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                      <span class="sr-only">Close sidebar</span>
                      <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                  <div class="flex h-16 shrink-0 items-center">
                    <img class="h-8 w-auto" src="@/public/BlackGoldIcon.svg" alt="Black Gold" />
                  </div>
                  <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" class="-mx-2 space-y-1">
                          <li v-for="item in navigation" :key="item.name">
                            <a :href="item.href" :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                              <component :is="item.icon" :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                              {{ item.name }}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                        <ul role="list" class="-mx-2 mt-2 space-y-1">
                          <li v-for="team in teams" :key="team.name">
                            <a :href="team.href" :class="[team.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                              <span :class="[team.current ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600', 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white']">{{ team.initial }}</span>
                              <span class="truncate">{{ team.name }}</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
  
      <!-- Static sidebar for desktop -->
      <div class="hidden lg:fixed lg:inset-y-0 lg:z-0 lg:flex ">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          <div class="flex h-16 shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li v-for="item in navigation" :key="item.name">
                    <a :href="item.href" :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                      <component :is="item.icon" :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="text-xs font-semibold leading-6 text-gray-400">Your Communities</div>
                <ul role="list" class="-mx-2 mt-2 space-y-1">
                  <li v-for="team in communities" :key="team.name">
                    <a :href="team.href" :class="[team.current ? 'bg-gray-50 text-black' : 'text-gray-400 hover:text-amber-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                      <span :class="[team.current ? 'text-black border-amber-600' : 'text-gray-400 border-gray-200 group-hover:border-amber-600 group-hover:text-black', 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white']">{{ team.initial }}</span>
                      <span class="truncate">{{ team.name }}</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="text-xs font-semibold leading-6 text-gray-400">Upcoming Events</div>
                <ul role="list" class="-mx-2 mt-2 space-y-1">
                  <li v-for="(event,index) in eventList" :key="event.name" >
                    <span :class="[event.current ? 'bg-gray-50 text-black' : 'text-gray-400 hover:text-amber-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']"  
                    @mouseover="showButton[index].button1 = true" @mouseleave="showButton[index].button1 = false"  >
                      <span :class="[event.current ? 'text-black border-amber-600' : 'text-gray-400 border-gray-200 group-hover:border-amber-600 group-hover:text-black', 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white']">{{ event.date.replace(" 2023", "") }}</span>
                      <span  class="truncate">{{ event.name }} </span>
                      <button v-if="showButton[index].button1" @click="confirm(index)" class="bg-red-600 text-white rounded-full p-1 text-sm leading-6 font-semibold">x</button>
                      <button v-if="this.wantsToQuit[index].w1" @click="leave(event.name, index)" class="bg-red-600 text-white rounded-sm p-1 text-sm leading-6 font-semibold">Cfm</button>
                  </span>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  
      <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
      </div>
  
      <main class="py-10 lg:pl-72">
        <div class="px-4 sm:px-6 lg:px-8">
          <!-- Your content -->
        </div>
      </main>
    </div>
  </template>
  
  <script >
  import { ref } from 'vue'
  import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
  import {
    Bars3Icon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'

  import { deletedoc, Query, Collection, Where, getdocs, document } from "@/utils/firebase/firebaseInit.js";
  import { db } from "@/utils/firebase/firebaseInit.js";

  import {getAllRegisteredEvents, getAllJoinedCommunities} from "@/utils/firebase";
  
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
  
  const sidebarOpen = ref(false)
  const hover = ref(false)

  export default {
    async setup() {
            // console.log("Setup Initiated")
            const events = await getAllRegisteredEvents();
            const communities = await getAllJoinedCommunities();
            //console.log(events[0])
            return {
                events, communities, 
            };
            
        },
    data() {
        return {
          showButton: [{button1: false}, {button1: false}, {button1: false}, 
          {button1: false},  {button1: false},  {button1: false},  {button1: false},  {button1: false}, {button1: false}, {button1: false}],

          wantsToQuit:[{w1:false}, {w1:false}, {w1:false}, 
          {w1:false},  {w1:false}, {w1:false}, {w1:false}, {w1:false}, {w1:false}, {w1:false} ],

          eventList: this.events,
    }},

    methods: {
      confirm(index) {
        console.log("index:", index)
        console.log(this.wantsToQuit[index])
        return this.wantsToQuit[index].w1 = true, showButton[index].button1=false;
    },

    async deleteThis(id, index) {
      console.log("Deleting event...")
      await deletedoc(document(db, "UserRegisteredEvents", id));
      this.eventList.splice(index, 1);
      console.log("Event deleted")
      
    },

    async leave(name,index) {
      console.log("Quitting Event")
      console.log(name)
      const q = Query(Collection(db, 'UserRegisteredEvents'), Where('name', '==', name))
      const querySnap = await getdocs(q);
      this.wantsToQuit[index].w1 = false;
      querySnap.forEach((doc) => {
        console.log(doc.id)
        this.deleteThis(doc.id, index)
    });
    }
  
  }
}
  

</script>