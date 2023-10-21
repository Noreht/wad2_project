<template>
    
    <div class="grid grid-flow-col border-2 border-black rounded-lg">
        <div class="bg-blue-500 col-span-1 aspect-square flex min-w-48 md:w-72 ">
            <!-- <div class="flex justify-center relative aspect-square" > -->
                <!-- Event Map is ahead of header rn-->
                <EventMap class="z-1"/>
            <!-- </div> -->
        </div>
        <div class="bg-red-100 col-span-4">
            <div class="border-b border-black bg-blue-300 px-4 py-5 sm:px-6 flex align-middle rounded-tr-sm ">
                <h3 class="text-base font-semibold leading-6 text-black">Nearby Events</h3>
            </div>
            <ul role="list" class="space-y-3 pt-2 px-2">

                <li class="overflow-hidden bg-white px-4 py-2 shadow sm:rounded-md sm:px-6 grid grid-cols-8"> 
                    <div class="col-span-7">
                        <h1 class="font-bold text-xl place-self-start align-middle"> 
                            Composting Workshop, 12 Oct
                        </h1>
                        <p>
                            Sengkang Community Centre
                        </p>
                    </div>
                    <button class="w-8 h-8 rounded-full bg-green-100 hover:bg-green-500 place-self-end align-middle" @click="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="ml-1 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </li>

                <li class="overflow-hidden bg-white px-4 py-2 shadow sm:rounded-md sm:px-6 grid grid-cols-8"> 
                    <div class="col-span-7">
                        <h1 class="font-bold text-xl place-self-start align-middle"> 
                            Roof Repair, 12 Oct
                        </h1>
                        <p>
                            Punggol Clubs
                        </p>
                    </div>
                    <button class="w-8 h-8 rounded-full bg-green-100 hover:bg-green-500 place-self-end align-middle" @click="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="ml-1 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </li>

                <li class="overflow-hidden bg-white px-4 py-2 shadow sm:rounded-md sm:px-6 grid grid-cols-8"> 
                    <div class="col-span-7">
                        <h1 class="font-bold text-xl place-self-start align-middle"> 
                            Composting Bazaar, 15 Oct
                        </h1>
                        <p>
                            Jeremy's House
                        </p>
                    </div>
                    <button class="w-8 h-8 rounded-full bg-green-100 hover:bg-green-500 place-self-end align-middle" @click="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="ml-1 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </li>

                <!-- <li v-for="item in items" :key="item.id" class="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                    {{ Content Here }}
                </li> -->
            </ul>
        </div>
    </div>


</template>

<script>

    import EventMap from "@/components/EventMap.vue";

    export default {
        setup() {
        },
        components: {
            EventMap,
            items: [
    { id: 1 },
    { id:2 },
    { id:3 },
    ]
        },
    }
    
    const items = [
    { EventName: "", EventLocation: "", Date:"" },
   
    ]

</script>