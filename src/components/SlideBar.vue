<style>
    .sliderBar {
        display: block;
        position: absolute;
        width: 190px;
        left: 0;
        top: 50px;
        bottom: 0;
        background: #2c2e33;
        font-size: 14px;
    }
    .sliderBar ul {
         height: 100%;
    }
</style>

<template>
    <div class="sliderBar">
        <el-menu default-active="in_theaters" class="el-menu-vertical-demo" theme="dark" :router="true">
            <el-menu-item index="in_theaters" :route="{name: 'in_theaters'}">正在热映</el-menu-item>
            <el-menu-item index="coming_soon" :route="{name: 'coming_soon'}">即将上映</el-menu-item>
            <el-menu-item index="top250" :route="{name: 'top250'}">TOP250</el-menu-item>
            <el-menu-item index="weekly" :route="{name: 'weekly'}">口碑榜</el-menu-item>
            <el-menu-item index="new_movies" :route="{name: 'new_movies'}">新片榜</el-menu-item>
        </el-menu>
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