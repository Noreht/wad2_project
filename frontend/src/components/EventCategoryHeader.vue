<template>
  <div class="bg-white py-6 sm:py-6 h-40 justify-center">
    <div class="grid grid-cols-2 mx-1 max-w-7xl px-6 lg:px-4">
      <div class="mx-auto max-w-2xl lg:mx-0 align-middle">
        <h1
          class="mt-3 drop-shadow-xl text-xl font-bold tracking-tight text-gray-900 sm:text-2xl  md:text-4xl lg:text-6xl lg:min-h-[65px] md:min-h-[45px] typewriter"
        >
          <span
            v-for="(char, index) in typewriterText"
            :key="index"
            :class="{ 'text-amber-400': index >= typewriterText.length - 4 }"
            >{{ char }}</span
          >
        </h1>

        <h2
          class="text-2xl md:text-3xl lg:text-4xl  font-semibold tracking-tight text-gray-900 sm:text-2xl "
        >
          has you covered!
        </h2>
      </div>
      <div class="mx-auto max-w-2xl lg:mx-0">
        <p
          class="text-lg lg:text-2xl md:text-xl leading-8 text-gray-600 text-justify mt-4 items-center max-w-[400px]"
        >
          From ad-hoc events to regular volunteering sessions, there's something
          for everyone here! 
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const words = ["Black Gold"];
const typeSpeed = 200; // Adjust the speed as needed (in milliseconds)

export default {
  name: "EventCategoryHeader",
  data() {
    return {
      typewriterText: "",
      isGoldVisible: false,
      loopTyping: true,
    };
  },

  methods: {
    async type() {
      while (this.loopTyping) {
        for (const word of words) {
          let isDeleting = false;
          let j = 0;

          while (j >= 0 && j < word.length) {
            this.typewriterText = word.substring(0, j + 1);
            if (word[j] === "G") {
              this.isGoldVisible = true;
            } else {
              this.isGoldVisible = false;
            }
            if (isDeleting) {
              await this.delay(typeSpeed / 2);
            } else {
              await this.delay(typeSpeed);
            }
            j = isDeleting ? j - 1 : j + 1;
          }

          // Add a pause after typing the full word
          if (j === word.length) {
            await this.delay(typeSpeed * 2);
          }

          // Clear the word with a delay
          while (j >= 0) {
            this.typewriterText = word.substring(0, j);
            if (word[j] === "G") {
              this.isGoldVisible = true;
            } else {
              this.isGoldVisible = false;
            }
            await this.delay(typeSpeed / 2);
            j--;
          }
        }
      }
    },
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
  mounted() {
    this.type();
  },
  beforeDestroy() {
    this.loopTyping = false; // Stop the looping when the component is destroyed
  },
};
</script>
