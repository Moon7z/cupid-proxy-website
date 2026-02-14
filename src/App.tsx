import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, MessageCircle, Users, Shield, Zap, Calendar, Globe, Sparkles, ArrowRight, Check, Star, Menu, X, Play, Clock, Target, Brain, Link, Lock, Smartphone, Mail, Instagram, Twitter, MessageSquare, ChevronDown } from 'lucide-react';

// 品牌色定义
const colors = {
  primary: '#6B46C1',      // 深紫色 - 信任与科技感
  secondary: '#EC4899',    // 粉紫色 - 温暖与情感
  accent: '#3B82F6',       // 电蓝色 - 行动与效率
  dark: '#0F172A',         // 近黑色 - 深色背景
  darkLight: '#1E293B',    // 稍浅的深色
  text: '#F1F5F9',         // 灰白色文字
  textMuted: '#94A3B8',    // 灰色文字
};

// 组件：导航栏
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-dark/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">CupidProxy</span>
          </div>

          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text hover:text-primary transition-colors">功能特性</a>
            <a href="#how-it-works" className="text-text hover:text-primary transition-colors">工作流程</a>
            <a href="#pricing" className="text-text hover:text-primary transition-colors">定价方案</a>
            <a href="#faq" className="text-text hover:text-primary transition-colors">常见问题</a>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity touch-active">
              免费开始
            </button>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden text-white touch-active p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="菜单"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-dark border-b border-white/10 py-4 px-4"
        >
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-text hover:text-primary transition-colors py-2">功能特性</a>
            <a href="#how-it-works" className="text-text hover:text-primary transition-colors py-2">工作流程</a>
            <a href="#pricing" className="text-text hover:text-primary transition-colors py-2">定价方案</a>
            <a href="#faq" className="text-text hover:text-primary transition-colors py-2">常见问题</a>
            <button className="w-full py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold">
              免费开始
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

// 组件：Hero 首屏区域
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-primary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧文案 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 mb-6 border border-white/10">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm text-textMuted">AI 智能约会助手</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              让 AI 代替你聊天
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                把真正合适的人推荐给你
              </span>
            </h1>

            <p className="text-xl text-textMuted mb-8 max-w-lg">
              克隆你的聊天风格，7×24 小时同时与多位潜在对象深度交流。
              AI 初筛 + 人工复核，节省 90% 的无效社交时间。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 touch-active">
                <span>免费创建我的 AI 分身</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-lg hover:bg-white/20 transition-colors flex items-center justify-center space-x-2 border border-white/20 touch-active">
                <Play className="w-5 h-5" />
                <span>观看 2 分钟演示</span>
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-textMuted">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>端到端加密</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-primary" />
                <span>透明化使用</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary" />
                <span>10,000+ 用户信赖</span>
              </div>
            </div>
          </motion.div>

          {/* 右侧可视化 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-darkLight rounded-3xl p-4 border border-white/10 shadow-2xl">
              {/* 模拟手机界面 */}
              <div className="bg-dark rounded-2xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    <span className="text-white font-medium">AI 助手</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                </div>

                <div className="space-y-3">
                  {/* 对话气泡 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-end"
                  >
                    <div className="bg-primary/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                      <p className="text-text text-sm">周末一般干嘛呢？😊</p>
                    </div>
                  </motion.div>

                  {/* 对话气泡 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-start"
                  >
                    <div className="bg-secondary/20 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                      <p className="text-text text-sm">
                        哈哈周末基本是充电模式😴 不过最近发现一家很棒的咖啡馆，老板超有趣～你平时喜欢安静的还是热闹的地方？
                      </p>
                    </div>
                  </motion.div>

                  {/* 对话气泡 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="flex justify-end"
                  >
                    <div className="bg-primary/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                      <p className="text-text text-sm">哇听起来很棒！我比较喜欢安静的小店☕️</p>
                    </div>
                  </motion.div>

                  {/* 对话气泡 4 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="flex justify-start"
                  >
                    <div className="bg-secondary/20 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                      <p className="text-text text-sm">
                        那必须带你去试试！对了，你还有什么爱好吗？
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* 输入区域 */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-white/5 rounded-full px-4 py-2 text-textMuted text-sm">
                      AI 正在自动回复中...
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 装饰元素 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-2xl blur-xl"
            />
          </motion.div>
        </div>

        {/* 向下滚动提示 */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-textMuted" />
        </motion.div>
      </div>
    </section>
  );
};

