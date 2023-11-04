<template>
  <div :class="{ 'bg-gray-300': sidebarOpen }" class="z-40 h-full">
    <!-- Static sidebar for desktop -->
    <div
      :class="{ fixed: sidebarOpen, 'bg-gray-300': sidebarOpen }"
      class="h-auto z-60 sticky top-16 px-2.5 lg:z-0 w-[100%] py-4"
    >
      <button
        type="button"
        class="min-w-[100px] w-[100%] sticky top-0 p-3 text-gray-700 bg-amber-500 rounded-full text-base font-bold"
        @click="sidebarops"
      >
        Chats
      </button>

      <nav
        class="flex flex-1 flex-col bg-gray-300 px-2.5 pt-05 mt-2"
        v-if="sidebarOpen"
      >
        <div class="text-base font-bold leading-6 text-black">Your Friends</div>
        <ul
          role="list"
          class="-mx-2 mt-2 space-y-1 overflow-y-scroll h-[250px] border border-1 rounded-lg"
        >
          <li v-for="(value, key) of chats">
            <div
              class="bg-gray-50 text-black hover-text-amber-600 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold items-center"
            >
              <span
                class="border border-gray-200 hover:border-amber-600 w-8 h-8 rounded-full flex items-center justify-center"
                :style="{
                  backgroundImage: `url(${value.imageurl})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }"
              ></span>
              <span class="truncate">{{ key }}</span>
              <button
                class="ml-auto mr-0 bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                @click="openChat(key)"
              >
                Chat
              </button>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Chat container -->
      <div
        :class="{ hidden: isChatboxOpen || !sidebarOpen }"
        class="w-full flex justify-center align-center items-center mt-12"
      >
        Open a Chat!
      </div>
      <div
        id="chat-container"
        class="w-auto mt-2 max-h-[310px]"
        :class="{ hidden: !isChatboxOpen || !sidebarOpen }"
      >
        <div class="bg-white shadow-md rounded-lg max-w-lg w-full h-full">
          <div
            class="p-3 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center"
          >
            <p class="text-lg font-semibold">{{ currentChat }}</p>
            <button
              class="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              @click="closeChat('{{currentChat}}')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div id="chatbox" class="p-2 h-[300px] overflow-y-scroll">
            <!-- Chat messages will be displayed here -->
            <div
              class="mb-2"
              v-for="message in chatMessages"
              :key="message.id"
              :class="{
                'text-left': message.isResponse,
                'text-right': !message.isResponse,
              }"
            >
              <div
                :class="
                  message.isResponse
                    ? 'bg-gray-200 text-gray-700 rounded-lg py-2 px-2 inline-block max-w-[85%] text-sm'
                    : 'bg-blue-500 text-white rounded-lg py-2 px-2 inline-block max-w-[85%] text-sm'
                "
              >
                {{ message.text }}
              </div>
            </div>
          </div>
          <div class="p-4 border-t flex">
            <input
              id="user-input"
              type="text"
              placeholder="Type a message"
              class="w-full px-3 py-2 border rounded-l-md"
              v-model="userMessage"
              @keyup.enter="handleSendMessage"
            />
            <button
              id="send-button"
              class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
              @click="handleSendMessage"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, setTransitionHooks } from "vue";

export default {
  data() {
    return {
      chats: {
        David: {
          imageurl: "https://picsum.photos/200/300?random=1",
          message: [],
          selected: false,
        },
        Caleb: {
          imageurl: "https://picsum.photos/200/300?random=2",
          message: [],
          selected: false,
        },
        Andrea: {
          imageurl: "https://picsum.photos/200/300?random=3",
          message: [],
          selected: false,
        },
        Austin: {
          imageurl: "https://picsum.photos/200/300?random=4",
          message: [],
          selected: false,
        },
        Bryan: {
          imageurl: "https://picsum.photos/200/300?random=5",
          message: [],
          selected: false,
        },
        Kyong: {
          imageurl: "https://picsum.photos/200/300?random=6",
          message: [],
          selected: false,
        },
        Chein: {
          imageurl: "https://picsum.photos/200/300?random=7",
          message: [],
          selected: false,
        },
        Tharman: {
          imageurl: "https://picsum.photos/200/300?random=8",
          message: [],
          selected: false,
        },
      },
      sidebarOpen: false,
      isChatboxOpen: false,
      currentChat: "",
      userMessage: "",
    };
  },
  computed:{
    chatMessages() {
      if(this.currentChat==""){return chatMessages=[]}
      else{ return this.chats[this.currentChat].message;}
   
  }
  },
  methods: {
    sidebarops() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    openChat(key) {
      this.isChatboxOpen = true;
      this.currentChat = key;
    },

    closeChat() {
      this.isChatboxOpen = false;
      this.currentChat = "";
    },

    handleSendMessage() {
      const message = this.userMessage.trim();
      if (message) {
        this.chatMessages.push({
          id: Date.now(),
          text: message,
          isResponse: false,
        });
        const chatbox = document.getElementById("chatbox");
        if (chatbox) {
          chatbox.scrollTop = chatbox.scrollHeight;
        }
        setTimeout(() => {
          const response =
            "lorem ipsum sefecjnarejnb snrh s4onregsrno orng[o4srnbrnfd w4nrymgbrfd .";
          this.chatMessages.push({
            id: Date.now(),
            text: response,
            isResponse: true,
          });
          const chatbox = document.getElementById("chatbox");
          if (chatbox) {
            chatbox.scrollTop = chatbox.scrollHeight;
          }
        }, 500);
        this.userMessage = "";
      }
    },
  },
};
</script>
