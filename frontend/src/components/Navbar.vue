<template>
  <Disclosure as="nav" class="bg-orange-50 sticky top-0 z-50" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0">
            <img class="h-12 w-auto mt-3" src="BlackGoldIcon.svg" alt="Icon" />
          </div>
          <div class="hidden lg:ml-6 lg:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <!-- <a href="/home" :class="getClass('/home')">Home</a> -->

              <!-- if isLoggedIn -->
              <a
                v-if="checkPageLoggedIn"
                href="/communitypage"
                :class="getClass('/communitypage')"
                >Community Page
              </a>

              <a
                v-else=""
                href="/home" 
                :class="getClass('/home')">
                Home
              </a>
              
              <a href="/resourceguides" :class="getClass('/resourceguides')"
                >Resources & Guides</a
              >
              <!-- <a href="/communities" :class="getClass('/communities')">Communities</a>
               -->
              <a
                v-if="checkPageLoggedIn"
                href="/communities"
                :class="getClass('/communities')"
                >Communities</a
              >
              <a
                v-else=""
                data-modal-target="medium-modal"
                data-modal-toggle="medium-modal"
                :class="getClass('/communities')"
                >Communities</a
              >

              <div
                id="medium-modal"
                tabindex="-1"
                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div
                  class="relative w-full max-w-lg max-h-full border-[5px] border-black rounded-lg"
                >
                  <!-- Modal content -->
                  <div
                    class="relative bg-[#FFF8EB] rounded shadow dark:bg-gray-700"
                  >
                    <!-- Modal header -->
                    <div
                      class="flex items-center justify-between p-5 border-b dark:border-gray-600"
                    >
                      <h3
                        class="text-xl font-medium text-gray-900 dark:text-white"
                      >
                        Hold up... You need to log in to an account first!
                      </h3>
                      <button
                        type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="medium-modal"
                      >
                        <svg
                          class="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                      <p
                        class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                      >
                        To embark on your journey and discover the vibrant world
                        of composting communities in Singapore, start by logging
                        in if you're already part of our community. If you
                        haven't registered yet, it's a breeze, and registration
                        unlocks a myriad of benefits and opportunities. Join us
                        now and explore the wonderful world of composting
                        collaborations!
                      </p>
                    </div>

                    <!-- Modal footer -->
                    <div
                      class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                    >
                      <button
                        data-modal-hide="medium-modal"
                        type="button"
                        class="text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-gray-900 hover:border-gray-900 hover:border-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-400 dark:hover:bg-amber-500 dark:focus:ring-amber-800 transition-all duration-200 ease-in-out"
                        @click="$router.push('/login')"
                      >
                        Login
                      </button>
                      <button
                        data-modal-hide="medium-modal"
                        type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-900 hover:border-gray-900 hover:border-4 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-black dark:hover:text-white dark:hover:bg-black dark:focus:ring-gray-900 transition-all duration-200 ease-in-out"
                        @click="router.push('/registration')"
                      >
                        Register Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a href="/events" :class="getClass('/events')">Events</a>
              <a href="/contact" :class="getClass('/contact')">Contact</a>
            </div>
          </div>
        </div>
        <div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
          <a
            href="https://donate.stripe.com/test_7sIeVDeaU6FoaEo002"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-amber-400 text-white text-xl font-medium rounded-md px-4 py-2 flex items-center justify-center hover:bg-yellow-600 transition duration-300 ease-in-out shadow-lg min-w-[215px]"
          >
            <span class="text-3xl mr-1">☕</span>
            Buy us a coffee
          </a>
        </div>
        <div class="flex lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-amber-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="hidden lg:ml-4 lg:block">
          <div
            class="hidden lg:ml-4 lg:block"
            v-if="checkPageLoggedIn !== null"
          >
            <div class="flex items-center">
              <!-- Profile dropdown if logged in -->
              <Menu
                as="div"
                v-if="checkPageLoggedIn"
                class="relative ml-4 flex-shrink-0"
              >
                <div>
                  <MenuButton
                    class="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span class="absolute -inset-1.5" />
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                        >Your Profile</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                        >Settings</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        @click.prevent="signOut"
                        :class="[
                          active
                            ? 'bg-gray-100 cursor-pointer'
                            : 'cursor-pointer',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                        >Sign Out</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
              <!-- End of Profile Dropdown if logged in-->

              <!-- Profile dropdown if not logged in -->
              <Menu as="div" v-else="" class="relative ml-4 flex-shrink-0">
                <div>
                  <div
                    class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end"
                  >
                    <a
                      href="/login"
                      rel="noopener noreferrer"
                      class="bg-orange-400 text-white text-xl font-medium rounded-md px-4 py-2 flex items-center justify-center hover:bg-yellow-600 transition duration-300 ease-in-out shadow-lg min-w-[100px]"
                    >
                      Log In
                    </a>
                  </div>
                </div>
              </Menu>
              <!-- End of Profile dropdown if not logged in -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <DisclosureButton
          as="a"
          href="/home"
          :class="getClassResponsive('/home')"
          >Home</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="/resourceguides"
          :class="getClassResponsive('/resourceguides')"
          >Resources & Guides</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="/communities"
          :class="getClassResponsive('/communities')"
          >Communities</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="/events"
          :class="getClassResponsive('/events')"
          >Events</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="/contact"
          :class="getClassResponsive('/contact')"
          >Contact</DisclosureButton
        >
      </div>

      <!-- Responsive If Logged in Start-->
      <div v-if="checkPageLoggedIn" class="border-t border-gray-700 pb-3 pt-4">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">Tom Cook</div>
            <div class="text-sm font-medium text-gray-400">tom@example.com</div>
          </div>
        </div>
        <div class="mt-3 space-y-1 px-2">
          <DisclosureButton
            as="a"
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Your Profile</DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Settings</DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Sign out</DisclosureButton
          >
        </div>
      </div>
      <!-- Responsive If Logged in End-->

      <!-- Responsive If NOT Logged in Start-->

      <div v-else="" class="border-t border-gray-700">
        <div class="mt-3 space-y-1 px-2">
          <DisclosureButton
            as="a"
            href="/login"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Log In</DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="/registration"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Sign Up</DisclosureButton
          >
        </div>
      </div>

      <!-- Responsive If NOT Logged in End-->
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { isLoggedIn } from "../utils/firebase";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const checkPageLoggedIn = ref(null);

const signOut = async () => {
  await store.dispatch("logOut");
  router.push("/login");
};

onMounted(async () => {
  const loggedIn = await isLoggedIn();
  checkPageLoggedIn.value = loggedIn;
});

function getClass(path) {
  if (window.location.pathname === path) {
    return " text-xs text-center rounded-md bg-amber-400 px-3 py-2 xl:text-lg font-medium text-white ";
  } else {
    return "text-center min-w-[30px] rounded-md px-3 py-2 lg:text-xs xl:text-lg font-medium text-trueGray-900 hover:bg-amber-300 hover:text-white duration-200 ease-in-out";
  }
}

function getClassResponsive(path) {
  if (window.location.pathname === path) {
    return "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white";
  } else {
    return "block rounded-md px-3 py-2 text-base font-medium text-trueGray-900 hover:bg-gray-700 hover:text-white hover:delay-150 duration-200 ease-in-out";
  }
}

// Check if the page is logged in
// async function checkPageLoggedIn() {
//   const loggedIn = await isLoggedIn();
//   console.log(loggedIn);
//   return loggedIn;
// }

//
</script>
