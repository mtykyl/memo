<template>
  <div class="home">
<ul v-if="hasmemos">
  <li v-for="memo in memos" :key="memo.id">
    <router-link :to="{name: 'edit' , params:{id:memo.id}}">
    {{memo.title}}
    </router-link>
    </li></ul>
  <p v-else>メモはありません</p>
  </div>
</template>

<script>
export default{
  name: "HomeView",
  computed:{
    hasmemos(){
      return this.$store.getters.getCount
    },
    memos(){
      return this.$store.getters.getAll
  }
},
}
</script>

<style scoped>
ul{
  margin: 0;
  padding: 0;
}
  li{
    list-style:none;
    border-bottom:1px solid #CCC;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  li a{
    color: #999;
    text-decoration: none;
    width: 100%;
    display: block;
  }
</style>
