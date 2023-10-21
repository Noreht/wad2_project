<template>

    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2 bg-blue-200 p-4"></div>
        <div class="col-span-8 bg-green-200 p-4">
            <!-- ADD THE COMPONENTS AND STYLING HERE -->
            <div>
                <CommunityHeader />
            </div>
            <div>
                <CommunityList @toggle-modal="updateParent" />
            </div>
            <div class="bg-white">
                <CommunityModal :showing="showModal" @close="showModal= false">
                    <h2 class="text-xl font-bold text-black">Punggol Warriors Community</h2>
                    <p class="mb-6">FUIYOHHHH</p>
                        <button
                        class="bg-amber-400 text-black px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg"
                        @click="showModal = false"
                        >
                        Close
                    </button>
                </CommunityModal>
            </div>
    
    
        </div>
        <div class="col-span-2 bg-blue-200 p-4"></div>
    
    </div>
    <Foot/>
    
    </template>
    
    
    
<script>
    import CommunityList from "@/components/CommunityList.vue";
    import CommunityHeader from "@/components/CommunityHeader.vue";
    import CommunityModal from "@/components/CommunityModal.vue";


    export default {
        name: "CommunitiesView",
        components: { CommunityList, CommunityHeader, CommunityModal },
        data() {
            return {showModal: false};
        },
        methods: {
            updateParent(status) {
                console.log("open modal parent initiated")
                this.showModal = status;
            }
        },
        }

        
    // const handleOpenModal = () => {
    //     showModal = true;
    //     console.log("Handling Open Modal")
    // }

    


</script>