<template>
    
      <div class="flex">
        <div 
          class="tab block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
          :class="{ 'active-tab': activeTab === 'Updates' }" 
          @click="activeTab = 'updates'"
        >
          Updates
        </div>
        <div 
          class="tab block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
          :class="{ 'active-tab': activeTab === 'Events' }" 
          @click="activeTab = 'events'"
        >
          Events
        </div>
        <div 
          class="tab block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
          :class="{ 'active-tab': activeTab === 'Volunteers' }" 
          @click="activeTab = 'Volunteers'"
        >
          volunteers
        </div>
      </div>
      <div v-if="activeTab === 'updates'" >
        <div class="columns-2">
            <div class="w-full bg-amber-400">
                <!-- selected feed item content  -->
                hello world
            </div>
            <div class="w-full bg-gray-300 flex-1 overflow-y-scroll h-screen">
                <div class="mt-2">
                    <input type="text" name="search" id="search" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search" />
                </div>
                <!-- Feed 1-->
                <div>
                    <article class="p-6 bg-amber-100 rounded-lg border border-amber-800 shadow-md my-5">
                        <div class="flex justify-between items-center mb-5 text-black">
                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                Assistance Required
                            </span>
                            <span class="text-sm">3 days ago</span>
                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Roof has collapsed on farm!</a></h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">As stated above. We are requiring volunteers to help fix our farm roof or water risks flooding everything! Sign up on Events or leave comments for more info.</p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                                <span class="font-medium dark:text-white">
                                    Jese Leos
                                </span>
                            </div>
                            <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </article>

                    <!-- Feed 2-->

                    <article class="p-6 bg-amber-100 rounded-lg border border-amber-800 shadow-md my-5">
                        <div class="flex justify-between items-center mb-5 text-black">
                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                Assistance Required
                            </span>
                            <span class="text-sm">3 days ago</span>
                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Roof has collapsed on farm!</a></h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">As stated above. We are requiring volunteers to help fix our farm roof or water risks flooding everything! Sign up on Events or leave comments for more info.</p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                                <span class="font-medium dark:text-white">
                                    Jese Leos
                                </span>
                            </div>
                            <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </article>
                </div>
                
            </div>
        </div>
      </div>
      <div v-if="activeTab === 'events'" class="events-container">
        <!-- Events content  -->
      </div>
      <div v-if="activeTab === 'volunteers'" class="volunteers-container">
        <!-- Community User content -->
      </div>
    
  </template>
  
<script >
    export default {
        data() {
        return {
            activeTab: 'feed'
        };
        }
    };


</script>
  
