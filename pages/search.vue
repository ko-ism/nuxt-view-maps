<template>
  <div class="map">
    ID検索<input type="text" v-model.number="searched_id">
    <nuxt-link @click.native="search" to="/search_result">検索実行</nuxt-link>
    <p>まだIDは1,2,3のどれかしかない。</p>
  </div>
  
  
</template>

<script>
  import {gmapApi} from 'vue2-google-maps'
  export default {
    data: function() {
      return {
        searched_id: 0
      }

    },
    created: function() {
      
    },
    mounted: function() {
      
    },
    methods: {
      search(event){
        const id = this.searched_id
        this.$store.dispatch('view_maps/search', id)
      }

    },
    computed: {
    }
  }


</script>


<style>

</style>