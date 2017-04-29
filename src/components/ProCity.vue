<template>
   <div>
     <el-cascader
  :options="options2"
  @active-item-change="handleItemChange"
  @change="handleItemChange"
  :props="props"
></el-cascader>
    <el-button type="primary" icon="search"  @click="setCity">确认</el-button>
   </div>
</template>
<script>
// 省市二级联动组件
import { provinces, cities} from '../constant';

  export default {
    data() {
      return {
        options2: provinces,
        val: '',
        props: {
          value: 'label',
          children: 'cities',
        }
      };
    },

    methods: {
      handleItemChange(val) {
        console.log('active item:', val);
        this.val = val[1];
        setTimeout(_ => {
          if (val.indexOf('北京') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = cities[0];
          } 
          else if (val.indexOf('上海') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = cities[1];
          }
           else if (val.indexOf('天津') > -1 && !this.options2[2].cities.length) {
            this.options2[2].cities = cities[2];
          }
           else if (val.indexOf('重庆') > -1 && !this.options2[3].cities.length) {
            this.options2[3].cities = cities[3];
          }
           else if (val.indexOf('江苏') > -1 && !this.options2[4].cities.length) {
            this.options2[4].cities = cities[4];
          }
           else if (val.indexOf('浙江') > -1 && !this.options2[5].cities.length) {
            this.options2[5].cities = cities[5];
          }
           else if (val.indexOf('广东') > -1 && !this.options2[6].cities.length) {
            this.options2[6].cities = cities[6];
          }
           else if (val.indexOf('福建') > -1 && !this.options2[7].cities.length) {
            this.options2[7].cities = cities[7];
          }
           else if (val.indexOf('湖南') > -1 && !this.options2[8].cities.length) {
            this.options2[8].cities = cities[8];
          }
           else if (val.indexOf('湖北') > -1 && !this.options2[9].cities.length) {
            this.options2[9].cities = cities[9];
          }
          else if (val.indexOf('辽宁') > -1 && !this.options2[10].cities.length) {
            this.options2[10].cities = cities[10];
          }
           else if (val.indexOf('吉林') > -1 && !this.options2[11].cities.length) {
            this.options2[11].cities = cities[11];
          }
           else if (val.indexOf('黑龙江') > -1 && !this.options2[12].cities.length) {
            this.options2[12].cities = cities[12];
          }
           else if (val.indexOf('河北') > -1 && !this.options2[13].cities.length) {
            this.options2[13].cities = cities[13];
          }
           else if (val.indexOf('河南') > -1 && !this.options2[14].cities.length) {
            this.options2[14].cities = cities[14];
          }
           else if (val.indexOf('山东') > -1 && !this.options2[15].cities.length) {
            this.options2[15].cities = cities[15];
          }
           else if (val.indexOf('陕西') > -1 && !this.options2[16].cities.length) {
            this.options2[16].cities = cities[16];
          }
           else if (val.indexOf('甘肃') > -1 && !this.options2[17].cities.length) {
            this.options2[17].cities = cities[17];
          }
           else if (val.indexOf('青海') > -1 && !this.options2[18].cities.length) {
            this.options2[18].cities = cities[18];
          }
           else if (val.indexOf('新疆') > -1 && !this.options2[19].cities.length) {
            this.options2[19].cities = cities[19];
          }
           else if (val.indexOf('山西') > -1 && !this.options2[20].cities.length) {
            this.options2[20].cities = cities[20];
          }
           else if (val.indexOf('四川') > -1 && !this.options2[21].cities.length) {
            this.options2[21].cities = cities[21];
          }
           else if (val.indexOf('贵州') > -1 && !this.options2[22].cities.length) {
            this.options2[22].cities = cities[22];
          }
           else if (val.indexOf('安徽') > -1 && !this.options2[23].cities.length) {
            this.options2[23].cities = cities[23];
          }
           else if (val.indexOf('江西') > -1 && !this.options2[24].cities.length) {
            this.options2[24].cities = cities[24];
          }
           else if (val.indexOf('云南') > -1 && !this.options2[25].cities.length) {
            this.options2[25].cities = cities[25];
          }
           else if (val.indexOf('内蒙古') > -1 && !this.options2[26].cities.length) {
            this.options2[26].cities = cities[26];
          }
           else if (val.indexOf('广西') > -1 && !this.options2[27].cities.length) {
            this.options2[27].cities = cities[27];
          }
           else if (val.indexOf('西藏') > -1 && !this.options2[28].cities.length) {
            this.options2[28].cities = cities[28];
          }
           else if (val.indexOf('宁夏') > -1 && !this.options2[29].cities.length) {
            this.options2[29].cities = cities[29];
          }
           else if (val.indexOf('海南') > -1 && !this.options2[30].cities.length) {
            this.options2[30].cities = cities[30];
          }
           else if (val.indexOf('香港') > -1 && !this.options2[31].cities.length) {
            this.options2[31].cities = cities[31];
          }
           else if (val.indexOf('台湾') > -1 && !this.options2[32].cities.length) {
            this.options2[32].cities = cities[32];
          }
           else if (val.indexOf('澳门') > -1 && !this.options2[33].cities.length) {
            this.options2[33].cities = cities[33];
          }
        }, 300);
      },
      // 子组件向父组件传入的数据
      setCity() {
         this.$emit('getCity', this.val);
      }
    }
  };
</script>