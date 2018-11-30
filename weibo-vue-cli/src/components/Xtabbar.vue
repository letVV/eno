<template>
    <div class="lite-page-tab">
        <div @click="toTabPage(index,t.path)" v-for="(t,index) in tabs" :key="index" class="tab-item" :class="{
            cur:tab===index
        }">
            <i v-html="`${t.title}<em></em>`"></i>
            <i v-text="t.num"></i>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: "转发",
          num: 213,
          path: "repost"
        },
        {
          title: "评论",
          num: 21,
          path: "comment"
        },
        {
          title: "赞",
          num: 273,
          path: "like"
        }
      ],
      //   默认下划线的选项
      tab: 1
    };
  },
  methods: {
    toTabPage(index, path) {
      this.tab = index;
      this.$router.push({
        name: path
      });
      console.log(path);
    }
  }
};
</script>
<style scoped>
</style>

