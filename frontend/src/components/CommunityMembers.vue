<template>
  <div >
    <!-- Community Administrators -->

    <div class="bg-white sm:pt-3">
      <div class="mx-auto grid gap-x-8 gap-y-5 px-6 lg:px-8">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Admin and Moderators
          </h2>
          <p class="mt-3 text-lg leading-8 text-gray-600">
            Admins can create new events and control community settings
          </p>
        </div>
        <ul
          role="list"
          class="grid gap-x-5 gap-y-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-y-1"
        >
          <li v-for="person in admins" :key="person.name">
            <div class="flex items-center gap-x-6">
              <img
                class="h-24 w-24 rounded-full"
                :src="person.imageUrl"
                alt=""
              />
              <div>
                <h3
                  class="text-base font-semibold leading-7 tracking-tight text-black"
                >
                  {{ person.name }}
                </h3>
                <p class="text-sm font-semibold leading-6 text-amber-600">
                  {{ person.role }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <hr class="border-2 max-w-[97%] m-auto mt-7 border-green-800" />

    <!-- Community Volunteers -->

    <div class="bg-white mt-6 pb-6 rounded-b-3xl">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Members
          </h2>
          <p class="mt-3 text-lg leading-8 text-gray-600">
            Thank you all for your constant support!
          </p>
        </div>
        <ul
          role="list"
          class="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          <li v-for="person in members" :key="person.name">
            <img
              class="mx-auto h-24 w-24 rounded-full"
              :src="person.imageUrl"
              alt=""
            />
            <h3
              class="text-base font-semibold leading-7 tracking-tight text-black"
            >
              {{ person.name }}
            </h3>
            <p class="text-sm font-semibold leading-6 text-amber-600">
              {{ person.role }}
            </p>
          </li>
        </ul>
      </div>
    </div>

    <hr class="border-2 max-w-[97%] m-auto mt-7 border-green-800" />

    <div class="bg-white mt-6 pb-6 rounded-b-3xl">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            New Members
          </h2>
          <p class="mt-3 text-lg leading-8 text-gray-600">
            Welcome our new peeps!
          </p>
        </div>
        <ul
          role="list"
          class="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          <li v-for="person in members_new" :key="person.name">
            <img
              class="mx-auto h-24 w-24 rounded-full"
              :src="person.imageUrl"
              alt=""
            />
            <h3
              class="text-base font-semibold leading-7 tracking-tight text-black"
            >
              {{ person.name }}
            </h3>
            <p class="text-sm font-semibold leading-6 text-amber-600">
              {{ person.role }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const admins = [
  {
    name: "Cai Jun",
    role: "Head Chief",
    imageUrl:
      "https://picsum.photos/200/300?random=1",
  },
  {
    name: "Jeremy",
    role: "Farm Manager",
    imageUrl:
      "https://picsum.photos/200/300?random=2",
  },
];

const members = [
{
    name: "Bryan T (You)",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=3",
  },
  {
    name: "Shanmugan.K",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=4",
  },
  {
    name: "Tharmen.S",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=5",
  },
  {
    name: "Dasmond Lee",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=6",
  },
  {
    name: "Kuan Yeew Li ",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=7",
  },{
    name: "Lo Thar Kiang",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=8",
  },
  {
    name: "Li Xien Loong",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=9",
  },{
    name: "Li Xien Yang",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=10",
  },
  {
    name: "Tan Keen Lien",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=11",
  },{
    name: "Ng Kock Soong",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=12",
  },
  {
    name: "Gam Kin Yong",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=13",
  },{
    name: "Lee Bi Wa",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=14",
  },
  {
    name: "Josephin Teow",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=15",
  },{
    name: "Pritnam Singh",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=16",
  },
  {
    name: "Nikko Siah",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=17",
  },{
    name: "V. Balakrishman",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=18",
  },
  {
    name: "Murally Pilai",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=19",
  },{
    name: "Chong Man Whye",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=20",
  },
  {
    name: "Halima Yakult",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=21",
  },{
    name: "S. Miswaran",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=22",
  },
  {
    name: "Yusof Isak",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=23",
  },{
    name: "Lily Keong",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=24",
  },
  {
    name: "Priyash Guptu",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=25",
  },{
    name: "Tan Cheong Bock",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=26",
  },
  {
    name: "Jamuus Leem",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=27",
  },{
    name: "Tan Chuen Jing",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=28",
  },
  {
    name: "Raisah Kan",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=29",
  },{
    name: "Ho Cha Ching",
    role: "Volunteer",
    imageUrl:
      "https://picsum.photos/200/300?random=30",
  },
  
];
const members_new = [
  {
    name: "Ong Ye Kang",
    role: "Joined 3 days ago",
    imageUrl:
      "https://picsum.photos/200/300?random=31",
  },
  {
    name: "Lowrance Wong",
    role: "Joined 4 days ago",
    imageUrl:
      "https://picsum.photos/200/300?random=32",
  },
  {
    name: "Heng Swi Kiat",
    role: "Joined 4 days ago",
    imageUrl:
      "https://picsum.photos/200/300?random=33",
  },
  {
    name: "Silva Lim",
    role: "Joined 4 days ago",
    imageUrl:
      "https://picsum.photos/200/300?random=34",
  },{
    name: "Indranee Rajee",
    role: "Joined 4 days ago",
    imageUrl:
      "https://picsum.photos/200/300?random=35",
  },
  {
    name: "Li Xien Loong",
    role: "Joined 4 days ago",
    imageUrl:
      "https://picsum.photos/200/300?random=36",
  },
];
</script>
