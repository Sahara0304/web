import React from 'react';

const GameExperience: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Left Column: Title & Core Concept */}
          <div className="md:w-1/3 sticky top-24">
             <h2 className="text-3xl font-bold text-slate-900 mb-6 relative inline-block">
                体验心得
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
             </h2>
             <div className="hidden md:block text-8xl font-black text-slate-100 absolute -z-10 -ml-6 -mt-12 select-none opacity-50">
               FREE
             </div>
             <p className="text-2xl font-medium text-slate-800 leading-tight">
               城市天际线的交互核心在我看来最重要的就是“<span className="text-blue-600">自由</span>”。
             </p>
          </div>

          {/* Right Column: Detailed Text */}
          <div className="md:w-2/3 space-y-8">
             <div className="prose prose-lg text-slate-600 leading-relaxed">
               <p>
                 玩城市天际线的过程实际上就是发挥自己的想象力进行拓荒的过程，可操作的土地面积大，创意工坊中的模组也使得每一寸土地都有我们自由发挥的空间，并且可以篡改城市运行规则，有足够强大的配套支持我们造出心目中的城市。
               </p>
             </div>
             
             {/* Comparison Box */}
             <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-slate-300 hover:border-blue-400 transition-colors duration-300">
                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  竞品对比：模拟城市
                </h4>
                <p className="text-base text-slate-600 leading-relaxed">
                  相比之下，其同类竞品“模拟城市”，可利用面积极小，道路间隔要严格设计，游戏规则死板，相对来讲比城市天际线好上手，但也丧失了发挥想象力的空间。
                </p>
             </div>

             <div className="flex items-center gap-3">
               <div className="h-px bg-slate-200 flex-1"></div>
               <p className="font-bold text-slate-900 text-lg">
                 因此在同类游戏里我还是最喜欢城市天际线。
               </p>
               <div className="h-px bg-slate-200 flex-1"></div>
             </div>
          </div>
        </div>

        {/* Visual Bridge */}
        <div className="mt-20 pt-10 border-t border-dashed border-slate-200 text-center">
            <p className="text-slate-500 mb-4 max-w-2xl mx-auto">
                这种近乎无限的“自由”，并非仅仅依靠官方开发，更多是源于其背后一个庞大而活跃的生态系统……
            </p>
            <div className="inline-flex items-center text-blue-600 bg-blue-50 px-4 py-2 rounded-full text-sm font-medium">
                👇 探索 Steam 创意工坊的力量
            </div>
        </div>
      </div>
    </section>
  );
};

export default GameExperience;