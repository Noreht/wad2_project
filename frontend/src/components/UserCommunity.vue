<template>
  <div>
    <div
    class=" my-5 border-b-4 border-b-yellow-800 pt-5 px-5"
  >
    <div>
      <CommunityInformationBar />
    </div>

    <div class="flex gap-2 mt-5">
      <button
        v-if="activeTab == 'updates'"
        class="tab block w-full text-center rounded-t-3xl py-3 text-base- sm:text-sm bg-green-800 text-white font-bold"
        :class="{ 'active-tab': activeTab === 'Updates' }"
        @click="activeTab = 'updates'"
      >
        Discussions
      </button>
      <button
        v-else
        class="tab block w-full text-center rounded-t-3xl py-3 text-base sm:text-sm bg-yellow-300 hover:bg-green-800 hover:text-white font-bold"
        :class="{ 'active-tab': activeTab === 'Updates' }"
        @click="activeTab = 'updates'"
      >
        Discussions
      </button>
      <button
        v-if="activeTab == 'events'"
        class="tab block w-full rounded-t-3xl text-center py-3 text-base sm:text-sm bg-green-800 text-white font-bold"
        :class="{ 'active-tab': activeTab === 'Events' }"
        @click="activeTab = 'events'"
      >
        Events
      </button>
      <button
        v-else
        class="tab block w-full rounded-t-3xl text-center py-3 text-base sm:text-sm bg-yellow-300 hover:bg-green-800 hover:text-white font-bold"
        :class="{ 'active-tab': activeTab === 'Events' }"
        @click="activeTab = 'events'"
      >
        Events
      </button>
      <button
        v-if="activeTab == 'Volunteers'"
        class="tab block w-full rounded-t-3xl text-center py-3 text-base sm:text-sm bg-green-800 text-white font-bold"
        :class="{ 'active-tab': activeTab === 'Volunteers' }"
        @click="activeTab = 'Volunteers'"
      >
        People
      </button>
      <button
        v-else
        class="tab block w-full rounded-t-3xl text-center py-3 text-base= sm:text-sm bg-yellow-300 hover:bg-green-800 hover:text-white font-bold"
        :class="{ 'active-tab': activeTab === 'Volunteers' }"
        @click="activeTab = 'Volunteers'"
      >
        People
      </button>
      <button
        v-if="activeTab == 'Media'"
        class="tab block w-full rounded-t-3xl text-center py-3 text-base sm:text-sm bg-green-800 text-white font-bold"
        :class="{ 'active-tab': activeTab === 'Volunteers' }"
        @click="activeTab = 'Media'"
      >
        Media
      </button>
      <button
        v-else
        class="tab block w-full rounded-t-3xl text-center py-3 text-base= sm:text-sm bg-yellow-300 hover:bg-green-800 hover:text-white font-bold"
        :class="{ 'active-tab': activeTab === 'Volunteers' }"
        @click="activeTab = 'Media'"
      >
        Media
      </button>
    </div>
    </div>

    <div v-if="activeTab === 'updates'">
      <div class="columns-2 rounded-b-3xl border-4 border-green-800 h-[630px] overflow-y-scroll">
        <div class="w-full ">
          <div
          class="w-full bg-gray-300 rounded-3xl flex-1 overflow-y-scroll "
        >
          <div class="mt-2">
            <input
              type="text"
              name="search"
              id="search"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Search..."
            />
          </div>
          <!-- Feed 1-->

          <CommunityFeedItem
            v-for="(item, index) in postList"
            @click="handleItemClicked(item.PostTitle)"
            :key="index"
            :topic="item.PostTitle"
            :postAge="item.PostAge"
            :postDesc="item.PostDesc"
            :postAuthor="item.PostAuthor"
            @item-clicked="handleItemClicked"
            @update:selected="updateSelected"
            class="justify-left"
          />
        </div>
          <div v-for="(item, index) in postList">
            <!-- selected feed item content  -->
            <CommunityFeedItem
              v-if="item.selected == true"
              :topic="item.PostTitle"
              :postAge="item.PostAge"
              :postDesc="item.PostDesc"
              :postAuthor="item.PostAuthor"
              class="justify-end"
            >
              <div class="mt-5 mb-5">
                <label
                  for="newComment"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  <slot>Add your comment</slot> {{ errorText }}</label
                >
                <div class="mt-2">
                  <textarea
                    rows="4"
                    name="newComment"
                    v-model="newComment"
                    id="newComment"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div class="mt-2 flex justify-end">
                  <button
                    type="submit"
                    @click="onSubmit"
                    class="inline-flex items-center rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Post
                  </button>
                </div>
              </div>

              <h2 class="font-bold mt-2">Comments</h2>
              <ul role="list" class="space-y-3">
                <li
                  v-for="comment in item.PostComments"
                  class="overflow-hidden rounded-md bg-amber-300 px-6 py-4 shadow"
                >
                  <div class="text-black text-lg">
                    <p>{{ comment.text }}</p>
                  </div>
                  <div class="text-black text-sm mt-2">
                    <p>By: {{ comment.author }}</p>
                  </div>
                </li>
              </ul>
            </CommunityFeedItem>
          </div>
          <slot class="col"> </slot>
        </div>
        
      </div>
    </div>
    <div v-if="activeTab === 'events'" class="events-container">
      <!-- Events content  -->
      <Suspense>
        <CommunityEvents />
      </Suspense>
    </div>
    <div v-if="activeTab === 'Volunteers'" class="volunteers-container">
      <!-- Community User content -->
      <CommunityMembers />
    </div>
  </div>
