import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'qingyingliu',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  mode: 'site',
  locales: [['zh-CN', '中文'], ['en-US', 'English']],
  outputPath: 'docs-dist',
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '前端技术',
      path: '/front-end',
    },
    {
      title: '客户端技术',
      path: '/client',
    },
    {
      title: '生活',
      path: '/life',
    },
  ],
  // 为了部署在 github Page
  base: '/website',
  publicPath: '/website/',
    // more config: https://d.umijs.org/config
});
