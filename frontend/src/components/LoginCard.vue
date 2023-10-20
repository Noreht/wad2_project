<template>
  <div class="flex min-h-full flex-1 flex-col justify-center sm:px-6 lg:px-8 ">

    <div class="sm:mx-auto sm:w-full sm:max-w-xxl ">
      <div class="bg-white px-6 py-2 shadow sm:rounded-lg sm:px-12 ">
      <img class=" h-20 w-auto" src="BlackGoldIcon.svg" alt="BlackGold Icon" />
        <h1 class="mt-6 text-left text-5xl font-bold leading-9 tracking-tight text-gray-900">Log In</h1>
        <h2 class="mt-6 text-left text-2xl leading-9 tracking-tight text-gray-900">Welcome back!</h2>
        <form class="space-y-6 mt-5" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-1">
              <!-- <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full border-0 py-1.5 text-gray-900 shadow-sm border-b-4 border-gray-500 placeholder:text-gray-400 focus:border-b-8 focus:border-gray-600 focus:ring-0 sm:text-sm sm:leading-6" /> -->
              <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full border-0 py-1.5 text-gray-900 shadow-sm border-b-4 border-gray-500 placeholder:text-gray-400 focus:border-b-8 focus:border-gray-600 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out" />

            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="mt-1">
              <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full border-0 py-1.5 text-gray-900 shadow-sm border-b-4 border-gray-500 placeholder:text-gray-400 focus:border-b-8 focus:border-gray-600 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600" />
              <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-900">Remember me</label>
            </div>

            <div class="text-sm leading-6">
              <a href="#" class="font-semibold text-gray-600 hover:text-gray-500">Forgot password?</a>
            </div>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-lg font-semibold leading-6 text-gray-800 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

        <div>
          <div class="relative mt-10">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-200" />
            </div>
            <div class="relative flex justify-center text-sm font-medium leading-6">
              <span class="bg-white px-6 text-gray-900">Or continue with</span>
            </div>
          </div>

          <div class="flex mt-6 justify-center space-x-5">

            <a href="#" class="flex items-center justify-center rounded-full bg-[#f7f8fb] w-12 h-12 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]">
              <img src="LoginCard/GoogleLogo.svg" alt="Discord Logo" class="h-6 w-6">
            </a>

            <a href="#" class="flex items-center justify-center rounded-full bg-[#E0E9FF] w-12 h-12 text-[#4285F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]">
              <img src="LoginCard/FacebookLogo.svg" alt="Facebook Logo" class="w-full h-full">
            </a >

            <a href="#" class="flex items-center justify-center rounded-full bg-[#f7f8fb] w-12 h-12 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]">
              <img src="LoginCard/DiscordLogo.svg" alt="Discord Logo" class="h-8 w-8">
            </a>

            <a href="#" class="flex items-center justify-center rounded-full bg-[#000000] w-12 h-12 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4]">
              <img src="LoginCard/XLogo.svg" alt="Discord Logo" class="h-6 w-6">
            </a>

          </div>


            <p class="mt-8 text-center text-sm text-gray-500">
              Not a member yet?
              <a href="#" class="font-semibold leading-6 text-amber-600 hover:text-amber-500">Sign up now!</a>
            </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "LoginCard",
}

</script>