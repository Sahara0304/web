import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-slate-100 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          热爱的游戏 <span className="text-blue-600">&</span> 社区运营想法
        </h1>
        <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
          从《都市：天际线》的宏观规划到 TapTap 社区的精细化运营。
          <br className="hidden sm:block" />
          探索游戏机制，连接玩家社群，创造独特价值。
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#cities-skylines"
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            我的游戏世界
          </a>
          <a
            href="#proposal"
            className="px-8 py-3 rounded-full bg-white text-blue-600 border border-blue-200 font-semibold hover:bg-blue-50 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            查看运营提案
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
