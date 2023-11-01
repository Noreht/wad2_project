<!-- After login-->

<template>

    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2 pt-50">
            <suspense>
                <UserSidebarLeft class="z-0"/>
            </suspense>
        </div>
      
        <div class="col-span-8">
            <!-- ADD THE COMPONENTS AND STYLING HERE -->
            <suspense>
                <UserCommunity />
            </suspense>
    
        </div>
        <div class="col-span-2 pt-50">
            <suspense>
                <UserSidebarRight class="z-0"/>
            </suspense>
        </div>
    
    </div>
    <Foot/>
    
</template>

<script>
import UserCommunity from "@/components/UserCommunity.vue";
import UserSidebarLeft from "@/components/UserSidebar1.vue";
import UserSidebarRight from "@/components/UserSidebar2.vue";



export default {
  name: "CommunityPageView",
  components: { UserCommunity, UserSidebarLeft, UserSidebarRight},
};
</script>
