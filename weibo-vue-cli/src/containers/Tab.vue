<template>
    <div>
        <div first-check="true" class="comment-content" style="margin-top: -1px; padding-bottom: 3.44rem;">
            <XdetailCard />
        </div>
    </div>
</template>
<script>
import XdetailCard from "../components/XdetailCard.vue";
export default {
  components: {
    XdetailCard
  },
  data() {
    return {
      tab: 1
    };
  },
  watch: {
    $route() {
      console.log(this.$route.path);
      var path = this.$route.path;
      if (path.indexOf("repost") >= 0) {
        this.tab = 0;
      } else if (path.indexOf("comment") >= 0) {
        this.tab = 1;
      } else if (path.indexOf("like") >= 0) {
        this.tab = 2;
      }
    }
  }
};
</script>
<style scoped>
@import url("../css/app.css");
@import url("../css/base.css");
@import url("../css/cards.css");

.empty {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 102px 0 20px;
  font-size: 0.875rem;
  color: #929292 !important;
  text-align: center;
}
.comment-content {
  min-height: 15rem;
  background-color: #fbfbfb;
  position: relative;
}
.url-icon img {
  width: 1em;
  height: 1em;
}
</style>


