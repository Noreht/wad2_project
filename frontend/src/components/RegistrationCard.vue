<template>
  <div class="flex min-h-full flex-1 flex-col justify-center sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-xl">
      <div class="bg-white px-6 py-2 shadow sm:rounded-lg sm:px-12">
        <img class="h-20 w-auto" src="BlackGoldIcon.svg" alt="BlackGold Icon" />
        <h1
          class="mt-6 text-left text-5xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Register an account
        </h1>
        <h2
          class="mt-6 text-left text-2xl leading-9 tracking-tight text-gray-900"
        ></h2>
        <div class="space-y-6 mt-5">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                v-model="email"
                autocomplete="email"
                required=""
                class="block w-full border-0 py-1.5 text-gray-900 shadow-sm border-b-4 placeholder:text-gray-400 focus:border-b-8 focus:border-gray-600 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out"
              />
            </div>
            <p v-if="!validEmail" class="text-red-500 text-sm mt-2">
              Email is invalid.
            </p>
          </div>

          <div>
            <label
              for="fullname"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Full Name</label
            >
            <div class="mt-1">
              <input
                id="fullname"
                name="fullname"
                type="text"
                v-model="fullname"
                required=""
                class="block w-full border-0 py-1.5 text-gray-900 shadow-sm border-b-4 border-gray-500 placeholder:text-gray-400 focus:border-b-8 focus:border-gray-600 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                v-model="password"
                autocomplete="current-password"
                required=""
                class="block w-full border-0 py-1.5 text-gray-900 shadow-sm border-b-4 border-gray-500 placeholder:text-gray-400 focus:border-b-8 focus:border-gray-600 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out"
              />
            </div>
          </div>

          <div>
            <label
              for="confirmpassword"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Confirm Password</label
            >
            <div class="mt-1">
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                v-model="confirmPassword"
                autocomplete="current-password"
                required=""
                class="block w-full border-0 py-1.5 text-gray-900 shadow-sm border-b-4 border-gray-500 placeholder:text-gray-400 focus:border-b-8 focus:border-gray-600 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out"
              />
            </div>
            <p v-if="!passwordsMatch" class="text-red-500 text-sm mt-2">
              Passwords do not match.
            </p>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="acceptTandC"
                v-model="acceptTandC"
                name="acceptTandC"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600"
              />
              <label
                for="acceptTandC"
                class="ml-3 block text-sm leading-6 text-gray-900 border-b border-gray-900 hover:border-b-4 transition-all duration-200 ease-in-out"
              >
                <a
                  data-modal-target="medium-modal"
                  data-modal-toggle="medium-modal"
                  class="cursor-pointer"
                >
                  I agree to the terms and conditions
                </a>
              </label>
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
                        Terms and Conditions
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
                      </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                      <p
                        class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                      >
                        YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                        EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                        EEEEEEEEEEEEEEEEEEEEEEEESSSSSSSSSS
                        SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
                        SSSSSSSSSSSSSSSSHHHHHHHHHHHHHHHHHH
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
                      >
                        I ACCEPT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              v-if="
                !validEmail ||
                !passwordsMatch ||
                this.password === '' ||
                this.confirmPassword === '' ||
                this.email === '' ||
                this.fullname === '' ||
                !acceptTandC
              "
              disabled
              class="flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-lg font-semibold leading-6 text-gray-600 opacity-50 cursor-not-allowed shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
            <button
              type="submit"
              v-else="passwordsMatch"
              @click="register"
              class="flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-lg font-semibold leading-6 text-gray-800 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div >
          <div class="relative mt-8">
            <div
              class="relative flex justify-center text-sm font-medium leading-6"
            >
              <span class="bg-white px-6 text-gray-900">Or continue with</span>
            </div>
          </div>

          <div class="flex mt-6 justify-center space-x-5">
            <a
              href="#"
              class="flex items-center justify-center rounded-full bg-[#f7f8fb] w-12 h-12 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]"
            >
              <img
                src="LoginCard/GoogleLogo.svg"
                alt="Discord Logo"
                class="h-6 w-6"
              />
            </a>

            <a
              href="#"
              class="flex items-center justify-center rounded-full bg-[#E0E9FF] w-12 h-12 text-[#4285F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]"
            >
              <img
                src="LoginCard/FacebookLogo.svg"
                alt="Facebook Logo"
                class="w-full h-full"
              />
            </a>

            <a
              href="#"
              class="flex items-center justify-center rounded-full bg-[#f7f8fb] w-12 h-12 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]"
            >
              <img
                src="LoginCard/DiscordLogo.svg"
                alt="Discord Logo"
                class="h-8 w-8"
              />
            </a>

            <a
              href="#"
              class="flex items-center justify-center rounded-full bg-[#000000] w-12 h-12 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]"
            >
              <img
                src="LoginCard/XLogo.svg"
                alt="Discord Logo"
                class="h-6 w-6"
              />
            </a>
          </div>
          <div class="w-full flex items-center justify-center">
          <a
            href="/login"
            class="  my-3 w-[50%] rounded-md bg-amber-400 px-3 py-1.5 text-lg font-semibold leading-6 text-gray-800 shadow-sm hover:bg-amber-500 text-center"
          >
            I have an account!
          </a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "flowbite/dist/flowbite.min.js";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getFirebaseErrorMessage } from "@/utils/firebase";

export default {
  name: "RegistrationCard",

  setup() {
    const store = useStore();
    const router = useRouter();
    return { store, router };
  },

  data() {
    return {
      email: "",
      fullname: "",
      password: "",
      confirmPassword: "",
      acceptTandC: false,
    };
  },

  computed: {
    passwordsMatch() {
      return this.password === this.confirmPassword;
    },

    validEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (this.email === "") {
        return true;
      }

      return emailRegex.test(this.email);
    },
  },

  methods: {
    async register() {
      try {
        await this.store.dispatch("register", {
          email: this.email,
          password: this.password,
          fullname: this.fullname,
        });
        this.router.push("/login");
        this.$toast.success("Account created successfully!");
      } catch (err) {
        this.registerError = getFirebaseErrorMessage(err);
        this.$toast.error(this.registerError);
      }
    },
  },
};
</script>
