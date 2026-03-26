import { motion } from 'framer-motion';
import { AlertCircle, HelpCircle, MessageSquare, Quote, Search, Sparkles } from 'lucide-react';
import { theories } from '../data/events';

export default function TheoriesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-purple-600 selection:text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-16 text-center"
      >
        <div className="inline-block p-4 rounded-full bg-purple-500/10 mb-6 border border-purple-500/20 text-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
          <Sparkles className="w-12 h-12 animate-pulse" />
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black italic uppercase text-white mb-4 tracking-tighter leading-none">
          TEORIAS <span className="text-purple-500">COMPROVADAS</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto font-light leading-relaxed text-base md:text-xl px-4">
          Conexões ocultas e inferências do passado que finalmente se tornaram fatos canônicos absolutos através do vazamento de documentos do Incidente Requiem.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {theories.map((theory, idx) => (
          <motion.div
            key={theory.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card group hover:border-purple-500/40 transition-all duration-700 relative overflow-hidden bg-black/40"
          >
            {/* Background Icon */}
            <HelpCircle className="absolute -bottom-10 -left-10 w-80 h-80 text-purple-500 opacity-[0.03] group-hover:scale-125 group-hover:opacity-[0.06] transition-all duration-1000" />

            <div className="p-8 md:p-14 relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${theory.title.includes('COMPROVADA') ? 'bg-green-500/20' : 'bg-purple-500/20'}`}>
                    <MessageSquare className={`w-5 h-5 ${theory.title.includes('COMPROVADA') ? 'text-green-500' : 'text-purple-500'}`} />
                  </div>
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] block ${theory.title.includes('COMPROVADA') ? 'text-green-400' : 'text-purple-400'}`}>
                      {theory.title.includes('COMPROVADA') ? 'Fato Consolidado' : 'Dossiê de Hipótese'}
                    </span>
                    <span className="text-[9px] text-gray-600 font-mono uppercase">
                      Reference: {theory.id.toUpperCase()}
                    </span>
                  </div>
                </div>
                {theory.title.includes('COMPROVADA') && (
                  <div className="px-3 py-1 bg-green-600/20 border border-green-600/50 text-green-500 text-[9px] font-black uppercase tracking-tighter animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                    STATUS VERIFICADO
                  </div>
                )}
              </div>

              <h2 className={`text-4xl font-black italic uppercase mb-8 transition-colors tracking-tighter leading-none ${theory.title.includes('COMPROVADA') ? 'text-green-400/90' : 'text-white group-hover:text-purple-400'}`}>
                {theory.title.replace('[COMPROVADA] ', '').replace('[EM OBSERVAÇÃO] ', '')}
              </h2>

              <div className={`mb-10 p-8 bg-white/5 rounded-3xl border-l-4 italic relative group-hover:bg-white/10 transition-colors ${theory.title.includes('COMPROVADA') ? 'border-green-500' : 'border-purple-500'}`}>
                <Quote className={`absolute -top-4 -left-4 w-10 h-10 opacity-30 ${theory.title.includes('COMPROVADA') ? 'text-green-500' : 'text-purple-500'}`} />
                <p className="text-gray-300 text-xl leading-relaxed font-serif">
                  {theory.description}
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3 text-xs font-black text-gray-500 uppercase tracking-widest">
                  <Search className={`w-4 h-4 ${theory.title.includes('COMPROVADA') ? 'text-green-500' : 'text-purple-500'}`} />
                  <span>
                    Fonte: <span className="text-gray-400">{theory.source}</span>
                  </span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${theory.title.includes('COMPROVADA') ? 'bg-green-500/10 border-green-500/20' : 'bg-purple-500/10 border-purple-500/20'}`}>
                  <AlertCircle className={`w-3 h-3 ${theory.title.includes('COMPROVADA') ? 'text-green-500' : 'text-purple-500'}`} />
                  <span className={`text-[9px] font-black uppercase ${theory.title.includes('COMPROVADA') ? 'text-green-300' : 'text-purple-300'}`}>
                    Probabilidade: {theory.title.includes('COMPROVADA') ? '100% (Real)' : 'Em Estudo'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* RE9 Theory Spotlight */}
      {/* 
      <div className="mt-24 p-16 glass-card bg-purple-900/5 border-purple-500/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
        <h3 className="text-3xl font-black text-white uppercase mb-6 italic tracking-tighter relative z-10">
          Você possui arquivos sobre <span className="text-purple-500">The Connections</span>?
        </h3>
        <p className="text-gray-400 font-light mb-10 max-w-2xl mx-auto text-lg leading-relaxed relative z-10">
          Enquanto as maiores teorias foram comprovadas, os movimentos remanescentes da facção secreta The Connections continuam ocultos. Se você interceptou dados da extração pós-arquivos ARK, o terminal de submissão está aberto.
        </p>
        <button className="relative z-10 group px-12 py-4 bg-purple-600 text-white font-black uppercase tracking-[0.2em] hover:bg-purple-500 transition-all active:scale-95 flex items-center gap-3 mx-auto">
          INICIAR UPLOAD DE DADOS
          <Sparkles className="w-4 h-4 group-hover:animate-spin" />
        </button>
      </div>
      */}
    </div>
  );
}
