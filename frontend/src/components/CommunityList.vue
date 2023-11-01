<template>
  <ul role="list" class="bg-amber-400 rounded-2xl border-yellow-700 border-4 mb-[20px] px-[25px] py-[10px]">
    <li
      v-for="community in communityList"
      class="my-2"
    >
    <div class="rounded-xl bg-[rgb(255,255,255,0.8)] flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap hover:-translate-y-1 hover:scale-[103%]">
      <div >
        <p class="pl-5 text-xl font-semibold leading-6 text-gray-900">
          <a
            @click="$emit('toggleModal', { Title: community.name, Description: community.desc})"
            class="hover:underline"
            >{{ community.name }}</a
          >
        </p>
        <div
          class="pl-5 mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500"
        >
          <p>
            <a class="hover:underline text-base">{{
              community.cc
            }}</a>
          </p>
          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <p>
            <time :datetime="community.dateTime" class="text-base">
              Active since {{ community.age }}</time
            >
          </p>
        </div>
      </div>
      <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto pr-3">
        <div class="flex -space-x-0.5 pl-[20px]">
          <dt class="sr-only">Commenters</dt>
          <dd v-for="volunteer in community.volunteerPreview" >
            <img
              class="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
              :src="volunteer.imageUrl"
              :alt="volunteer.name"
            />
          </dd>
        </div>
        <!-- <div class="flex w-16 gap-x-2.5">
          <dt>
            <span class="sr-only">Total volunteers</span>
          </dt>
          <dd class="text-sm leading-6 text-gray-900">
            {{ community.totalVolunteers }}
          </dd>
        </div> -->
      </dl>
      </div>
    </li>
  </ul>
</template>

<script>
import { ChatBubbleLeftIcon, CheckCircleIcon } from "@heroicons/vue/24/outline";
import { ref, onMounted } from "vue";
import {getAllCommunities} from "@/utils/firebase";


  export default {
    async setup() {
          //console.log("Community Setup Initiated")
          const communityList = await getAllCommunities();
          //console.log(communityList[0])

          return {
              communityList
          };
          
      },
  }


function toggleModal() {
  console.log("open modal child initiated");
  emit("openModal", true);
}



const communities = [
  {
    id: 1,
    title: "Punggol Warriors Community",
    href: "#",
    location: { name: "Punggol", href: "#" },
    age: "Aug 2017",
    dateTime: "2023-01-23T22:34Z",
    status: "active",
    totalComments: 24,
    commenters: [
      {
        id: 12,
        name: "Emma Dorsey",
        imageUrl:
          "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 6,
        name: "Tom Cook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 4,
        name: "Lindsay Walton",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 16,
        name: "Benjamin Russel",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 23,
        name: "Hector Gibbons",
        imageUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  {
    id: 2,
    title: "Foodies of the West",
    href: "#",
    location: { name: "Jurong West", href: "#" },
    age: "Jul 2020",
    dateTime: "2023-01-23T19:20Z",
    status: "active",
    totalComments: 6,
    commenters: [
      {
        id: 13,
        name: "Alicia Bell",
        imageUrl:
          "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 16,
        name: "Benjamin Russel",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 3,
        name: "Dries Vincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  {
    id: 3,
    title: "Champions of the East",
    href: "#",
    location: { name: "Pasir Ris", href: "#" },
    age: "Nov 2019",
    dateTime: "2023-01-22T12:59Z",
    status: "resolved",
    totalComments: 22,
    commenters: [
      {
        id: 19,
        name: "Lawrence Hunter",
        imageUrl:
          "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 21,
        name: "Angela Fisher",
        imageUrl:
          "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 14,
        name: "Jenny Wilson",
        imageUrl:
          "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 16,
        name: "Benjamin Russel",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  {
    id: 4,
    title: "Walled Community",
    href: "#",
    location: { name: "Yishun", href: "#" },
    age: "Jul 2018",
    dateTime: "2023-01-20T10:04Z",
    status: "resolved",
    totalComments: 8,
    commenters: [
      {
        id: 10,
        name: "Emily Selman",
        imageUrl:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 11,
        name: "Kristin Watson",
        imageUrl:
          "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  {
    id: 5,
    title: "Journey to the West",
    href: "#",
    location: { name: "Chua Chu Kang", href: "#" },
    age: "Jan 2019",
    dateTime: "2023-01-20T20:12Z",
    status: "active",
    totalComments: 15,
    commenters: [
      {
        id: 11,
        name: "Kristin Watson",
        imageUrl:
          "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 6,
        name: "Tom Cook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 10,
        name: "Emily Selman",
        imageUrl:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 16,
        name: "Benjamin Russel",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
];
</script>