// 组件：痛点共鸣区域
const Problem = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "时间黑洞",
      description: "每天花 2 小时浏览资料，80% 对话无疾而终",
      stat: "平均需浏览 100 人获得 1 次约会",
      color: "#EF4444"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "风格失真",
      description: "忙时回复敷衍，错失真正契合的人",
      stat: "73% 用户因「回复不及时」被误解",
      color: "#F59E0B"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "筛选疲劳",
      description: "重复自我介绍，热情被消耗殆尽",
      stat: "用户平均在 3 个平台同时活跃",
      color: "#EC4899"
    }
  ];

  return (
    <section className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            现代约会，为什么越来越累？
          </h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            你不是不想找，只是厌倦了同样的开场白。我们懂。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-darkLight rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all group"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${problem.color}20`, color: problem.color }}
              >
                {problem.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-textMuted mb-4">{problem.description}</p>
              <p className="text-sm text-textMuted/60">{problem.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 组件：解决方案区域
const Solution = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-dark to-darkLight relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            CupidProxy 如何重新定义约会初筛
          </h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            智能科技，让你把时间花在真正重要的人身上
          </p>
        </motion.div>

        {/* 流程可视化 */}
        <div className="relative">
          {/* 连接线 */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "上传记录", desc: "5 分钟数据导入", color: "from-primary to-purple-500" },
              { step: "02", title: "AI 学习", desc: "2 小时模型训练", color: "from-purple-500 to-secondary" },
              { step: "03", title: "自动聊天", desc: "7×24 小时多线程", color: "from-secondary to-pink-500" },
              { step: "04", title: "精准推荐", desc: "每周 3-5 位高契合度", color: "from-pink-500 to-accent" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-darkLight rounded-2xl p-6 border border-white/10 text-center hover:border-primary/50 transition-all group">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-textMuted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 核心卖点 */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: "风格保真",
              description: "不只是回复，更是「像你一样回复」。AI 深度学习你的语气词、表情包习惯和话题偏好。"
            },
            {
              icon: <Link className="w-8 h-8" />,
              title: "双边智能",
              description: "如果对方也用 CupidProxy，AI 间可深度对话快速验证契合度，减少无效沟通。"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "透明可信",
              description: "所有使用 AI 助手的用户均有标识，拒绝欺骗，建立真诚的社交基础。"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-white/10"
            >
              <div className="text-secondary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-textMuted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 组件：工作流程
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "克隆你的数字分身",
      description: "上传微信/WhatsApp 聊天记录（脱敏处理），AI 提取你的语气词、表情包习惯、话题偏好，生成 Personality Vector，相似度 > 85% 即可启用。",
      icon: <Brain className="w-10 h-10" />
    },
    {
      number: "02",
      title: "设定筛选标准",
      description: "选择约会平台（探探/Tinder/Bumble 等），设置筛选条件（年龄/距离/兴趣标签），定义聊天边界（哪些话题需人工确认）。",
      icon: <Target className="w-10 h-10" />
    },
    {
      number: "03",
      title: "AI 开始多线程对话",
      description: "同时与 5-10 位潜在对象保持对话，实时记录对方细节（小狗名字/喜欢的餐厅），检测契合度信号，动态调整策略。",
      icon: <MessageSquare className="w-10 h-10" />
    },
    {
      number: "04",
      title: "接收精准推荐",
      description: "每周收到「Top 3 匹配报告」，查看对话摘要和契合度评分，一键接管对话，安排线下见面。",
      icon: <Calendar className="w-10 h-10" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            四步开启智能约会
          </h2>
          <p className="text-xl text-textMuted">
            简单几步，让 AI 成为你的专属约会顾问
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
            >
              <div className="flex-1">
                <div className="bg-darkLight rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-textMuted leading-relaxed">{step.description}</p>
                </div>
              </div>

              <div className="hidden lg:flex flex-1 justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-secondary">
                  {step.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 组件：功能特性
const Features = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Personality Cloning",
      description: "基于 LoRA 技术微调，还原真实聊天风格"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Multi-Thread Chat",
      description: "同时管理多个对话线程，效率提升 10 倍"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Compatibility Scoring",
      description: "话题共鸣 + 价值观契合 + Chemistry 三维评分"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Memory Bank",
      description: "长期记忆每位对象的细节，告别「查户口」"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Guardrails",
      description: "敏感话题自动转人工，隐私信息严格管控"
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Cross-Platform",
      description: "支持主流约会平台聚合，一站式管理"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-dark to-primary/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            不只是聊天机器人，更是你的约会战略顾问
          </h2>
          <p className="text-xl text-textMuted">
            六大核心功能，全方位提升你的约会效率
          </p>
        </motion.div>

        {/* Bento Grid 布局 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-darkLight rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 text-secondary group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-textMuted text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 组件：用户证言
const Testimonials = () => {
  const testimonials = [
    {
      quote: "以前每天花 2 小时在 dating apps 上，现在 AI 帮我筛完，我只需要每周见 2-3 个真正聊得来的人。效率提升太多了。",
      author: "李先生",
      role: "金融从业者",
      age: "32 岁",
      location: "上海",
      avatar: "👨‍💼"
    },
    {
      quote: "我不擅长开场白，AI 学了我的技术宅幽默后，居然帮我匹配到了一个同样喜欢科幻的女生，现在我们在计划一起去 Comic-Con。",
      author: "张先生",
      role: "程序员",
      age: "28 岁",
      location: "北京",
      avatar: "👨‍💻"
    },
    {
      quote: "第二次约会更谨慎，AI 帮我深度聊了很多价值观话题，避免了很多不合适的人，省了很多尴尬。",
      author: "王女士",
      role: "产品经理",
      age: "35 岁",
      location: "深圳",
      avatar: "👩‍💼"
    }
  ];

  return (
    <section className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            他们让 AI 先聊，然后找到了对的人
          </h2>
          <p className="text-xl text-textMuted">
            真实用户故事，看看 CupidProxy 如何改变他们的约会生活
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-darkLight to-darkLight/50 rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-text text-lg mb-6 italic">「{testimonial.quote}」</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-textMuted text-sm">{testimonial.role} · {testimonial.age} · {testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 媒体报道 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-white/10 text-center"
        >
          <p className="text-textMuted mb-8">媒体报道</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {["36氪", "虎嗅", "探探", "Soul", "她说"].map((brand, index) => (
              <span key={index} className="text-2xl font-bold text-white hover:opacity-100 transition-opacity cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 组件：定价方案
const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "¥0",
      period: "/月",
      description: "免费体验",
      features: [
        "单平台接入",
        "3 个并发对话",
        "基础风格克隆",
        "每日摘要"
      ],
      cta: "立即开始",
      highlight: false
    },
    {
      name: "Pro",
      price: "¥98",
      period: "/月",
      description: "专业版",
      features: [
        "多平台聚合",
        "10 个并发对话",
        "高级微调 + 学习",
        "契合度报告"
      ],
      cta: "开始 14 天免费试用",
      highlight: true
    },
    {
      name: "Elite",
      price: "¥298",
      period: "/月",
      description: "精英版",
      features: [
        "无限平台 + 优先推荐",
        "无限对话",
        "人格化深度定制",
        "人工约会顾问",
        "线下见面安排服务"
      ],
      cta: "预约顾问咨询",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-dark to-primary/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            选择适合你的计划
          </h2>
          <p className="text-xl text-textMuted">
            所有计划均包含端到端加密和透明使用标识
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-8 border ${
                plan.highlight
                  ? 'bg-gradient-to-b from-primary/20 to-secondary/10 border-primary/50'
                  : 'bg-darkLight border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-white text-sm font-semibold">
                  推荐
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-textMuted text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-8">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-textMuted">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-textMuted">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all touch-active ${
                plan.highlight
                  ? 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 组件：常见问题
const FAQ = () => {
  const faqs = [
    {
      question: "对方会知道我在用 AI 吗？",
      answer: "我们强烈建议透明化。使用 CupidProxy 的用户在个人资料中会有「使用 AI 助手」标识，这是对对方的尊重，也是建立信任的基础。"
    },
    {
      question: "AI 会不会聊得太好，见面后让对方失望？",
      answer: "不会。我们的 AI 会刻意保持「真实度校准」，不会过度美化。同时，当契合度达到阈值时，我们会建议进行视频验证，确保线上线下的一致性。"
    },
    {
      question: "我的聊天记录安全吗？",
      answer: "绝对安全。我们采用 AES-256 加密存储，支持联邦学习（数据不出本地），且对话内容 7 天后自动脱敏归档。已通过 GDPR 和 CCPA 合规认证。"
    },
    {
      question: "如果对方也是 CupidProxy 用户，两个 AI 会不会陷入无限对话？",
      answer: "不会。当双方 AI 判断契合度 > 80 分时，会触发「人类介入节点」，建议双方进行真人视频通话，避免 AI 代理战争。"
    },
    {
      question: "哪些话题 AI 不会自动回复？",
      answer: "涉及见面邀约、私密信息交换（地址/工作单位）、明确恋爱意向等敏感话题时，AI 会暂停并推送通知给你确认。"
    }
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-dark relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            你可能想知道的
          </h2>
          <p className="text-xl text-textMuted">
            热门问题解答
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-darkLight rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-white font-semibold pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-textMuted transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-textMuted leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 组件：最终 CTA
const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-purple-600 to-secondary relative overflow-hidden">
      {/* 装饰 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            停止无效社交，让 AI 帮你找到对的人
          </h2>
          <p className="text-xl text-white/80 mb-8">
            加入 10,000+ 用户的智能约会革命，每周节省 10 小时
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center bg-white/10 rounded-full p-2 border border-white/20">
              <Mail className="w-5 h-5 text-white ml-4" />
              <input
                type="email"
                placeholder="输入你的邮箱地址"
                className="bg-transparent text-white placeholder-white/60 px-4 py-2 outline-none flex-1 min-w-[200px]"
              />
              <button className="px-6 py-2 bg-black/20 text-white rounded-full hover:bg-black/30 transition-colors font-semibold touch-active">
                免费创建
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <button className="flex items-center space-x-2 bg-black/20 px-4 py-2 rounded-lg text-white hover:bg-black/30 transition-colors touch-active">
              <Smartphone className="w-5 h-5" />
              <span>iOS App</span>
            </button>
            <button className="flex items-center space-x-2 bg-black/20 px-4 py-2 rounded-lg text-white hover:bg-black/30 transition-colors touch-active">
              <Smartphone className="w-5 h-5" />
              <span>Android App</span>
            </button>
          </div>

          <p className="mt-8 text-white/60 text-sm">
            🎁 前 1000 名用户赠送「人工约会顾问」1 小时咨询（剩余 327 名）
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// 组件：页脚
const Footer = () => {
  const footerLinks = {
    产品: ["功能特性", "定价方案", "更新日志", "路线图"],
    资源: ["约会技巧博客", "AI 伦理白皮书", "帮助中心", "API 文档"],
    公司: ["关于我们", "加入我们", "联系我们", "媒体 kit"],
    法律: ["隐私政策", "服务条款", "Cookie 政策", "GDPR 合规"]
  };

  const socialLinks = [
    { icon: <MessageSquare className="w-5 h-5" />, name: "Telegram", url: "#" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "#" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "#" }
  ];

  return (
    <footer className="bg-dark py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo 和简介 */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CupidProxy</span>
            </div>
            <p className="text-textMuted text-sm mb-4">
              让技术更有温度，帮你找到真正合适的人。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-textMuted hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 链接组 */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-textMuted hover:text-primary text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部 */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textMuted text-sm">
            © 2026 CupidProxy. 让技术更有温度。
          </p>
          <div className="flex items-center space-x-4 text-sm text-textMuted">
            <span className="flex items-center space-x-1">
              <Lock className="w-4 h-4" />
              <span>端到端加密</span>
            </span>
            <span className="flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>隐私保护</span>
            </span>
            <span className="flex items-center space-x-1">
              <Globe className="w-4 h-4" />
              <span>支持多语言</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 主应用
const App = () => {
  return (
    <div className="min-h-screen bg-dark text-text">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
