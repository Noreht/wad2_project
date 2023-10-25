<template>
    <div class="columns-3 flex-auto ">
        <div>
            <Tweet :cards = "hidden" tweet-id="1239826988983914496" class="w-1/2 h-1/2 aspect-video" />
            <Tweet tweet-id="1078324202703269889" class="w-1/2 h-1/2 aspect-video " />
            <Tweet tweet-id="1014405712565293056" class="w-1/2 h-1/2 aspect-video" />
        </div>
        <div>
            <Tweet 
            :cards = "hidden"
            tweet-id="956427505686073344" class="w-1/2 h-1/2 aspect-video" />
            <Tweet tweet-id="958238947162951680" class="w-1/2 h-1/2 " />
            <Tweet tweet-id="1014405712565293056" class="w-1/2 h-1/2 " />
        </div>
    </div>
</template>


<script setup>
// import Tweet from "vue-tweet";
</script>





<!-- <template>
    

    <blockquote class="twitter-tweet">
        <p lang="en" dir="ltr">▶️ NEW VIDEO: 
            <a href="https://twitter.com/hashtag/Composting?src=hash&amp;ref_src=twsrc%5Etfw">#Composting

            </a> is a great way to turn household wastes into 
            <a href="https://twitter.com/hashtag/blackgold?src=hash&amp;ref_src=twsrc%5Etfw">#blackgold

            </a>—an amazing fertilizer for your plants.<br><br>Watch and learn how to make your own
             <a href="https://twitter.com/hashtag/DIYcompostbin?src=hash&amp;ref_src=twsrc%5Etfw">#DIYcompostbin</a> 
             in minutes. We share tips and answers to FAQ too! 
             <a href="https://t.co/2vwyPaMUwl">https://t.co/2vwyPaMUwl</a></p>&mdash; Composting In SG (@CompostingInSG) 
             <a href="https://twitter.com/CompostingInSG/status/1239826988983914496?ref_src=twsrc%5Etfw">March 17, 2020</a></blockquote>   
            
</template>


<script>
    var TwitterWidgetsLoader = require('twitter-widgets');
    export default {
        mounted() {
        TwitterWidgetsLoader.load();
    }
}
</script> -->
    






























<!-- <template>
    <div>
      <h2>Latest composting tweets</h2>
      <ul>
        <li v-for="tweet in tweets" :key="tweet.id">
          {{ tweet.text }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        tweets: [],
      };
    },
    mounted() {
      this.getTweets();
    },
    methods: {
      async getTweets() {
        try {
          const response = await axios.get(
            `https://api.twitter.com/2/tweets/search/recent?query=%23composting&max_results=5`,
            {
              headers: {
                Authorization: `AAAAAAAAAAAAAAAAAAAAAOy2qgEAAAAAWExQQtAKrjSCd%2FwCAajgdr9msac%3DCqsLkOdWvMAszEfC7I52MuMUtJog3gp3ytErGeVHOZ5q5w4ob0`,
              },
            }
          );
          this.tweets = response.data;
        } catch (error) {
          console.error("Error fetching tweets", error);
        }
      },
    },
  };
  </script> -->