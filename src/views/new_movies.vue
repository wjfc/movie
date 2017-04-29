<style>
body {
    margin: 0;
}
.clearfix:before,
.clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
.text {
    font-size: 14px;
  }

  .item {
    padding:  0;
  }

  .box-card {
    margin: 10px 0;
    width: 100%;
  }
  .movieItem {
      border-bottom: 1px solid #ccc;
  }
 h2 {
     margin: 10px;
     color: #20A0FF;
 }
  .movieItem .movieImg {
      padding-left: 10px;
  }
  .info>h3 {
      margin-bottom: 5px;
  }
  .info>div {
      margin-bottom: 5px;
  }
  .ratings>div {
      margin-bottom: 5px;
  }
  .pagination {
      text-align: center;
  }
  .fl {
      float: left;
  }
  .fr {
      float: right;
  }
  .pro {
      margin: 10px;
  }
</style>
<style>
  .el-row {
    margin-bottom: 0px;
    border-bottom: 1px solid #ccc;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
  }
  .bg-purple-dark {
  }
  .bg-purple {
  }
  .bg-purple-light {
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    background-color: #f9fafc;
  }
</style>
<template>
    <div class="top250">
        <div v-if="!new_moviesList">
            <el-table v-loading="loading" element-loading-text="拼命加载中" style="width: 100%">
            </el-table>
        </div>
       <div v-if="new_moviesList">
            <div class="clearfix">
                <h2 class="fl">{{ new_moviesList.title }}</h2>
            </div>
            <el-card class="box-card">
                <div v-for="(item,index) in new_moviesList.subjects" class="text item">
                 <router-link :to="{name: 'detail', params: {id: item.id}}">
                        <el-row>
                        <el-col :span="8">
                        <div class="grid-content bg-purple">
                            <div class="movieTitle">
                            </div>
                            <div class="movieImg">
                                <img :src="item.images.medium" alt="">
                             </div>
                        </div>
                        </el-col>
                        <el-col :span="8"><div class="grid-content bg-purple-light">
                            <div class="info">
                                <h3>影片名称: {{item.title }}</h3>
                                <div class="year">
                                    <span>上映时间：</span>
                                    <span>{{item.year}}</span>
                                </div>
                                <div class="genres">
                                    <span>类型：</span>
                                    <span v-for="(genres, index) in item.genres">{{genres + (index===item.genres.length-1?'':'、')}}</span>
                                </div>
                                <div class="casts">
                                    <span>主演：</span>
                                    <span v-for="(cast, index) in item.casts">{{cast.name + (index===item.casts.length-1?'':'、')}}</span>
                                </div>
                                 <div class="directors">
                                    <span>导演：</span>
                                    <span v-for="(director, index) in item.directors">{{director.name + (index===item.directors.length-1?'':'、')}}</span>
                                </div>
                            </div>
                        </div></el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <div class="ratings">
                                    <div class="max">最高评分: {{item.rating.max}}</div>
                                    <div class="min">最低评分: {{item.rating.min}}</div>
                                    <div class="average">平均评分: {{item.rating.average}}</div>
                                    <div class="collect_count">参评人数: {{item.collect_count}}</div>
                                    <el-rate v-model="item.rating.average" :max=10 disabled show-text text-color="#ff9900" text-template="{value}">
                                    </el-rate>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </router-link>
                   
                </div>
            </el-card>
       </div>
      <div class="pagination" v-if="new_moviesList">
         <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="new_moviesList.total">
    </el-pagination>
      </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'Vuex';
export default {
    data() {
        return {
            data: null,
            loading: true,
            currentPage: 1,
            pageSize: 10,
            }
        },
        components: {
         
        },
 
    computed: {
        new_moviesList() {
            return this.$store.state.new_movies.new_moviesList
        }
    },
   
    mounted () {
        if(!this.new_moviesList) {
            this.getNew_movies( {
                count: 10,
                start: 0
            })
        }
    },
    methods: {
        getNew_movies(params) {
            this.$store.dispatch('getNew_movies',params)
        },
        handleSizeChange(val) {
        if(this.pageSize !== val) {
            this.loading = true;
            this.pageSize = val;
            this.getNew_movies( {
                count: val,
                start: (this.currentPage-1)*val,
            })
        }
        
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        var count = this.pageSize;
        var start = count*(val-1)
        this.getNew_movies( {
                count: count,
                start: start,
            })
      }
    }
    }
</script>