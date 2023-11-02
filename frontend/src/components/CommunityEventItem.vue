<template>
  <article
    class="p-2.5 bg-white rounded-lg border-amber-800 border-2 shadow-md my-5"
  >
    <div class="flex justify-between items-center mb-1 text-black">
      <span
        class="bg-primary-100 text-primary-800 text-lg font-medium inline-flex items-center px-2.5 rounded"
      >
        {{ name }}
      </span>
      <span class="text-sm px-2.5">{{ eventDate }} </span>
    </div>

    <p class="mb-1 font-light text-gray-500 dark:text-gray-400 px-2.5">
      {{ eventDesc }}
    </p>
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <span class="font-medium dark:text-white px-2.5">
          Event Signups: {{ eventSignups }}
        </span>
        <button
          id="{{ eventID }}"
          class="border-2 hover-3 bg-amber-400 text-black px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg disabled:bg-gray-300 disabled:text-white"
          :disabled="this.disable"
          @click=""
        >
          Sign Up
        </button>
      </div>
    </div>
    <div>
      <slot> </slot>
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
};
</script>

<style>
.hover-3 {
  border: 4px solid;
  border-image: repeating-linear-gradient(135deg,#F8CA00 0 10px,#166534 0 20px,#854d0e 0 30px) 10;
  -webkit-mask: 
    conic-gradient(from 180deg at top 8px right 8px, #0000 90deg,#000 0)
     var(--_i,200%) 0  /200% var(--_i,8px) border-box no-repeat,
    conic-gradient(at bottom 8px left  8px,  #0000 90deg,#000 0)
     0   var(--_i,200%)/var(--_i,8px) 200% border-box no-repeat,
    linear-gradient(#000 0 0) padding-box no-repeat;
  transition: .3s, -webkit-mask-position .3s .3s;
}
.hover-3:hover {
  --_i: 100%;
  color: #854d0e;
  transition: .3s, -webkit-mask-size .3s .3s;
}
</style>
