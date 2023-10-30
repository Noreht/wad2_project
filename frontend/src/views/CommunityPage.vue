<!-- After login-->

<template>

    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2 pt-50">
            <UserSidebar class="z-0"/>
        </div>
        <div class="col-span-8">
            <!-- ADD THE COMPONENTS AND STYLING HERE -->
            <UserCommunity />
    
        </div>
        <div class="col-span-2"></div>
    
    </div>
    <Foot/>
    
</template>

<script>
    import UserCommunity from "@/components/UserCommunity.vue";
    import UserSidebar from "@/components/UserSidebar.vue";

    export default {
        name: "CommunityPage",
        components: { UserCommunity, UserSidebar },
    };


</script>