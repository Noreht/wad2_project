<!-- After login-->

<template>

    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2 bg-blue-200 p-4"></div>
        <div class="col-span-8 bg-green-200 p-4">
            <!-- ADD THE COMPONENTS AND STYLING HERE -->
            <UserCommunityPage />
    
        </div>
        <div class="col-span-2 bg-blue-200 p-4"></div>
    
    </div>
    <Foot/>
    
</template>

<script>
    import UserCommunityPage from "@/components/UserCommunityPage.vue";
    

    export default {
        name: "CommunityPage",
        components: { UserCommunityPage },
    };


</script>