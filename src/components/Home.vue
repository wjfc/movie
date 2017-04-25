<template>
  <div class="wraper">
    <v-header></v-header>
    <v-slider></v-slider>
    <transition name="fade" mode="out-in">
        <router-view class="content"></router-view>
    </transition>
  </div>
</template>

<script>
import vHeader from './Header.vue';
import vSlider from './SlideBar.vue';
export default {
  data () {
    return {}
  },
  components: {
    vHeader,
    vSlider
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
        transition: all .2s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }

    .content{
        background: none repeat scroll 0 0 #fff;
        position: absolute;
        left: 190px;
        right: 0;
        top: 50px;
        bottom:0;
        width: auto;
        box-sizing: border-box;
        overflow: auto;
    }
</style>
