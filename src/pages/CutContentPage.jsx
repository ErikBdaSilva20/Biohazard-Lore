import { motion } from 'framer-motion';
import { AlertTriangle, Archive, Ghost, History, Layers, Trash2, Zap } from 'lucide-react';
import { cutContent } from '../data/events';

export default function CutContentPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-orange-600 selection:text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <div className="inline-block p-4 rounded-full bg-orange-500/10 mb-6 border border-orange-500/20 text-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
          <Archive className="w-12 h-12 animate-pulse" />
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black italic uppercase text-white mb-4 tracking-tighter leading-none">
          ARQUIVOS <span className="text-orange-500">DELETADOS</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto font-light leading-relaxed text-base md:text-xl px-4">
          Protocolos cancelados, protótipos lendários e conceitos que nunca chegaram à versão final,
          mas que permanecem nos dados fantasmas da franquia.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {cutContent.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group glass-card overflow-hidden border-white/5 hover:border-orange-500/40 transition-all duration-700 bg-black/40 relative"
          >
            {/* Aesthetic Background Overlays */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
              <Ghost className="w-64 h-64 text-orange-500" />
            </div>

            <div className="flex flex-col md:flex-row h-full">
              {/* Visual Accent Side */}
              <div className="w-full md:w-2 bg-gradient-to-b from-orange-500 via-orange-800 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="p-8 md:p-16 flex-1 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest px-3 py-1 bg-orange-500/10 border border-orange-500/30">
                        REF_PROTO: {item.id.toUpperCase()}
                      </span>
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        <Trash2 className="w-3 h-3" /> STATUS: {item.status}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase group-hover:text-orange-400 transition-colors tracking-tighter leading-none italic">
                      {item.title}
                    </h2>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-orange-500/10 transition-colors">
                    <History className="w-8 h-8 text-orange-500/50 group-hover:text-orange-500 transition-colors" />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-[11px] text-orange-500 font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                      <Layers className="w-4 h-4" /> Relatório de Projeção
                    </h4>
                    <p className="text-gray-300 text-lg leading-relaxed font-light italic border-l-2 border-orange-500/30 pl-6 group-hover:border-orange-500 transition-all">
                      "{item.description}"
                    </p>
                  </div>

                  <div className="bg-black/40 p-8 rounded-2xl border border-white/5 group-hover:border-orange-500/20 transition-all flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-orange-500/20 rounded-lg">
                          <Zap className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest block mb-2">
                            Impacto no Legado
                          </span>
                          <p className="text-sm text-gray-300 font-bold uppercase italic leading-relaxed">
                            {item.legacy}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-gray-600 uppercase">
                      <span>Archive Data: Confidencial</span>
                      <span className="text-orange-500/50">Restricted Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 p-12 glass-card border-dashed border-white/10 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-orange-500/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
        <AlertTriangle className="w-12 h-12 text-orange-500/40 mx-auto mb-6 group-hover:text-orange-500 group-hover:scale-110 transition-all" />
        <h3 className="text-xl font-black text-white uppercase mb-4 italic tracking-widest relative z-10">
          Aviso de Integridade do Código
        </h3>
        <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed relative z-10">
          As informações nesta seção representam dados de desenvolvimento e prototipagem. Estes
          arquivos não devem ser confundidos com a verdade narrativa oficial (Canônico) da Capcom,
          servindo apenas para fins de estudo arqueológico de game design.
        </p>
      </div>
    </div>
  );
}