</template>

<script>
import CommunityInformationBar from "./CommunityInformationBar.vue";
import CommunityFeedItem from "./CommunityFeedItem.vue";
import CommunityEvents from "./CommunityEvents.vue";
import CommunityMembers from "./CommunityMembers.vue";
//import firebase from "@/utils/firebase";
import { db } from "@/utils/firebase/firebaseInit.js";
import {
  document,
  updatedoc,
  arrayunion,
} from "@/utils/firebase/firebaseInit.js";
// import {getAllPosts } from "@/utils/firebase";

export default {
  // async setup() {
  //       console.log("Setup Initiated for Feed Items")
  //       const postList = await getAllPosts();
  //       console.log(postList[0])

  //       const database = db

  //       database.ref('/CommunityPosts').on('value', (snapshot) => {
  //       postList = snapshot.val();
  //       console.log("Updated post list:", postList);
  //       // Do something with the updated post list
  //           // You can call any function that uses postList here
  //       }, (error) => {
  //           console.error('Error fetching data:', error);
  //       });

  //       // Wait for the initial fetch before returning
  //       await database.ref('/CommunityPosts').once('value', (snapshot) => {
  //           postList = snapshot.val();
  //       });

  //       console.log(postList);

  //       return {
  //           postList
  //       };
  //       },

  components: {
    CommunityInformationBar,
    CommunityFeedItem,
    CommunityEvents,
    CommunityMembers,
  },
  data() {
    return {
      activeTab: "feed",
      postList: [
        {
          PostTitle: "Assistance Required",
          PostAge: "3 ",
          PostDesc:
            "As stated above. We are requiring volunteers to help fix our farm roof or water risks flooding everything! Sign up on Events or leave comments for more info.",
          PostAuthor: "Jese Leos",
          selected: false,
          PostComments: [
            { author: "Cai Jun", text: "Sure of course!", id: 1 },
            { author: "Pieces", text: "Can't wait to join!", id: 2 },
            {
              author: "Darren",
              text: "I will try to join- update later!",
              id: 3,
            },
          ],
        },
        {
          PostTitle: "Dying Over Here",
          PostAge: "5 ",
          PostDesc:
            "Volunteers, please be more active! Our community is not a one man show!",
          PostAuthor: "Jese Leos",
          selected: false,
          PostComments: [
            { author: "Jeremy", text: "Damn that's tough bro", id: 1 },
            {
              author: "Cai Jun",
              text: "Whoops, will contribute more often",
              id: 2,
            },
            { author: "Leo", text: "Stop throwing your work to us!", id: 3 },
          ],
        },
        {
          PostTitle: "Milestone reached!",
          PostAge: "13 ",
          PostDesc:
            "Hi everyone, we have reached 100 people as of today! That's actually insane! Congrats on a job well done!",
          PostAuthor: "Jese Leos",
          selected: false,
          PostComments: [
            { author: "Donovan", text: "Great job guys!", id: 1 },
            {
              author: "Faith Tham",
              text: "Let's reach 100 people next!",
              id: 2,
            },
          ],
        },
      ],
      currentPostId: 1,
      newComment: "",
    };
  },
  methods: {
    handleItemClicked(clickedItem) {
      //console.log("handleItemClicked start")
      // //console.log("Clicked Item: " + clickedItem)
      // let postID = ""
      // let otherPosts = []

      this.postList.forEach((item) => {
        if (item.PostTitle == clickedItem) {
          item.selected = true;

          console.log(
            "item selected: " + item.PostTitle + ", " + item.selected
          );
        } else {
          item.selected = false;
          console.log(
            "item not selected: " + item.PostTitle + ", " + item.selected
          );
          // let nonSelectedPosts = document(db, "CommunityPosts", item.id)
          // otherPosts.push(nonSelectedPosts)
        }
      });
    },

    updateSelected(selectedItem) {
      //console.log("SelectedItem Start")

      this.postList.forEach((item) => {
        item.selected = item === selectedItem;
        console.log("Topic: " + item.PostTitle + ", " + item.selected);
      });
    },

    onSubmit() {
      console.log("onSubmit Start");
      // obtain user info
      // const user = firebase.auth().currentUser;
      // console.log("User: "+ user)
      this.postList.forEach((item) => {
        if (item.selected == true) {
          if (this.newComment != "") {
            console.log("Adding to doc");
            item.PostComments.unshift({
              id: Math.random() * 1000,
              text: this.newComment,
              author: "Bryan",
            });
          }

          this.newComment = null;
          this.errorText = null;
          console.log("Added to doc");
        } else {
          console.log("MessageNotFound");
          this.errorText = "A message must be entered first!";
        }
      });
    },
  },
};
</script>
