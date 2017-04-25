<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  
}
</script>

<style>
  *{margin:0;padding:0;}
    html,body,#app,.wrapper{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        width:100%;
        height:100%;
        overflow: hidden;
    }
    img {
        border: none;
    }
    body{
        font-family:"Helvetica Neue",Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
    }
    a{text-decoration: none}

    .clear {
        *zoom: 1;
        &:before, &:after {
            content: "";
            display: table;
        }
        &:after {
            clear: both; 
        }
    }
</style>
