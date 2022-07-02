<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        background="#3296fa"
        @cancel="$router.go(-1)"
        @search="onSearch"
        autofocus
        @focus="isSearch = false"
      />
    </form>
    <!-- 当搜索框是空的时候，显示搜索 历史
    当搜索框中有值的时候，显示搜索建议，当回车的时候显示搜索结果 -->
    <SearchHistory v-if="searchText === ''" @search="onSearch"></SearchHistory>
    <template v-else>
      <SearchResult v-if="isSearch" :searchText="searchText"></SearchResult>
      <SearchSuggest
        v-else
        :searchText="searchText"
        @search="onSearch"
      ></SearchSuggest>
    </template>
  </div>
</template>

<script>
import SearchHistory from './compenents/SearchHistory.vue'
import SearchResult from './compenents/SearchResult.vue'
import SearchSuggest from './compenents/SearchSuggest.vue'

export default {

  created () { },
  data () {
    return {
      searchText: '',
      isSearch: false // 默认没有回车
    }
  },
  methods: {
    onSearch (str) {
      console.log(str)
      this.searchText = str
      this.isSearch = true
      this.$store.commit('setSearchHistoryList', str)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { SearchHistory, SearchSuggest, SearchResult }
}
</script>

<style scoped lang='less'>
</style>
