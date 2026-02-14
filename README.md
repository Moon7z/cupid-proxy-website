---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 3044022074367e0e647a4066eb9b127e90ba8bcb14ef96f6f266e955254bdd5cb990ea3f02202c807c634c6c2f6c8438f80e9ada195256cb139ee09189a22be9fa8b050a22c8
    ReservedCode2: 3045022100884093f68bdfe9b78d3f03bee894ec5f2124b26399ffca12d53ea755eaf8017102204696506f539ef04e853b3b4993a2e2f23511bd1004b3cb4b9680b7bce23999d5
---

# CupidProxy AI约会助手官网

🌐 现代化高转化落地页 | React 18 + TypeScript + Tailwind CSS

## ✨ 功能特性

本官网是一个现代化的高转化率产品落地页，包含以下核心特性：

- 🎨 深色科技感主题设计，采用渐变色系和玻璃拟态效果
- 🚀 流畅的动画交互动效，使用 Framer Motion 实现滚动渐入、悬浮效果
- 📱 完整响应式适配，完美支持移动端、平板和桌面端
- ⚡ 高性能构建优化，首屏加载速度快
- 🔒 安全可靠的代码架构

## 🚀 快速部署指南

### 方式一：Vercel 部署（推荐）

Vercel 是最推荐的部署方式，特别适合 React 项目：

**步骤一：准备代码**

```bash
# 克隆或下载代码到本地
git clone <your-github-repo-url>
cd cupidproxy-website
```

**步骤二：安装依赖**

```bash
# 使用 pnpm（推荐）
pnpm install

# 或者使用 npm
npm install

# 或者使用 yarn
yarn install
```

**步骤三：本地预览**

```bash
# 启动开发服务器
pnpm dev
```

访问 http://localhost:5173 预览效果。

**步骤四：部署到 Vercel**

1. 访问 https://vercel.com 并登录账号
2. 点击 "Add New Project"
3. 选择 "Import Git Repository"
4. 选择您的 GitHub 仓库
5. 点击 "Deploy" 完成部署

**自动部署**：每次推送代码到 main 分支，Vercel 会自动重新部署。

### 方式二：Netlify 部署

**步骤一：准备代码**

同上，将代码推送到 GitHub 仓库。

**步骤二：登录 Netlify**

1. 访问 https://netlify.com 并登录账号
2. 点击 "Add new site" → "Import an existing project"
3. 连接 GitHub 并选择您的仓库

**步骤三：配置部署设置**

- Build command: `pnpm build`
- Publish directory: `dist`
- Node version: 18+

**步骤四：完成部署**

点击 "Deploy site" 按钮，Netlify 会自动构建并部署您的网站。

### 方式三：Cloudflare Pages 部署

**步骤一：推送代码到 GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

**步骤二：连接 Cloudflare**

1. 访问 https://pages.cloudflare.com
2. 点击 "Create a project"
3. 选择 "Connect to Git"
4. 选择您的 GitHub 仓库

**步骤三：配置构建设置**

- Framework preset: `Vite`
- Build command: `pnpm build`
- Build output directory: `dist`

### 方式四：本地构建部署

如果您想在本地构建并部署到自己的服务器：

```bash
# 安装依赖
pnpm install

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

构建完成后，`dist` 文件夹中的文件可以部署到任何静态网站托管服务。

## 📁 项目结构说明

```
cupidproxy-website/
├── src/
│   ├── App.tsx              # 主应用组件，包含所有页面区块
│   ├── index.css            # 全局样式，包含动画和自定义类
│   └── main.tsx             # 应用入口文件
├── public/                  # 静态资源文件夹
├── index.html              # HTML 模板入口
├── package.json            # 项目依赖配置
├── vite.config.ts          # Vite 构建配置
├── tailwind.config.js      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
├── postcss.config.js       # PostCSS 配置
└── README.md               # 项目说明文档
```

### 核心文件说明

- **src/App.tsx**：包含所有页面组件（导航栏、首屏、痛点共鸣、解决方案、工作流程、功能特性、用户证言、定价方案、FAQ、最终CTA、页脚）
- **src/index.css**：包含全局样式、动画定义、自定义工具类
- **vite.config.ts**：Vite 构建工具配置

## 🎨 自定义修改指南

### 修改品牌信息

在 `src/App.tsx` 文件开头，您可以找到并修改以下配置：

```tsx
// 修改品牌名称（在 Logo 组件中）
<span className="text-xl font-bold text-white">您的品牌名称</span>

