<template>
  <div>
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <div v-show="detailShow" class="detail">
        <component :is="comName"></component>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        comName: 'm-detailshow',
        detailShow: false
      }
    },
    mounted() {
      this.$bus.$on('on-drawers', (comName, isdetailShow) => {
        this.comName = comName
        this.detailShow = isdetailShow
      })
    },
    methods: {
      hideDetail() {
        this.detailShow = false
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 100;
    color: #fff;
    transition: all 0.5s;
    background: rgba(7, 17, 27, 0.8);
    backdrop-filter: blur(10px);
  }
  .detail::-webkit-scrollbar { width: 0 !important }
</style>
