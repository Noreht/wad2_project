<!-- component -->
<template>
<div id="app">
	<div class="relative slide">
		<div class="carousel-indicators absolute bottom-0 flex h-12 w-full justify-center items-center rounded-xl">
		
		</div>
		<div class="carousel-inner relative overflow-hidden w-full rounded-xl">
			<div v-for="(img, i) in images" :id="`slide-${i}`" :key="i"
				:class="`${active === i ? 'active' : 'left-full'}`"
				class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
				<img class="block w-full" :src="img" alt="First slide" />
      </div>
			</div>
		</div>
	</div>
</template>

<script >
    export default {
        data () {
            return {
            images: [
                "/COM-11.jpg",
                "/COM-10.jpg",
                "/COM-9.jpg",
                "/COM-6.jpg",
                "/COM-2.jpg"
            ],
            active: 0,
        }},

    mounted() {
    let i = 0;
    setInterval(() => {
        if (i > this.images.length - 1) {
        i = 0;
        }
        this.active = i;
        i++;
    }, 2000);
    }
};
</script>

<style>
    .left-full {
        left: -100%;
    }

    .carousel-item {
        float: left;
        position: relative;
        display: block;
        width: 100%;
        height:550px;
        margin-right: -100%;
        backface-visibility: hidden;

    }

    .carousel-item.active {
        left: 0;
    }
</style>