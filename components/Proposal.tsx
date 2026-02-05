import React from 'react';

const Proposal: React.FC = () => {
  return (
    <section id="proposal" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">TapTap PC端活动运营提案</h2>
          <p className="mt-4 text-slate-500">针对 PC 与移动端联动的即兴 Idea</p>
        </div>

        <div className="space-y-8">
          {/* Card 1: Core Idea */}
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-5">
               <div className="md:col-span-2 h-48 md:h-auto relative">
                 <img 
                   src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Gaming Party" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
               </div>
               <div className="md:col-span-3 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-200">
                       💡
                     </div>
                     <h3 className="text-xl font-bold text-slate-900">PC端百人同屏派对</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    每月举办1-2场线上派对，支持语音互动、全景漫游。移动端用户可观看直播、发送弹幕互动。
                    <br /><br />
                    <span className="font-semibold text-blue-600">核心机制：</span>移动端用户完成弹幕打卡领“派对限定家具”。让移动端用户不参与PC端也能获得奖励，保障参与感。
                  </p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Strategy 1 */}
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    数据与召回
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                    专项期间每日监控移动端日活与留存。若指标下滑，投放移动端专属福利（如限时材料包）。
                    <br/><br/>
                    对“仅PC登录”的用户，推送移动端专属召回礼，引导双端切换，提升用户粘性。
                </p>
             </div>

             {/* Strategy 2 */}
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    回收指标 (KPI)
                </h4>
                <ul className="text-sm text-slate-600 space-y-2">
                    <li>📈 移动端日活波动控制在合理范围。</li>
                    <li>💰 付费转化率、ARPU值保持原有水平。</li>
                    <li>🚀 PC端日活增长率、双端登录频次拉增 xx%。</li>
                    <li>📝 PC端 UGC 内容产出量提升 xx%。</li>
                </ul>
             </div>
          </div>
        </div>
        
        <div className="mt-16 text-center border-t border-slate-100 pt-10">
            <p className="text-slate-400 text-sm">
                Made with React & Tailwind CSS <br/>
                © 2024 Game Operations Portfolio
            </p>
        </div>
      </div>
    </section>
  );
};

export default Proposal;