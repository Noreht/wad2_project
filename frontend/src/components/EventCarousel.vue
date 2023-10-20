<template>
     <section class="bg-transparent dark:bg-gray-900 border-2 border-black rounded-xl ">
        <div class="w-full mb-5 pl-4">
            <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-6xl dark:text-white inline">
                Hot
            </h1>

            <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-amber-400 md:text-3xl lg:text-6xl dark:text-white inline">
                Events
            </h1>
        </div>
        <div class="carousel">
            <div class="inner" ref="inner" :style="innerStyles">
                <div class="jumbo" v-for="jumbo in EventJumbotron" :key="jumbo">
                    <div class="w-full pl-4 pb-1 h-72">
                        <div class="h-64 sm:p-2 bg-amber-400 rounded-xl shadow-xl dark:bg-gray-800 grid grid-cols-2 relative">
                            <div class="">
                                <h1 class="text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
                                    {{ jumbo.Header }} 
                                </h1>
                                -----------------------------
                                <h3 class="mb-1 text-l font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl dark:text-white">
                                    {{ jumbo.Date }} 
                                </h3>

                                <h4 class="mb-1 text-l font-normal tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl dark:text-white">
                                    {{ jumbo.Organiser }} 
                                </h4>
                                
                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Learn more
                                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="{{eventPage}}" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <p class="mb-1 text-lg font-normal text-black lg:text-xl dark:text-gray-400">
                                    {{ jumbo.Desc }} 
                                </p>

                                
                            </div>
                            <button class="absolute bottom-5 right-12 w-8 h-8 rounded-full bg-black hover:bg-gray-500 text-white" @click="prev">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                            </button>
                            <button class="absolute bottom-5 right-2 w-8 h-8 rounded-full bg-black hover:bg-gray-500 text-white" @click="next">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    
</template>
  
<script>
// import { ref } from "vue";
import EventJumbotron from "./EventJumbotron.vue"

export default {
    
    // setup() {
    // },
    // components: {
    //     J: EventJumbotron,
    //     innerStyles: {},
    //     step: '',
    //     transitioning: false
    // },

    
    // methods: {
    //     children() {
    //         let ComponentClass = Vue.extend(EventJumbotron);
    //         let instance = new ComponentClass({});

    //         return [
    //             instance, instance, instance, instance
    //         ];
    //     },
    // },
    
    data () {
        return {
            EventJumbotron: [{Header: "Head 1", Organiser: "Org 1", Date: "11 Oct, 12pm", Desc: "lorem ispum dolor"},
                            {Header: "Head 2", Organiser: "Org 2", Date: "11 Oct, 12pm", Desc: "lorem ispum dolor 2"},
                            {Header: "Head 3", Organiser: "Org 3", Date: "11 Oct, 12pm", Desc: "lorem ispum dolor 3"}],
            innerStyles: {},
            step: '',
            transitioning: false
        }
    },

mounted () {
    this.setStep()
    this.resetTranslate()
},

methods: {
    setStep () {
    const innerWidth = this.$refs.inner.scrollWidth
    const totalJumbotrons = this.EventJumbotron.length
    this.step = `${innerWidth / totalJumbotrons}px`
    },

    next () {
    if (this.transitioning) return

    this.transitioning = true

    this.moveLeft()

    this.afterTransition(() => {
        const jumbo = this.EventJumbotron.shift()
        this.EventJumbotron.push(jumbo)
        this.resetTranslate()
        this.transitioning = false
    })
    },

    prev () {
    if (this.transitioning) return

    this.transitioning = true

    this.moveRight()

    this.afterTransition(() => {
        const jumbo = this.EventJumbotron.pop()
        this.EventJumbotron.unshift(jumbo)
        this.resetTranslate()
        this.transitioning = false
    })
    },

    moveLeft () {
    this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
    }
    },

    moveRight () {
    this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
    }
    },

    afterTransition (callback) {
    const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
    }
    this.$refs.inner.addEventListener('transitionend', listener)
    },

    resetTranslate () {
    this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
    }
    }
}
}
</script>
  
<style>
.carousel {
width: 100%;
/* overflow: hidden; */
/* align-items:center; */
margin:auto;
}

.inner {
transition: transform 0.2s;
white-space: nowrap;

}

.jumbo {
width: 900px;
margin-right: 30px;
display: inline-flex;

height: 300px;
color: white;
border-radius: 5px;
/* align-items: center;
justify-content: center; */
}  */


button {
margin-right: 5px;
margin-top: 10px;
}
</style>

<!-- {Header: "Head 1", Organiser: "Org 1", Date: "11 Oct, 12pm", Desc: "lorem ispum dolor"},

{Header: "Head 2", Organiser: "Org 2", Date: "11 Oct, 12pm", Desc: "lorem ispum dolor 2"},

{Header: "Head 3", Organiser: "Org 3", Date: "11 Oct, 12pm", Desc: "lorem ispum dolor 3"}, -->