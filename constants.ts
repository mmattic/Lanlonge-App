import { Category, NavItem } from './types';

export const TOP_NAV_LINKS: NavItem[] = [
  { title: '导航 Navigation', url: '#', isHot: true },
  { title: '搜索 Search', url: '#' },
  { title: '热榜 Hot Lists', url: '#', isHot: true },
  { title: '快讯 News', url: '#' },
  { title: '工具箱 Tools', url: '#' },
  { title: '知识库 Wiki', url: '#' },
  { title: 'AI问答 AI Q&A', url: '#' },
];

export const MOCK_NEWS = [
  {
    id: 1,
    title: '亚马逊发布2025年欧洲站FBA费用变更通知',
    category: '平台政策',
    date: '10分钟前'
  },
  {
    id: 2,
    title: '欧盟新电池法正式生效，卖家需注意合规要求',
    category: '合规认证',
    date: '1小时前'
  },
  {
    id: 3,
    title: 'TikTok Shop 英国站全托管模式上线',
    category: '新渠道',
    date: '2小时前'
  },
  {
    id: 4,
    title: '海运价格持续上涨，中欧班列成为新选择',
    category: '物流动态',
    date: '4小时前'
  },
  {
    id: 5,
    title: 'eBay德国站推出新的卖家保护政策',
    category: '平台动态',
    date: '昨天'
  }
];

