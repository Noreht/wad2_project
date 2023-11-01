<template>

    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2"></div>
        <div class="col-span-8">
            <!-- ADD THE COMPONENTS AND STYLING HERE -->
            <div>
                <CommunityHeader />
            </div>
            <div>
                <suspense>
                    <CommunityList @toggle-modal="updateParent" />
                </suspense>
            </div>
            <div class="bg-white">
                <CommunityModal :showing="showModal" @close="showModal= false">
                    <h2 class="text-xl font-bold text-black"> {{ modalTitle }}</h2>
                    <p class="mb-6"> {{modalDesc}} </p>
                        <button
                        class="bg-amber-400 text-black px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg" :disabled="joinedCommunity = true"
                        @click="joinedCommunity = true"
                        >
                        Join Community 
                        </button>
                        <button
                        class="bg-red-400 text-black px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg"
                        @click="showModal = false"
                        >
                        Close 
                    </button>
                </CommunityModal>
            </div>
    
    
        </div>
        <div class="col-span-2"></div>
    
    </div>
    <Foot/>
    
</template>
    
    
    
<script>
    import CommunityList from "@/components/CommunityList.vue";
    import CommunityHeader from "@/components/CommunityHeader.vue";
    import CommunityModal from "@/components/CommunityModal.vue";
   

    


    export default {
        name: "CommunitiesView",
        components: { CommunityList, CommunityHeader, CommunityModal},
        data() {
            return {showModal: false, joinedCommunity:false};
        },
        methods: {
            updateParent(input) {
                console.log("open modal parent initiated")
                //console.log("Input:", input)
                let args = Object.values(input);
                console.log("Args:", Object.values(args))
                let modalTitle = args[0];
                let modalDesc = args[1];
                console.log("Modal Title:", modalTitle)
                this.showModal = true;
                return this.modalTitle = modalTitle, this.modalDesc = modalDesc;
            }


        },

        
        }

        
    // const handleOpenModal = () => {
    //     showModal = true;
    //     console.log("Handling Open Modal")
    // }

    


</script>