<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div class="btn-bem">
          <button  class="btn-bem__button" @click="increment">减一</button>
          <button  class="btn-bem__button" @click="decrement">加一</button>
          <h3>Count is {{count}}</h3>
      </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name:'HelloWorld',
  computed:{
    ...mapGetters({
      count:'getCount'
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
        test(){
              alert('test init')
        },
        ...mapActions(["increment","decrement"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn-bem{
    border: 1px solid yellowgreen;
    border-radius: 6px;
    padding: 30px;
}
.btn-bem__buttonn{
    padding: 10px 20px;
    color: #fff;
    background: #abcdef;
    border: none;
    margin: 0 10px;
    border-radius: 2px;
    cursor: pointer;
}
</style>
