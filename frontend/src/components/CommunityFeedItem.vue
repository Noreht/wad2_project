<template>
    <div>
        <article @click="selectItem" class="p-2 rounded-lg border-2 bg-gray-400 border-amber-800 hover:border-amber-400 shadow-md my-2" v-if="this.selected">
            <div class="flex justify-between items-center mb-1 text-black">
                <span class="bg-primary-100 text-primary-800 text-lg font-medium inline-flex items-center px-2.5 py-0.5">
                    {{ topic }}
                </span>
                <span class="text-sm px-2.5">{{ postAge }} days ago</span>
            </div>
            <div class="flex justify-between items-center mb-3 px-2.5">
                <div class="flex items-center space-x-4">
                    <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                    <span class="font-medium dark:text-white">
                        {{ postAuthor }}
                    </span>
                </div>
            </div>
            <p class="mb-2 text-black px-2.5">{{ postDesc }}</p>
            
            <div>
                <slot>
                
                </slot>
            </div>
        </article>
        <article @click="selectItem" class="p-2 rounded-lg border-2 border-amber-800 hover:border-amber-400 shadow-md my-2" v-else>
            <div class="flex justify-between items-center mb-1 text-black">
                <span class="bg-primary-100 text-primary-800 text-lg font-medium inline-flex items-center px-2.5 py-0.5">
                    {{ topic }}
                </span>
                <span class="text-sm px-2.5">{{ postAge }} days ago</span>
            </div>
            <div class="flex justify-between items-center mb-3 px-2.5">
                <div class="flex items-center space-x-4">
                    <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                    <span class="font-medium dark:text-white">
                        {{ postAuthor }}
                    </span>
                </div>
            </div>
            <p class="mb-2 text-black px-2.5">{{ postDesc }}</p>
            
            <div>
                <slot>
                
                </slot>
            </div>
        </article>
    </div>
</template>


<script>
export default {
    props: {
        topic: String, // Post Topic
        postAge: String, // How old the post is
        postDesc: String, // Detailed Information
        postAuthor: String, // Author Info
    },
    data() {
        return {
        selected: false,
        };
    },
    methods: {
    selectItem() {
        // console.log("item selected")
        // this.$emit('update:selected', true);
        // this.$emit('item-clicked', topic);
  },
}
};


</script>