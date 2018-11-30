<template>
    <div style="margin-top: 84px">
        <div class="pannelwrap" style="padding-top: 0px; padding-bottom: 0px;">
                <XhomeCard v-for="(c,index) in cards" :key="index" :content="c" v-if="index!==0" />
        </div>
    </div>
</template>
<script>
import XhomeCard from "../components/XhomeCard.vue";
export default {
  data() {
    return {
      cards:[]
    };
  },
  // 计算属性
  computed: {
    // 把vuex的信息获取回来放到information里面
    information() {
      // 利用中介的getInformation把数据通过计算属性交给本组件的information里面存起来
      return this.$store.getters.getInformation;
    },
    nav() {
      return this.$store.getters.getNav;
    }
  },
  // 换场判断
  watch: {
    $route() {
      console.log(this.$route.path);
      this.setChannel();
      console.log("路由改变了");
    }
  },
  methods: {
    setChannel() {
      var path = this.$route.path;
      var nav = 0;
      switch (path) {
        case "/home/hot":
          nav = 0;
          break;
        case "/home/fresh":
          nav = 1;
          break;
        default:
          nav = 0;
      }
      this.$store.dispatch("doneSetNav", nav);
    },
    loadMore() {
      var self = this;
      // JSONP或者CORS
      this.$axios
        .get("http://localhost:8080/home.json")
        .then(function(response) {
          console.log(this);
          console.log(response.data.data.cards);
          self.cards = self.cards.concat(response.data.data.cards);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  // 进场判断
  mounted() {
    this.setChannel();
    window.onscroll = function(e){
      
    }
    this.loadMore();
  },
  components: {
    XhomeCard
  }
};
</script>

