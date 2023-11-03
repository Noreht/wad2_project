<!-- After login-->

<template>
  <div class="grid grid-cols-12 gap-4 z-20">
    <div class="col-span-2 pt-50 lg:block flex ">
      <suspense >
        <UserSidebarLeft />
      </suspense>
    </div>

    <div class="col-span-8 z-10">
      <!-- ADD THE COMPONENTS AND STYLING HERE -->
      <suspense>
        <UserCommunity />
      </suspense>
    </div>
    <div class="col-span-2 pt-50 xl:block flex flex-row-reverse">
      <suspense>
        <UserSidebarRight />
      </suspense>
    </div>
  </div>
  <Foot />
</template>

<script>
import UserCommunity from "@/components/UserCommunity.vue";
import UserSidebarLeft from "@/components/UserSidebar1.vue";
import UserSidebarRight from "@/components/UserSidebar2.vue";

export default {
  name: "CommunityPageView",
  components: { UserCommunity, UserSidebarLeft, UserSidebarRight },
  data() {
    return {
      // chatbox: null,
      // chatContainer: null,
      // userInput: null,
      // sendButton: null,
      // openChatButton: null,
      // closeChatButton: null,
      // isChatboxOpen: false,
    };
  },
  mounted() {
    // this.chatbox = document.getElementById("chatbox");
    // this.chatContainer = document.getElementById("chat-container");
    // this.userInput = document.getElementById("user-input");
    // this.sendButton = document.getElementById("send-button");
    // this.openChatButton = document.getElementById("open-chat");
    // this.closeChatButton = document.getElementById("close-chat");

    // this.openChatButton.addEventListener("click", this.toggleChatbox);
    // this.closeChatButton.addEventListener("click", this.toggleChatbox);

    // this.sendButton.addEventListener("click", this.handleSendMessage);

    // this.userInput.addEventListener("keyup", (event) => {
    //   if (event.key === "Enter") {
    //     this.handleSendMessage();
    //   }
    // });

    // Automatically open the chatbox on page load
    // this.toggleChatbox();
  },
  methods: {
    // toggleChatbox() {
    //   this.chatContainer.classList.toggle("hidden");
    //   this.isChatboxOpen = !this.isChatboxOpen;
    // },
    // handleSendMessage() {
    //   const userMessage = this.userInput.value;
    //   if (userMessage.trim() !== "") {
    //     this.addUserMessage(userMessage);
    //     this.respondToUser(userMessage);
    //     this.userInput.value = "";
    //   }
    // },
    // addUserMessage(message) {
    //   const messageElement = document.createElement("div");
    //   messageElement.classList.add("mb-2", "text-right");
    //   messageElement.innerHTML = `<p class="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">${message}</p>`;
    //   this.chatbox.appendChild(messageElement);
    //   this.chatbox.scrollTop = this.chatbox.scrollHeight;
    // },
    // addBotMessage(message) {
    //   const messageElement = document.createElement("div");
    //   messageElement.classList.add("mb-2");
    //   messageElement.innerHTML = `<p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">${message}</p>`;
    //   this.chatbox.appendChild(messageElement);
    //   this.chatbox.scrollTop = this.chatbox.scrollHeight;
    // },
    // respondToUser(userMessage) {
      // Replace this with your chatbot logic
  //     setTimeout(() => {
  //       this.addBotMessage("yes he is indeed gay.");
  //     }, 500);
  //   },
  },
};
</script>
