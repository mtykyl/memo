<template>
<MemoForm v-if="memo" :memo="memo" />
<p v-else>メモはありません</p>
</template>

<script>
import MemoForm from '@/components/memoform.vue'
export default{
  name:'EditView',
  components:{
    MemoForm
  },
  computed : {
    memo(){
      const id = parseInt(this.$route.params.id)
      return this.$store.getters.getMemoById(id)
    },
  }
}
</script>
