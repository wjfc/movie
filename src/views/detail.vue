
<template>
  <div class="detail">
    <div v-if="!detailList">
        <el-table v-loading="loading" element-loading-text="拼命加载中" style="width: 100%">
        </el-table>
    </div>
        <h2>电影详情页面</h2>
        <div v-if="detailList">
           <el-card :body-style="{ padding: '0px' }">
             <div style="padding: 14px;">
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">
                             <p class="m_title">{{detailList.title}}</p>
                             <div class="img">
                                 <img :src="detailList.images.large" alt="">
                             </div>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <div class="grid-content bg-purple">
                            <h3 class="brief">剧情简介：</h3>
                            <p class="intro">
                                {{detailList.summary}}
                            </p>
                        </div>
                    </el-col>
                </el-row>
             </div>
        </el-card>
        </div>
  </div>
</template>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
<style>
    h3, h2 {
        margin: 10px;
    }
    .m_title {
        font-size: 18px;
        color: #ee90e2;
    }
    h3.brief {
        color: #FF4949;
    }
    p.intro {
        line-height: 30px;
    }
</style>
<script>
import { mapState, mapActions } from 'Vuex';
export default {
    data() {
        return {
            loading: true
            }
        },
        components: {
        },
   
    computed: {
        detailList() {
            return this.$store.state.detail.detailList
        }
    },
    
    mounted () {
        if(!this.detailList) {
            this.getDetail(this.$route.params.id)
        }
    },
     watch: {
        '$route': 'getDetail'
    },
    methods: {
        getDetail(params) {
            this.$store.dispatch('getDetail',params)
        }
    },
     created() {
        var self = this;
        self.getDetail(self.$route.params.id);
    },
  
}
</script>