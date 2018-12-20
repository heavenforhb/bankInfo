const banksObj = {
  '01020000': {
    icon: require('./bankIcons/ICBC.png'),
    name: '工商银行'
  },
  '03010000': {
    icon: require('./bankIcons/COMM.png'),
    name: '交通银行'
  },
  '01050000': {
    icon: require('./bankIcons/CCB.png'),
    name: '建设银行'
  },
  '01040000': {
    icon: require('./bankIcons/BOC.png'),
    name: '中国银行'
  },
  '01030000': {
    icon: require('./bankIcons/ABC.png'),
    name: '农业银行'
  },
  '01000000': {
    icon: require('./bankIcons/PSBC.png'),
    name: '邮储银行'
  },
  '03060000': {
    icon: require('./bankIcons/GDB.png'),
    name: '广发银行'
  },
  '03170000': {
    icon: require('./bankIcons/BOHAIB.png'),
    name: '渤海银行'
  },
  '03110000': {
    icon: require('./bankIcons/EGBANK.png'),
    name: '恒丰银行'
  },
  '03100000': {
    icon: require('./bankIcons/SPDB.png'),
    name: '浦东发展银行'
  },
  '03160000': {
    icon: require('./bankIcons/CZBANK.png'),
    name: '浙商银行'
  },
  '03080000': {
    icon: require('./bankIcons/CMB.png'),
    name: '招商银行'
  },
  '03070000': {
    icon: require('./bankIcons/SPABANK.png'),
    name: '平安银行'
  },
  '03090000': {
    icon: require('./bankIcons/CIB.png'),
    name: '兴业银行'
  },
  '03050000': {
    icon: require('./bankIcons/CMBC.png'),
    name: '民生银行'
  },
  '03040000': {
    icon: require('./bankIcons/HXBANK.png'),
    name: '华夏银行'
  },
  '03030000': {
    icon: require('./bankIcons/CEB.png'),
    name: '光大银行'
  },
  '03020000': {
    icon: require('./bankIcons/CITIC.png'),
    name: '中信银行'
  },
  '05167030': {
    icon: require('./bankIcons/ZYCBANK.png'),
    name: '遵义市商业银行'
  },
  '05154680': {
    icon: require('./bankIcons/DZBANK.png'),
    name: '德州银行'
  },
  '05131410': {
    icon: require('./bankIcons/BOCD.png'),
    name: '承德银行'
  },
  '05083000': {
    icon: require('./bankIcons/JSBANK.png'),
    name: '江苏银行'
  },
  '05031680': {
    icon: require('./bankIcons/JINCHB.png'),
    name: '晋城银行'
  },
  '05007020': {
    icon: require('./bankIcons/六盘水市商业银行.png'),
    name: '六盘水市商业银行'
  },
  '05171270': {
    icon: require('./bankIcons/HDBANK.png'),
    name: '邯郸银行'
  },
  '05253450': {
    icon: require('./bankIcons/MTBANK.png'),
    name: '浙江民泰商业银行'
  },
  '05342050': {
    icon: require('./bankIcons/ORBANK.png'),
    name: '鄂尔多斯银行'
  },
  '05326550': {
    icon: require('./bankIcons/自贡银行.png'),
    name: '自贡银行'
  },
  '05303380': {
    icon: require('./bankIcons/CZCB.png'),
    name: '浙江稠州商业银行'
  },
  '05284630': {
    icon: require('./bankIcons/泰安银行.png'),
    name: '泰安银行'
  },
  '05274550': {
    icon: require('./bankIcons/东营银行.png'),
    name: '东营银行'
  },
  '05264330': {
    icon: require('./bankIcons/SRBANK.png'),
    name: '上饶银行'
  },
  '04974790': {
    icon: require('./bankIcons/LSBANK.png'),
    name: '莱商银行'
  },
  '04966730': {
    icon: require('./bankIcons/四川天府银行.png'),
    name: '四川天府银行'
  },
  '04791920': {
    icon: require('./bankIcons/BSB.png'),
    name: '包商银行'
  },
  '04761430': {
    icon: require('./bankIcons/沧州银行.png'),
    name: '沧州银行'
  },
  '04753360': {
    icon: require('./bankIcons/湖州银行.png'),
    name: '湖州银行'
  },
  '04741910': {
    icon: require('./bankIcons/H3CB.png'),
    name: '内蒙古银行'
  },
  '04836560': {
    icon: require('./bankIcons/攀枝花市商业银行.png'),
    name: '攀枝花市商业银行'
  },
  '04856590': {
    icon: require('./bankIcons/绵阳市商业银行.png'),
    name: '绵阳市商业银行'
  },
  '04956140': {
    icon: require('./bankIcons/柳州银行.png'),
    name: '柳州银行'
  },
  '04933160': {
    icon: require('./bankIcons/江苏长江商业银行.png'),
    name: '江苏长江商业银行'
  },
  '04916170': {
    icon: require('./bankIcons/GLBANK.png'),
    name: '桂林银行'
  },
  '04901380': {
    icon: require('./bankIcons/张家口银行.png'),
    name: '张家口银行'
  },
  '04895910': {
    icon: require('./bankIcons/NYNB.png'),
    name: '广东南粤银行'
  },
  '04871620': {
    icon: require('./bankIcons/大同银行.png'),
    name: '大同银行'
  },
  '04866570': {
    icon: require('./bankIcons/泸州市商业银行.png'),
    name: '泸州市商业银行'
  },
  '04733450': {
    icon: require('./bankIcons/ZJTLCB.png'),
    name: '浙江泰隆商业银行'
  },
  '05755200': {
    icon: require('./bankIcons/HBC.png'),
    name: '湖北银行'
  },
  '05734220': {
    icon: require('./bankIcons/HBC.png'),
    name: '景德镇商业银行'
  },
  '05722280': {
    icon: require('./bankIcons/营口沿海银行.png'),
    name: '营口沿海银行'
  },
  '05705500': {
    icon: require('./bankIcons/HRXJB.png'),
    name: '华融湘江银行'
  },
  '05695150': {
    icon: require('./bankIcons/XYBANK.png'),
    name: '信阳银行'
  },
  '05684960': {
    icon: require('./bankIcons/安阳市商业银行.png'),
    name: '安阳市商业银行'
  },
  '05870000': {
    icon: require('./bankIcons/厦门国际银行.png'),
    name: '厦门国际银行'
  },
  '05864910': {
    icon: require('./bankIcons/中原银行.png'),
    name: '中原银行'
  },
  '05847000': {
    icon: require('./bankIcons/贵州银行.png'),
    name: '贵州银行'
  },
  '05818200': {
    icon: require('./bankIcons/甘肃银行.png'),
    name: '甘肃银行'
  },
  '05646710': {
    icon: require('./bankIcons/宜宾市商业银行.png'),
    name: '宜宾市商业银行'
  },
  '05492340': {
    icon: require('./bankIcons/BOCY.png'),
    name: '朝阳银行'
  },
  '05484950': {
    icon: require('./bankIcons/BOP.png'),
    name: '平顶山银行'
  },
  '05478820': {
    icon: require('./bankIcons/KLB.png'),
    name: '昆仑银行'
  },
  '05438720': {
    icon: require('./bankIcons/SZSBK.png'),
    name: '石嘴山银行'
  },
  '05426900': {
    icon: require('./bankIcons/CCQTGB.png'),
    name: '重庆三峡银行'
  },
  '05417910': {
    icon: require('./bankIcons/长安银行.png'),
    name: '	长安银行'
  },
  '05406650': {
    icon: require('./bankIcons/LSCCB.png'),
    name: '	乐山市商业银行'
  },
  '05521340': {
    icon: require('./bankIcons/保定银行.png'),
    name: '	保定银行'
  },
  '05631650': {
    icon: require('./bankIcons/阳泉市商业银行.png'),
    name: '	阳泉市商业银行'
  },
  '05625080': {
    icon: require('./bankIcons/BOZK.png'),
    name: '	周口银行'
  },
  '05611480': {
    icon: require('./bankIcons/HSBK.png'),
    name: '	衡水银行'
  },
  '05605110': {
    icon: require('./bankIcons/BZMD.png'),
    name: '	驻马店银行'
  },
  '05591750': {
    icon: require('./bankIcons/晋中银行.png'),
    name: '	晋中银行'
  },
  '05576750': {
    icon: require('./bankIcons/达州银行.png'),
    name: '	达州银行'
  },
  '05565040': {
    icon: require('./bankIcons/漯河银行.png'),
    name: '	漯河银行'
  },
  '05541310': {
    icon: require('./bankIcons/XTB.png'),
    name: '	邢台银行'
  },
  '05374610': {
    icon: require('./bankIcons/JNBANK.png'),
    name: '	济宁银行'
  },
  '04721460': {
    icon: require('./bankIcons/LANGFB.png'),
    name: '	廊坊银行'
  },
  '04256020': {
    icon: require('./bankIcons/BOD.png'),
    name: '	东莞银行'
  },
  '04202220': {
    icon: require('./bankIcons/DLB.png'),
    name: '	大连银行'
  },
  '04221210': {
    icon: require('./bankIcons/BHB.png'),
    name: '	河北银行'
  },
  '04233310': {
    icon: require('./bankIcons/HZCB.png'),
    name: '	杭州银行'
  },
  '04243010': {
    icon: require('./bankIcons/NJCB.png'),
    name: '	南京银行'
  },
  '04263380': {
    icon: require('./bankIcons/JHBANK.png'),
    name: '	金华银行'
  },
  '04283370': {
    icon: require('./bankIcons/SXCB.png'),
    name: '	绍兴银行'
  },
  '04296510': {
    icon: require('./bankIcons/CDCB.png'),
    name: '	成都银行'
  },
  '04302240': {
    icon: require('./bankIcons/FSCB.png'),
    name: '抚顺银行'
  },
  '04314730': {
    icon: require('./bankIcons/LSBC.png'),
    name: '临商银行'
  },
  '04325250': {
    icon: require('./bankIcons/宜昌市商业银行.png'),
    name: '宜昌市商业银行'
  },
  '04341100': {
    icon: require('./bankIcons/TCCB.png'),
    name: '天津银行'
  },
  '04354910': {
    icon: require('./bankIcons/ZZBANK.png'),
    name: '郑州银行'
  },
  '04192310': {
    icon: require('./bankIcons/辽阳银行.png'),
    name: '辽阳银行'
  },
  '04184930': {
    icon: require('./bankIcons/LYBANK.png'),
    name: '洛阳银行'
  },
  '04012900': {
    icon: require('./bankIcons/SHBANK.png'),
    name: '上海银行'
  },
  '04023930': {
    icon: require('./bankIcons/厦门银行.png'),
    name: '厦门银行'
  },
  '04031000': {
    icon: require('./bankIcons/BJBANK.png'),
    name: '北京银行'
  },
  '04044560': {
    icon: require('./bankIcons/烟台银行.png'),
    name: '烟台银行'
  },
  '04053910': {
    icon: require('./bankIcons/FJHXBC.png'),
    name: '福建海峡银行'
  },
  '04062410': {
    icon: require('./bankIcons/JLBANK.png'),
    name: '吉林银行'
  },
  '04083320': {
    icon: require('./bankIcons/NBBANK.png'),
    name: '宁波银行'
  },
  '04094510': {
    icon: require('./bankIcons/QLBANK.png'),
    name: '齐鲁银行'
  },
  '04123330': {
    icon: require('./bankIcons/WZCB.png'),
    name: '温州银行'
  },
  '04135810': {
    icon: require('./bankIcons/GCB.png'),
    name: '广州银行'
  },
  '04145210': {
    icon: require('./bankIcons/HKB.png'),
    name: '汉口银行'
  },
  '04162640': {
    icon: require('./bankIcons/DAQINGB.png'),
    name: '龙江银行'
  },
  '04172210': {
    icon: require('./bankIcons/SJBANK.png'),
    name: '盛京银行'
  },
  '04368710': {
    icon: require('./bankIcons/NXBANK.png'),
    name: '宁夏银行'
  },
  '04554770': {
    icon: require('./bankIcons/日照银行.png'),
    name: '日照银行'
  },
  '04562230': {
    icon: require('./bankIcons/ASCB.png'),
    name: '鞍山银行'
  },
  '04571260': {
    icon: require('./bankIcons/秦皇岛银行.png'),
    name: '秦皇岛银行'
  },
  '04588510': {
    icon: require('./bankIcons/BOQH.png'),
    name: '青海银行'
  },
  '04593450': {
    icon: require('./bankIcons/TZCB.png'),
    name: '台州银行'
  },
  '04615510': {
    icon: require('./bankIcons/CSCB.png'),
    name: '长沙银行'
  },
  '04624580': {
    icon: require('./bankIcons/BANKWF.png'),
    name: '潍坊银行'
  },
  '04634280': {
    icon: require('./bankIcons/GZB.png'),
    name: '赣州银行'
  },
  '04643970': {
    icon: require('./bankIcons/泉州银行.png'),
    name: '泉州银行'
  },
  '04652280': {
    icon: require('./bankIcons/BOYK.png'),
    name: '营口银行'
  },
  '04672290': {
    icon: require('./bankIcons/FXCB.png'),
    name: '阜新银行'
  },
  '04703350': {
    icon: require('./bankIcons/JXBANK.png'),
    name: '嘉兴银行'
  },
  '04544240': {
    icon: require('./bankIcons/JJBANK.png'),
    name: '九江银行'
  },
  '04375850': {
    icon: require('./bankIcons/珠海华润银行.png'),
    name: '珠海华润银行'
  },
  '04384530': {
    icon: require('./bankIcons/ZBCB.png'),
    name: '齐商银行'
  },
  '04392270': {
    icon: require('./bankIcons/BOJZ.png'),
    name: '锦州银行'
  },
  '04403600': {
    icon: require('./bankIcons/HSBANK.png'),
    name: '徽商银行'
  },
  '04416900': {
    icon: require('./bankIcons/CQBANK.png'),
    name: '重庆银行'
  },
  '04422610': {
    icon: require('./bankIcons/哈尔滨银行.png'),
    name: '哈尔滨银行'
  },
  '04437010': {
    icon: require('./bankIcons/贵阳银行.png'),
    name: '贵阳银行'
  },
  '04447910': {
    icon: require('./bankIcons/XABANK.png'),
    name: '西安银行'
  },
  '04504520': {
    icon: require('./bankIcons/QDCCB.png'),
    name: '青岛银行'
  },
  '04491610': {
    icon: require('./bankIcons/JSB.png'),
    name: '晋商银行'
  },
  '04484210': {
    icon: require('./bankIcons/江西银行.png'),
    name: '江西银行'
  },
  '04478210': {
    icon: require('./bankIcons/LZYH.png'),
    name: '兰州银行'
  },
  '04462260': {
    icon: require('./bankIcons/BODD.png'),
    name: '丹东银行'
  },
  '05247410': {
    icon: require('./bankIcons/云南红塔银行.png'),
    name: '云南红塔银行'
  },
  '14367000': {
    icon: require('./bankIcons/贵州省农村信用社联合社.png'),
    name: '贵州省农村信用社联合社'
  },
  '14385500': {
    icon: require('./bankIcons/湖南省农村信用社联合社.png'),
    name: '湖南省农村信用社联合社'
  },
  '14173900': {
    icon: require('./bankIcons/福建省农村信用社联合社.png'),
    name: '福建省农村信用社联合社'
  },
  '14181000': {
    icon: require('./bankIcons/BJRCB.png'),
    name: '北京农村商业银行'
  },
  '14226510': {
    icon: require('./bankIcons/成都农村商业银行.png'),
    name: '成都农村商业银行'
  },
  '14243000': {
    icon: require('./bankIcons/江苏省农村信用社联合社.png'),
    name: '江苏省农村信用社联合社'
  },
  '14283054': {
    icon: require('./bankIcons/吴江农村商业银行.png'),
    name: '吴江农村商业银行'
  },
  '14427900': {
    icon: require('./bankIcons/陕西省农村信用社联合社.png'),
    name: '陕西省农村信用社联合社'
  },
  '14561100': {
    icon: require('./bankIcons/天津滨海农村商业银行.png'),
    name: '天津滨海农村商业银行'
  },
  '14595210': {
    icon: require('./bankIcons/武汉农村商业银行.png'),
    name: '武汉农村商业银行'
  },
  '14486400': {
    icon: require('./bankIcons/海南省农村信用社联合社.png'),
    name: '海南省农村信用社联合社'
  },
  '14538200': {
    icon: require('./bankIcons/甘肃省农村信用社联合社.png'),
    name: '甘肃省农村信用社联合社'
  },
  '14156020': {
    icon: require('./bankIcons/东莞农村商业银行.png'),
    name: '东莞农村商业银行'
  },
  '14012900': {
    icon: require('./bankIcons/SHRCB.png'),
    name: '上海农村商业银行'
  },
  '14023052': {
    icon: require('./bankIcons/KSRB.png'),
    name: '昆山农村商业银行'
  },
  '14033055': {
    icon: require('./bankIcons/CSRCB.png'),
    name: '常熟农村商业银行'
  },
  '14045840': {
    icon: require('./bankIcons/SRCB.png'),
    name: '深圳农村商业银行'
  },
  '14055810': {
    icon: require('./bankIcons/广州农村商业银行.png'),
    name: '广州农村商业银行'
  },
  '14097300': {
    icon: require('./bankIcons/云南省农村信用社联合社.png'),
    name: '云南省农村信用社联合社'
  },
  '14123022': {
    icon: require('./bankIcons/JRCB.png'),
    name: '江阴农村商业银行'
  },
  '14136900': {
    icon: require('./bankIcons/CRCBANK.png'),
    name: '重庆农村商业银行'
  },
  '05910000': {
    icon: require('./bankIcons/湖南三湘银行.png'),
    name: '湖南三湘银行'
  },
  '03370000': {
    icon: require('./bankIcons/华商银行.png'),
    name: '华商银行'
  },
  '03340000': {
    icon: require('./bankIcons/大华银行.png'),
    name: '大华银行'
  },
  '03390000': {
    icon: require('./bankIcons/富邦华一银行.png'),
    name: '富邦华一银行'
  },
  '03360000': {
    icon: require('./bankIcons/企业银行.png'),
    name: '企业银行'
  },
  '03350000': {
    icon: require('./bankIcons/大新银行.png'),
    name: '大新银行'
  },
  '03330000': {
    icon: require('./bankIcons/法国兴业银行.png'),
    name: '法国兴业银行'
  },
  '03320000': {
    icon: require('./bankIcons/南洋商业银行.png'),
    name: '南洋商业银行'
  },
  '03320000': {
    icon: require('./bankIcons/永亨银行.png'),
    name: '永亨银行'
  },
  '03190000': {
    icon: require('./bankIcons/花旗银行.png'),
    name: '花旗银行'
  },
  '03200000': {
    icon: require('./bankIcons/HKBEA.png'),
    name: '东亚银行'
  },
  '03210000': {
    icon: require('./bankIcons/汇丰银行.png'),
    name: '汇丰银行'
  },
  '03220000': {
    icon: require('./bankIcons/渣打银行.png'),
    name: '渣打银行'
  },
  '03250000': {
    icon: require('./bankIcons/星展银行.png'),
    name: '星展银行'
  },
  '03260000': {
    icon: require('./bankIcons/恒生银行.png'),
    name: '恒生银行'
  },
  '03270000': {
    icon: require('./bankIcons/友利银行.png'),
    name: '友利银行'
  },
  '03280000': {
    icon: require('./bankIcons/新韩银行.png'),
    name: '新韩银行'
  },
  '03290000': {
    icon: require('./bankIcons/HANABANK.png'),
    name: '韩亚银行'
  },
  '03300000': {
    icon: require('./bankIcons/华侨银行.png'),
    name: '华侨银行'
  },
  '03380000': {
    icon: require('./bankIcons/中德住房储蓄银行.png'),
    name: '中德住房储蓄银行'
  },
  'default': {
    icon: require('./bankIcons/default.png'),
    name: '未知银行'
  },
  '03240000': {
    // icon: require('./bankIcons/荷兰银行.png'),
    name: '荷兰银行'
  },
  '03450000': {
    // icon: require('./bankIcons/玉山银行.png'),
    name: '玉山银行'
  },
  '03460000': {
    // icon: require('./bankIcons/CRCBANK.png'),
    name: '重庆富民银行'
  },
  '03420000': {
    // icon: require('./bankIcons/CRCBANK.png'),
    name: '天津金城银行'
  },
  '03440000': {
    // icon: require('./bankIcons/CRCBANK.png'),
    name: '温州民商'
  },
  '03430000': {
    // icon: require('./bankIcons/CRCBANK.png'),
    name: '上海华瑞银行股份有限公司'
  },
  '03400000': {
    // icon: require('./bankIcons/深圳前海微众银行.png'),
    name: '深圳前海微众银行'
  },
  '14144500': {
    // icon: require('./bankIcons/山东省农村信用社联合社.png'),
    name: '山东省农村信用社联合社'
  },
  '14113030': {
    // icon: require('./bankIcons/徐州市市郊信用合作社联合社.png'),
    name: '徐州市市郊信用合作社联合社'
  },
  '14105200': {
    // icon: require('./bankIcons/湖北省农村信用社联合社.png'),
    name: '湖北省农村信用社联合社'
  },
  '14085883': {
    // icon: require('./bankIcons/佛山顺德农村商业银行.png'),
    name: '佛山顺德农村商业银行'
  },
  '14075882': {
    // icon: require('./bankIcons/广东南海农村商业银行.png'),
    name: '广东南海农村商业银行'
  },
  '14452400': {
    // icon: require('./bankIcons/吉林省农村信用社联合社.png'),
    name: '吉林省农村信用社联合社'
  },
  '14722410': {
    // icon: require('./bankIcons/长春发展农村商业银行.png'),
    name: '长春发展农村商业银行'
  },
  '14526500': {
    // icon: require('./bankIcons/四川省农村信用社联合社.png'),
    name: '四川省农村信用社联合社'
  },
  '14511900': {
    // icon: require('./bankIcons/内蒙古自治区农村信用社联合社.png'),
    name: '内蒙古自治区农村信用社联合社'
  },
  '14505800': {
    // icon: require('./bankIcons/GDRCC.png'),
    name: '广东省农村信用社联合社'
  },
  '14498500': {
    // icon: require('./bankIcons/青海省农村信用社联合社.png'),
    name: '青海省农村信用社联合社'
  },
  '14473600': {
    // icon: require('./bankIcons/安徽省农村信用社联合社.png'),
    name: '安徽省农村信用社联合社'
  },
  '14468700': {
    // icon: require('./bankIcons/宁夏黄河农村商业银行.png'),
    name: '宁夏黄河农村商业银行'
  },
  '14542200': {
    // icon: require('./bankIcons/辽宁省农村信用社联合社.png'),
    name: '辽宁省农村信用社联合社'
  },
  '14551600': {
    // icon: require('./bankIcons/山西省农村信用社联合社.png'),
    name: '山西省农村信用社联合社'
  },
  '14712415': {
    // icon: require('./bankIcons/吉林九台农村商业银行.png'),
    name: '吉林九台农村商业银行'
  },
  '14692610': {
    // icon: require('./bankIcons/哈尔滨农村商业银行.png'),
    name: '哈尔滨农村商业银行'
  },
  '14636410': {
    // icon: require('./bankIcons/海口农村商业银行.png'),
    name: '海口农村商业银行'
  },
  '14622220': {
    // icon: require('./bankIcons/大连农商行.png'),
    name: '大连农商行'
  },
  '14616410': {
    // icon: require('./bankIcons/海口联合农村商业银行.png'),
    name: '海口联合农村商业银行'
  },
  '14572600': {
    // icon: require('./bankIcons/黑龙江省农村信用社联合社.png'),
    name: '黑龙江省农村信用社联合社'
  },
  '14448800': {
    // icon: require('./bankIcons/新疆维吾尔自治区农村信用社联合社.png'),
    name: '新疆维吾尔自治区农村信用社联合社'
  },
  '14436100': {
    // icon: require('./bankIcons/广西壮族自治区农村信用社联合社.png'),
    name: '广西壮族自治区农村信用社联合社'
  },
  '14215881': {
    // icon: require('./bankIcons/BJRCB.png'),
    name: '佛山市三水区农村信用合作社联合社'
  },
  '14203323': {
    // icon: require('./bankIcons/BJRCB.png'),
    name: '宁波鄞州农村合作银行'
  },
  '14191100': {
    // icon: require('./bankIcons/天津农村商业银行.png'),
    name: '天津农村商业银行'
  },
  '14163056': {
    // icon: require('./bankIcons/湖南省农村信用社联合社.png'),
    name: '张家港农村商业银行'
  },
  '14293300': {
    // icon: require('./bankIcons/浙江省农村信用社联合社.png'),
    name: '浙江省农村信用社联合社'
  },
  '14315850': {
    // icon: require('./bankIcons/珠海市农村信用合作社联合社.png'),
    name: '珠海市农村信用合作社联合社'
  },
  '14411200': {
    // icon: require('./bankIcons/河北省农村信用社联合社.png'),
    name: '河北省农村信用社联合社'
  },
  '14404900': {
    // icon: require('./bankIcons/河南省农村信用社联合社.png'),
    name: '河南省农村信用社联合社'
  },
  '14394200': {
    // icon: require('./bankIcons/湖南省农村信用社联合社.png'),
    name: '江西省农村信用社联合社'
  },
  '14373020': {
    // icon: require('./bankIcons/贵州省农村信用社联合社.png'),
    name: '江苏锡州农村商业银行'
  },
  '14341770': {
    // icon: require('./bankIcons/云南红塔银行.png'),
    name: '山西尧都农村商业银行'
  },
  '14333051': {
    // icon: require('./bankIcons/TCRCB.png'),
    name: '江苏太仓农村商业银行'
  },
  '04523060': {
    // icon: require('./bankIcons/江西银行.png'),
    name: '南通商业银行'
  },
  '04453020': {
    // icon: require('./bankIcons/XABANK.png'),
    name: '无锡市商业银行'
  },
  '04533120': {
    // icon: require('./bankIcons/JJBANK.png'),
    name: '扬州商业银行'
  },
  '04693080': {
    // icon: require('./bankIcons/FXCB.png'),
    name: '淮安市商业银行'
  },
  '04683040': {
    // icon: require('./bankIcons/FXCB.png'),
    name: '常州市商业银行'
  },
  '04667310': {
    // icon: require('./bankIcons/BOYK.png'),
    name: '昆明银行'
  },
  '04603110': {
    // icon: require('./bankIcons/TZCB.png'),
    name: '盐城商业银行'
  },
  '04713620': {
    // icon: require('./bankIcons/NXBANK.png'),
    name: '芜湖市商业银行'
  },
  '04115010': {
    // icon: require('./bankIcons/QLBANK.png'),
    name: '焦作银行'
  },
  '04073140': {
    // icon: require('./bankIcons/JLBANK.png'),
    name: '镇江市商业银行'
  },
  '04332360': {
    // icon: require('./bankIcons/宜昌市商业银行.png'),
    name: '葫芦岛市商业银行'
  },
  '04278810': {
    // icon: require('./bankIcons/JHBANK.png'),
    name: '	乌鲁木齐银行'
  },
  '04213050': {
    // icon: require('./bankIcons/DLB.png'),
    name: '	苏州市商业银行'
  },
  '05556840': {
    // icon: require('./bankIcons/凉山州商业银行.png'),
    name: '	凉山州商业银行'
  },
  '05516620': {
    // icon: require('./bankIcons/LSCCB.png'),
    name: '	遂宁银行'
  },
  '05503320': {
    // icon: require('./bankIcons/LSCCB.png'),
    name: '	宁波东海银行'
  },
  '05392330': {
    // icon: require('./bankIcons/LSCCB.png'),
    name: '	铁岭银行'
  },
  '05442320': {
    // icon: require('./bankIcons/KLB.png'),
    name: '盘锦银行'
  },
  '05666770': {
    // icon: require('./bankIcons/中原银行.png'),
    name: '雅安市商业银行'
  },
  '05658880': {
    // icon: require('./bankIcons/贵州银行.png'),
    name: '库尔勒银行'
  },
  '05803320': {
    // icon: require('./bankIcons/甘肃银行.png'),
    name: '宁波通商银行'
  },
  '05824540': {
    // icon: require('./bankIcons/贵州银行.png'),
    name: '枣庄银行'
  },
  '05832250': {
    // icon: require('./bankIcons/贵州银行.png'),
    name: '本溪市商业银行'
  },
  '05675060': {
    // icon: require('./bankIcons/HBC.png'),
    name: '商丘市商业银行'
  },
  '05778980': {
    // icon: require('./bankIcons/HBC.png'),
    name: '新疆汇和银行'
  },
  '05785800': {
    // icon: require('./bankIcons/HBC.png'),
    name: '华兴银行'
  },
  '05795020': {
    // icon: require('./bankIcons/HBC.png'),
    name: '濮阳市商业银行'
  },
  '05886400': {
    // icon: require('./bankIcons/HBC.png'),
    name: '海南银行'
  },
  '05748840': {
    // icon: require('./bankIcons/HBC.png'),
    name: '哈密商行'
  },
  '05767700': {
    // icon: require('./bankIcons/ZJTLCB.png'),
    name: '西藏银行'
  },
  '05908810': {
    // icon: require('./bankIcons/ZJTLCB.png'),
    name: '新疆银行'
  },
  '04885050': {
    // icon: require('./bankIcons/NYNB.png'),
    name: '三门峡市城市信用社'
  },
  '04943030': {
    // icon: require('./bankIcons/柳州银行.png'),
    name: '徐州市商业银行'
  },
  '04843680': {
    // icon: require('./bankIcons/安庆市商业银行.png'),
    name: '安庆市商业银行'
  },
  '04773650': {
    // icon: require('./bankIcons/BSB.png'),
    name: '马鞍山市商业银行'
  },
  '04786110': {
    // icon: require('./bankIcons/BSB.png'),
    name: '南宁市商业银行'
  },
  '04803070': {
    // icon: require('./bankIcons/四川天府银行.png'),
    name: '连云港市商业银行'
  },
  '04814650': {
    // icon: require('./bankIcons/四川天府银行.png'),
    name: '威海商业银行'
  },
  '04823600': {
    // icon: require('./bankIcons/四川天府银行.png'),
    name: '淮北市商业银行'
  },
  '05365030': {
    // icon: require('./bankIcons/SRBANK.png'),
    name: '许昌市商业银行'
  },
  '05295280': {
    // icon: require('./bankIcons/CZCB.png'),
    name: '襄樊市商业银行'
  },
  '05311930': {
    // icon: require('./bankIcons/自贡银行.png'),
    name: '乌海银行'
  },
  '05354970': {
    // icon: require('./bankIcons/MTBANK.png'),
    name: '鹤壁银行'
  },
  '05238333': {
    // icon: require('./bankIcons/HDBANK.png'),
    name: '平凉市商业银行'
  },
  '04986580': {
    // icon: require('./bankIcons/六盘水市商业银行.png'),
    name: '长城华西银行'
  },
  '04991240': {
    // icon: require('./bankIcons/六盘水市商业银行.png'),
    name: '唐山银行'
  },
  '05027360': {
    // icon: require('./bankIcons/JINCHB.png'),
    name: '曲靖市商业银行'
  },
  '05121660': {
    // icon: require('./bankIcons/BOCD.png'),
    name: '长治银行'
  },
}

export default banksObj