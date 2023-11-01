<template>
  <div class="grid grid-cols-12 bg-gradient-to-t from-amber-100  to-orange-50 py-5">
    <div class="col-span-2"></div>
    <div class="col-span-8">
      <!-- ADD THE COMPONENTS AND STYLING HERE -->
      <div class="relative isolate py-10 ">
        <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div
            class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 xs:py-0 lg:py-48"
          >
            <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg ">
              <div
                class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2 "
              >

              </div>
              <h2 class="text-7xl font-bold tracking-tight text-gray-900">
                Get in touch.
              </h2>
              <p class="mt-6 text-lg lead ing-8 text-gray-600">
                Have a question, problem or an idea? Let us know.
              </p>
              <dl class="space-y-4 text-base leading-7 text-gray-600">
                <div class="flex">
                  <dt class="flex-none">
                    <span class="sr-only">Email</span>
                  </dt>
                  <dd>
                    <a
                      class="hover:text-gray-900"
                      href="mailto:hello@example.com"
                      >hello@projectblackgold.com</a
                    >
                  </dd>
                </div>
              </dl>
            </div>
          </div>


          <div class="flex min-h-full flex-1 flex-col justify-center sm:px-6 lg:px-8">

<div class="sm:mx-auto sm:w-full sm:max-w-xxl mt-10">
  <div class=" min-w-[400px] bg-white px-6 py-2 shadow-xl sm:rounded-lg sm:px-12 border-4 border-black rounded-3xl">
    <div class="space-y-6 mt-5">

 

      <div class="lg:flex lg:space-x-6">
  <div class="lg:w-1/2">
    <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
    <div class="mt-1">
      <input id="firstName" name="firstName" v-model="firstName" required="" class="block w-full border-0 py-1.5 text-gray-900 shadow-sm border-b-4 border-gray-500 placeholder:text-gray-400 focus:border-b-8 focus:border-gray-600 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out" />
    </div>
  </div>

  <div class="lg:w-1/2 mt-6 lg:mt-0">
    <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
    <div class="mt-1">
      <input id="lastName" name="lastName" v-model="lastName" required="" class="block w-full border-0 py-1.5 text-gray-900 shadow-sm border-b-4 border-gray-500 placeholder:text-gray-400 focus:border-b-8 focus:border-gray-600 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out" />
    </div>
  </div>
</div>




      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-1">
          <input id="email" name="email" type="email" v-model="email" autocomplete="email" required="" class="block w-full border-0 py-1.5 text-gray-900 shadow-sm border-b-4 border-gray-500 placeholder:text-gray-400 focus:border-b-8 focus:border-gray-600 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out" />

        </div>
      </div>

      <div>
    <label for="subject" class="block text-sm font-medium leading-6 text-gray-900">Subject</label>
    <div class="mt-1">
      <input id="subject" name="subject" v-model="subject" required="" class="block w-full border-0 py-1.5 text-gray-900 shadow-sm border-b-4 border-gray-500 placeholder:text-gray-400 focus:border-b-8 focus:border-gray-600 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out" />
    </div>
  </div>


      <div>
  <label for="message" class="block text-sm font-medium leading-6 text-gray-900">Your Message</label>
  <div class="mt-1">
    <textarea id="message" name="message" v-model="message" rows="4" required="" class="block w-full border-0 py-1.5 text-gray-900 shadow-sm border-b-4 border-gray-500 placeholder:text-gray-400 focus:border-b-8 focus:border-gray-600 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out"></textarea>
  </div>
</div>


      <div>
        <button type="submit" @click="sendEmail" class="flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-lg font-semibold leading-6 text-gray-800 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
      </div>
    </div>

    <div>
      <div class="relative mt-10">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-200" />
        </div>

      </div>

    </div>
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
import Foot from "@/components/Footer.vue";
import { Email } from "@/assets/smtp/smtp.js"

export default {
  name: "Communities",
  components: { Foot },

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      subject: "",
    };
  },
  
  methods: {
    sendEmail() {
      // send message to email
      
      // Email.send({
      //   SecureToken: "YOUR_SMTP_SERVER_SECURITY_TOKEN",
      //   To: "broooyannn@gmail.com",
      //   From: this.email,
      //   FirstName: this.firstName,
      //   LastName: this.lastName,
      //   Subject: this.subject,
      //   Body: this.message,
      // }).then(() => alert("Thank you for your message! We will get back to you soon."));

      // refresh the input fields
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.message = "";
      this.subject = "";
      this.$toast.success("Thank you for your message! We will get back to you soon" + "!");
      
    },
  },


};
</script>
