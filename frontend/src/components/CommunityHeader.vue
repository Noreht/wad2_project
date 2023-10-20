<template>
    <div class="relative isolate overflow-hidden bg-amber-400 py-6 sm:py-12 rounded-lg h-92">
        <!-- <img src="https://plus.unsplash.com/premium_photo-1681909647499-603f9a685cf4?auto=format&fit=crop&q=80&w=2918&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" /> -->
        
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-4xl font-bold tracking-tight text-black sm:text-6xl">Join us</h2>
                <p class="mt-3 text-lg leading-8 text-black">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            </div>
            <div class="mx-auto mt-2 max-w-2xl lg:mx-0 lg:max-w-none">
                <dl class="mt-4 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-black">{{ stat.name }}</dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-black">{{ stat.value }}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <h1 class="pt-4 mb-4 text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Find a community that suits you today!
        </h1>
           
    </div>
</template>
  
<script setup>

    const stats = [
        { name: 'Communities Formed', value: '15' },
        { name: 'Volunteers', value: '300+' },
        { name: 'Events Held', value: '40' },
        { name: 'People Reached', value: '1000+' },
    ]
</script>