<template>
  <div>
    <div class="bg-white mt-6 pb-6 rounded-b-3xl">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Media
          </h2>
          <p class="mt-3 text-lg leading-8 text-gray-600">
            Our Sweet Memories!
          </p>
        </div>
        <ul
          role="list"
          class="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-2 gap-y-2 text-center sm:grid-cols-2 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          <li
            v-for="person in media"
            :key="person.name"
            class="border-2 rounded bg-white border-gray-300 p-2 h-64 hover:-translate-y-10 hover:scale-150"
          >
            <div
              :style="{
                backgroundImage: `url(${person.imageUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }"
              class="h-full w-full flex"
            >
              <div class="bg-white/80 w-full self-end">
                <h3
                  class="text-base font-semibold leading-7 tracking-tight text-black self-align-bottom px-1"
                >
                  {{ person.name
                  }}<span class="text-base font-bold leading-6 text-amber-700">
                    ({{ person.role }})
                  </span>
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const media = [
  {
    name: "Our friendly Minister Dasmond Lee loves dropping by!",
    role: "16 July 2023",
    imageUrl: "/COM-11.jpg",
  },
  {
    name: "Minsister Teo came by today for seedling transfer!",
    role: "15 May 2023",
    imageUrl: "/COM-10.jpg",
  },
  {
    name: "Minister Masagos and Amy Khor came by today! ",
    role: "14 Mar 2023",
    imageUrl: "/COM-9.jpg",
  },
  {
    name: "NEA came by to see how well we are doing! (Audit just say la)",
    role: "2 Feb 2023",
    imageUrl: "/COM-8.jpg",
  },
  {
    name: "Our volunteer brought a friend visting for an exchange!",
    role: "10 Jan 2023",
    imageUrl: "/COM-7.jpg",
  },
  {
    name: "What a way to end the year! New compost set up!",
    role: "31 Dec 2022",
    imageUrl: "/COM-6.jpg",
  },
  {
    name: "Friendly Ministers Gan KY and Dasmond Lee",
    role: "28 Dec 2022",
    imageUrl: "/COM-5.jpg",
  },
  {
    name: "Harvest day with Senior Minister Goh!",
    role: "13 Dec 2022",
    imageUrl: "/COM-4.jpg",
  },
  {
    name: "What a great pleaseure to host DPM Heng SK!",
    role: "18 Nov 2022",
    imageUrl: "/COM-3.jpg",
  },

  {
    name: "PM Lee HL visited us for a fun day tour!",
    role: "15 Oct 2022",
    imageUrl: "/COM-2.jpg",
  },

  {
    name: "Wonderful day with Minister Kaw Boon Wan! ",
    role: "20 Sept 2022",
    imageUrl: "/COM-1.jpg",
  },
];
</script>
