<template>
  <div
    >
    <div class="min-w-0 flex-1">
      <div
        class="w-full h-[250px] rounded-2xl"
        :style="{
          backgroundImage: `url(ImpactCards/Community.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }"
      ></div>
      <h2
        class="mt-3 text-3xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight min-h-[50px]"
      >
      Champions of the East!
      </h2>
      <div
        class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"
      >
        <div class="mt-2 flex items-center text-sm text-gray-500 font-semibold">
          <BriefcaseIcon
            class="mr-3 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="false"
          />
          50 Full-time volunteers
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500 font-semibold">
          <MapPinIcon
            class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          Remote help allowed
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500 font-semibold">
          <CurrencyDollarIcon
            class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          Aug 2017 &ndash; Present
        </div>
        <div>
          <button
              v-if="!wantsToLeave"
              class="bg-amber-400 text-black px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg"
              @click="confirm()"
            >
              Leave Community
          </button>

          <button
              v-if="wantsToLeave"
              class="bg-red-600 text-black px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg"
              @click="leave()"
            >
              Confirm
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deletedoc, Query, Collection, Where, getdocs, document } from "@/utils/firebase/firebaseInit.js";
import { db } from "@/utils/firebase/firebaseInit.js";
import {useRouter} from "vue-router";


export default {
  data() {
    return {
      wantsToLeave: false,
      router: useRouter()
    }
  },
  methods: {

    confirm() {
      return this.wantsToLeave = true;
    },

    async deleteThis(id) {
      //console.log("Deleting community...")
      await deletedoc(document(db, "UserCommunities", id));
      this.router.push('/communities');
      //console.log("Community deleted")
    },

    async leave() {
      //console.log("Leaving community...")
      const q = Query(Collection(db, 'UserCommunities'), Where('name', '==', "Champions of the East"))
      const querySnap = await getdocs(q);
      
      querySnap.forEach((doc) => {
        //console.log(doc.id)
        this.deleteThis(doc.id)
    });

  },
   

}

}


</script>
