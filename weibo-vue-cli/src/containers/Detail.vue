<template>
    <div>
        <Xheader :name="xheaderName" />
        <XdetailBox />
        <Xtabbar />
        <router-view></router-view>
    </div>
</template>
<script>
import Xheader from "../components/Xheader.vue";
import XdetailBox from "../components/XdetailBox.vue";
import Xtabbar from "../components/Xtabbar.vue";
export default {
  components: {
    Xheader,
    XdetailBox,
    Xtabbar
  },
  data() {
    return {
      xheaderName: "detail"
    };
  }
};
</script>

