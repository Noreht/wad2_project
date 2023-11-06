<template>
  <div class="grid grid-cols-12 gap-4 min-w-[600px]">
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
      <div class="bg-white ">
        
          <CommunityModal :showing="showModal" @close="showModal = false">
            <h2 class="text-xl font-bold text-black">{{ modalTitle }}</h2>
            <p class="mb-6">{{ modalDesc }}</p>
            <button
              class="bg-amber-400 text-black px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg disabled:bg-gray-300 disabled:text-white"
              :disabled="this.disable"
              @click="isDisabled( modalTitle)"
            >
              Join Community
            </button>
            <!-- <button
              class="bg-red-400 text-black px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg"
              @click="showModal = false"
            >
              Close
            </button> -->
          </CommunityModal>

      </div>
    </div>
    <div class="col-span-2"></div>
  </div>
  <Foot />
</template>

<script>
import CommunityList from "@/components/CommunityList.vue";
import CommunityHeader from "@/components/CommunityHeader.vue";
import CommunityModal from "@/components/CommunityModal.vue";
import Foot from "@/components/Footer.vue";
import { document, updatedoc, arrayunion, setdoc, Query, Collection, Where, getdocs} from "@/utils/firebase/firebaseInit.js";
import { db } from "@/utils/firebase/firebaseInit.js";





export default {
  name: "CommunitiesView",
  components: { CommunityList, CommunityHeader, CommunityModal, Foot },
  data() {
    return { showModal: false, disable: false, joinedCommunities: [] };
  },
    
        
  methods: {
    updateParent(input) {
      console.log("open modal parent initiated");
      //console.log("Input:", input)
      let args = Object.values(input);
      console.log("Args:", Object.values(args));
      let modalTitle = args[0];
      let modalDesc = args[1];
      console.log("Modal Title:", modalTitle);
      this.showModal = true;
      this.disable = false;

      // if (this.getJoinedCommunities(modalTitle) == true) {
      //   console.log("Disable = true")
      //   this.disable = true;
      // } else {
      //   console.log("Disable = false")
      //   this.disable = false;
      // }
      this.getJoinedCommunities(modalTitle)
      return (this.modalTitle = modalTitle), (this.modalDesc = modalDesc);
    },

    async isDisabled(modalTitle) {
      console.log("isDisabled initiated");
      this.joinedCommunities.push(modalTitle);

      console.log(this.joinedCommunities)

      let id = Math.random() * 100
      
            
      await setdoc(document(db, "UserCommunities", id.toString()), {name: modalTitle} )
      //console.log("Update to  Firebase Success!")

      if (this.joinedCommunities.includes(modalTitle)) {
        //console.log("Yes it is in!")
        return (this.disable = true);
      }
    },

    async getJoinedCommunities(title) {
      console.log("getJoinedCommunities initiated")
      console.log("title:", title)
      const q = Query(Collection(db, 'UserCommunities'), Where('name', '==', title))
      const querySnap = await getdocs(q);
      
      querySnap.forEach((doc) => {
        if (title == doc.data().name) {
          console.log("community is already joined")
          this.disable = true;
        } 
      });
    },

    
  },
};

// const handleOpenModal = () => {
//     showModal = true;
//     console.log("Handling Open Modal")
// }
</script>
