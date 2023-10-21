<template>
    <TabGroup>
      <TabList>
        <div class="flex justify-center space-x-5"> 
        <Tab>
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-1.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Ad-hoc Volunteering
            </button>
        </Tab>
        <Tab>
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-1.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Workshops
            </button>
        </Tab>
        <Tab>
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-1.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Community Events
            </button>
        </Tab>
        </div>
      </TabList>
      <TabPanels>
        
            <TabPanel> 
                <div class="flex justify-center space-x-5 pt-5"> 
                <!-- Card 1 -->
                    <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 inline-block">
                        <div>
                            <!-- Any idea how to make the circle be superimposed on top of the image?-->
                            <img class="rounded-t-lg h-48 w-full" src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="" />
                            <div class="p-2 m-4 w-16 h-16 text-center bg-amber-400 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                <span class="text-black tracking-wide  font-bold border-b border-black font-sans"> 12</span>
                                <span class="text-black tracking-wide font-bold uppercase block font-sans">Oct</span>
                            </div>
                        </div>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Roof Repair</h5>
                            </a>
                            <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Organiser: Punggol Club</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Our roof is falling apart!</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Learn More!
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <!-- Card 2 -->
                    <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 inline-block">
                        <div>
                            <!-- Any idea how to make the circle be superimposed on top of the image?-->
                            <img class="rounded-t-lg h-48 w-full" src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="" />
                            <div class="p-2 m-4 w-16 h-16 text-center bg-amber-400 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                <span class="text-black tracking-wide  font-bold border-b border-black font-sans"> 15</span>
                                <span class="text-black tracking-wide font-bold uppercase block font-sans">Oct</span>
                            </div>
                        </div>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bazaar Sale</h5>
                            </a>
                            <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Organiser: Jeremy</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Selling our compost in the market!</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Learn More!
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </TabPanel>
            <TabPanel>
                <div class="flex justify-center space-x-10 pt-5"> 
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 inline-block">
                        <div>
                            <!-- Any idea how to make the circle be superimposed on top of the image?-->
                            <img class="rounded-t-lg h-48 w-full" src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="" />
                            <div class="p-2 m-4 w-16 h-16 text-center bg-amber-400 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                <span class="text-black tracking-wide  font-bold border-b border-black font-sans"> 15</span>
                                <span class="text-black tracking-wide font-bold uppercase block font-sans">Oct</span>
                            </div>
                        </div>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Composting Workshop</h5>
                            </a>
                            <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Organiser: Jeremy</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Learn how to do aerobic composting!</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Learn More!
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div class="flex justify-center space-x-10 pt-5"> 
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 inline-block">
                        <div>
                            <!-- Any idea how to make the circle be superimposed on top of the image?-->
                            <img class="rounded-t-lg h-48 w-full" src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="" />
                            <div class="p-2 m-4 w-16 h-16 text-center bg-amber-400 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                <span class="text-black tracking-wide  font-bold border-b border-black font-sans"> 15</span>
                                <span class="text-black tracking-wide font-bold uppercase block font-sans">Oct</span>
                            </div>
                        </div>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Drinking Club</h5>
                            </a>
                            <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">Organiser: Sengkang Club</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Celebrate our shitty goodness with alcohol!</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Learn More!
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </TabPanel>
        
      </TabPanels>
    </TabGroup>
  </template>
  
  <script>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
    import { CheckCircleIcon } from '@heroicons/vue/20/solid'
    // import { eventCard } from '@/components/EventCard.vue'
  
    export default {
      components: {
        TabGroup,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
        CheckCircleIcon,
        // eventCard,
      },
    }
  </script>