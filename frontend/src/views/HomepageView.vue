<template class="min-w-[350px]">
  <!-- <div>
    <div class="rounded-lg pl-20 mr-20 border-4 border-slate-500 px-6 py-24 sm:py-32 lg:px-8 mt-5">



    </div>
</div> -->

  <div class="grid grid-cols-12">
    <div class="col-span-2 p-4"></div>
    <div class="col-span-8 align-center z-10">
      <!-- ADD THE COMPONENTS AND STYLING HERE -->

      <div
        class="rounded-3xl border-4 border-orange-800 mt-5 min-w-[200px] shadow-2xl hover:-translate-y-1"
        :style="{
          backgroundImage: 'url(\'./Compost-hands.jpg\')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }"
      >
        <div
          class="rounded-3xl px-6 py-10 sm:py-10 lg:px-8"
          :style="{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }"
        >
          <!-- <h1
            class="drop-shadow-xl text-6xl font-bold tracking-tight text-gray-900 sm:text-8xl animate-typing overflow-hidden lg:min-w-[300px] max-h-[90px]"
          >
            Black
            <span class="text-amber-400 animate-typing overflow-hidden"
              >Gold</span
            >
          </h1> -->
          <h1
            class="drop-shadow-xl text-6xl font-bold tracking-tight text-gray-900 sm:text-8xl lg:min-w-[300px] max-h-[90px] min-h-[90px] typewriter"
          >
            <span
              v-for="(char, index) in typewriterText"
              :key="index"
              :class="{ 'text-amber-400': index >= typewriterText.length - 4 }"
              >{{ char }}</span
            >
          </h1>

          <br />
          <h3
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            4520 Contributors
          </h3>
          <h3
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            52 communities
          </h3>
          <p
            class="relative mt-5 sm:text-lg md:text-2xl leading-7 text-gray-900 sm:max-w-md lg:max-w-none font-normal"
          >
            At BlackGold, we're dedicated to Singapore's 30 by 30 food security
            plan by promoting sustainable agri-food practices. Our
            community-driven composting program reduces food waste, encourages
            responsible consumption, and boosts environmental sustainability. We
            connect and support Singaporeans, aiming to transform food waste
            into valuable compost instead of contributing to landfill greenhouse
            gases. Join us in making a difference for Singapore's food security
            and the environment - discover how to turn food waste into compost
            today!
          </p>
          <br />
          <a
            href="/login"
            class="xs:text-base rounded-md bg-amber-400 px-3.5 py-2.5 text-3xl font-semibold transition duration-300 ease-in-out text-black drop-shadow-lg hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Join now!
          </a>
        </div>
      </div>

      <div>
        <h1
          class="text-3xl text-center font-bold leading-7 text-gray-900 sm:truncate xs:text-base sm:text-3xl sm:tracking-tight mt-10 mb-3 min-w-[100%]"
        >
          What Impact Can I Make?
        </h1>
      </div>

      <div class="lg:flex lg:content-stretch gap-5 justify-center">
        <ImpactCard
          :feature="'Individual'"
          :content="'I’m just looking to try out composting within my household and learning more about the movement!'"
          :date="'See More'"
          :image="'ImpactCards/Individual.jpg'"
          :hoverImage="'ImpactCards/Individual.jpg'"
        />
        <ImpactCard
          :feature="'Community'"
          :content="'I want to join the larger composting community to promote the movement!'"
          :date="'See More'"
          :image="'ImpactCards/Community.jpg'"
          :hoverImage="'ImpactCards/Community.jpg'"
        />
        <ImpactCard
          :feature="'Contributor'"
          :content="'I don’t have the time to contribute actively, but I have food waste to donate to the movement!'"
          :date="'See More'"
          :image="'ImpactCards/Contributor.jpg'"
          :hoverImage="'ImpactCards/Contributor.jpg'"
        />
      </div>

      <div>
        <div class="mx-auto w-8/12 m-10">
          <div
            class="pointer-events-none inset-x-0 bottom-0 sm:flex justify-center sm:px-6 sm:pb-5 lg:px-8"
          >
            <div
              class="min-w-[80%] sm:flex items-center justify-center gap-x-6 bg-amber-100 px-[20px] py-auto rounded-xl sm:py-4 sm:pl-5 border-black border-4"
            >
              <div
                class="flex text-2xl text-black text-center justify-center items-center"
              >
                <svg
                  viewBox="0 0 2 2"
                  class="inline h-2 w-2 fill-current mt-auto mb-auto"
                  aria-hidden="true"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <p
                  class="mx-[20px] font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-sm text-sm min-w-[200px]"
                >
                  Our Street Cred
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TwitterFeed />
      </div>
      <div class="grid place-items-center">
        <div
          class="py-5 px-10 rounded-xl -m-[20px] border-black border-[3px] bg-white"
          :style="{
            background:
              'linear-gradient(to bottom, white 0%, white 22.5%, rgb(99 49 18) 20%, rgb(99 49 18) 100%)',
          }"
        >
          <h1 class="font-extrabold tracking-tight text-green-900 text-4xl">
            FAQs
          </h1>
          <!-- Accordion Wrapper -->
          <div
            class="transition hover:bg-amber-300 bg-gray-500 rounded-xl text-white mt-2 hover:text-green-900"
          >
            <!-- header -->
            <div
              class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16"
              @click="toggleAccordion('vision')"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>

              <h3 class="font-bold sm:text-xl">
                What is the long-term vision for BlackGold?
              </h3>
            </div>
            <!-- Content -->
            <div
              class="accordion-content px-5 pt-0 overflow-hidden"
              :style="{
                maxHeight: accordionStatus.vision ? 'none' : '0',
              }"
            >
              <p
                class="leading-6 mb-4 p-2 bg-white rounded-2xl text-black font-medium"
              >
                At BlackGold, our mission is driven by the commitment to support
                Singapore's ambitious 30 by 30 food security plan. Our goal is
                to cultivate a productive, resilient, and resource-efficient
                agri-food industry. <br />
                <button
                  class="rounded-full bg-green-900 hover:bg-green-600 text-white font-medium font-lg px-6 py-2 mt-3"
                >
                  Learn more
                </button>
              </p>
            </div>
          </div>
          <div
            class="transition hover:bg-amber-300 bg-gray-500 rounded-xl text-white mt-2 hover:text-green-900"
          >
            <!-- header -->
            <div
              class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16"
              @click="toggleAccordion('vision1')"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>

              <h3 class="font-bold sm:text-xl">
                Who are our community partners?
              </h3>
            </div>
            <!-- Content -->
            <div
              class="accordion-content px-5 pt-0 overflow-hidden"
              :style="{
                maxHeight: accordionStatus.vision1 ? 'none' : '0',
              }"
            >
              <p
                class="leading-6 mb-4 p-2 bg-white rounded-2xl text-black font-medium"
              >
                BlackGold collaborates with various community partners,
                including local environmental organizations, schools, and
                neighborhood associations. These partners help us organize
                workshops, awareness campaigns, and community composting
                programs. By working together, we can expand the reach and
                impact of the initiative. <br />
                <button
                  class="rounded-full bg-green-900 hover:bg-green-600 text-white font-medium font-lg px-6 py-2 mt-3"
                >
                  Learn more
                </button>
              </p>
            </div>
          </div>
          <div
            class="transition hover:bg-amber-300 bg-gray-500 rounded-xl text-white mt-2 hover:text-green-900"
          >
            <!-- header -->
            <div
              class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16"
              @click="toggleAccordion('vision2')"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>

              <h3 class="font-bold sm:text-xl">
                Is BlackGold open to businesses and organizations?
              </h3>
            </div>
            <!-- Content -->
            <div
              class="accordion-content px-5 pt-0 overflow-hidden"
              :style="{
                maxHeight: accordionStatus.vision2 ? 'none' : '0',
              }"
            >
              <p
                class="leading-6 mb-4 p-2 bg-white rounded-2xl text-black font-medium"
              >
                Yes, BlackGold is open to businesses and organizations
                interested in sustainable waste management practices. We
                encourage local businesses, schools, and institutions to
                participate in our corporate composting programs. By doing so,
                they can reduce their environmental footprint and contribute to
                a greener, more sustainable Singapore. <br />
                <button
                  class="rounded-full bg-green-900 hover:bg-green-600 text-white font-medium font-lg px-6 py-2 mt-3"
                >
                  Learn more
                </button>
              </p>
            </div>
          </div>
          <div
            class="transition hover:bg-amber-300 bg-gray-500 rounded-xl text-white mt-2 hover:text-green-900"
          >
            <!-- header -->
            <div
              class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16"
              @click="toggleAccordion('vision3')"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>

              <h3 class="font-bold sm:text-xl">
                Is BlackGold a government-funded project?
              </h3>
            </div>
            <!-- Content -->
            <div
              class="accordion-content px-5 pt-0 overflow-hidden"
              :style="{
                maxHeight: accordionStatus.vision3 ? 'none' : '0',
              }"
            >
              <p
                class="leading-6 mb-4 p-2 bg-white rounded-2xl text-black font-medium"
              >
                BlackGold is supported by government initiatives and funding in
                partnership with the National Environment Agency (NEA) of
                Singapore. While it receives governmental support, it is also
                dependent on community involvement and contributions from
                participants and sponsors. <br />
                <button
                  class="rounded-full bg-green-900 hover:bg-green-600 text-white font-medium font-lg px-6 py-2 mt-3"
                >
                  Learn more
                </button>
              </p>
            </div>
          </div>
          <div
            class="transition hover:bg-amber-300 bg-gray-500 rounded-xl text-white mt-2 hover:text-green-900"
          >
            <!-- header -->
            <div
              class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16"
              @click="toggleAccordion('vision4')"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>

              <h3 class="font-bold sm:text-xl">
                What support does BlackGold offer to participants?
              </h3>
            </div>
            <!-- Content -->
            <div
              class="accordion-content px-5 pt-0 overflow-hidden"
              :style="{
                maxHeight: accordionStatus.vision4 ? 'none' : '0',
              }"
            >
              <div
                class="leading-6 mb-4 p-2 bg-white rounded-2xl text-black font-medium"
              >
                BlackGold offers a range of support to participants, including:
                <li>
                  Educational resources on composting techniques and best
                  practices.
                </li>
                <li>
                  Access to composting bins and materials at discounted rates.
                </li>
                <li>
                  Workshops, seminars, and community events to enhance
                  composting knowledge.
                </li>
                <li>Assistance in setting up community composting sites.</li>
                <li>
                  Regular updates on the impact of your composting efforts and
                  how they contribute to a greener, more sustainable Singapore.
                </li>

                <button
                  class="rounded-full bg-green-900 hover:bg-green-600 text-white font-medium font-lg px-6 py-2 mt-3"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="col-span-2 p-4"
    ></div>
  </div>
  <Foot />
</template>

<script>
import ImpactCard from "@/components/ImpactCard.vue";
import Foot from "@/components/Footer.vue";
import TwitterFeed from "../components/TwitterFeed.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { auth } from "@/utils/firebase";

const words = ["Black Gold"];
const typeSpeed = 200; // Adjust the speed as needed (in milliseconds)

export default {
  name: "HomepageView",
  components: { ImpactCard, Foot, TwitterFeed },

  setup() {
    const store = useStore();
    console.log(store.state.user);
  },

  data() {
    return {
      typewriterText: "",
      isGoldVisible: false,
      loopTyping: true,
      accordionStatus: {
        vision: false,
        vision1: false,
        vision2: false,
        vision3: false,
        vision4: false,
      },

    };
  },
  methods: {
    toggleAccordion(accordionName) {
      for (const key in this.accordionStatus) {
      if (key !== accordionName) {
        this.accordionStatus[key] = false;
      }
      }
      this.accordionStatus[accordionName] =
        !this.accordionStatus[accordionName];
    },
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
  components: { ImpactCard, Foot, TwitterFeed },
};
</script>
