
var provinceData = ['北京', '上海', '天津', '重庆',  '江苏', '浙江', '广东', '福建', '湖南', '湖北', '辽宁', '吉林', '黑龙江', '河北', '河南', '山东', '陕西', '甘肃', '青海', '新疆', '山西', '四川', '贵州', '安徽', '江西', '云南', '内蒙古',  '广西', '西藏', '宁夏', '海南', '香港',  '台湾','澳门']

var cityData = {
  北京: ['北京'],
  上海: ['上海'],
  天津: ['天津'],
  重庆: ['重庆'],
  江苏: ['南京', '无锡', '常州', '徐州', '苏州', '南通', '连云港', '淮安', '扬州', '盐城', '镇江', '泰州', '宿迁'],
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '利水'],
  广东: ['广州', '韶关', '深圳', '珠海', '汕头', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  湖南: ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家苗族自治区'],
  湖北: ['武汉', '襄阳', '黄石', '十堰', '宜昌', '鄂州', '荆门', '孝感', '荆州', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州'],
  辽宁: ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
  吉林: ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治区'],
  黑龙江: ['哈尔滨', '齐齐哈尔', '鸡西', '牡丹江', '佳木斯', '大庆', '伊春', '黑河', '大兴安岭'],
  河北: ['石家庄', '保定', '唐山', '邯郸', '承德', '廊坊', '衡水', '秦皇岛', '张家口'],
  河南: ['郑州', '洛阳', '商丘', '安阳', '南阳', '开封', '平顶山', '焦作', '新乡', '鹤壁', '许昌', '漯河', '三门峡', '信阳', '周口', '驻马店', '济源'],
  山东: ['济南', '青岛', '菏泽', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '滨州', '德州', '聊城', '临沂'],
  陕西: ['西安', '宝鸡', '咸阳', '渭南', '铜川', '延安', '榆林', '汉中', '安康', '商洛'],
  甘肃: ['兰州', '嘉峪关', '金昌', '金川', '白银', '天水', '武威', '张掖', '酒泉', '平凉', '庆阳', '定西', '陇南', '临夏', '合作'],
  青海: ['西宁', '海东地区', '海北藏族自治州', '黄南藏族自治州', '海南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
  新疆: ['乌鲁木齐', '奎屯', '石河子', '昌吉', '吐鲁番', '库尔勒', '阿克苏', '喀什', '伊宁', '克拉玛依', '塔城', '哈密', '和田', '阿勒泰', '阿图什', '博乐'],
  山西: ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
  四川: ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
  贵州: ['贵阳', '六盘水', '遵义', '安顺', '黔南布依族苗族自治州', '黔西南布依族苗族自治州', '黔东南苗族侗族自治州', '铜仁', '毕节'],
  安徽: ['合肥', '芜湖', '安庆', '马鞍山', '阜阳', '六安', '滁州', '宿州', '蚌埠', '巢湖', '淮南', '宣城', '亳州', '淮北', '铜陵', '黄山', '池州'],
  江西: ['南昌', '九江', '景德镇', '萍乡', '新余', '鹰潭', '赣州', '宜春', '上饶', '吉安', '抚州'],
  云南: ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '楚雄彝族自治州', '大理白族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州'],
  内蒙古: ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布'],
  广西: ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '崇左'],
  西藏: ['拉萨', '昌都地区', '林芝地区', '山南地区', '日喀则地区', '那曲地区', '阿里地区'],
  宁夏: ['银川', '石嘴山', '吴忠', '固原', '中卫'],
  海南: ['海口', '三亚'],
  香港: ['中西区', '湾仔区', '东区', '南区', '九龙城区', '油尖旺区', '观塘区', '黄大仙区', '深水埗区', '北区', '大埔区', '沙田区', '西贡区', '元朗区', '屯门区', '荃湾区', '葵青区', '离岛区'],
  台湾: ['台北', '高雄', '基隆', '台中', '台南', '新竹', '嘉义'],
  澳门: ['澳门半岛', '氹仔岛', '路环岛']
};
var options2 = [];
for(var i = 0; i < provinceData.length; i++) {
    var obj = {};
    obj.label = provinceData[i];
    obj.cities = [];
    options2.push(obj);
}
var cityOptions = [];
for(var k in cityData) {
    var cityOption =[];
   var city = cityData[k];
   for(var j = 0; j<city.length;j++) {
        cityOption.push({label: city[j]});
   }
   cityOptions.push(cityOption)
}
export const provinces = options2;
export const cities = cityOptions;