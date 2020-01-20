<template>
  <div id="root">
    <p>{{ originalPrice }}</p>
    <p>{{ doublePrice }}</p>
    <p>{{ tripplePrice }}</p>

  </div>
</template>

<script>
import mapGetters from 'vuex'
export default {
  computed: {
    ...mapGetters(['originalPrice','doublePrice','tripplePrice']),
    // 밑의 코드가 위 처럼 한줄로 끝나버림
    // originalPrice(){
    //   return this.$store.getters.originalPrice;
    // },
    // doublePrice(){
    //   return this.$store.getters.doublePrice;
    // },
    // tripplelPrice(){
    //   return this.$store.getters.tripplePrice;
    // },
  }
}
</script>

<style>

</style>