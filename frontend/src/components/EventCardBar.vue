<template>
   
    <TabGroup>
      <TabList>
        <div class="flex justify-center space-x-5 flex-col sm:flex-row "> 
        <Tab>
            <button type="button" 
            :class="{'bg-yellow-300': selectedTab === 1, 'bg-yellow-100': selectedTab !== 1}"
            @click="selectedTab = 1"
            class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-1.5 text-md font-bold text-black shadow-sm hover:underline ">
                <!-- <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" /> -->
                Ad-hoc Volunteering
            </button>
        </Tab>
        <Tab>
            <button type="button" 
            :class="{'bg-yellow-300': selectedTab === 2, 'bg-yellow-100': selectedTab !== 2}"
            @click="selectedTab = 2"
            class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-1.5 text-md font-bold text-black shadow-sm hover:underline  ">
                <!-- <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" /> -->
                Workshops
            </button>
        </Tab>
        <Tab>
            <button type="button" 
            :class="{'bg-yellow-300': selectedTab === 3, 'bg-yellow-100': selectedTab !== 3}"
            @click="selectedTab = 3"
            class="inline-flex items-center gap-x-1.5 rounded-md py-1.5 text-md font-bold text-black hover:underline ">
                <!-- <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" /> -->
                Community Events
            </button>
        </Tab>
        </div>
      </TabList>
      <TabPanels class="border-yellow-900 border-4 rounded-xl my-[10px] p-[15px]">
            <TabPanel> 
                <div class="overflow-x-scroll overflow-hidden flex flex-row flex-shrink-0 gap-2 pt-5 first:pl-3 last:pr-6 " v-if="pageWidth >= 768" >
                    <template v-for="(event,index) in eventList">
                        <ImpactCard class="md: w-1/2 "
                        v-if="event.EventType == 'Ad-hoc Volunteering'"
                        :feature="event.EventName"
                        :content="event.EventDescription"
                        :date ="event.EventDate"
                        :image="'ImpactCards/Contributor.jpg'"
                        :hoverImage="'ImpactCards/Contributor.jpg'"
                        />
                    </template>
                    
                </div>

                <div id='listings' class='listings pb-4 flex-1 flex-col overflow-y-auto overflow-hidden overscroll-none  w-full h-full' v-if="pageWidth <= 768" >
                    <ul class="last:pb-50">
                        <template v-for="(event, index) in eventList">
                        <li v-if="event.EventType== 'Ad-hoc Volunteering'" :key="index" @click="centerMap(event)" class="overflow-auto  bg-amber-200 px-2 py-2 shadow sm:rounded-md sm:px-6 my-2" >
                           
                            <h1 class="font-bold">{{ event.EventName }}, {{ event.EventDate }} </h1>
                            <p class="italic text-sm"> Organiser: {{ event.EventOrganiser }} </p>

                        </li>
                        
                        </template>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel>
                <div class="overflow-x-scroll overflow-hidden flex flex-row flex-shrink-0 gap-2 first:pl-3 last:pr-6 " v-if="pageWidth >= 768">
                    <template v-for="(event,index) in eventList">
                        <ImpactCard 
                        v-if="event.EventType == 'Workshops'"
                        :feature="event.EventName"
                        :content="event.EventDescription"
                        :date ="'12 Nov'"
                        :image="'ImpactCards/Contributor.jpg'"
                        :hoverImage="'ImpactCards/Contributor.jpg'"
                        />
                    </template>
                   

                </div>

                <div id='listings' class='listings pb-4 flex-1 flex-col overflow-y-auto overflow-hidden overscroll-none  w-full h-full' v-if="pageWidth <= 768" >
                    <ul class="last:pb-50">
                        <template v-for="(event, index) in eventList">
                        <li v-if="event.EventType== 'Workshops'" :key="index" @click="centerMap(event)" class="overflow-auto  bg-amber-200 px-2 py-2 shadow sm:rounded-md sm:px-6 my-2" >
                           
                            <h1 class="font-bold">{{ event.EventName }}, {{ event.EventDate }} </h1>
                            <p class="italic text-sm"> Organiser: {{ event.EventOrganiser }} </p>

                        </li>
                        
                        </template>
                    </ul>
                </div>
                
            </TabPanel>
            <TabPanel>
                <div class="overflow-x-scroll overflow-hidden flex flex-row flex-shrink-0 gap-2 first:pl-3 last:pr-6 " v-if="pageWidth >= 768">
                    <template v-for="(event,index) in eventList">
                        <ImpactCard 
                        v-if="event.EventType == 'Community Events'"
                        :feature="event.EventName"
                        :content="event.EventDescription"
                        :date ="'12 Nov'"
                        :image="'ImpactCards/Contributor.jpg'"
                        :hoverImage="'ImpactCards/Contributor.jpg'"
                        />
                    </template>
                    
                </div>

                <div id='listings' class='listings pb-4 flex-1 flex-col overflow-y-auto overflow-hidden overscroll-none  w-full h-full' v-if="pageWidth <= 768" >
                    <ul class="last:pb-50">
                        <template v-for="(event, index) in eventList">
                        <li v-if="event.EventType== 'Community Events'" :key="index" @click="centerMap(event)" class="overflow-auto  bg-amber-200 px-2 py-2 shadow sm:rounded-md sm:px-6 my-2" >
                           
                            <h1 class="font-bold">{{ event.EventName }}, {{ event.EventDate }} </h1>
                            <p class="italic text-sm"> Organiser: {{ event.EventOrganiser }} </p>

                        </li>
                        
                        </template>
                    </ul>
                </div>
            </TabPanel>
       
      </TabPanels>
    </TabGroup>
  </template>
  
  <script>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
    import { CheckCircleIcon } from '@heroicons/vue/20/solid'
    import  ImpactCard  from '@/components/ImpactCard.vue'
    // import { eventCard } from '@/components/EventCard.vue'
    import { getAllEvents } from "@/utils/firebase";

    
    export default {
        data() {
            return {
            selectedTab: 1,
            pageWidth: window.innerWidth
            };
        },

        async setup() {
            // console.log("Setup Initiated")
            const eventList = await getAllEvents();
            // console.log(eventList[0].EventType)

            return {
                eventList
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
            window.addEventListener('resize', this.handleResize);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            handleResize() {
                this.pageWidth = window.innerWidth;
            },
        },
    }

    
    
  
  </script>