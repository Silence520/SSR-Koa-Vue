<template>
  <div class="topics">
       <div v-for="topic in topics">
               <p>{{topic.title}}</p>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
const fetchInitialData = ({store})=>{
          return store.dispatch("getTopics")
}

// asyncData 
export default {
  asyncData:fetchInitialData,
  name:'topics',
  computed:{
  	...mapGetters({
  		topics:'getTopics'
  	})
  },
  mounted(){
          fetchInitialData({store:this.$store})
  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
