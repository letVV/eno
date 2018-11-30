<template>
    <div>
        <!-- Home的头部 -->
        <div v-if="name==='home'" class="lite-topbar main-top">
            <div class="nav-top">
                <div class="nav-left unlogin-logo"></div> 
                <a href="#/search" class="nav-search unlogin-search">
                    <aside><label class="m-search"><i class="m-font m-font-search"></i>
                        <div class="m-text-cut"> 大家都在搜：李咏</div>
                    </label></aside>
                </a>
                <div class="nav-right">
                    <div class="lite-iconf lite-iconf-releas"></div>
                </div>
            </div>
            <div class="nav-main">
                <div class="m-box">
                    <div class="m-box-col inner-box">
                        <div class="scroll-box slide-container">
                            <div class="slide-wrap">
                                <ul class="nav_item">
                                    <li @click="toggleNav(index)" v-for="(n,index) in navs" :key="index" class="item_li" :class="{
                                        cur:index===nav
                                    }">
                                        <span class="" v-html="`${n.title}<em></em>`">
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="nav-plus m-box-center m-box-center-a"><i class="m-font m-font-arrow-down"></i></div>
                </div>
            </div>
        </div>
        <!-- Detail的头部 -->
        <div v-if="name==='detail'"  class="lite-topbar lite-page-top">
            <div @click="back" class="nav-left"><i class="m-font m-font-arrow-left"></i></div>
            <div class="nav-main">
                    <h4>微博正文</h4>
            </div>
            <div class="nav-right"><i class="m-font m-font-dot-more"></i></div>
        </div>
    </div>
</template>
<script>
export default {
  // 把<xheader name="xxx" />的属性值给拿到这个组件的this.name里面
  props: ["name"],
  data() {
    return {
      // nav:0,
      // navs:[{
      //     title:"热门",
      //     path:"hot"
      // },{
      //     title:"新鲜事",
      //     path:"fresh"
      // }]
    };
  },
  methods: {
    toggleNav(nav) {
      this.$store.dispatch("doneSetNav", nav);
      //this.nav = nav;
      // 跳转路由
      this.$router.push({ name: this.navs[nav].path });
      this.$store.dispatch("doneSetAuthor", "laoxie");
    },
    // 返回
    back(){
        this.$router.go(-1);
    }
  },
  computed: {
    nav() {
      return this.$store.getters.getNav;
    },
    navs() {
      return this.$store.getters.getNavs;
    }
  }
};
</script>
<style scoped>
@import url("../css/app.css");
</style>
