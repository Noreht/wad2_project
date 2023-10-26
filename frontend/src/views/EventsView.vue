<template>

    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2 bg-blue-200 p-4"></div>
        <div class="col-span-8 bg-green-200 p-4">
            <!-- ADD THE COMPONENTS AND STYLING HERE -->
            <Suspense>
                <EventCarousel />
            </Suspense>
            
            <div>
                <h1 class="pt-4 mb-4 text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    Find your closest communities 
                </h1>
                <Suspense>
                    <EventMap />
                </Suspense>
            </div>
            
            <div class="">

                <h1 class="pt-4 mb-4 text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    Nothing near you?
                </h1>

                <EventCategoryHeader />
            </div>
            <Suspense>
                <div>
                    <EventCardBar />
                </div>
            </Suspense>
    
    
        </div>
        <div class="col-span-2 bg-blue-200 p-4"></div>
    
    </div>
    <Foot/>
    
</template>
    
    
    
<script>
    import EventCarousel from "@/components/EventCarousel.vue";
    import EventJumbotron from "@/components/EventJumbotron.vue";
    import EventMap from "@/components/EventMap.vue";
    
    import EventCategoryHeader from "@/components/EventCategoryHeader.vue";
    import EventCardBar from "@/components/EventCardBar.vue";
    import Foot from "@/components/Footer.vue";
    

    export default {
        name: "EventsView",
        components: { EventCarousel, EventJumbotron, EventMap, EventCategoryHeader, EventCardBar, Foot },
    };

</script>
