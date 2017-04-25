<style>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    font-size: 22px;
    line-height: 50px;
    color: #fff;
    background-color: #324157;
    }
 .header .logo {
    float: left;
    width: 190px;;
    text-align: center;
    font-size: 16px;
    color: #c156e2;
 }
 .header .bar {
    display: none;
 }
 .header .user-info {
    float: right;
    height: 100%;
    padding: 0 30px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
 }
</style>
<template>
    <div class="header">
        <div class="bar">
        </div>
        <div class="logo">电影信息平台</div>
        <div class="user-info">
            退出
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            }
        }
    }
</script>