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
      name: "CompostingBinView",
      components: { StepCards, Foot, Guides },
      data() {
        return {
          guidetitle: 'How to build a Composting Bin',
          guidedescription:{title:'What is a Composting Bin?',body:'A composting bin is a container or receptacle used to collect and manage organic waste materials, such as kitchen scraps, yard trimmings, and other biodegradable materials, with the purpose of creating compost. Composting bins come in various shapes and sizes, and they can be made from different materials, including plastic, wood, metal, or even wire mesh. The key functions of a composting bin is to contain the organic materials, ensure proper aeration, regulate temperature and control moisture. Composting bins are an eco-friendly way to reduce the amount of organic waste sent to landfills and to produce nutrient-rich compost that can be used to improve soil quality in gardens and for landscaping.'},
          itemList: ['Untreated wood', 'Nails', 'Hammer', 'Chicken wire'],
          imageurl: '/stepcards/ham.jpg',
          steps:[{name:'Step 1: Nail one 2 x 6 board across the bottom of two 4 x 4s',text:'Place the two 4 x 4s on the ground, 3 inches apart so that the 2 x 6 fits evenly on either end. Measure off one or two inches from the bottom of each 4 x 4 so that the 2 x 6 will be level. Place the 2 x 6 onto the 4 x 4s and drive two nails into each 4 x 4.',image:'/stepcards/woodandnail.png'},{name:'Step 2: Measure the amount of space you want between each 2 x 6 board', text:"You'll want to continue building the wall by nailing 2 x 6s onto the stakes, but you'll also want a little bit of space between each 2 x 6. How much space you choose is up to you. At any rate, you'll want the space between each board to be the same, or else the bin will look less professional and put-together.",image:'/stepcards/measure.png'},{name:'Step 3: Nail another 2 x 6 onto the 4 x 4 above the previous one. ',text:"Continue nailing 2 x 6s into place, factoring in the desired spacing, until you reach the top of the wall. At the end of this step, you'll have two vertical 4 x 4s cross-beamed with three or four perpendicular 2 x 6s. This is 1/4 of your square bin.",image:'/stepcards/woodenplank.png'},{name:'Step 4: Create another section of the wall in the exact same manner.',text:'Put down two 4 x 4s. Measure off one or two inches for your starting point. Then lay a 2 x 6 board perpendicularly over the 4 x 4s, hammering it into place with four nails. Continue placing, then hammering, 2 x 6s perpendicularly over the 4 x 4s — leaving the proper spacing — until you have wall no. 2 assembled. The two walls should be mirror images of one another.',image:'/stepcards/woodenpellet.png'},{name:'Step 5: Prop up the two walls parallel to one another and connect the back end of the bin with a perpendicular 2 x 6.',text:'As with the previous 2 x 6s, measure off from the bottom, drive in four nails, and space each one evenly. Hammer down 2 x 6s across the back wall of the 4 x 4 until the bin has three walls entirely built.',image:'/stepcards/woodencompost.png'}],
          tip: ["Compost can be used as mulch to cover flower beds, as potting soil and sprinkled over your grass as a lawn conditioner. Don't use it all though; save at least 1/3 of your original compost so you can start the process all over again.",'For faster decomposition, chop the materials into smaller pieces rather than big pieces. Smaller pieces decompose faster and decomposition time is reduced.','Wait 2 to 3 months to use compost from the general-purpose bin. The yard-waste bin will take longer and be more dependent on weather conditions.'],
    
        };
      }
    };
    </script>
    
    