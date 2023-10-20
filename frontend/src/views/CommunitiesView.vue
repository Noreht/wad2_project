<template>

    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2 bg-blue-200 p-4"></div>
        <div class="col-span-8 bg-green-200 p-4">
            <!-- ADD THE COMPONENTS AND STYLING HERE -->
            <div>
                <CommunityHeader />
            </div>
            <div>
                <CommunityList />
            </div>
    
    
        </div>
        <div class="col-span-2 bg-blue-200 p-4"></div>
    
    </div>
    <Foot/>
    
    </template>
    
    
    
<script>
    import CommunityList from "@/components/CommunityList.vue";
    import CommunityHeader from "@/components/CommunityHeader.vue";

    export default {
    name: "CommunitiesView",
    components: { CommunityList, CommunityHeader },
    };


</script>