<template>
  <div class="rounded-b-3xl border-4 border-green-800 h-[630px] overflow-y-scroll">
    <!-- Community Administrators -->

    <div class="bg-white sm:pt-3">
      <div class="mx-auto grid gap-x-8 gap-y-5 px-6 lg:px-8">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Administrators
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
  </div>
</template>

<script setup>
const admins = [
  {
    name: "Cai Jun",
    role: "Head Chief",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Jeremy",
    role: "Farm Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const members = [
  {
    name: "Cheryl",
    role: "Volunteer",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Aurelia",
    role: "Volunteer",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
</script>
