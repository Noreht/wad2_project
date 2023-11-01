<!-- After login-->

<template>

    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2 pt-50">
            <suspense>
                <UserSidebar class="z-0"/>
            </suspense>
        </div>
      
        <div class="col-span-8">
            <!-- ADD THE COMPONENTS AND STYLING HERE -->
            <suspense>
                <UserCommunity />
            </suspense>
    
        </div>
        <div class="col-span-2"></div>
    
    </div>
    <Foot/>
    
</template>

<script>
    import UserCommunity from "@/components/UserCommunity.vue";
    import UserSidebar from "@/components/UserSidebar.vue";

    export default {
        name: "CommunityPageView",
        components: { UserCommunity, UserSidebar },
    };


</script>