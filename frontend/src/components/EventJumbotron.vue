<template>

    <section class="bg-transparent dark:bg-gray-900 border-2 border-black rounded-xl ">
        <div class="w-full mb-5 pl-4">
            <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-6xl dark:text-white inline">
                Upcoming 
            </h1>

            <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-amber-400 md:text-3xl lg:text-6xl dark:text-white inline">
                Events
            </h1>
        </div>

        <div class="w-full pl-4 pb-1 h-60">
            <div class="max-w-3xl h-56 sm:p-2 bg-amber-400 rounded-xl shadow-xl dark:bg-gray-800 columns-2 ">
                <div class="w-full h-full ">
                    <h1 class="text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
                        <!-- {{ header }} --> header
                    </h1>
                    -----------------------------
                    <h3 class="mb-1 text-l font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl dark:text-white">
                        <!-- {{ date }} --> 11 Oct, 12pm
                    </h3>

                    <h4 class="mb-1 text-l font-normal tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl dark:text-white">
                        <!-- {{ organiser }} --> Organiser:
                    </h4>
                    
                    <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Learn more
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="{{eventPage}}" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <div class="flex flex-col align-top">
                    <p class="mb-1 text-lg font-normal text-black lg:text-xl dark:text-gray-400">
                        <!-- {{eventDescription}} --> Learn more about how Prof Kyong can contribute to the composting community
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

// export default {
//     props: {
//         header: String,
//         organiser: String,
//         eventDescription: String,
//         eventPage: String, //name as link instead?
//     }
// }

</script>