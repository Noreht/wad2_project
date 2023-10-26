<template>
   
    <TabGroup>
      <TabList>
        <div class="flex justify-center space-x-5"> 
        <Tab>
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-1.5 text-md font-bold text-black shadow-sm hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400">
                <!-- <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" /> -->
                Ad-hoc Volunteering
            </button>
        </Tab>
        <Tab>
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-1.5 text-md font-bold text-black shadow-sm hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 ">
                <!-- <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" /> -->
                Workshops
            </button>
        </Tab>
        <Tab>
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-1.5 text-md font-bold text-black focus-visible:bg-amber-400 hover:underline ">
                <!-- <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" /> -->
                Community Events
            </button>
        </Tab>
        </div>
      </TabList>
      <TabPanels>
            <TabPanel> 
                <div class="overflow-x-scroll overflow-hidden flex flex-row flex-shrink-0 gap-2 pt-5 first:pl-6 last:pr-6 " >
                    <template v-for="(event,index) in eventList">
                        <ImpactCard 
                        v-if="event.EventType == 'Ad-hoc Volunteering'"
                        :feature="event.EventName"
                        :content="event.EventDescription"
                        :date ="'12 Nov'"
                        :image="'ImpactCards/Contributor.jpg'"
                        :hoverImage="'ImpactCards/Contributor.jpg'"
                        />
                    </template>
                    
                </div>
            </TabPanel>
            <TabPanel>
                <div class="overflow-x-scroll overflow-hidden flex flex-row flex-shrink-0 gap-2 first:pl-6 last:pr-6 ">
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
                
            </TabPanel>
            <TabPanel>
                <div class="overflow-x-scroll overflow-hidden flex flex-row flex-shrink-0 gap-2 first:pl-6 last:pr-6 ">
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
    }

    
    
  
  </script>