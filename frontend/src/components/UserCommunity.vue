<template>
    <div>
            <CommunityInformationBar />
    </div>
    
      <div class="flex">
        <div 
          class="tab block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
          :class="{ 'active-tab': activeTab === 'Updates' }" 
          @click="activeTab = 'updates'"
        >
          Updates
        </div>
        <div 
          class="tab block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
          :class="{ 'active-tab': activeTab === 'Events' }" 
          @click="activeTab = 'events'"
        >
          Events
        </div>
        <div 
          class="tab block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
          :class="{ 'active-tab': activeTab === 'Volunteers' }" 
          @click="activeTab = 'Volunteers'"
        >
          volunteers
        </div>
      </div>
      
    <div v-if="activeTab === 'updates'" >
        <div class="columns-2">
            <div class="w-full">
                <div v-for ="(item, index) in items">
                <!-- selected feed item content  -->
                    <CommunityFeedItem v-if="item.selected == true"
                    :topic ="item.topic"
                    :postAge ="item.postAge"
                    :postDesc ="item.postDesc"
                    :postAuthor ="item.postAuthor" > 
                    
                    <div class="mt-5 mb-5">
                        <label for="newComment" class="block text-sm font-medium leading-6 text-gray-900"> <slot>Add your comment</slot> {{ errorText }}</label>
                        <div class="mt-2">
                            <textarea rows="4" name="newComment" v-model="newComment" id="newComment" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div class="mt-2 flex justify-end">
                          <button type="submit" @click="onSubmit" class="inline-flex items-center rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Post</button>
                        </div>
                    </div>
                    

                    <h2 class="font-bold mt-2">
                        Comments
                    </h2>
                    <ul role="list" class="space-y-3">
                        <li v-for="(comment) in item.comments" class="overflow-hidden rounded-md bg-amber-300 px-6 py-4 shadow">
                            {{  comment  }}
                        </li>
                    </ul>
                
                </CommunityFeedItem>
                
                </div>
            </div>
            <div class="w-full bg-gray-300 flex-1 overflow-y-scroll h-screen">
                <div class="mt-2">
                    <input type="text" name="search" id="search" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search" />
                </div>
                <!-- Feed 1-->

                <CommunityFeedItem v-for="(item, index) in items"
                    @click="handleItemClicked(item.topic)"
                    :key="index"
                    :topic="item.topic"
                    :postAge="item.postAge"
                    :postDesc="item.postDesc"
                    :postAuthor="item.postAuthor"
                    @item-clicked="handleItemClicked"
                    @update:selected="updateSelected" />
                
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
    
  </template>
  
<script >

    import CommunityInformationBar from './CommunityInformationBar.vue';
    import CommunityFeedItem from "./CommunityFeedItem.vue";
    import CommunityEvents from "./CommunityEvents.vue";
    import CommunityMembers from "./CommunityMembers.vue";
    //import firebase from "@/utils/firebase";
    import { db } from "@/utils/firebase/firebaseInit.js";
    import {document, updatedoc, arrayunion} from "@/utils/firebase/firebaseInit.js";

    


    export default {

      // async setup() {
      //       console.log("Setup Initiated for Feed Items")
      //       const feedList = await getAllFeeds();
      //       console.log(feedList[0].Title)

      //       return {
      //           feedList
      //       };
            
      //   },

        components: {
            CommunityInformationBar, CommunityFeedItem, CommunityEvents, CommunityMembers, 
        },
        data() {
            return {
                activeTab: 'feed',
                items: [{topic: "Assistance Required", postAge: "3 days ago", postDesc: "As stated above. We are requiring volunteers to help fix our farm roof or water risks flooding everything! Sign up on Events or leave comments for more info.", postAuthor: "Jese Leos", selected: false, comments: ["hi", "bye", "suck", "whe"]},
                        {topic:"Dying Over Here", postAge:"5 days ago", postDesc:"Volunteers, please be more active! Our community is not a one man show!", postAuthor: "Jese Leos", selected: false, comments: ["whoops", "bgg", "my", "wfffe"]},
                        {topic:"Milestone reached!", postAge:"13 days ago", postDesc:"We are now 500 days old!", postAuthor: "Jese Leos", selected: false, comments: ["kappa", "bye", "omgk", "YEESH"]}],
                currentPostId: 1,
                newComment: ""
                
            }
        },
        methods: {
            handleItemClicked(clickedItem) {
                //console.log("handleItemClicked start")
                //console.log("Clicked Item: " + clickedItem)
                this.items.forEach((item) => {
                    if (item.topic == clickedItem) {
                    item.selected = true;
                    console.log("item selected: " + item.topic + ", " + item.selected)
                    } else {
                    item.selected = false;
                    console.log("item not selected: " + item.topic + ", " + item.selected)
                    }

                })
                ;
            },
            updateSelected(selectedItem) {
                //console.log("SelectedItem Start")
                
                this.items.forEach((item) => {
                    item.selected = item === selectedItem;
                    console.log("Topic: " + item.topic + ", " + item.selected)
                });
            },

            async onSubmit() {
              console.log("onSubmit Start")
              // obtain user info 
              // const user = firebase.auth().currentUser;
              // console.log("User: "+ user)

              const currentPost = document(db, `CommunityPosts`, "i94HlLPoeejIQnUAebGZ");

              
              if (this.newComment != "") {
                    console.log("Adding to doc")
                    await updatedoc(currentPost, {
                        PostComments: arrayunion({
                          id: Math.random() * 1000,
                        text: this.newComment,
                        author: "Bryan",
                        })
                    });
                    
                    this.newComment = null;
                    this.errorText = null;
                    console.log("Added to doc")
                } else {
                    console.log("MessageNotFound")
                    this.errorText = "A message must be entered first!";
                }

        
            },
  
    },
  }


</script>
  
