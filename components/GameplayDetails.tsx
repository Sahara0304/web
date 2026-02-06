import React, { useState } from 'react';

const GameplayDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'management' | 'detailing'>('management');
  const [showGallery, setShowGallery] = useState(false);

  const cityImages = [
    { src: "https://github.com/Sahara0304/web/blob/main/components/city1.png?raw=true", title: "繁华中心区" },
    { src: "https://github.com/Sahara0304/web/blob/main/components/city2.png?raw=true", title: "立体交通网" },
    { src: "https://github.com/Sahara0304/web/blob/main/components/city3.png?raw=true", title: "生态居住区" },
    { src: "https://github.com/Sahara0304/web/blob/main/components/city4.png?raw=true", title: "城市夜景" },
  ];

  return (
    <section id="gameplay" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">玩法介绍</h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto mb-8 text-lg">
            都市天际线的玩法按照玩家的喜好主要可以分为两大类，一类是<span className="text-blue-600 font-semibold">经营向</span>，一类是<span className="text-teal-600 font-semibold">造景向</span>。
          </p>
          
          {/* City Style Gallery Button */}
          <button 
            onClick={() => setShowGallery(!showGallery)}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
          >
            <span>{showGallery ? '收起城市风貌展示' : '点击查看我的城市风貌'}</span>
            <svg 
              className={`ml-2 w-5 h-5 transition-transform duration-200 ${showGallery ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Expandable Gallery */}
          <div className={`mt-8 overflow-hidden transition-all duration-500 ease-in-out ${showGallery ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cityImages.map((img, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group h-48">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-white font-bold">{img.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 mt-8">
          <div className="bg-white p-1 rounded-full shadow-sm border border-slate-200 inline-flex">
            <button
              onClick={() => setActiveTab('management')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'management'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              经营向 (Management)
            </button>
            <button
              onClick={() => setActiveTab('detailing')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'detailing'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              造景向 (Detailing)
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="transition-all duration-300">
          {activeTab === 'management' ? (
            <div className="space-y-8 animate-fadeIn">
               
               {/* 1. Definition Section */}
               <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
                 <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">💰</span>
                            核心目标：运转与壮大
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            经营向玩法主要关注城市如何正常运转并发展壮大。
                            <br/><br/>
                            核心在于<span className="font-bold text-blue-600">提升赚钱能力</span>、<span className="font-bold text-blue-600">优化居住环境配套</span>、以及<span className="font-bold text-blue-600">实现人口增长</span>。
                        </p>
                    </div>
                    <div className="md:w-1/2 bg-slate-100 relative h-64 md:h-auto">
                        <img 
                          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                          alt="Management UI" 
                          className="w-full h-full object-cover"
                        />
                         <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
                         <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                            示意图：经济数据与分区规划
                         </div>
                    </div>
                 </div>
               </div>

               {/* 2. Detailed Cards */}
               <h4 className="text-xl font-bold text-slate-800 mt-8 mb-4 px-2 border-l-4 border-blue-500">经营要素详解</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Card 1 */}
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition overflow-hidden">
                    <div className="h-48 w-full overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80" alt="Roads" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-lg">🏗️</div>
                            <h3 className="text-xl font-bold text-slate-900">路网与分区</h3>
                        </div>
                        <p className="text-slate-600 mb-4 text-sm">城市发展的根基。规划合理的道路等级与功能分区。</p>
                        <ul className="space-y-2 text-sm text-slate-600 border-t border-slate-100 pt-4">
                        <li><strong className="text-slate-800">修路：</strong> 承载车辆与公共服务，必须先修路才能盖房。</li>
                        <li><strong className="text-slate-800">分区：</strong> 规划绿色(居住)、蓝色(商业)、黄色(工业/办公)。</li>
                        <li><strong className="text-slate-800">需求条：</strong> 根据RCI需求条动态调整规划。</li>
                        </ul>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition overflow-hidden">
                    <div className="h-48 w-full overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80" alt="Infrastructure" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-lg">⚡</div>
                            <h3 className="text-xl font-bold text-slate-900">基础设施</h3>
                        </div>
                        <p className="text-slate-600 mb-4 text-sm">维持城市运转的命脉，包括水电与废弃物处理。</p>
                        <ul className="space-y-2 text-sm text-slate-600 border-t border-slate-100 pt-4">
                        <li><strong className="text-slate-800">水与电：</strong> 铺设管网与电缆。注意排污口不要建在取水口上游！</li>
                        <li><strong className="text-slate-800">垃圾处理：</strong> 确保垃圾车能通过道路网络到达每家每户。</li>
                        </ul>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition overflow-hidden">
                    <div className="h-48 w-full overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" alt="Services" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-lg">🎓</div>
                            <h3 className="text-xl font-bold text-slate-900">发展升级</h3>
                        </div>
                        <p className="text-slate-600 mb-4 text-sm">提升市民幸福度，促使建筑升级，提供公共服务。</p>
                        <ul className="space-y-2 text-sm text-slate-600 border-t border-slate-100 pt-4">
                        <li><strong className="text-slate-800">市政服务：</strong> 警察、消防、医疗覆盖率决定地价。</li>
                        <li><strong className="text-slate-800">教育体系：</strong> 产业升级的关键，避免工业区因"缺乏受教育工人"倒闭。</li>
                        </ul>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition overflow-hidden">
                    <div className="h-48 w-full overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1565514020176-db76fa50545b?auto=format&fit=crop&w=800&q=80" alt="Traffic" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-lg">🚦</div>
                            <h3 className="text-xl font-bold text-slate-900">交通物流</h3>
                        </div>
                        <p className="text-slate-600 mb-4 text-sm">防止成为“堵车天际线”，优化公共交通与货运。</p>
                        <ul className="space-y-2 text-sm text-slate-600 border-t border-slate-100 pt-4">
                        <li><strong className="text-slate-800">客运：</strong> 利用公交、地铁减少私家车。</li>
                        <li><strong className="text-slate-800">货运：</strong> 工业区到商业区的物流链条不能断。</li>
                        <li><strong className="text-slate-800">路权：</strong> 手动规划匝道、环岛及立交桥。</li>
                        </ul>
                    </div>
                  </div>
               </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fadeIn">
               
               {/* 1. Definition Section */}
               <div className="bg-white rounded-2xl shadow-sm border border-teal-100 overflow-hidden">
                 <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mr-3 text-sm">🎨</span>
                            核心目标：极致美学
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            造景向玩法主要关注城市界面的美观，包括路网、建筑、景观等各方面。
                            <br/><br/>
                            核心在于通过<span className="font-bold text-teal-600">美观的资产</span>和<span className="font-bold text-teal-600">功能强大的模组</span>，打造接近现实的景观。
                        </p>
                        <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-start">
                            <span className="text-red-500 mr-2 text-xl">⚠️</span>
                            <p className="text-red-600 text-sm font-medium">
                                需要开启无限金钱模式，否则城市会破产！！！
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-100 relative h-64 md:h-auto">
                        <img 
                          src="https://images.unsplash.com/photo-1545559828-56eb0f04c633?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                          alt="Realistic City Detail" 
                          className="w-full h-full object-cover"
                        />
                         <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
                         <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                            示意图：逼真的城市街景 (造景向)
                         </div>
                    </div>
                 </div>
               </div>

              {/* 2. Detailed Cards */}
              <h4 className="text-xl font-bold text-slate-800 mt-8 mb-4 px-2 border-l-4 border-teal-500">造景必备工具 (Steam创意工坊)</h4>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-teal-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                     <h3 className="text-lg font-bold text-teal-700 mb-4 border-b border-teal-100 pb-2">自定义资产</h3>
                     <p className="text-sm text-slate-600 mb-4">原版建筑风格单一，创意工坊提供了数十万计的免费资源。</p>
                     <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                       <li>真实地标（上海中心、东方明珠）</li>
                       <li>Props（垃圾桶、空调外机、涂鸦）</li>
                       <li>高清植被替代原版树木</li>
                     </ul>
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-teal-700 mb-4 border-b border-teal-100 pb-2">功能性模组 (Mods)</h3>
                     <p className="text-sm text-slate-600 mb-4">造景的操作核心。</p>
                     <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                       <li><strong>Move It!</strong>: 任意移动、旋转物体，打破网格限制。</li>
                       <li><strong>TM:PE</strong>: 交通控制，手动设置红绿灯和车道。</li>
                       <li><strong>Node Controller</strong>: 画出复杂的真实路口导流线。</li>
                     </ul>
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-teal-700 mb-4 border-b border-teal-100 pb-2">视觉模组</h3>
                     <p className="text-sm text-slate-600 mb-4">给游戏加上电影级滤镜。</p>
                     <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                       <li><strong>Ultimate Eyecandy</strong>: 调整光照、太阳角度。</li>
                       <li><strong>Theme Mixer</strong>: 混合不同地图主题（如北欧天空+热带水面）。</li>
                     </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                   <p className="italic text-slate-500">
                     “玩城市天际线的过程实际上就是发挥自己的想象力进行拓荒的过程...每一寸土地都有我们自由发挥的空间。”
                   </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GameplayDetails;
