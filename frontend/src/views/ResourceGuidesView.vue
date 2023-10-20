<template>

<div class="grid grid-cols-12   ">
    <div class="col-span-2 p-4 bg-gradient-to-br from-amber-400 to-yellow-100"></div>
    <div class="col-span-8 p-4 place-content-center bg-gradient-to-tr from-yellow-100 to-amber-400">
        <!-- ADD THE COMPONENTS AND STYLING HERE -->
        <h1 class="text-center text-5xl font-semibold ">Resources and Guides</h1>
        <h3 class="text-center leading-10">Explore and kick start your journey today!</h3>
        <ResourceGuidesSummary
            :header="'What is Composting?'"
            :body="'Composting is a controlled, aerobic (oxygen-required) process that converts organic materials into a nutrient-rich soil amendment or mulch through natural decomposition. The end product is compost – a dark, crumbly, earthy-smelling material. Microorganisms feed on the materials added to the compost pile during the composting process. They use carbon and nitrogen to grow and reproduce, water to digest materials, and oxygen to breathe. You can compost at home using food scraps from your kitchen and dry leaves and woody material from your yard.'"
        />
        <div id="beginner">
            <h3 class="text-2xl font-semibold mt-8">Starter's Haven</h3>
            <h3 class="text-lg font-normal mb-3">For precious beginners</h3>
            <div class="overflow-x-auto overflow-hidden flex first:pl-6 last:pr-6">
            <ResourceGuidesCard
            :title="'Make a Basic Compost?'"
            :image="'ResourceGuidesCards/createcompostbin.png'"/>
            <ResourceGuidesCard
            :title="'Build a Composting Bin?'"
            :image="'ResourceGuidesCards/compostbin.png'"/>
            <ResourceGuidesCard
            :title="'Keep your Compost Warm?'"
            :image="'ResourceGuidesCards/warm.png'"/>
            <ResourceGuidesCard
            :title="'Speed up Composting Process?'"
            :image="'ResourceGuidesCards/time.png'"/>
            <ResourceGuidesCard
            :title="'Keep your Compost from Smelling?'"
            :image="'ResourceGuidesCards/odor.png'"/>
            <ResourceGuidesCard
            :title="'Process Food Waste before using?'"
            :image="'ResourceGuidesCards/process.png'"/>
        </div>

        <div id="intermediate">
            <h3 class="text-2xl font-semibold mt-8">Next-Level Navigators</h3>
            <h3 class="text-lg font-normal mb-3">For experienced composters</h3>
            <div class="overflow-x-auto overflow-hidden flex">
            <ResourceGuidesCard
            :title="'Build a Tumbling Composter?'"/>
            <ResourceGuidesCard
            :title="'Apply Mulch to Compost?'"/>
            <ResourceGuidesCard
            :title="'Make a Worm Compost System?'"/>
            <ResourceGuidesCard
            :title="'Upscale your Compost Bin'"/>
        </div>
        
        </div>
        
        


    </div>
    </div>
    <div class="col-span-2 p-4 bg-gradient-to-br from-amber-400 to-yellow-100"></div>

</div>

</template>



<script>
import ResourceGuidesCard from "@/components/ResourceGuidesCard.vue";
import ResourceGuidesSummary from "@/components/ResourceGuidesSummary.vue";


export default {
    name: "ResourceGuidesView",
    components: { ResourceGuidesCard, ResourceGuidesSummary},
};


</script>