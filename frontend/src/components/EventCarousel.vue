<template>
  <section
    class="shadow-xl hover:-translate-y-1 dark:bg-gray-900 rounded-3xl border-4 border-orange-800 mt-[20px] "
  >
    <div class="w-full mt-3 pl-5 h-12 sm:h-auto">
      <h1
        class="drop-shadow-xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl lg:mb-2 lg:min-w-[300px] max-h-[50px] min-h-[90px] typewriter"
      >
        <span
          v-for="(char, index) in typewriterText"
          :key="index"
          :class="{ 'text-amber-400': index >= typewriterText.length - 8 }"
          >{{ char }}</span
        >
      </h1>
    </div>
    <div class="carousel w-full h-36 sm:h-72 flex relative content-center">
      <div
        class="inner relative w-full h-full content-center"
        ref="inner"
        :style="innerStyles"
      >
        <div
          class="jumbo absolute w-11/12 pl-16"
          v-for="(jumbo, index) in eventList"
          :key="index"
        >
          <div class="w-full pl-4 pb-1 h-72">
            <div
              class="h-32 sm:h-64 sm:p-2  bg-gradient-to-r from-yellow-800 to-amber-400  rounded-xl shadow-lg dark:bg-gray-800 grid grid-cols-2 relative p-2 "
            >
              <div class="overflow-y-auto">
                <h1
                  class="drop-shadow-xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl dark:text-white underline mb-2 break-normal whitespace-normal pb-2 pl-2"
                >
                  {{ jumbo.EventName }}
                </h1>

                <h3
                  class="text-base mb-1 font-bold tracking-tight leading-none text-white sm:text-2xl lg:text-3xl dark:text-white italic pb-2 pl-2"
                >
                  {{ jumbo.EventDate }}
                </h3>

                <h4
                  class="mb-1 text-sm font-bold tracking-tight leading-none text-white sm:text-2xl lg:text-3xl dark:text-white italic pb-2 pl-2"
                >
                  {{ jumbo.EventOrganiser }}
                </h4>

                <p
                  class="mb-1 pr-2 text-lg font-normal text-white sm:text-xl dark:text-gray-400 break-normal whitespace-normal pl-2"
                >
                  {{ jumbo.EventDescription }}
                </p>

                <!-- <a
                  href="#"
                  class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-xs inline-flex items-center md:xl"
                  >Learn more
                <svg
                    class="w-3.5 h-3.5 ml-1"
                    aria-hidden="true"
                    xmlns="{{eventPage}}"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    /> -->
                  <!-- </svg>
                </a> -->
              </div>
              <div class="overflow-y-auto grid justify-items-center align-middle">
                <img :src="images[i]" class=" pl-2 bg-blend-lighten shadow rounded w-full h-full flex align-middle border-none" >
              <!-- </div> -->
              <button
                class="absolute bottom-5 right-12 w-8 h-8 rounded-full bg-black hover:bg-gray-500 text-white"
                @click="prev"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="ml-1 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              <button
                class="absolute bottom-5 right-2 w-8 h-8 rounded-full bg-black hover:bg-gray-500 text-white"
                @click="next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="ml-1 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { ref } from "vue";
import EventJumbotron from "./EventJumbotron.vue";
import { getAllEvents } from "@/utils/firebase";

const words = ["Hottt Events!!"];
const typeSpeed = 200; // Adjust the speed as needed (in milliseconds)

export default {
  async setup() {
    console.log("Setup Initiated for Event Map");
    const eventList = await getAllEvents();
    //console.log(eventList[0].EventType)

    return {
      eventList,
    };
  },

  data() {
    return {
      typewriterText: "",
      isGoldVisible: false,
      loopTyping: true,
      innerStyles: {},
      step: "",
      transitioning: false,
      i:0,
      images: ["https://as2.ftcdn.net/v2/jpg/04/16/88/91/1000_F_416889138_FGxmM0mXGlcdw12N2mKeKmiK70NyM6rS.jpg", "https://as1.ftcdn.net/v2/jpg/03/71/76/22/1000_F_371762244_Yw95Ozaiy5Bn4gDklWspAt4RzRHdhQr5.jpg", "https://t3.ftcdn.net/jpg/02/01/20/46/240_F_201204650_4XuG7U4GulgYMB5jEEH18DLaBmoTlFzf.jpg", "https://t3.ftcdn.net/jpg/02/82/11/12/240_F_282111267_0dl5FSUofp0tslSgZdVwF9ldiBfBFJl6.jpg", "https://t3.ftcdn.net/jpg/05/77/80/74/240_F_577807499_ifzuGHCTGspZWVq7jp4Dj1y4wMWalJKY.jpg", "https://t4.ftcdn.net/jpg/06/00/67/75/240_F_600677520_N4fpaLL43yr2LSjvztcW5CFXV9hOLPeb.jpg", "https://t4.ftcdn.net/jpg/05/69/34/09/240_F_569340944_6rb7vtDV65TvWiMcRYcOleqNrIbQbchC.jpg", "https://t4.ftcdn.net/jpg/02/45/24/59/240_F_245245911_kAXFCW93xISiKU42JmxWx41sRTb6tauT.jpg"]
    };
  },

  mounted() {
    this.type();
    this.setStep();
    this.resetTranslate();
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
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalJumbotrons = this.eventList.length;
      // this.step = `${innerWidth }px`
      this.step = `${innerWidth / totalJumbotrons}px`;
    },

    next() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveLeft();

      this.afterTransition(() => {
        const jumbo = this.eventList.shift();
        this.eventList.push(jumbo);
        this.resetTranslate();
        this.transitioning = false;
      });

      if (this.i === this.eventList.length - 1) {
        return this.i -= 1;
      }

      return this.i += 1;

      
    },

    prev() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveRight();

      this.afterTransition(() => {
        const jumbo = this.eventList.pop();
        this.eventList.unshift(jumbo);
        this.resetTranslate();
        this.transitioning = false;
      });

      if (this.i == 0) {
        return this.i += 1;
      }

      return this.i -= 1;
    },

    moveLeft() {
      // this.innerStyles = {
      //   transform: `translateX(-${this.step})
      //               translateX(-${this.step})`,
      // };
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(${this.step})
                   `,
        
      };
    },

    moveRight() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`,
      };
    },

    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },

    resetTranslate() {
      this.innerStyles = {
        transition: "transform2 transform1 ",
        transform1: `translateX(0) `,
        transform2: `translateX(${this.step}) `
      };
    },
  },
};
</script>

<style>
.carousel {
  /* width: 950px; */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inner {
  transition: transform 0.000000001s;
  white-space: nowrap;
  display: flex;
}

.jumbo {
  /* width: 100%; */
  display: flex;
  height: 300px;
  color: white;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
}
*/ button {
  margin-right: 5px;
  margin-top: 10px;
}


/* @media screen and (min-width:992px) {
    .jumbo {
        width:1000px;
    }
}

@media screen and (min-width:576px) {
    .jumbo {
        width:800px;
    }
}

@media screen and (min-width:576px) {
    .jumbo {
        width:800px;
    }
} */
</style>
