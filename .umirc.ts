import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'qingyingliu',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  mode: 'site',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
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
      title: '英语',
      path: '/english',
    },
    {
      title: '生活',
      path: '/life',
    },
    {
      title: '心理学',
      path: '/psychology'
    }
  ],
  // 以下两行的作用: 渲染成有具体内容的静态 html 页面，便于 SEO
  ssr: {},
  exportStatic: {},
  scripts: [{ src: '/index.js', defer: true }],
  copy: [
    { from: './serviceWorker.js', to: 'serviceWorker.js' },
    { from: './index.js', to: 'index.js' },
  ],
  // more config: https://d.umijs.org/config
});
