import React from 'react';

const SteamCommunityHelp: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Steam 游戏社区对玩家的帮助</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            社区不仅仅是交流的地方，更是补全游戏机制、提供知识养分的第二课堂。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Functional Mods */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">🛠️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">功能性模组：打破限制</h3>
            <p className="text-sm text-slate-500 mb-6">
              原版游戏在功能上存在局限，而社区模组针对性地解决了这些痛点。
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  修复与优化 (TM:PE)
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="text-slate-400 text-xs block mb-1">痛点：原版车辆只走一条车道，交通AI常被诟病。</span>
                  社区模组允许玩家手动设置红绿灯、车道连接和限速，是解决交通拥堵的神器。
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  上帝模式工具 (Move It!)
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                   允许玩家像在设计软件中一样任意移动、旋转、对齐游戏内的任何物体，彻底打破了原版网格的限制。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  解锁限制 (81 Tiles)
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                   原版仅能解锁9或25个地块，模组可解锁全图，支持建设真正的超大城市。
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Assets & Maps */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl mb-6">🏙️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">资产与地图：丰富内容</h3>
            <p className="text-sm text-slate-500 mb-6">
              数以十万计的免费资源，极大扩充了原版单一的建筑风格。
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  丰富建筑库
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  原版建筑偏卡通且单一。社区提供了成千上万的高精度建筑，如摩天大楼、古典园林、中式小区等。
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  个性化载具与植被
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  可以将公交车换成你所在城市的真实涂装，或者引入更真实的树木植被。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  真实地图与大神存档
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  在上海、东京、旧金山的真实地形上规划城市；或直接下载大神的存档进行观摩学习，研究设计思路。
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Guides & Tutorials */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl shadow-lg transform lg:-translate-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-6">📚</div>
            <h3 className="text-xl font-bold text-white mb-4">指南与教程：快速上手</h3>
            <p className="text-sm text-slate-400 mb-8">
              Steam 社区的指南板块提供了大量沉淀的知识库，帮助新手跨越陡峭的学习曲线。
            </p>

            <div className="space-y-8">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-bold text-blue-300 text-sm mb-2 flex items-center">
                  🚥 交通规划理论
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  社区沉淀了大量关于道路层级的教程，教你如何区分：
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-400 pl-4 list-disc marker:text-blue-500">
                  <li>高速路 (Highway)</li>
                  <li>主干道 (Arterial)</li>
                  <li>集散路 (Collector)</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500">这是解决堵车问题的核心理论。</p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-bold text-emerald-300 text-sm mb-2 flex items-center">
                  🎨 造景教程
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  有专门的指南教你如何利用道具（Props）和贴图（Decals），把一个荒地变成逼真的场景。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bridge to TapTap */}
        <div className="mt-24 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-slate-50 px-6 text-sm text-slate-500 font-medium">
                  Steam 的社区生态已经非常成熟，那么作为移动端社区代表的 <span className="text-cyan-600 font-bold">TapTap PC版</span> 又是怎样的呢？
                </span>
            </div>
            <div className="flex justify-center mt-6">
                <svg className="w-6 h-6 text-slate-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SteamCommunityHelp;