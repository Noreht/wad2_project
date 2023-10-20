<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
            <!-- Any idea how to make the circle be superimposed on top of the image?-->
            <img class="rounded-t-lg h-48 w-full" src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="" />
            <div class="p-2 m-4 w-16 h-16 text-center bg-amber-400 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                <span class="text-black tracking-wide  font-bold border-b border-black font-sans"> 12</span>
                <span class="text-black tracking-wide font-bold uppercase block font-sans">Oct</span>
            </div>
        </div>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Composting Workshop</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Learn how to do aerobic composting!</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Learn More!
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</template>