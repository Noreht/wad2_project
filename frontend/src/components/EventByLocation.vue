<template>
    
    <div class="grid grid-flow-col gap-1 border-2 border-black rounded-lg">
        <div class="bg-blue-100 col-span-1 aspect-square flex md:min-w-48 w-72 mx-auto my-2">
            <!-- <div class="flex justify-center relative aspect-square" > -->
                <!-- Event Map is ahead of header rn-->
                <EventMap />
            <!-- </div> -->
        </div>
        <div class="bg-red-100 col-span-4">
            Events 
            <ul role="list" class="space-y-3">

                <li class="overflow-hidden bg-white px-4 py-2 shadow sm:rounded-md sm:px-6"> 
                    Event 1
                </li>

                <li class="overflow-hidden bg-white px-4 py-2 shadow sm:rounded-md sm:px-6"> 
                    Event 2
                </li>

                <li class="overflow-hidden bg-white px-4 py-2 shadow sm:rounded-md sm:px-6"> 
                    Event 3
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