export const DIRECTORY_DATA: Category[] = [
  {
    id: 'analysis',
    title: '选品分析 Analysis',
    iconName: 'BarChart2',
    links: [
      { 
        title: '欧洲FBA费用', 
        url: 'https://sell.amazon.de/versand-durch-amazon/versandgebuehren', 
        description: '提供你的履约费用，并查看不同履约方式之间的实时成本比较', 
        icon: 'a', 
        color: 'bg-white border border-gray-200 text-orange-500 font-bold text-xl' 
      },
      { 
        title: '德亚销售榜', 
        url: 'https://www.amazon.de/gp/bestsellers', 
        description: '德国亚马逊销量排行榜', 
        icon: 'a', 
        color: 'bg-white border border-gray-200 text-black font-bold text-xl' 
      },
      { 
        title: '英亚销售榜', 
        url: 'https://www.amazon.co.uk/gp/bestsellers', 
        description: '英国亚马逊销量排行榜', 
        icon: 'a+', 
        color: 'bg-white border border-gray-200 text-black font-bold text-xl' 
      },
      { 
        title: '法国销售榜', 
        url: 'https://www.amazon.fr/gp/bestsellers', 
        description: '法国亚马逊销量排行榜', 
        icon: 'a', 
        color: 'bg-white border border-gray-200 text-black font-bold text-xl' 
      },
      { 
        title: '美亚销售榜', 
        url: 'https://www.amazon.com/gp/bestsellers', 
        description: '美国亚马逊销量排行榜', 
        icon: 'a', 
        color: 'bg-white border border-gray-200 text-black font-bold text-xl' 
      },
      { 
        title: '美亚新品榜', 
        url: 'https://www.amazon.com/gp/new-releases', 
        description: '美国亚马逊新品排行榜', 
        icon: 'a', 
        color: 'bg-white border border-gray-200 text-orange-500 font-bold text-xl' 
      },
      { 
        title: '美亚飙升榜', 
        url: 'https://www.amazon.com/gp/movers-and-shakers', 
        description: '美国亚马逊销售飙升榜', 
        icon: 'a', 
        color: 'bg-white border border-gray-200 text-black font-bold text-xl' 
      },
      { 
        title: '日亚销售榜', 
        url: 'https://www.amazon.co.jp/gp/bestsellers', 
        description: '日本亚马逊销量排行榜 (需翻墙)', 
        icon: 'a', 
        color: 'bg-white border border-gray-200 text-black font-bold text-xl' 
      },
      { 
        title: '加拿大销售榜', 
        url: 'https://www.amazon.ca/gp/bestsellers', 
        description: '加拿大亚马逊销量排行榜', 
        icon: 'a+', 
        color: 'bg-white border border-gray-200 text-black font-bold text-xl' 
      },
      { 
        title: 'Temu Bestsellers', 
        url: 'https://www.temu.com/bestsellers.html', 
        description: '每日更新Temu最受欢迎榜单', 
        icon: 'Tm', 
        color: 'bg-orange-500 text-white font-bold' 
      },
      { 
        title: '谷歌趋势', 
        url: 'https://trends.google.com/', 
        description: '查看关键词在Google的搜索次数及变化趋势', 
        icon: 'G', 
        color: 'bg-white border border-gray-200 text-blue-500 font-bold text-xl' 
      },
      { 
        title: 'Walmart Bestsellers', 
        url: 'https://www.walmart.com/cp/best-sellers/1085666', 
        description: '沃尔玛平台最受欢迎产品榜单', 
        icon: '*', 
        color: 'bg-blue-700 text-yellow-400 font-bold text-2xl' 
      },
      { 
        title: '谷歌商机洞察', 
        url: 'https://marketfinder.thinkwithgoogle.com/', 
        description: '查看产品品类在全球每一个国家的具体市场需求和容量', 
        icon: 'G', 
        color: 'bg-white border border-gray-200 text-blue-500 font-bold text-xl' 
      },
      { 
        title: 'Most Wished For', 
        url: 'https://www.amazon.com/gp/most-wished-for', 
        description: '亚马逊买家愿望清单', 
        icon: 'a', 
        color: 'bg-slate-800 text-white font-bold text-xl' 
      },
      { 
        title: 'Today\'s Deals', 
        url: 'https://www.amazon.com/gp/goldbox', 
        description: '美国亚马逊每日促销', 
        icon: 'a', 
        color: 'bg-slate-800 text-white font-bold text-xl' 
      },
      { 
        title: 'Ebay Daily', 
        url: 'https://www.ebay.com/globaldeals', 
        description: 'Ebay 平台每日促销商品', 
        icon: 'eb', 
        color: 'bg-white border border-gray-200 text-blue-600 font-bold' 
      },
      { 
        title: 'Indiegogo', 
        url: 'https://www.indiegogo.com/', 
        description: '美国第二大的众筹网站', 
        icon: 'GO', 
        color: 'bg-pink-600 text-white font-bold' 
      },
      { 
        title: 'Kickstarter', 
        url: 'https://www.kickstarter.com/', 
        description: '美国最大的众筹网站', 
        icon: 'K', 
        color: 'bg-black text-green-400 font-bold text-xl' 
      },
    ]
  },
  {
    id: 'social',
    title: '社交媒体 Social',
    iconName: 'Share2',
    links: [
      { 
        title: 'Facebook', 
        url: 'https://www.facebook.com', 
        description: '全球最大社交平台', 
        icon: 'f', 
        color: 'bg-blue-600 text-white font-bold text-xl' 
      },
      { 
        title: 'YouTube', 
        url: 'https://www.youtube.com', 
        description: '全球最大的视频网站', 
        icon: '▶', 
        color: 'bg-red-600 text-white font-bold' 
      },
      { 
        title: 'X (Twitter)', 
        url: 'https://twitter.com', 
        description: '美国微博', 
        icon: 'X', 
        color: 'bg-black text-white font-bold text-xl' 
      },
      { 
        title: 'Instagram', 
        url: 'https://www.instagram.com', 
        description: '全球最大的图片社交平台', 
        icon: 'In', 
        color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white font-bold' 
      },
      { 
        title: 'Pinterest', 
        url: 'https://www.pinterest.com', 
        description: '瀑布流图片社区 世界最大的图片社交分享网站', 
        icon: 'P', 
        color: 'bg-red-700 text-white font-bold text-xl' 
      },
      { 
        title: 'Reddit', 
        url: 'https://www.reddit.com', 
        description: '娱乐、社交及新闻网站', 
        icon: 'R', 
        color: 'bg-orange-500 text-white font-bold text-xl' 
      },
      { 
        title: 'Quora', 
        url: 'https://www.quora.com', 
        description: '美版知乎，全球最大的知识问答社区', 
        icon: 'Q', 
        color: 'bg-red-800 text-white font-bold text-xl' 
      },
      { 
        title: 'TikTok', 
        url: 'https://www.tiktok.com', 
        description: '海外抖音', 
        icon: '♪', 
        color: 'bg-black text-white font-bold text-xl' 
      },
      { 
        title: 'WhatsApp', 
        url: 'https://www.whatsapp.com', 
        description: 'Facebook旗下的全球性移动聊天工具', 
        icon: 'W', 
        color: 'bg-green-500 text-white font-bold text-xl' 
      },
      { 
        title: 'LinkedIn', 
        url: 'https://www.linkedin.com', 
        description: '全球知名的职场社交平台-领英', 
        icon: 'in', 
        color: 'bg-blue-700 text-white font-bold text-xl' 
      },
      { 
        title: 'Telegram', 
        url: 'https://telegram.org', 
        description: '俗称“电报”，是一款全球知名度非常高的加密聊天工具', 
        icon: 'T', 
        color: 'bg-sky-500 text-white font-bold text-xl' 
      },
      { 
        title: 'Discord', 
        url: 'https://discord.com', 
        description: '基于兴趣的综合性社交媒体平台', 
        icon: 'D', 
        color: 'bg-indigo-500 text-white font-bold text-xl' 
      },
    ]
  },
  {
    id: 'keywords',
    title: '关键词 Keywords',
    iconName: 'Key',
    links: [
      { 
        title: '卖家精灵', 
        url: 'https://www.sellersprite.com/', 
        description: '查竞品出单词/流量词，关键词精准搜索量/购买量', 
        icon: 'S', 
        color: 'bg-orange-100 text-orange-500 font-bold text-xl' 
      },
      { 
        title: 'Sif关键词体系', 
        url: 'https://www.sif.com/', 
        description: '查广告架构、运营打法、流量结构，体系化运营关键词流量', 
        icon: 'Sif', 
        color: 'bg-emerald-50 text-emerald-600 font-bold' 
      },
      { 
        title: '领星关键词管理', 
        url: 'https://www.lingxing.com/', 
        description: '关键词实时监控/出单词与词频分析/关键词快照，抢占首页广告位', 
        icon: 'L', 
        color: 'bg-blue-50 text-blue-600 font-bold text-xl' 
      },
      { 
        title: '精准关键词排名', 
        url: 'https://www.junglescout.cn/', 
        description: '精度飞跃24倍，每小时更新关键词排名，掌控流量精髓', 
        icon: 'JS', 
        color: 'bg-orange-50 text-orange-500 font-bold' 
      },
      { 
        title: 'KeywordToolDominator', 
        url: 'https://www.keywordtooldominator.com/', 
        description: '亚马逊卖家类目调研/选品/关键词分析神器', 
        icon: 'K', 
        color: 'bg-white border border-gray-200 text-orange-600 font-bold text-xl' 
      },
      { 
        title: 'MerchantWords', 
        url: 'https://www.merchantwords.com/', 
        description: '拥有海量亚马逊关键词数据，关键词挖掘必备', 
        icon: 'M', 
        color: 'bg-orange-100 text-orange-600 font-bold text-xl' 
      },
      { 
        title: 'Wordtracker', 
        url: 'https://www.wordtracker.com/', 
        description: '关键词跟踪工具', 
        icon: 'W', 
        color: 'bg-blue-500 text-white font-bold text-xl' 
      },
    ]
  },
  {
    id: 'patent',
    title: '商标专利 Patent',
    iconName: 'ShieldCheck',
    links: [
      { 
        title: '欧洲商标局', 
        url: 'https://euipo.europa.eu/ohimportal/en', 
        description: '负责管理欧盟商标和注册的共同体外观设计', 
        icon: 'EU', 
        color: 'bg-white border border-gray-200 text-blue-600 font-bold' 
      },
      { 
        title: '英国商标局', 
        url: 'https://www.gov.uk/government/organisations/intellectual-property-office', 
        description: '负责知识产权的官方政府机构', 
        icon: 'UK', 
        color: 'bg-black text-white font-bold' 
      },
      { 
        title: '美国商标局', 
        url: 'https://www.uspto.gov/trademarks', 
        description: '美国商标局', 
        icon: 'R', 
        color: 'bg-white border border-gray-200 text-black font-bold text-xl' 
      },
      { 
        title: 'WIPO商标查询', 
        url: 'https://branddb.wipo.int/', 
        description: 'WIPO商标查询', 
        icon: 'W', 
        color: 'bg-slate-500 text-white font-bold' 
      },
      { 
        title: '中国商标局', 
        url: 'http://sbj.cnipa.gov.cn/', 
        description: '中国商标局', 
        icon: 'CN', 
        color: 'bg-white border border-gray-200 text-red-600 font-bold' 
      },
      { 
        title: 'Trademarkia', 
        url: 'https://www.trademarkia.com/', 
        description: '商标保护方面是世界上最值得信赖的品牌', 
        icon: 'T', 
        color: 'bg-orange-100 text-orange-600 font-bold' 
      },
      { 
        title: '欧洲专利局', 
        url: 'https://www.epo.org/', 
        description: '专利申请的检索和审查以及欧洲专利的授予', 
        icon: 'EP', 
        color: 'bg-white border border-gray-200 text-red-600 font-bold' 
      },
      { 
        title: '英国专利局', 
        url: 'https://www.gov.uk/topic/intellectual-property/patents', 
        description: '英国专利局', 
        icon: 'UK', 
        color: 'bg-black text-white font-bold' 
      },
      { 
        title: '美国专利局', 
        url: 'https://www.uspto.gov/patents', 
        description: '美国专利局', 
        icon: 'US', 
        color: 'bg-white border border-gray-200 text-blue-800 font-bold' 
      },
      { 
        title: 'WIPO专利查询', 
        url: 'https://patentscope.wipo.int/', 
        description: 'WIPO专利查询', 
        icon: 'W', 
        color: 'bg-slate-500 text-white font-bold' 
      },
      { 
        title: '中国专利检索', 
        url: 'http://cpquery.cnipa.gov.cn/', 
        description: '中国专利检索', 
        icon: 'CN', 
        color: 'bg-white border border-gray-200 text-red-600 font-bold' 
      },
      { 
        title: 'innojoy', 
        url: 'http://www.innojoy.com/', 
        description: '简单好用的专利搜索引擎', 
        icon: 'i', 
        color: 'bg-red-600 text-white font-bold text-xl' 
      },
    ]
  },
  {
    id: 'payment',
    title: '收款支付 Payment',
    iconName: 'CreditCard',
    links: [
      { 
        title: 'PayPal', 
        url: 'https://www.paypal.com/', 
        description: '全球性的在线支付公司', 
        icon: 'P', 
        color: 'bg-white border border-gray-200 text-blue-700 font-bold text-xl' 
      },
      { 
        title: 'HUBFX', 
        url: 'https://www.hubfx.co/', 
        description: '英国欧盟27和美国的本地银行收款账号', 
        icon: 'H', 
        color: 'bg-white border border-gray-200 text-black font-bold' 
      },
      { 
        title: 'Masterpass', 
        url: 'https://www.mastercard.com/masterpass/', 
        description: 'Masterpass 是一种电子钱包服务，通过建立个人安全账户', 
        icon: '●', 
        color: 'bg-white border border-gray-200 text-red-500 font-bold text-xl' 
      },
      { 
        title: 'Visa pay', 
        url: 'https://www.visa.com/', 
        description: 'Visa Pay是一款便捷、安全的非接触式支付平台，由Visa提供', 
        icon: 'V', 
        color: 'bg-white border border-gray-200 text-blue-800 font-bold text-xl' 
      },
      { 
        title: '腾讯智汇鹅', 
        url: 'https://global.tenpay.com/', 
        description: '跨境卖家和企业出海支付优选品牌，致力为商户提供合规、安全', 
        icon: '鹅', 
        color: 'bg-black text-yellow-400 font-bold' 
      },
      { 
        title: '万里汇 (WorldFirst)', 
        url: 'https://www.worldfirst.com.cn/', 
        description: '蚂蚁集团旗下品牌，多平台多币种闪速到账，支持提款支付宝银行卡', 
        icon: '万', 
        color: 'bg-red-600 text-white font-bold' 
      },
      { 
        title: 'Pingpong', 
        url: 'https://www.pingpongx.com/', 
        description: '多平台多币种速到账；支持11国VAT，出口退税，虚拟信用卡', 
        icon: 'P', 
        color: 'bg-blue-600 text-white font-bold text-xl' 
      },
      { 
        title: '空中云汇', 
        url: 'https://www.airwallex.com/cn', 
        description: '亚马逊收款首选，收款0费率，卡支付返现高达1.6%', 
        icon: 'A', 
        color: 'bg-white border border-gray-200 text-orange-500 font-bold text-xl' 
      },
      { 
        title: '网易支付', 
        url: 'https://epay.163.com/', 
        description: '网易官方出品，亚马逊收款首选，0汇损所见所得', 
        icon: '网', 
        color: 'bg-blue-600 text-white font-bold' 
      },
      { 
        title: '连连支付', 
        url: 'https://global.lianlianpay.com/', 
        description: '全牌照，无汇损，费率0.7%封顶，5分钟内到账', 
        icon: 'L', 
        color: 'bg-blue-500 text-white font-bold text-xl' 
      },
      { 
        title: 'Payoneer', 
        url: 'https://www.payoneer.com/', 
        description: '本地账号免汇损，多币种转换，灵活银行提现，采购费随心付', 
        icon: 'O', 
        color: 'bg-white border border-orange-500 text-orange-500 font-bold text-xl rounded-full' 
      },
      { 
        title: 'iPayLinks艾贝盈', 
        url: 'https://www.ipaylinks.com/', 
        description: '新客注册享好礼，多平台福利大放送，多、快、好、省！', 
        icon: 'i', 
        color: 'bg-white border border-gray-200 text-blue-500 font-bold text-xl' 
      },
    ]
  },
  {
    id: 'sourcing',
    title: '货源网站 Sourcing',
    iconName: 'Store',
    links: [
      {
        title: '1688',
        url: 'https://www.1688.com/',
        description: '全球领先的采购批发平台',
        icon: '1688',
        color: 'bg-orange-500 text-white font-bold'
      },
      {
        title: '淘宝',
        url: 'https://www.taobao.com/',
        description: '深受欢迎的网购零售平台',
        icon: '淘',
        color: 'bg-orange-500 text-white font-bold text-xl'
      },
      {
        title: '阿里国际',
        url: 'https://www.alibaba.com/',
        description: '全球专业的国际外贸出口、海外B2B跨境贸易平台',
        icon: 'Al',
        color: 'bg-orange-400 text-white font-bold'
      },
      {
        title: '拼多多',
        url: 'https://www.pinduoduo.com/',
        description: '国内主流电商平台',
        icon: '拼',
        color: 'bg-red-600 text-white font-bold text-xl'
      },
      {
        title: '中国制造网',
        url: 'https://www.made-in-china.com/',
        description: '专注中国制造的B2B电子商务平台',
        icon: 'M',
        color: 'bg-red-50 text-red-600 font-bold text-xl'
      },
      {
        title: '义乌购',
        url: 'https://www.yiwugo.com/',
        description: '义乌小商品批发市场官方网站',
        icon: '义',
        color: 'bg-orange-500 text-white font-bold text-xl'
      },
      {
        title: '网商园',
        url: 'https://www.wsy.com/',
        description: '网商园是全国最早最专业的服装服饰类货源分销平台',
        icon: '网',
        color: 'bg-blue-500 text-white font-bold text-xl'
      },
      {
        title: '赛盈',
        url: 'https://www.saleyee.cn/',
        description: '主打欧美中大件海外仓精品一件代发分销服务',
        icon: '赛',
        color: 'bg-white border border-gray-200 text-black font-bold text-xl'
      },
      {
        title: '美适分销',
        url: 'https://www.meishifenxiao.com/',
        description: '致力于为跨境卖家解决货源问题，降低跨境起步门槛',
        icon: 'MS',
        color: 'bg-yellow-400 text-black font-bold'
      },
      {
        title: '大健云仓',
        url: 'https://www.gigacloudtech.com/',
        description: '为全球家居供应商及零售商提供线上/线下的综合交易及交付服务',
        icon: '大',
        color: 'bg-white border border-gray-200 text-blue-900 font-bold text-xl'
      },
      {
        title: '飞飞鱼定制',
        url: 'https://www.feifeiyu.com/',
        description: '全球性的S2B2C柔性供应链赋能平台',
        icon: '飞',
        color: 'bg-blue-800 text-white font-bold text-xl'
      },
      {
        title: '慧聪网',
        url: 'https://www.hc360.com/',
        description: '中国B端企业服务商和行业门户',
        icon: '慧',
        color: 'bg-white border border-gray-200 text-orange-600 font-bold text-xl'
      },
      {
        title: '青创网',
        url: 'https://www.17qcc.com/',
        description: 'B2B鞋服供应链数智平台，青创网汇聚全国鞋服产业带优质供应商',
        icon: 'Q',
        color: 'bg-white border border-gray-200 text-green-500 font-bold text-xl'
      },
      {
        title: 'DOBA',
        url: 'https://www.doba.com/',
        description: '国外分销平台',
        icon: 'D',
        color: 'bg-green-600 text-white font-bold text-xl'
      },
      {
        title: 'Oberlo',
        url: 'https://www.oberlo.com/',
        description: '国外一件代发平台',
        icon: '●',
        color: 'bg-blue-600 text-white font-bold text-xl'
      },
      {
        title: '拖尼斯',
        url: 'http://www.tuonisi.com/',
        description: '国内做分销的网站',
        icon: '拖',
        color: 'bg-pink-500 text-white font-bold text-xl'
      },
      {
        title: '搜款网',
        url: 'https://www.vvic.com/',
        description: '全国著名服装批发平台',
        icon: '搜',
        color: 'bg-pink-500 text-white font-bold text-xl'
      },
      {
        title: '17货源',
        url: 'https://www.17zwd.com/',
        description: '生于移动年代，拼多多以农产品零售平台起家，深耕农业',
        icon: '17',
        color: 'bg-red-600 text-white font-bold'
      },
      {
        title: '指纹科技',
        url: 'https://www.hicustom.com/',
        description: '跨境热销品类齐全，无限SKU，1件起订',
        icon: 'Hi',
        color: 'bg-white border border-gray-200 text-blue-600 font-bold text-xl'
      },
      {
        title: 'CJdropshipping',
        url: 'https://cjdropshipping.com/',
        description: '官方合作分销服务商',
        icon: 'CJ',
        color: 'bg-orange-500 text-white font-bold'
      }
    ]
  },
  {
    id: 'uk',
    title: '英国网站 UK',
    iconName: 'BarChart4',
    links: [
      {
        title: 'eBay',
        url: 'https://www.ebay.co.uk/',
        description: '英国线上拍卖及购物网站',
        icon: 'ebay',
        color: 'bg-white border border-gray-200 text-blue-600 font-bold'
      },
      {
        title: 'Argos',
        url: 'https://www.argos.co.uk/',
        description: '英国家喻户晓的百货零售连锁商',
        icon: 'Argos',
        color: 'bg-red-600 text-white font-bold'
      },
      {
        title: 'SHEIN',
        url: 'https://www.shein.co.uk/',
        description: '英国时尚服装市场网站',
        icon: 'S',
        color: 'bg-black text-white font-bold text-xl'
      },
      {
        title: 'Tesco',
        url: 'https://www.tesco.com/',
        description: '英国最大的零售公司，也是世界三大零售商之一',
        icon: 'Tesco',
        color: 'bg-white border border-gray-200 text-blue-600 font-bold'
      },
      {
        title: 'B&Q',
        url: 'https://www.diy.com/',
        description: '跨国的大型DIY用家庭与园艺工具材料连锁店与大卖场',
        icon: 'B&Q',
        color: 'bg-orange-500 text-white font-bold'
      },
      {
        title: 'Wayfair',
        url: 'https://www.wayfair.co.uk/',
        description: '主要销售英国的家具和家居用品',
        icon: 'W',
        color: 'bg-purple-600 text-white font-bold text-xl'
      },
      {
        title: 'Dunelm',
        url: 'https://www.dunelm.com/',
        description: '英国最大的家居产品零售商',
        icon: 'Dunelm',
        color: 'bg-white border border-gray-200 text-green-600 font-bold'
      },
      {
        title: 'Wilko',
        url: 'https://www.wilko.com/',
        description: '英国有名的high-street连锁超市',
        icon: 'wilko',
        color: 'bg-red-700 text-white font-bold'
      },
      {
        title: 'TheRange',
        url: 'https://www.therange.co.uk/',
        description: '一家英国多渠道品种零售商',
        icon: 'Range',
        color: 'bg-white border border-gray-200 text-orange-500 font-bold'
      },
      {
        title: 'Screwfix',
        url: 'https://www.screwfix.com/',
        description: '英国最大的贸易工具，配件和硬件产品的多渠道零售商',
        icon: 'SF',
        color: 'bg-blue-600 text-white font-bold'
      },
      {
        title: 'Wickes',
        url: 'https://www.wickes.co.uk/',
        description: '英国DIY和家居装饰领域的主要品牌',
        icon: 'Wickes',
        color: 'bg-blue-800 text-white font-bold'
      },
      {
        title: 'Homebase',
        url: 'https://www.homebase.co.uk/',
        description: '英国家居装修零售商',
        icon: 'Home',
        color: 'bg-white border border-gray-200 text-green-600 font-bold'
      },
      {
        title: 'Toolstation',
        url: 'https://www.toolstation.com/',
        description: '英国发展最快的工具、配件和建筑用品供应商之一',
        icon: 'TS',
        color: 'bg-white border border-blue-500 text-blue-600 font-bold'
      },
      {
        title: 'Bmstores',
        url: 'https://www.bmstores.co.uk/',
        description: '英国家居折扣零售商',
        icon: 'bm',
        color: 'bg-white border border-orange-500 text-blue-800 font-bold'
      },
      {
        title: 'TKmaxx',
        url: 'https://www.tkmaxx.com/',
        description: '英国的折扣零售商场',
        icon: 'TK',
        color: 'bg-red-600 text-white font-bold'
      },
      {
        title: 'Currys',
        url: 'https://www.currys.co.uk/',
        description: '英国电子产品零售连锁商店',
        icon: 'currys',
        color: 'bg-purple-800 text-white font-bold'
      },
      {
        title: 'ManoMano',
        url: 'https://www.manomano.co.uk/',
        description: 'DIY、家居装修和园艺产品的在线平台',
        icon: 'M',
        color: 'bg-teal-500 text-white font-bold text-xl'
      },
      {
        title: 'Halfords',
        url: 'https://www.halfords.com/',
        description: '英国一家汽车零件，汽车改装，野营和巡回设备，以及自行车零售商',
        icon: 'halfords',
        color: 'bg-orange-500 text-black font-bold'
      },
      {
        title: 'Very',
        url: 'https://www.very.co.uk/',
        description: '英国的服饰在线零售商城',
        icon: 'very',
        color: 'bg-pink-600 text-white font-bold'
      },
      {
        title: 'OnBuy',
        url: 'https://www.onbuy.com/gb/',
        description: '英国新兴电商平台',
        icon: 'OnBuy',
        color: 'bg-white border border-gray-200 text-blue-500 font-bold'
      },
      {
        title: 'HotUKDeals',
        url: 'https://www.hotukdeals.com/',
        description: '英国最大促销导购网站',
        icon: 'hot',
        color: 'bg-black text-white font-bold'
      },
      {
        title: 'PicClick',
        url: 'https://picclick.co.uk/',
        description: '英国比价网站',
        icon: 'Pic',
        color: 'bg-white border border-gray-200 text-blue-500 font-bold'
      },
      {
        title: 'Gumtree',
        url: 'https://www.gumtree.com/',
        description: '英国最大的分类信息网站',
        icon: 'G',
        color: 'bg-green-800 text-white font-bold text-xl'
      },
      {
        title: 'Shpock',
        url: 'https://www.shpock.com/en-gb',
        description: '在线交易平台,主要用于个人用户之间交易闲置物品',
        icon: 'S',
        color: 'bg-white border border-gray-200 text-green-600 font-bold text-xl'
      },
      {
        title: 'Preloved',
        url: 'https://www.preloved.co.uk/',
        description: '英国二手物品交易网站',
        icon: '❤',
        color: 'bg-white border border-orange-500 text-orange-500 font-bold text-xl'
      },
      {
        title: 'BackMarket',
        url: 'https://www.backmarket.co.uk/',
        description: '英国二手交易平台',
        icon: '<<',
        color: 'bg-white border border-gray-200 text-black font-bold'
      },
      {
        title: 'Zalando',
        url: 'https://www.zalando.co.uk/',
        description: '欧洲领先的在线时尚公司',
        icon: 'Z',
        color: 'bg-orange-500 text-white font-bold text-xl'
      },
      {
        title: 'Vinted',
        url: 'https://www.vinted.co.uk/',
        description: '欧洲二手电商交易平台',
        icon: 'V',
        color: 'bg-teal-500 text-white font-bold text-xl'
      }
    ]
  },
  {
    id: 'germany',
    title: '德国网站 Germany',
    iconName: 'Shield',
    links: [
      {
        title: 'eBay',
        url: 'https://www.ebay.de/',
        description: '德国线上拍卖及购物网站',
        icon: 'ebay',
        color: 'bg-white border border-gray-200 text-blue-600 font-bold'
      },
      {
        title: 'Otto.de',
        url: 'https://www.otto.de/',
        description: '德国第三大电商平台,次于亚马逊、eBay',
        icon: 'OTTO',
        color: 'bg-white border border-gray-200 text-red-600 font-bold'
      },
      {
        title: 'Zalando',
        url: 'https://www.zalando.de/',
        description: '德国最大时尚电子商务公司',
        icon: 'Z',
        color: 'bg-orange-500 text-white font-bold text-xl'
      },
      {
        title: 'Kaufland',
        url: 'https://www.kaufland.de/',
        description: '欧洲第5大食品零售商',
        icon: 'K',
        color: 'bg-red-600 text-white font-bold text-xl'
      },
      {
        title: 'Wayfair',
        url: 'https://www.wayfair.de/',
        description: '主要销售德国的家具和家居用品',
        icon: 'W',
        color: 'bg-purple-600 text-white font-bold text-xl'
      },
      {
        title: 'ManoMano',
        url: 'https://www.manomano.de/',
        description: 'DIY、家居装修和园艺产品的在线平台',
        icon: 'M',
        color: 'bg-teal-500 text-white font-bold text-xl'
      },
      {
        title: '速卖通',
        url: 'https://de.aliexpress.com/',
        description: '速卖通德国站是速卖通在欧洲的重要站点之一，为全球的卖家和买家',
        icon: '速',
        color: 'bg-orange-600 text-white font-bold text-xl'
      },
      {
        title: 'MediaMarkt',
        url: 'https://www.mediamarkt.de/',
        description: '德国和欧洲第一大电子零售商',
        icon: 'MM',
        color: 'bg-red-600 text-white font-bold'
      },
      {
        title: 'iDealo',
        url: 'https://www.idealo.de/',
        description: '德国最大的比价网站',
        icon: 'id',
        color: 'bg-blue-900 text-orange-500 font-bold text-xl'
      },
      {
        title: 'Mydealz',
        url: 'https://www.mydealz.de/',
        description: '德国最大促销导购网站',
        icon: 'my',
        color: 'bg-blue-800 text-white font-bold'
      },
      {
        title: 'PicClick',
        url: 'https://picclick.de/',
        description: '德国比价网站',
        icon: 'Pic',
        color: 'bg-white border border-gray-200 text-blue-500 font-bold'
      },
      {
        title: 'eBay-Kleinanzeigen',
        url: 'https://www.kleinanzeigen.de/',
        description: '德国在线分类信息门户网站',
        icon: 'eb',
        color: 'bg-white border border-gray-200 text-green-700 font-bold'
      },
      {
        title: 'Lidl.de',
        url: 'https://www.lidl.de/',
        description: '德国连锁超市的在线购物平台',
        icon: 'Lidl',
        color: 'bg-blue-700 text-yellow-400 font-bold'
      },
      {
        title: 'AldiSued',
        url: 'https://www.aldi-sued.de/',
        description: '世界知名的德国零售企业',
        icon: 'A',
        color: 'bg-blue-900 text-orange-400 font-bold text-xl'
      },
      {
        title: 'Vinted',
        url: 'https://www.vinted.de/',
        description: 'Vinted德国站，为当地消费者提供二手商品（服装、鞋履、配饰）的',
        icon: 'V',
        color: 'bg-teal-500 text-white font-bold text-xl'
      },
      {
        title: 'BackMarket',
        url: 'https://www.backmarket.de/',
        description: '德国二手交易平台',
        icon: '<<',
        color: 'bg-white border border-gray-200 text-black font-bold'
      },
      {
        title: 'Home24',
        url: 'https://www.home24.de/',
        description: '德国家具和家居饰品电商平台',
        icon: 'home',
        color: 'bg-white border border-gray-200 text-orange-500 font-bold'
      },
      {
        title: 'Tchibo',
        url: 'https://www.tchibo.de/',
        description: '德语区烘培咖啡市场的龙头品牌，具有多样性的丰富日用消费零售品',
        icon: 'Tc',
        color: 'bg-blue-900 text-yellow-500 font-bold'
      },
      {
        title: 'Baur',
        url: 'https://www.baur.de/',
        description: '德国时装、家具和生活摆设的电商平台',
        icon: 'b.',
        color: 'bg-white border border-gray-200 text-orange-400 font-bold text-xl'
      },
      {
        title: 'DM',
        url: 'https://www.dm.de/',
        description: '主要销售日用品、母婴产品、化妆品、保健品和零食等',
        icon: 'dm',
        color: 'bg-white border border-gray-200 text-purple-700 font-bold text-xl'
      },
      {
        title: 'OBI',
        url: 'https://www.obi.de/',
        description: '德国建材装饰零售市场',
        icon: 'OBI',
        color: 'bg-orange-500 text-white font-bold'
      },
      {
        title: 'Markt',
        url: 'https://www.markt.de/',
        description: '德国主营花园家具、生活家居的电商平台',
        icon: 'm',
        color: 'bg-white border border-gray-200 text-orange-500 font-bold text-xl'
      }
    ]
  },
  {
    id: 'france',
    title: '法国网站 France',
    iconName: 'Type',
    links: [
      {
        title: 'eBay',
        url: 'https://www.ebay.fr/',
        description: 'ebay在法国开设的分站',
        icon: 'ebay',
        color: 'bg-white border border-gray-200 text-blue-600 font-bold'
      },
      {
        title: 'Cdiscount',
        url: 'https://www.cdiscount.com/',
        description: '法国第二大的电子商务平台',
        icon: 'C',
        color: 'bg-white border border-gray-200 text-red-600 font-bold text-xl'
      },
      {
        title: 'Fnac',
        url: 'https://www.fnac.com/',
        description: '知名的文化产品和电器产品零售商',
        icon: 'fnac',
        color: 'bg-yellow-500 text-white font-bold'
      },
      {
        title: 'ManoMano',
        url: 'https://www.manomano.fr/',
        description: '欧洲最大的DIY、家具和园艺商店',
        icon: 'M',
        color: 'bg-teal-500 text-white font-bold text-xl'
      },
      {
        title: 'Zalando',
        url: 'https://www.zalando.fr/',
        description: '提供服装、鞋类、配饰和美容产品',
        icon: 'Z',
        color: 'bg-orange-500 text-white font-bold text-xl'
      },
      {
        title: '法国乐天',
        url: 'https://fr.shopping.rakuten.com/',
        description: '乐天旗下欧洲最大的电商平台',
        icon: 'R',
        color: 'bg-red-600 text-white font-bold text-xl'
      },
      {
        title: 'Darty',
        url: 'https://www.darty.com/',
        description: '法国知名家电零售商，为全球第二大零售商KESA集团旗下公司',
        icon: 'DARTY',
        color: 'bg-white border border-gray-200 text-black font-bold'
      },
      {
        title: '速卖通',
        url: 'https://fr.aliexpress.com/',
        description: '法国站主要销售利润服装、家居、数码、玩具、图书等众多产品',
        icon: '速',
        color: 'bg-orange-600 text-white font-bold text-xl'
      },
      {
        title: 'Vinted',
        url: 'https://www.vinted.fr/',
        description: 'Vinted法国站是法国最受欢迎的二手交易平台',
        icon: 'V',
        color: 'bg-teal-500 text-white font-bold text-xl'
      },
      {
        title: 'BackMarket',
        url: 'https://www.backmarket.fr/',
        description: '法国二手交易平台',
        icon: '<<',
        color: 'bg-white border border-gray-200 text-black font-bold'
      },
      {
        title: 'Dealabs',
        url: 'https://www.dealabs.com/',
        description: '法国最大促销导购网站',
        icon: 'D',
        color: 'bg-black text-white font-bold text-xl'
      },
      {
        title: 'PicClick',
        url: 'https://picclick.fr/',
        description: '法国比价网站',
        icon: 'Pic',
        color: 'bg-white border border-gray-200 text-blue-500 font-bold'
      },
      {
        title: 'Lidl.fr',
        url: 'https://www.lidl.fr/',
        description: '主要销售食品、日常用品和其他商品',
        icon: 'Lidl',
        color: 'bg-blue-700 text-yellow-400 font-bold'
      },
      {
        title: 'La Redoute',
        url: 'https://www.laredoute.fr/',
        description: '法国时尚服饰电商平台',
        icon: 'La',
        color: 'bg-white border border-gray-200 text-black font-bold'
      },
      {
        title: 'Auchan',
        url: 'https://www.auchan.fr/',
        description: '法国第二大大型综合超市集团',
        icon: 'Au',
        color: 'bg-red-600 text-white font-bold'
      },
      {
        title: 'LeBoncoin',
        url: 'https://www.leboncoin.fr/',
        description: '法国本土知名的生活分类广告网站，类似于中国的58、赶集',
        icon: 'LB',
        color: 'bg-orange-500 text-white font-bold'
      },
      {
        title: 'iDealo',
        url: 'https://www.idealo.fr/',
        description: '法国比价网站',
        icon: 'i',
        color: 'bg-blue-900 text-white font-bold text-xl'
      },
      {
        title: 'Castorama',
        url: 'https://www.castorama.fr/',
        description: '法国DIY和家庭装修工具及用品的连锁零售商',
        icon: 'C',
        color: 'bg-blue-600 text-yellow-400 font-bold text-xl'
      },
      {
        title: 'Conforama',
        url: 'https://www.conforama.fr/',
        description: '法国知名的家具销售平台，也是欧洲第二大家居用品零售连锁店',
        icon: 'C',
        color: 'bg-white border border-red-600 text-red-600 font-bold text-xl'
      },
      {
        title: '法国家乐福',
        url: 'https://www.carrefour.fr/',
        description: '世界最大的零售商之一',
        icon: 'C',
        color: 'bg-blue-600 text-white font-bold text-xl'
      },
      {
        title: 'LeroyMerlin',
        url: 'https://www.leroymerlin.fr/',
        description: '欧洲排名第1的大型国际家装建材零售集团',
        icon: 'LM',
        color: 'bg-green-500 text-white font-bold'
      },
      {
        title: 'Rue du Commerce',
        url: 'https://www.rueducommerce.fr/',
        description: '法国知名高科技电商平台',
        icon: 'Rue',
        color: 'bg-black text-white font-bold'
      }
    ]
  },
  {
    id: 'italy',
    title: '意大利网站 Italy',
    iconName: 'Landmark',
    links: [
      {
        title: 'eBay',
        url: 'https://www.ebay.it/',
        description: 'eBay在意大利开设的分站',
        icon: 'ebay',
        color: 'bg-white border border-gray-200 text-blue-600 font-bold'
      },
      {
        title: 'Zalando',
        url: 'https://www.zalando.it/',
        description: '销售世界品牌服装，包括儿童服装，还有品牌包、鞋帽、手表、饰品',
        icon: 'Z',
        color: 'bg-orange-500 text-white font-bold text-xl'
      },
      {
        title: 'ManoMano',
        url: 'https://www.manomano.it/',
        description: '欧洲最大的DIY、家具和园艺商店',
        icon: 'M',
        color: 'bg-teal-500 text-white font-bold text-xl'
      },
      {
        title: '速卖通',
        url: 'https://it.aliexpress.com/',
        description: '阿里巴巴旗下唯一面向意大利语市场打造的在线交易平台',
        icon: '速',
        color: 'bg-orange-600 text-white font-bold text-xl'
      },
      {
        title: 'MediaWorld',
        url: 'https://www.mediaworld.it/',
        description: '专门从事消费电子产品零售的德国跨国连锁店',
        icon: 'MW',
        color: 'bg-red-600 text-white font-bold'
      },
      {
        title: 'ePrice',
        url: 'https://www.eprice.it/',
        description: '一家在线百货商店',
        icon: 'eP',
        color: 'bg-yellow-400 text-black font-bold'
      },
      {
        title: 'Subito',
        url: 'https://www.subito.it/',
        description: '提供最简单，最快，最安全的在线买卖服务',
        icon: 'S',
        color: 'bg-red-500 text-white font-bold text-xl'
      },
      {
        title: 'iDealo',
        url: 'https://www.idealo.it/',
        description: '欧洲最出色的价格比较器之一',
        icon: 'i',
        color: 'bg-blue-900 text-white font-bold text-xl'
      },
      {
        title: 'PicClick',
        url: 'https://picclick.it/',
        description: '意大利比价网站',
        icon: 'Pic',
        color: 'bg-white border border-gray-200 text-blue-500 font-bold'
      },
      {
        title: 'Unieuro',
        url: 'https://www.unieuro.it/',
        description: '一家专门从事消费电子和家用电器的意大利零售连锁店',
        icon: 'U',
        color: 'bg-blue-900 text-orange-400 font-bold text-xl'
      },
      {
        title: 'BackMarket',
        url: 'https://www.backmarket.it/',
        description: '意大利二手交易平台',
        icon: '<<',
        color: 'bg-white border border-gray-200 text-black font-bold'
      },
      {
        title: 'Lidl.it',
        url: 'https://www.lidl.it/',
        description: '提供广泛的商品种类，包括食品、日用品、家居用品等，以及送货上',
        icon: 'Lidl',
        color: 'bg-blue-700 text-yellow-400 font-bold'
      },
      {
        title: 'Vinted',
        url: 'https://www.vinted.it/',
        description: '欧洲领先的在线二手购物平台之一，主要面向时尚领域的商品，包',
        icon: 'V',
        color: 'bg-teal-500 text-white font-bold text-xl'
      },
      {
        title: 'LeroyMerlin',
        url: 'https://www.leroymerlin.it/',
        description: '为意大利用户提供了一站式的家居建材购物平台',
        icon: 'LM',
        color: 'bg-green-500 text-white font-bold'
      }
    ]
  },
  {
    id: 'spain',
    title: '西班牙网站 Spain',
    iconName: 'FunctionSquare',
    links: [
        { title: '速卖通', url: 'https://es.aliexpress.com/', description: '为消费者提供了一系高性价比的产品，最受欢迎的产品', icon: '速', color: 'bg-orange-600 text-white font-bold text-xl' },
        { title: 'eBay', url: 'https://www.ebay.es/', description: 'ebay在西班牙开设的分站', icon: 'ebay', color: 'bg-white border border-gray-200 text-blue-600 font-bold' },
        { title: 'Miravia', url: 'https://www.miravia.es/', description: '欧洲西班牙品质时尚综合型电商平台', icon: 'M', color: 'bg-purple-600 text-white font-bold text-xl' },
        { title: 'Zalando', url: 'https://www.zalando.es/', description: '涵盖了时尚、生活、体育等领域的电子商务平台', icon: 'Z', color: 'bg-orange-500 text-white font-bold text-xl' },
        { title: 'ManoMano', url: 'https://www.manomano.es/', description: '欧洲最大的DIY、家具和园艺商店', icon: 'M', color: 'bg-teal-500 text-white font-bold text-xl' },
        { title: 'MediaMarkt', url: 'https://www.mediamarkt.es/', description: '专门从事消费电子产品零售的跨国连锁店', icon: 'MM', color: 'bg-red-600 text-white font-bold' },
        { title: 'El Corte Inglés', url: 'https://www.elcorteingles.es/', description: '欧洲著名的百货公司', icon: 'E', color: 'bg-green-700 text-white font-bold text-xl' },
        { title: 'Carrefour', url: 'https://www.carrefour.es/', description: '家乐福西班牙站可以在线购买食品饮料、电子电器、母婴用品、家居', icon: 'C', color: 'bg-blue-600 text-white font-bold text-xl' },
        { title: 'Fnac', url: 'https://www.fnac.es/', description: '知名的文化产品和电器产品零售商', icon: 'fnac', color: 'bg-yellow-500 text-white font-bold' },
        { title: 'BackMarket', url: 'https://www.backmarket.es/', description: '西班牙二手交易平台', icon: '<<', color: 'bg-white border border-gray-200 text-black font-bold' },
        { title: 'Worten', url: 'https://www.worten.es/', description: '著名的专业售卖电子产品的电商平台', icon: 'worten', color: 'bg-red-600 text-white font-bold' },
        { title: 'iDealo', url: 'https://www.idealo.es/', description: '欧洲最出色的价格比较器之一', icon: 'i', color: 'bg-blue-900 text-white font-bold text-xl' },
        { title: 'Lidl.es', url: 'https://www.lidl.es/', description: 'Lidl西班牙站提供了广泛的商品种类，包括食品、饮料、家居用品', icon: 'Lidl', color: 'bg-blue-700 text-yellow-400 font-bold' },
        { title: 'Leroy Merlin', url: 'https://www.leroymerlin.es/', description: '为西班牙消费者提供了一站式的家居购物体验', icon: 'LM', color: 'bg-green-500 text-white font-bold' },
        { title: 'Vinted', url: 'https://www.vinted.es/', description: 'Vinted西班牙站是西班牙备受瞩目的二手平台', icon: 'V', color: 'bg-teal-500 text-white font-bold text-xl' },
    ]
  },
  {
    id: 'portugal',
    title: '葡萄牙网站 Portugal',
    iconName: 'Radio',
    links: [
        { title: '速卖通', url: 'https://pt.aliexpress.com/', description: '速卖通葡萄牙站，提供了服饰、家居用品、电子产品、玩具、美容健', icon: '速', color: 'bg-orange-600 text-white font-bold text-xl' },
        { title: 'Worten', url: 'https://www.worten.pt/', description: '著名的专业售卖电子产品的电商平台', icon: 'worten', color: 'bg-red-600 text-white font-bold' },
        { title: 'Fnac', url: 'https://www.fnac.pt/', description: '知名的文化产品和电器产品零售商', icon: 'fnac', color: 'bg-yellow-500 text-white font-bold' },
        { title: 'Vinted', url: 'https://www.vinted.pt/', description: 'Vinted葡萄牙站，提供了服装、鞋子、手袋、配饰等商品', icon: 'V', color: 'bg-teal-500 text-white font-bold text-xl' },
        { title: 'KuantoKusta', url: 'https://www.kuantokusta.pt/', description: '一家消费电子产品，家具，化妆品，美食，家居装饰，体育，时', icon: 'K', color: 'bg-orange-500 text-white font-bold text-xl' },
        { title: 'Continente', url: 'https://www.continente.pt/', description: '您的网上购物大卖场', icon: 'C', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'El Corte Inglés', url: 'https://www.elcorteingles.pt/', description: '欧洲著名的百货公司', icon: 'E', color: 'bg-green-700 text-white font-bold text-xl' },
        { title: 'Auchan', url: 'https://www.auchan.pt/', description: '葡萄牙大型综合超市集团', icon: 'Au', color: 'bg-red-600 text-white font-bold' },
        { title: 'PCDIGA', url: 'https://www.pcdiga.com/', description: '为私人和企业客户提供个性化和专业的服务', icon: 'PC', color: 'bg-black text-white font-bold' },
        { title: 'MediaMarkt', url: 'https://mediamarkt.pt/', description: '欧洲第一大电子零售商', icon: 'MM', color: 'bg-red-600 text-white font-bold' },
        { title: 'OLX.pt', url: 'https://www.olx.pt/', description: '全球性二手商品分类信息平台', icon: 'olx', color: 'bg-teal-500 text-white font-bold' },
        { title: 'BackMarket', url: 'https://www.backmarket.pt/', description: '葡萄牙二手交易平台', icon: '<<', color: 'bg-white border border-gray-200 text-black font-bold' },
        { title: 'Leroy Merlin', url: 'https://www.leroymerlin.pt/', description: '葡萄牙市场上家居装修和建筑用品的领导者之一', icon: 'LM', color: 'bg-green-500 text-white font-bold' },
        { title: 'Lidl.pt', url: 'https://www.lidl.pt/', description: '葡萄牙最具影响力的零售商之一', icon: 'Lidl', color: 'bg-blue-700 text-yellow-400 font-bold' },
    ]
  },
  {
    id: 'russia',
    title: '俄罗斯网站 Russia',
    iconName: 'Star',
    links: [
        { title: 'Wildberries', url: 'https://www.wildberries.ru/', description: '俄罗斯本土最大的线上平台之一', icon: 'wb', color: 'bg-purple-700 text-white font-bold' },
        { title: 'Ozon', url: 'https://www.ozon.ru/', description: '俄罗斯第二大电商平台', icon: 'ozon', color: 'bg-blue-600 text-white font-bold' },
        { title: 'YandexMarket', url: 'https://market.yandex.ru/', description: '俄罗斯Yandex旗下的综合购物网站', icon: 'Y', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: '速卖通', url: 'https://aliexpress.ru/', description: '中国最大的跨境出口B2C平台', icon: '速', color: 'bg-orange-600 text-white font-bold text-xl' },
        { title: 'DNSShop', url: 'https://www.dns-shop.ru/', description: '电子产品零售商', icon: 'DNS', color: 'bg-orange-500 text-white font-bold' },
        { title: 'Joom', url: 'https://www.joom.com/', description: '俄罗斯移动电商平台', icon: 'J', color: 'bg-black text-white font-bold text-xl' },
        { title: 'Yandex Translate', url: 'https://translate.yandex.com/', description: 'Yandex公司为您提供的企业开发的高质量的机器翻译', icon: '文', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'Mega Market', url: 'https://megamarket.ru/', description: '一家主营家用电器产品的俄罗斯电商平台', icon: 'M', color: 'bg-purple-600 text-white font-bold text-xl' },
        { title: 'M.Video', url: 'https://www.mvideo.ru/', description: '主营家用电器和电子产品的俄罗斯在线商店', icon: 'M', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'Citilink', url: 'https://www.citilink.ru/', description: '俄罗斯专注于3C家电领域以及汽车配件的电商平台', icon: 'C', color: 'bg-orange-500 text-white font-bold text-xl' },
        { title: 'Eldorado', url: 'https://www.eldorado.ru/', description: '俄罗斯第二大生活用品电子零售商', icon: 'E', color: 'bg-green-600 text-white font-bold text-xl' },
        { title: 'Mst在线商店', url: 'https://mst.ru/', description: '主营电子配件以及手机配件等产品', icon: 'M', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'Avito', url: 'https://www.avito.ru/', description: '俄罗斯最大的分类信息网站，涵盖的类别包括商品、汽车、房地产、', icon: 'Avito', color: 'bg-blue-500 text-white font-bold' },
        { title: 'Mail.ru', url: 'https://mail.ru/', description: '俄罗斯最主流的电子邮件供', icon: '@', color: 'bg-blue-600 text-white font-bold text-xl' },
    ]
  },
  {
    id: 'turkey',
    title: '土耳其网站 Turkey',
    iconName: 'LifeBuoy',
    links: [
        { title: 'Trendyol', url: 'https://www.trendyol.com/', description: '土耳其最大的电商平台', icon: 'trendyol', color: 'bg-orange-500 text-black font-bold' },
        { title: 'Hepsiburada', url: 'https://www.hepsiburada.com/', description: '土耳其领先的电子商务网站', icon: 'H', color: 'bg-orange-600 text-white font-bold text-xl' },
        { title: 'Gittigidiyor', url: 'https://www.gittigidiyor.com/', description: '土耳其的一家拍卖型网站', icon: 'G', color: 'bg-blue-500 text-white font-bold text-xl' },
        { title: 'N11', url: 'https://www.n11.com/', description: '土耳其新兴电商平台', icon: 'n11', color: 'bg-red-600 text-white font-bold' },
        { title: 'Mediamarkt', url: 'https://www.mediamarkt.com.tr/', description: '欧洲第一大电子产品零售商', icon: 'MM', color: 'bg-red-600 text-white font-bold' },
        { title: 'Koctas', url: 'https://www.koctas.com.tr/', description: '土耳其最著名的家居装饰零售商', icon: 'Koctas', color: 'bg-orange-500 text-white font-bold' },
        { title: 'Akakce', url: 'https://www.akakce.com/', description: '购物比价网站', icon: 'A', color: 'bg-blue-500 text-white font-bold text-xl' },
        { title: 'PttAVM', url: 'https://www.pttavm.com/', description: '土耳其最可靠的国家电子商务平台', icon: 'P', color: 'bg-yellow-400 text-blue-900 font-bold text-xl' },
        { title: '速卖通', url: 'https://tr.aliexpress.com/', description: '针对土耳其地区的用户，提供了本地化的服务，包括语言、货币和交', icon: '速', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'Teknosa', url: 'https://www.teknosa.com/', description: '土耳其最大的电子产品电商平台之一', icon: 'T', color: 'bg-orange-500 text-white font-bold text-xl' },
    ]
  },
  {
    id: 'netherlands',
    title: '荷兰网站 Netherlands',
    iconName: 'Target',
    links: [
        { title: 'BOL', url: 'https://www.bol.com/', description: '荷兰和比利时买家首选的购物网站', icon: 'bol', color: 'bg-blue-800 text-white font-bold' },
        { title: 'Zalando', url: 'https://www.zalando.nl/', description: '主营服饰的在线时尚零售商', icon: 'Z', color: 'bg-orange-500 text-white font-bold text-xl' },
        { title: '速卖通', url: 'https://nl.aliexpress.com/', description: '速卖通荷兰站的全球市场渗透率排名第二', icon: '速', color: 'bg-orange-600 text-white font-bold text-xl' },
        { title: 'Coolblue', url: 'https://www.coolblue.nl/', description: '电子产品及家庭用品百货商店', icon: 'cool', color: 'bg-blue-500 text-white font-bold' },
        { title: 'Mediamarkt', url: 'https://www.mediamarkt.nl/', description: '荷兰电器和数码商品店', icon: 'MM', color: 'bg-red-600 text-white font-bold' },
        { title: 'Kruidvat', url: 'https://www.kruidvat.nl/', description: '荷兰连锁的药品和生活用品超市', icon: 'K', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'Wehkamp', url: 'https://www.wehkamp.nl/', description: '荷兰领先的电商网站', icon: 'W', color: 'bg-red-500 text-white font-bold text-xl' },
        { title: 'HEMA', url: 'https://www.hema.nl/', description: '荷兰全品类连锁零售商', icon: 'HEMA', color: 'bg-red-600 text-white font-bold' },
        { title: 'debijenkorf', url: 'https://www.debijenkorf.nl/', description: '荷兰最著名的高级百货连锁店', icon: 'db', color: 'bg-white border border-gray-200 text-black font-bold' },
        { title: 'Etos', url: 'https://www.etos.nl/', description: '荷兰最大的连锁药店之一', icon: 'Etos', color: 'bg-white border border-gray-200 text-black font-bold' },
        { title: 'LeenBakker', url: 'https://www.leenbakker.nl/', description: '主营家具和室内设计的连锁店', icon: 'LB', color: 'bg-pink-600 text-white font-bold' },
        { title: 'OTTO', url: 'https://www.otto.nl/', description: '世界上最大电子电子商务公司之一', icon: 'OTTO', color: 'bg-red-600 text-white font-bold' },
        { title: 'Vidaxl', url: 'https://www.vidaxl.nl/', description: '一家国际在线零售商', icon: 'vida', color: 'bg-purple-800 text-white font-bold' },
        { title: 'Kieskeurig', url: 'https://www.kieskeurig.nl/', description: '一个比价购物网站', icon: 'K', color: 'bg-red-700 text-white font-bold text-xl' },
        { title: 'Beslist', url: 'https://www.beslist.nl/', description: '荷兰在线购物平台', icon: 'beslist', color: 'bg-blue-500 text-white font-bold' },
        { title: 'Vergelijk', url: 'https://www.vergelijk.nl/', description: '荷兰当地比较知名的电商比价平台', icon: 'V', color: 'bg-yellow-500 text-blue-900 font-bold text-xl' },
        { title: 'Marktplaats', url: 'https://www.marktplaats.nl/', description: '荷兰二手交易平台', icon: 'M', color: 'bg-orange-400 text-white font-bold text-xl' },
        { title: 'BackMarket', url: 'https://www.backmarket.nl/', description: '荷兰二手交易平台', icon: '<<', color: 'bg-white border border-gray-200 text-black font-bold' },
        { title: 'Vinted', url: 'https://www.vinted.nl/', description: '用户可以在平台上买卖二手服装、配饰和其他物品，同时也可以通过', icon: 'V', color: 'bg-teal-500 text-white font-bold text-xl' },
        { title: 'Lidl.nl', url: 'https://www.lidl.nl/', description: '为当地居民提供便利的购物选择，销售各种商品', icon: 'Lidl', color: 'bg-blue-700 text-yellow-400 font-bold' },
    ]
  },
  {
    id: 'czech',
    title: '捷克网站 Czech',
    iconName: 'Shuffle',
    links: [
        { title: 'Hornbach', url: 'https://www.hornbach.cz/', description: '德国广受关注的建材市场', icon: 'H', color: 'bg-orange-500 text-white font-bold text-xl' },
        { title: 'Favi', url: 'https://favi.cz/', description: '捷克地区最大的家具和家装电商平台', icon: 'FAVI', color: 'bg-red-800 text-white font-bold' },
        { title: 'Baumax', url: 'https://www.baumax.cz/', description: '连锁超市Baumax在捷克开设的分站', icon: 'b', color: 'bg-yellow-500 text-red-600 font-bold text-xl' },
        { title: '4Home', url: 'https://www.4home.cz/', description: '4home在捷克开设的分站', icon: '4Home', color: 'bg-teal-500 text-white font-bold' },
        { title: 'Lidl.cz', url: 'https://www.lidl.cz/', description: 'Lidl捷克站是捷克10个最佳购物平台之一', icon: 'Lidl', color: 'bg-blue-700 text-yellow-400 font-bold' },
        { title: 'JYSK', url: 'https://jysk.cz/', description: '欧洲的一家零售外资公司', icon: 'JYSK', color: 'bg-blue-900 text-white font-bold' },
        { title: 'Megaknihy', url: 'https://www.megaknihy.cz/', description: 'Megaknihy在捷克开设的分站', icon: 'M', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'Mall', url: 'https://www.mall.cz/', description: '捷克第二大互联网零售商', icon: 'M', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'Xxxlutz', url: 'https://www.xxxlutz.cz/', description: '欧洲名列前茅的专业家具卖场', icon: 'X', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'Datart', url: 'https://www.datart.cz/', description: '专注于消费电子产品的领先零售商', icon: 'Datart', color: 'bg-blue-900 text-yellow-400 font-bold' },
        { title: 'Zbozi', url: 'https://www.zbozi.cz/', description: 'Zbozi.cz 会为您找到最低的价格', icon: 'Z', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'Heureka', url: 'https://www.heureka.cz/', description: '非营利性非营利组织，由科学中心基金会sr.运营。', icon: 'H', color: 'bg-green-500 text-black font-bold text-xl' },
        { title: 'Bazos', url: 'https://www.bazos.cz/', description: '分类信息，广告，集市，面向所有人的广告', icon: '@', color: 'bg-orange-500 text-white font-bold text-xl' },
        { title: 'Onlineshop', url: 'https://www.onlineshop.cz/', description: '家具电器平台Onlineshop', icon: 'O', color: 'bg-green-600 text-white font-bold text-xl' },
        { title: 'Alza', url: 'https://www.alza.cz/', description: '随时随地快速便捷购物，为公司和个体经营者提供优惠价目表', icon: 'a', color: 'bg-white border border-gray-200 text-green-600 font-bold text-xl' },
        { title: 'Kaufland', url: 'https://www.kaufland.cz/', description: '欧洲最大零售商Schwarz集团旗下电商平台', icon: 'K', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'Allegro', url: 'https://allegro.cz/', description: '波兰最受欢迎的电商平台Allegro在捷克开设的新站', icon: 'allegro', color: 'bg-orange-500 text-white font-bold' },
        { title: 'CZC', url: 'https://www.czc.cz/', description: '最大的在线计算机和电子产品商店之一', icon: 'CZC', color: 'bg-white border border-gray-200 text-red-600 font-bold' },
        { title: 'Okay', url: 'https://www.okay.cz/', description: '最大的电气和家具零售商', icon: 'Okay', color: 'bg-white border border-gray-200 text-yellow-500 font-bold' },
        { title: 'Zalando', url: 'https://www.zalando.cz/', description: '主营时尚产品的电子商务平台，提供货到付款服务', icon: 'Z', color: 'bg-orange-500 text-white font-bold text-xl' },
        { title: 'Vinted', url: 'https://www.vinted.cz/', description: '捷克电商市场的重要参与者，拥有超过200万的活跃用户', icon: 'V', color: 'bg-teal-500 text-white font-bold text-xl' },
    ]
  },
  {
    id: 'slovakia',
    title: '斯洛伐克站 Slovakia',
    iconName: 'Component',
    links: [
        { title: 'Mall', url: 'https://www.mall.sk/', description: '销售家用电器，电子产品，笔记本电脑，电视，户外等商品', icon: 'M', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'Favi', url: 'https://favi.sk/', description: '家具和装饰销售平台，汇集了450+电子商店和实体店', icon: 'FAVI', color: 'bg-red-800 text-white font-bold' },
        { title: 'Datart', url: 'https://www.datart.sk/', description: '专注于销售电子产品的领先零售商', icon: 'Datart', color: 'bg-blue-900 text-yellow-400 font-bold' },
        { title: 'Alza', url: 'https://www.alza.sk/', description: '随时随地快速便捷购物，为公司和个体经营者提供优惠价目表', icon: 'a', color: 'bg-white border border-gray-200 text-green-600 font-bold text-xl' },
        { title: 'Heureka', url: 'https://www.heureka.sk/', description: '非营利性组织，由科学中心基金会sr.运营', icon: 'H', color: 'bg-green-500 text-black font-bold text-xl' },
        { title: 'Bazos', url: 'https://www.bazos.sk/', description: '分类信息，广告，集市，面向所有人的广告', icon: '@', color: 'bg-orange-500 text-white font-bold text-xl' },
        { title: 'Lidl', url: 'https://www.lidl.sk/', description: '折扣连锁店，最高质量的日常用品，价格最优惠', icon: 'Lidl', color: 'bg-blue-700 text-yellow-400 font-bold' },
        { title: 'BackMarket', url: 'https://www.backmarket.sk/', description: '斯洛伐克二手交易平台', icon: '<<', color: 'bg-white border border-gray-200 text-black font-bold' },
        { title: 'Kaufland', url: 'https://www.kaufland.sk/', description: '欧洲最大零售商Schwarz集团旗下电商平台', icon: 'K', color: 'bg-red-600 text-white font-bold text-xl' },
        { title: 'Zalando', url: 'https://www.zalando.sk/', description: '主营品类从世界知名品牌到本地品牌应有尽有', icon: 'Z', color: 'bg-orange-500 text-white font-bold text-xl' },
        { title: 'Vinted', url: 'https://www.vinted.sk/', description: 'Vinted斯洛伐克站，是斯洛伐克最大的二手电商网站之一', icon: 'V', color: 'bg-teal-500 text-white font-bold text-xl' },
    ]
  },
  {
    id: 'tools',
    title: '常用工具 Tools',
    iconName: 'Wrench',
    links: [
      { title: 'DeepL', url: 'https://www.deepl.com/', description: '全球最准确的翻译工具', icon: 'D', color: 'bg-blue-900 text-white' },
      { title: 'XE Currency', url: 'https://www.xe.com/', description: '实时汇率查询', icon: 'X', color: 'bg-blue-500 text-white' },
      { title: '17Track', url: 'https://www.17track.net/', description: '全球物流查询平台', icon: '1', color: 'bg-orange-500 text-white' },
      { title: 'Time.is', url: 'https://time.is/', description: '世界时间查询', icon: 'T', color: 'bg-gray-800 text-white' },
    ]
  }
];