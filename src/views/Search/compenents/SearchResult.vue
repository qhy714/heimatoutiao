<template>
  <div class="container">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ArticleItem v-for="(item, index) in list" :key="index" :article="item">
        </ArticleItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getSearchResult } from '@/api/search'
import ArticleItem from '@/components/ArticleItem.vue'
export default {
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  created () {
    this.getSearchResult()
  },
  data () {
    return {
      page: 1,
      per_page: 20,
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    async getSearchResult () {
      try {
        const res = await getSearchResult({ page: this.page, per_page: this.per_page, q: this.searchText })
        console.log(res)
        // 数据加载完了
        if (res.data.data.results.length === 0) {
          this.finished = true // 加载完需要把finished变为true
          return
        }
        this.list.push(...res.data.data.results)
        this.loading = false // 新旧数据合并在一起而不是把新的数据去覆盖旧的数据
        this.refreshing = false
      } catch (err) {
        console.log(err)
      }
    },
    onLoad () {
      this.page++
      this.getSearchResult() // 每次底部页码值加1，请求下一页数据
    },
    onRefresh () {
      this.list = []
      this.page = 1
      this.getSearchResult()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { ArticleItem }
}
</script>

<style scoped lang='less'>
.container {
  overflow: auto;
  // height: calc(100vh-108px); // vh视口的100%,减去导航栏的高度
  height: 90vh;
}
</style>
