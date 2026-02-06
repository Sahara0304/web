import React from 'react';

const FavoriteGame: React.FC = () => {
  return (
    <section id="cities-skylines" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">我最喜欢的游戏</h2>
          <div className="h-1 w-20 bg-blue-500 rounded"></div>
        </div>

        {/* 9:1 Aspect Ratio Image - Moved Here */}
        <div className="w-full h-32 md:h-48 rounded-xl overflow-hidden shadow-lg mb-12 relative group">
           <img 
             src="https://github.com/Sahara0304/web/blob/main/components/city_time.png?raw=true" 
             alt="City Horizon Banner" 
             className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-8">
              <span className="text-white text-xl md:text-3xl font-light tracking-widest uppercase">Cities: Skylines</span>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative overflow-hidden rounded-xl shadow-xl aspect-video">
              <img 
                src="https://github.com/Sahara0304/web/blob/main/components/cover.png?raw=true" 
                alt="Cities Skylines Style City" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">都市：天际线</h3>
                <p className="text-slate-200 text-sm">兼具自由度与现实思考的模拟巅峰</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6 flex flex-col justify-center h-full">
            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h4 className="font-semibold text-slate-900 mb-2">官方简介</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                《都市：天际线》是对经典城市模拟类游戏的现代演绎。该游戏引入了全新的游戏玩法元素，让玩家切身体会到创造和维持一座真正城市的兴奋和艰辛，同时扩展了城市建设体验中的一些经久不衰的主题。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">自由勾勒理想之城</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                《城市：天际线》给我最直观的感受，就是它真正做到了让玩家以<strong>自由</strong>的方式勾勒属于自己的理想城市。游戏没有强制任务，而是提供了完整的规划与建造空间。
              </p>
              <p className="text-slate-600 leading-relaxed">
                我们可以自主设计路网、划分功能区域、搭建水电与交通系统，决定城市的发展方向。这种自由并非单纯的随意搭建，还包含对城市运营、人口需求、交通效率等现实问题的思考。
              </p>
            </div>
          </div>
        </div>

        {/* Transition Connector */}
        <div className="mt-16 flex flex-col items-center opacity-60">
           <p className="text-sm text-slate-500 mb-2">为什么这款游戏如此耐玩？</p>
           <svg className="w-6 h-6 text-slate-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
           </svg>
        </div>
      </div>
    </section>
  );
};

export default FavoriteGame;
