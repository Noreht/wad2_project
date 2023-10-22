<template>
  <div class="grid grid-cols-12 bg-gradient-to-t from-amber-300 to-orange-50">
    <div class="col-span-2 p-4"></div>
    <div class="col-span-8 p-4 place-content-center">
      <!-- ADD THE COMPONENTS AND STYLING HERE -->
      <h1 class="text-center text-5xl font-semibold">
        How to make a Basic Compost?
      </h1>
      <button
        class="mt-6 xs:text-base rounded-md bg-amber-400 px-3.5 py-2.5 text-3xl font-semibold transition duration-300 ease-in-out text-black drop-shadow-lg hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
      >
        Back
      </button>
      <!-- <a
            href="#"
            class="  xs:text-base rounded-md bg-amber-400 px-3.5 py-2.5 text-3xl font-semibold transition duration-300 ease-in-out text-black drop-shadow-lg hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Back
        </a> -->
      <div
        class="rounded-3xl border-4 border-orange-800 mt-5 min-w-[200px] shadow-2xl"
      >
        <h2 class="mt-4 pl-8 text-5xl font-semibold">Do it together!</h2>
        <h3 class="mt-4 pl-8 text-3xl font-semibold">What you'll need:</h3>
        <div class="md:grid md:grid-cols-4">
          <div class="mb-4 mt-4 space-y-5">
            <div class="pl-8 relative flex items-start">
              <div class="flex h-6 items-center">
                <input
                  id="garden"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div class="ml-3 text-xl leading-6">
                <label for="garden" class="font-normal text-gray-500"
                  >Garden soil</label
                >
              </div>
            </div>
            <div class="pl-8 relative flex items-start">
              <div class="flex h-6 items-center">
                <input
                  id="bucket"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div class="ml-3 text-xl leading-6">
                <label for="bucket" class="font-normal text-gray-500"
                  >Medium-sized bucket</label
                >
              </div>
            </div>
            <div class="pl-8 relative flex items-start">
              <div class="flex h-6 items-center">
                <input
                  id="fork"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div class="ml-3 text-xl leading-6">
                <label for="fork" class="font-normal text-gray-500"
                  >Kitchen fork</label
                >
              </div>
            </div>
          </div>

          <div class="mt-4 space-y-5">
            <div class="pl-8 relative flex items-start">
              <div class="flex h-6 items-center">
                <input
                  id="leaves"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div class="ml-3 text-xl leading-6">
                <label for="leaves" class="font-normal text-gray-500"
                  >Dry leaves</label
                >
              </div>
            </div>
            <div class="pl-8 relative flex items-start">
              <div class="flex h-6 items-center">
                <input
                  id="water"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div class="ml-3 text-xl leading-6">
                <label for="water" class="font-normal text-gray-500"
                  >Water</label
                >
              </div>
            </div>
          </div>
          <div class="md:relative col-span-2">
            <div class="md:absolute bottom-3 right-3">
              <img class="w-[100%]" src="/bucketandwater.png" />
            </div>
          </div>
        </div>

        <div class="mx-5 mb-4">
          <StepCards
            :header="'Step 1 : Collect and prepare your scraps'"
            :body="'Collect all fruit and vegetable scraps. The best kitchen scraps to add to your compost pile are those fruit and vegetable scraps because they break down quickly and do not attract rodents and insects in the same way that animal products do. Add all of your fruit and vegetable scraps, including those that have been cooked.'"
            :image="'/steps/step1image.png'"
          />
        </div>

        <div class="mx-5 mb-4">
          <StepCards
            :header="'Step 2 : Setting up your Bin'"
            :body="'Begin the pile with garden soil  or other dry yard debris that you have available. Ideally this layer should be a few inches deep and will give the pile a good, solid base. Next, add the fruits and vegetables on top of the layer of soil. Lastly, finish off with a layer of dry leaves again.'"
          />
        </div>

        <div class="mx-5 mb-4">
          <StepCards
            :header="'Step 3: Caring for your Bin'"
            :body="'Keep your compost moist. In order for biodegradable items to break down quickly, they need to be in contact with moisture. The easiest way to do this is to sprinkle water on your compost. After a week, mix the compost and repeat once every week. Your compost will be turn deep brown throughout after 3 months and it is ready to be used.'"
          />
        </div>
      </div>
    </div>
    <div class="col-span-2 p-4"></div>
  </div>
</template>

<script>
import StepCards from "@/components/StepCards.vue";
import Foot from "@/components/Footer.vue";

export default {
  name: "BasicCompostView",
  components: { StepCards, Foot },
};
</script>
