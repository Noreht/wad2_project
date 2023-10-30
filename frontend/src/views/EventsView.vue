<template>

    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2"></div>
        <div class="col-span-8">
            <!-- ADD THE COMPONENTS AND STYLING HERE -->
            <Suspense>
                <EventCarousel />
            </Suspense>
            
            <div v-if="pageWidth >= 768" >
                <h1 class="pt-4 mb-4 text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    Find your closest communities 
                </h1>
                <Suspense>
                    <EventMap />
                </Suspense>
            </div>
            
            <div class="">

                <h1 class="pt-4 mb-4 text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white" v-if="pageWidth >= 768" >
                    Nothing near you?
                    <EventCategoryHeader />
                </h1>

                <h1 class="pt-4 mb-4 text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white" v-else >
                    Check out our events by category!
                </h1>
                
            </div>
            <Suspense>
                <div>
                    <EventCardBar />
                </div>
            </Suspense>
    
    
        </div>
        <div class="col-span-2"></div>
    
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
        data () {
            return {pageWidth: window.innerWidth}
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
    };

</script>
