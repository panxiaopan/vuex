<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <button @click="changeStore" >commit</button>
   <button @click="submmit" >登录</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed:{
    ...mapGetters(['doneTodos', 'getPass' ])
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  watch: {
    doneTodos() {
      console.log('change')
      console.log(this.doneTodos)
    }
  },
  methods: {
    ...mapActions(['changeTest', 'commitPass']),
    changeStore() {
      // this.$store.state.pass
      this.changeTest({id: 123, name: 'jjjj'})
      console.log(this.doneTodos)
    },
    submmit() {
      console.log(this.getPass)
      this.commitPass('mima8888888')
      console.log(this.getPass)
    }
  },
  mounted(){
    console.log(this.$store)
      console.log(this.doneTodos)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
