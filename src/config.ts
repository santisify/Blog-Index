/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "个人网站",
    sites: [
      {
        title: "Blog",
        url: "https://blog.lazy-boy-acmer.cn/",
        icon: "https://cdn.jsdelivr.net/gh/santisify/picx-images-hosting@master/logo.svg",
        color: "#0171CD",
      },
      {
        title: "Qexo",
        description: "网站描述",
        url: "https://qexo.lazy-boy-acmer.cn/",
        icon: "https://avatars.githubusercontent.com/u/103436983?s=48&v=4",
      },
      {
        title: "站点监测",
        description: "监测网站",
        url: "https://stats.uptimerobot.com/FBJ3XDLMuP",
        icon: "https://cdn.jsdelivr.net/gh/santisify/picx-images-hosting@master/computer_icon.svg",
      },
    ],
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://www.esunr.xyz",
        icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
      },
    ],
  },
];

const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "Lazy_boy_的小屋",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.lazy-boy-acmer.cn",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/santisify",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://cdn.jsdelivr.net/gh/santisify/picx-images-hosting@master/6C5967B06111924D434A6B4622B14E14.9nzsjnsw42.jpg",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "",
  FOOTER_INFO: false,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
