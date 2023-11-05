<template>
  <div
    class="rounded-3xl border-4 border-orange-800 py-6 mt-5 min-w-[200px] shadow-2xl hover:-translate-y-1"
  >
    <!-- <img src="https://plus.unsplash.com/premium_photo-1681909647499-603f9a685cf4?auto=format&fit=crop&q=80&w=2918&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" /> -->

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto w-full lg:mx-0">
        <h1
          class="drop-shadow-xl text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl lg:min-w-[300px] max-h-[50px] min-h-[90px] typewriter"
        >
          <span
            v-for="(char, index) in typewriterText"
            :key="index"
            :class="{ 'text-amber-400': index >= typewriterText.length - 7 }"
            >{{ char }}</span
          >
        </h1>
        <p class="mt-3 text-lg leading-8 text-black">
          We're thrilled to welcome you to our community, where like-minded
          individuals come together to share, learn, and grow. Whether you're
          passionate about a hobby, a cause, or simply want to connect with your
          neighbors, this is the place for you.
        </p>
      </div>
      <div class="mx-auto mt-2 max-w-2xl lg:mx-0 lg:max-w-none">
        <dl
          class="mt-4 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            v-for="stat in stats"
            :key="stat.name"
            class="flex flex-col-reverse"
          >
            <dt class="text-base leading-7 text-black">{{ stat.name }}</dt>
            <dd class="text-3xl font-bold leading-9 tracking-tight text-black">
              {{ stat.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-[20px]">
    <h1
      class="pt-4 mb-4 text-center font-extrabold leading-none tracking-tight text-gray-900 text-3xl lg:text-4xl dark:text-white"
    >
      Begin by selecting a community nearest to you!
    </h1>
  </div>
</template>

<script setup>
const stats = [
  { name: "Communities Formed", value: "15" },
  { name: "Volunteers", value: "300+" },
  { name: "Events Held", value: "40" },
  { name: "People Reached", value: "1000+" },
];
const words = ["Welcome Aboard!"];
const typeSpeed = 200; // Adjust the speed as needed (in milliseconds)
import { ref, onBeforeUnmount } from "vue";

const typewriterText = ref(""); // Define the reactive typewriterText property
const isGoldVisible = ref(false); // Define the reactive isGoldVisible property
const loopTyping = ref(true); // Define the reactive loopTyping property

// Define the delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Type function
const type = async () => {
  while (loopTyping.value) {
    for (const word of words) {
      let isDeleting = false;
      let j = 0;

      while (j >= 0 && j < word.length) {
        typewriterText.value = word.substring(0, j + 1);
        isGoldVisible.value = word[j] === "N";

        if (isDeleting) {
          await delay(typeSpeed / 2);
        } else {
          await delay(typeSpeed);
        }

        j = isDeleting ? j - 1 : j + 1;
      }

      if (j === word.length) {
        await delay(typeSpeed * 2);
      }

      while (j >= 0) {
        typewriterText.value = word.substring(0, j);
        isGoldVisible.value = word[j] === "N";

        await delay(typeSpeed / 2);
        j--;
      }
    }
  }
};

// Stop the loop when the component is unmounted
onBeforeUnmount(() => {
  loopTyping.value = false;
});

// Start the typing process when the component is mounted
type();
</script>
