<template>
    <Transition name="fade">
      <div
        v-if="showing"
        class="fixed inset-0 w-full h-screen flex items-center justify-center bg-black/50"
        @click.self="close"
      >
        <div class="relative w-full max-w-2xl bg-white  shadow-2xl rounded-lg p-8">
          <button
            aria-label="close"
            class="absolute top-0 right-0 text-xl text-gray-500 my-2 mx-4"
            @click.prevent="close"
          >
            ×
          </button>
          <slot />
        </div>
      </div>
    </Transition>
  </template>

<script>
    export default {
        props: {
            showing: {
                type: Boolean,
                required: true
            }
        },
    
        methods: {
            close() {
                this.$emit('close')
            }
        },
        watch: {
            showing(value) {
            if (value) {
                return document.querySelector('body').classList.add('overflow-hidden');
            }
        
            document.querySelector('body').classList.remove('overflow-hidden');
            }
        },
    };
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
    transition: all 0.3s ease;
    }
    .fade-enter,
    .fade-leave-to {
    opacity: 0;
    }
</style>