// 修改 Footer 中的版权信息
<p className="text-textMuted text-sm">
    © 2026 您的品牌名称. 让技术更有温度。
</p>
```

### 修改联系方式

在 Footer 组件中修改社交媒体链接：

```tsx
const socialLinks = [
    { icon: <MessageSquare className="w-5 h-5" />, name: "Telegram", url: "https://t.me/yourbrand" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "https://twitter.com/yourbrand" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "https://instagram.com/yourbrand" }
];
```

### 修改配色方案

在 `src/App.tsx` 文件顶部的 colors 对象中调整：

```tsx
const colors = {
    primary: '#6B46C1',       // 主色调（深紫色，代表信任与科技感）
    secondary: '#EC4899',      // 辅助色（粉紫色，代表温暖与情感）
    accent: '#3B82F6',        // 强调色（电蓝色，代表行动与效率）
    dark: '#0F172A',          // 深色背景色
    darkLight: '#1E293B',     // 稍浅的深色
    text: '#F1F5F9',          // 主文字颜色
    textMuted: '#94A3B8',     // 次要文字颜色
};
```

### 修改文案内容

在各组件中直接编辑文案文本：

- **Hero 标题**：搜索「让 AI 代替你聊天」进行修改
- **功能特性**：搜索「Personality Cloning」进行修改
- **定价方案**：搜索「选择适合你的计划」进行修改
- **用户证言**：搜索「他们让 AI 先聊」进行修改

### 修改媒体背书

在 Testimonials 组件中修改媒体报道 Logo：

```tsx
{["36氪", "虎嗅", "探探", "Soul", "她说"].map((brand, index) => (
    <span key={index} className="text-2xl font-bold text-white">
        {brand}
    </span>
))}
```

## 🛠 技术栈详情

- **前端框架**: React 18.3 - 现代声明式 UI 框架
- **开发语言**: TypeScript 5.6 - 类型安全的 JavaScript 超集
- **样式系统**: Tailwind CSS 3.4 - 原子化 CSS 框架
- **动画库**: Framer Motion 12.34 - 专业动画解决方案
- **图标库**: Lucide React - 轻量级图标集
- **构建工具**: Vite 6 - 极速构建工具
- **代码规范**: ESLint + TypeScript ESLint

## 📱 响应式断点设计

- **移动端**: < 640px（手机设备）
- **平板端**: 640px - 1024px（平板设备）
- **桌面端**: > 1024px（桌面显示器）

所有组件都经过响应式优化，确保在各种设备上都有良好的展示效果。

## 🔒 浏览器兼容性

支持所有现代浏览器：

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

不支持 Internet Explorer。

## 📈 SEO 优化建议

虽然当前是单页应用，建议您添加以下 SEO 优化：

### 添加 Meta 标签

在 `index.html` 中添加：

```html
<title>您的品牌名称 - AI智能约会助手</title>
<meta name="description" content="您的品牌描述文字，帮助用户了解产品价值">
<meta name="keywords" content="AI约会,智能匹配,约会助手,社交工具">
<meta property="og:title" content="您的品牌名称">
<meta property="og:description" content="您的品牌描述">
<meta property="og:image" content="/og-image.jpg">
```

### 添加结构化数据

可以添加 Schema.org 结构化数据以提升搜索展示效果。

## 🚀 性能优化建议

1. **图片优化**：使用 WebP 格式，添加 lazy loading
2. **代码分割**：Vite 默认支持，按路由进行代码分割
3. **字体优化**：使用系统字体或添加 font-display: swap
4. **CDN 加速**：部署到边缘网络（Vercel/Cloudflare 默认支持）

## 🔧 常见问题解决

### 问题一：依赖安装失败

```bash
# 清除缓存重新安装
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### 问题二：构建内存不足

```bash
# 增加 Node 内存限制
export NODE_OPTIONS="--max-old-space-size=4096"
pnpm build
```

### 问题三：TypeScript 报错

```bash
# 重新生成 TypeScript 缓存
pnpm exec tsc --noEmit
```

### 问题四：样式不生效

确保正确引入了 Tailwind CSS：

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📄 许可证

本项目采用 MIT 许可证，您可以自由使用、修改和分发代码。

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目！

## 📞 获取帮助

如果在部署过程中遇到问题，您可以：

1. 查看 Vercel 官方文档：https://vercel.com/docs
2. 查看 Netlify 官方文档：https://docs.netlify.com
3. 搜索相关错误信息

---

**祝您部署顺利！🚀**

如有任何问题，请随时联系获取帮助。
