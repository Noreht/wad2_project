

<template>

    <div class="block space-y-4 md:flex md:space-y-0 md:space-x-4">
        <!-- Modal toggle -->
        <button data-modal-target="medium-modal" data-modal-toggle="medium-modal" class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" >
        Default modal
        </button>
    </div>


    <div id="medium-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-lg max-h-full  border-[5px] border-black rounded-lg">
            <!-- Modal content -->
            <div class="relative bg-[#FFF8EB] rounded shadow dark:bg-gray-700 ">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-5 border-b dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                        Hold up... You need to log in to an account first!
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>

                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        To embark on your journey and discover the vibrant world of composting communities in Singapore, start by logging in if you're already part of our community. If you haven't registered yet, it's a breeze, and registration unlocks a myriad of benefits and opportunities. Join us now and explore the wonderful world of composting collaborations!
                    </p>

                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="medium-modal" type="button" class="text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-gray-900 hover:border-gray-900 hover:border-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-400 dark:hover:bg-amber-500 dark:focus:ring-amber-800 transition-all duration-200 ease-in-out">Login</button>
                    <button data-modal-hide="medium-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-900 hover:border-gray-900 hover:border-4 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-black dark:hover:text-white dark:hover:bg-black dark:focus:ring-gray-900 transition-all duration-200 ease-in-out">Register Account</button>

                </div>
            </div>
        </div>
    </div>
</template>



<script>


</script>