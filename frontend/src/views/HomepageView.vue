<template class="min-w-[350px]">
  <!-- <div>
    <div class="rounded-lg pl-20 mr-20 border-4 border-slate-500 px-6 py-24 sm:py-32 lg:px-8 mt-5">



    </div>
</div> -->

  <div
    class="grid grid-cols-12 bg-gradient-to-t from-green-300 to-orange-50"
  >
    <div class="col-span-2 p-4"></div>
    <div class="col-span-8 p-4 align-center">
      <!-- ADD THE COMPONENTS AND STYLING HERE -->

      <div
        class="rounded-3xl border-4 border-orange-900 mt-5 min-w-[200px] shadow-2xl hover:-translate-y-1"
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
          <h1
            class="drop-shadow-md text-6xl font-bold tracking-tight text-gray-900 sm:text-8xl"
          >
            Black <span class="text-amber-400">Gold</span>
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
            href="#"
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

      <div class="lg:flex gap-5 lg:content-stretch">
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
              class="min-w-[80%] sm:flex items-center justify-center gap-x-6 bg-amber-100 px-[20px] py-auto rounded-xl sm:py-4 sm:pl-5  border-black border-4"
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
                <p class="mx-[20px] font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-sm text-sm min-w-[200px]">Our Street Cred</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-2 p-4"></div>
  </div>
  <Foot />
</template>

<script>
import ImpactCard from "@/components/ImpactCard.vue";
import Foot from "@/components/Footer.vue";

export default {
  name: "HomepageView",
  components: { ImpactCard, Foot },
};
</script>
