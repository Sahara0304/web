import React from 'react';

const NewGameAnalysis: React.FC = () => {
  return (
    <section id="heartbeat-town" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
           <span className="inline-block px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-sm font-semibold mb-4">TapTap 热门</span>
           <h2 className="text-3xl font-bold text-slate-900">模拟经营：心动小镇 (初体验)</h2>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-12 group">
          <img 
            src="https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Heartbeat Town Vibe" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent flex items-end p-8">
            <div className="text-white max-w-3xl">
              <h3 className="text-2xl font-bold mb-2">慢节奏 · 治愈 · 社交</h3>
              <p className="opacity-90 text-sm md:text-base leading-relaxed">
                前期体验非常新鲜，沉浸感极强。特别是第一次和路人合奏乐器或一起追公交车时，会有很强的治愈感。
              </p>
            </div>
          </div>
        </div>

        {/* 1. Experience & Feel */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 border-r border-amber-100 pr-0 md:pr-8">
               <h3 className="text-xl font-bold text-amber-600 mb-4">初体验：慢与自由</h3>
               <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                 初步体验之后最直观的感受是画风治愈、音乐舒缓。
               </p>
               <ul className="space-y-3 text-sm text-slate-600">
                 <li className="flex items-start">
                   <span className="mr-2 text-amber-400">🚫</span>
                   <span><strong>无上班打卡感：</strong>没有强制性的每日任务列表，也没有焦虑的战力数值和强制体力限制。</span>
                 </li>
               </ul>
            </div>
            <div className="md:w-2/3">
               <h3 className="text-xl font-bold text-amber-600 mb-4">新颖的社交模式</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-4">
                 每次上线会被分配到一个 <strong className="text-slate-800">12位玩家的随机社区</strong>。
               </p>
               <div className="bg-amber-50 p-4 rounded-xl text-sm text-amber-900 leading-relaxed border border-amber-100">
                 你会在家门口看到邻居在浇花，或者路过河边看到有人在钓鱼。这种设计营造了一种现实生活中邻居互相陪伴的感觉，恰到好处——<span className="font-bold">既不孤独也不喧闹</span>。
               </div>
            </div>
          </div>
        </div>

        {/* 2. Core Loop Cards */}
        <h3 className="text-2xl font-bold text-slate-800 mb-6 pl-2 border-l-4 border-amber-500">核心循环</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group">
                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-100 transition">🎣</div>
                <h4 className="font-bold text-lg mb-2 text-slate-900">采集与收集</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  钓鱼、捕虫、观鸟、采矿。这些动作不仅仅是资源的获取，每一个都有专门的图鉴和星级评价系统，满足收集癖。
                </p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-orange-100 transition">👨‍🍳</div>
                <h4 className="font-bold text-lg mb-2 text-slate-900">职业/爱好养成</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  你可以成为厨师、园丁、渔夫等。例如做厨师，需亲自摘苹果、买面粉，通过QTE小游戏烹饪，还能摆摊卖给其他玩家。
                </p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group">
                <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-pink-100 transition">🏠</div>
                <h4 className="font-bold text-lg mb-2 text-slate-900">建造与装修</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  从初始的帐篷或小破屋开始，通过收集资源扩建。支持完全自定义装修，打造属于自己的理想家园。
                </p>
            </div>
        </div>

        {/* 3. Community & Business Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Community Atmosphere */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-teal-400">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="bg-teal-100 text-teal-600 p-2 rounded-lg mr-3">🤝</span>
                    社区氛围：利他与共创
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                    由于没有竞争，玩家之间的戾气极小。社区特色在于<span className="text-teal-600 font-semibold">利他型社交</span>与<span className="text-teal-600 font-semibold">创意分享</span>。
                </p>
                <ul className="space-y-4">
                    <li className="bg-slate-50 p-3 rounded-lg">
                        <div className="font-semibold text-slate-800 text-sm mb-1">装修抄作业</div>
                        <p className="text-xs text-slate-500">在TapTap/小红书分享建筑图纸，从日式庭院到现代别墅，互相学习。</p>
                    </li>
                    <li className="bg-slate-50 p-3 rounded-lg">
                        <div className="font-semibold text-slate-800 text-sm mb-1">资源互助</div>
                        <p className="text-xs text-slate-500">自发组织浇水群，每日帮好友浇花提升杂交率，共享稀有资源位置。</p>
                    </li>
                    <li className="bg-slate-50 p-3 rounded-lg">
                        <div className="font-semibold text-slate-800 text-sm mb-1">UGC 生态</div>
                        <p className="text-xs text-slate-500">支持设计服装、家具并交易，激发玩家创作热情。</p>
                    </li>
                </ul>
            </div>

            {/* Business Model */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-sm text-slate-200">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <span className="bg-white/10 p-2 rounded-lg mr-3">💰</span>
                    盈利模式：外观付费
                </h3>
                <p className="text-sm text-slate-300 mb-6">
                    没有PVP和数值碾压，氪金点完全集中在审美上。零氪玩家也不影响正常游玩体验。
                </p>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                        <div>
                            <span className="block text-white font-medium text-sm">通行证 (Battle Pass)</span>
                            <span className="text-xs text-slate-400">随着游玩等级提升，获得当季限定衣服、特色家具、载具。</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                        <div>
                            <span className="block text-white font-medium text-sm">外观抽卡</span>
                            <span className="text-xs text-slate-400">通过“许愿星”抽取高品质家具套装或稀有服装。集齐绝版需要较大投入。</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                        <div>
                            <span className="block text-white font-medium text-sm">直购礼包</span>
                            <span className="text-xs text-slate-400">特定载具、特殊建材包或精美皮肤直接售卖。</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NewGameAnalysis;