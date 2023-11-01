<template>
    <article class="p-6 bg-amber-100 rounded-lg border border-amber-800 shadow-md my-5">
        <div class="flex justify-between items-center mb-5 text-black">
            <span class="bg-primary-100 text-primary-800 text-lg font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                {{ name }}
            </span>
            <span class="text-sm">{{ eventDate}} </span>
        </div>
        
        <p class="mb-5 font-light text-gray-500 dark:text-gray-400"> {{ eventDesc }}</p>
        <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
                <span class="font-medium dark:text-white">
                    Event Signups: {{ eventSignups }}
                </span>
                <button id="{{ eventID }}"
                class="bg-amber-400 text-black px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg disabled:bg-gray-300 disabled:text-white" :disabled="this.disable"
                @click=""
                >
                Sign Up
                </button>
            </div>
        </div>
        <div>
            <slot>
               
            </slot>
        </div>
    </article>
</template>

<script>
    export default {
        props: {
            name: String, // Event Name
            eventDate: String, // Event Date
            eventDesc: String, // Event Description
            eventSignups: String, // NumofEventVolunteers
            eventID: Number,
        },
    }
</script>

