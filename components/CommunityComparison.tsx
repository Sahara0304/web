import React from 'react';

const CommunityComparison: React.FC = () => {
  return (
    <section id="community-vs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Steam 与 TapTap (PC端) 社区深度对比</h2>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Steam Card */}
          <div className="bg-slate-900 text-slate-200 rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S16.627 0 12 0zm0 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Steam 社区</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">1. 核心基因：工具属性</h4>
                <p className="text-sm text-slate-400">为已拥有的游戏服务。生态闭环围绕商品的售后服务。</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-slate-800 rounded text-xs">实用</span>
                  <span className="px-2 py-1 bg-slate-800 rounded text-xs">硬核</span>
                  <span className="px-2 py-1 bg-slate-800 rounded text-xs">功能性</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-blue-400 mb-1">2. 内容形态：生产力</h4>
                <p className="text-sm text-slate-400">拥有强大的 UGC 生产力。指南、Mod、评测均具有极高参考价值。</p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-400 mb-1">3. 开发者距离</h4>
                <p className="text-sm text-slate-400">除了独立游戏外，开发者多发布正式公告，鲜少直接回复玩家。</p>
              </div>
            </div>
          </div>

          {/* TapTap Card */}
          <div className="bg-cyan-500 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition duration-300">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-cyan-400 pb-4">TapTap (PC)</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-cyan-100 mb-1">1. 核心基因：社交属性</h4>
                <p className="text-sm text-cyan-50">垂直类的社交媒体。核心是发现好游戏和关注开发者/玩家。</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-cyan-600 rounded text-xs">发现</span>
                  <span className="px-2 py-1 bg-cyan-600 rounded text-xs">交流</span>
                  <span className="px-2 py-1 bg-cyan-600 rounded text-xs">ACG</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-100 mb-1">2. 内容形态：话题讨论力</h4>
                <p className="text-sm text-cyan-50">保留移动端的“刷”体验。短评、同人图、Cosplay为主，碎片化阅读体验好。</p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-100 mb-1">3. 开发者距离</h4>
                <p className="text-sm text-cyan-50">极度鼓励开发者入驻。制作人和玩家零距离互动。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transition Bridge */}
        <div className="mt-20 text-center">
             <p className="text-slate-500 mb-4">
               理论分析之外，我们通过一款 TapTap 热门游戏，来具体看看这种“社交型社区”是如何运作的。
             </p>
             <div className="inline-flex items-center text-amber-600 bg-amber-50 px-6 py-2 rounded-full font-medium border border-amber-200 shadow-sm animate-pulse">
                👉 案例分析：心动小镇
             </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityComparison;