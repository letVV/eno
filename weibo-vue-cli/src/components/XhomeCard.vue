<template>
    <div @click="toDetailPage" class="wb-item-wrap">
                <div class="wb-item">
                        <div class="card m-panel card9 f-weibo">
                                <div class="card-wrap">

                                        <header class="weibo-top m-box">
                                                <div class="m-avatar-box m-box-center"><a href="/profile/2130294067"
                                                                class="m-img-box"><img :src="content.mblog?content.mblog.user.avatar_hd:''">
                                                                <i class="m-icon m-icon-goldv-static"></i></a></div>
                                                <div class="m-box-dir m-box-col m-box-center">
                                                        <div class="m-text-box"><a href="/profile/2130294067" class="">
                                                                        <h3 class="m-text-cut" v-html="`${content.mblog?content.mblog.user.screen_name:''}<i class='m-icon m-icon-vipl6'></i>`">
                                                                        </h3>
                                                                </a>
                                                                <h4 class="m-text-cut"><span class="time">10-31</span>
                                                                        <span class="from"> 来自 微博 weibo.com</span>

                                                                </h4>
                                                        </div>
                                                </div>
                                                <div callback="follow()" class="m-add-box m-followBtn"><span class="m-add-box"><i
                                                                        class="m-font m-font-plus"></i>
                                                                <h4>关注</h4>
                                                        </span></div>
                                        </header>
                                </div>
                                <article class="weibo-main">
                                        <div class="card-wrap">
                                                <div class="weibo-og">
                                                        <div class="weibo-text" v-html="content.mblog?content.mblog.text:''">
                                                        </div>
                                                        <div data-v-4ecfaa36="">
                                                                <div data-v-4ecfaa36="" class="weibo-media-wraps weibo-media f-media media-b">
                                                                        <ul data-v-4ecfaa36="" class="m-auto-list">
                                                                                <li data-v-4ecfaa36="" class="m-auto-box2">
                                                                                        <div data-v-4ecfaa36="" class="m-img-box m-imghold-4-3">
                                                                                                <img data-v-4ecfaa36=""
                                                                                                        :src="content.mblog?content.mblog.user.avatar_hd:''"
                                                                                                        class="f-bg-img">

                                                                                        </div>
                                                                                </li>
                                                                                <li data-v-4ecfaa36="" class="m-auto-box2">
                                                                                        <div data-v-4ecfaa36="" class="m-img-box m-imghold-4-3">
                                                                                                <img data-v-4ecfaa36=""
                                                                                                        :src="content.mblog?content.mblog.user.avatar_hd:''"
                                                                                                        class="f-bg-img">

                                                                                        </div>
                                                                                </li>
                                                                        </ul>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>

                                </article>
                                <footer class="f-footer-ctrl">
                                        <div class="m-diy-btn m-box-center-a"><i class="lite-iconf lite-iconf-report"></i>
                                                <h4>3</h4>
                                        </div>
                                        <div class="m-diy-btn m-box-center-a"><i class="lite-iconf lite-iconf-comments"></i>
                                                <h4>46</h4>
                                        </div>
                                        <div class="m-diy-btn m-box-center-a"><i class="lite-iconf lite-iconf-like"></i>
                                                <h4>44</h4>
                                        </div>
                                        <aside><i class="m-font m-font-dot-more"></i></aside>
                                </footer>
                        </div>
                </div>
        </div>
</template>
<script>
export default {
  props: ["content"],
  methods: {
    toDetailPage() {
      this.$router.push({
        name: "detail",
        params: { id: 123 }
        // query: { userId: 123 }
      });
    }
  }
};
</script>

