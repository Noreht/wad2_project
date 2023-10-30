<template>
<Guides
    :title="guidetitle"
    :description="guidedescription"
    :requireditems="itemList"
    :requiredimage="imageurl"
    :thesteps = "steps"
    :tips = "tip"
/>
<Foot />
</template>


<script>
import Guides from "@/components/Guides.vue";
import StepCards from "@/components/StepCards.vue";
import Foot from "@/components/Footer.vue";

export default {
  name: "BasicCompostView",
  components: { StepCards, Foot, Guides },
  data() {
    return {
      guidetitle: 'How to make a Basic Compost',
      guidedescription:{title:'What is a Basic Compost?',body:'A basic compost is a nutrient-rich, organic material that is created through the decomposition of various organic matter. Composting is a natural process that turns kitchen and yard waste into a valuable soil conditioner. The basic components of a compost pile or bin includes organic matter, microorganisms, oxygen, water and temperature. Over time, the organic matter will break down into a dark, crumbly material that can be added to your garden soil to improve its structure and fertility. Compost is an excellent way to recycle kitchen and yard waste while reducing the need for chemical fertilizers in your garden.'},
      itemList: ['Garden soil', 'Medium-sized bucket', 'Kitchen fork','Dry leaves','Water'],
      imageurl: "/bucketandwater.png",
      steps:[{name:'Step 1 : Collect and prepare your scraps',text:'Collect all fruit and vegetable scraps. The best kitchen scraps to add to your compost pile are those fruit and vegetable scraps because they break down quickly and do not attract rodents and insects in the same way that animal products do. Add all of your fruit and vegetable scraps, including those that have been cooked.',image:'/stepcards/step1image.png'},{name:'Step 2 : Setting up your Bin',text:'Begin the pile with garden soil  or other dry yard debris that you have available. Ideally this layer should be a few inches deep and will give the pile a good, solid base. Next, add the fruits and vegetables on top of the layer of soil. Lastly, finish off with a layer of dry leaves again.',image:'/stepcards/step2image.png'},{name:'Step 3: Caring for your Bin',text:'Keep your compost moist. In order for biodegradable items to break down quickly, they need to be in contact with moisture. The easiest way to do this is to sprinkle water on your compost. After a week, mix the compost and repeat once every week. Your compost will be turn deep brown throughout after 3 months and it is ready to be used.',image:'/stepcards/step3image.png'}],
      tip: ['Crush compost materials into small pieces to speed up the process. In order to help compost break-down faster, shred leaves and other yard debris and crush egg shells.','Cover the compost with a black garden cloth or other black covering during cold weather will help raise the temperature. Keeping the compose warm helps microbes thrive to break down the compost.'],

    };
  }
};
</script>

