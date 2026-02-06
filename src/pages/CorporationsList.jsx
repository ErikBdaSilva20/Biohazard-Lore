import { motion } from 'framer-motion';
import { Building2, History, MapPin, Search, ShieldAlert, Target, Users } from 'lucide-react';
import { corporations } from '../data/corporations';

export default function CorporationsList() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-blue-600 selection:text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <div className="inline-block p-4 rounded-full bg-blue-500/10 mb-6 border border-blue-500/20 text-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <Building2 className="w-12 h-12 animate-pulse" />
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black italic uppercase text-white mb-4 tracking-tighter leading-none">
          IMPÉRIOS DAS <span className="text-blue-500">SOMBRAS</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto font-light leading-relaxed text-base md:text-xl px-4">
          Análise profusa das organizações que financiaram, combateram ou operaram nas sombras do
          bioterrorismo global.
          <span className="text-blue-400 font-black block mt-4 text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em]">
            Classified Intelligence Bureau
          </span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {corporations.map((corp, idx) => (
          <motion.div
            key={corp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group glass-card overflow-hidden border-white/5 hover:border-blue-500/40 transition-all duration-700 bg-black/40 relative"
          >
            {/* Background Aesthetic Overlay */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-group-hover:opacity-[0.05] transition-opacity">
              <Building2 className="w-96 h-96 text-white" />
            </div>

            <div className="p-8 md:p-16 relative z-10">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest px-3 py-1 bg-blue-500/10 border border-blue-500/30">
                      STATUS: {corp.status}
                    </span>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest font-mono">
                      ESTB: {corp.foundingDate}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl md:text-7xl font-black italic text-white uppercase group-hover:text-blue-400 transition-colors tracking-tighter leading-none mb-4">
                    {corp.name}
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="h-[1px] w-6 bg-biohazard-gold" />
                    <p className="text-biohazard-gold text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] italic">
                      {corp.alias}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 group-hover:border-blue-500/30 transition-all">
                  <ShieldAlert className="w-10 h-10 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
                  <div className="text-right">
                    <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">
                      Nível de Ameaça
                    </p>
                    <p className="text-xs font-black text-white uppercase italic">CRITICAL_ALPHA</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-16 border-t border-white/5 pt-12">
                <div className="lg:col-span-1 space-y-8">
                  <div>
                    <h4 className="text-[11px] text-blue-500 font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                      <Search className="w-4 h-4" /> Perfil Executivo
                    </h4>
                    <p className="text-gray-300 text-lg font-light leading-relaxed italic border-l-2 border-blue-500/30 pl-6">
                      "{corp.bio}"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[11px] text-blue-500 font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                      <History className="w-4 h-4" /> Histórico Operacional
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {corp.description}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[11px] text-gray-500 font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" /> Capital Humano & Fundadores
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {corp.founders?.map((m) => (
                          <div
                            key={m}
                            className="px-3 py-2 bg-blue-900/20 border border-blue-500/30 rounded-lg group/item"
                          >
                            <span className="text-[10px] text-blue-400 font-black uppercase tracking-tighter block">
                              {m}
                            </span>
                            <span className="text-[8px] text-gray-500 font-black uppercase tracking-widest">
                              Fundador
                            </span>
                          </div>
                        ))}
                        {corp.keyMembers?.map((m) => (
                          <div
                            key={m}
                            className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg"
                          >
                            <span className="text-[11px] text-white/70 font-black uppercase tracking-tighter">
                              {m}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[11px] text-gray-500 font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-500" /> Ativos & Projetos
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {corp.keyProducts?.map((p) => (
                          <div
                            key={p}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded italic group-hover:bg-white/10 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            <span className="text-[10px] text-gray-400 uppercase font-black">
                              {p}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 p-8 rounded-2xl border border-white/5 relative group-hover:border-blue-500/20 transition-all">
                    <div className="absolute top-2 right-4 opacity-10">
                      <MapPin className="w-12 h-12 text-blue-500" />
                    </div>
                    <h4 className="text-[11px] text-white font-black uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-4">
                      Incidentes de Campo
                    </h4>
                    <div className="space-y-4">
                      {corp.keyIncidents?.map((incident) => (
                        <div key={incident} className="flex gap-4 items-start">
                          <div className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,1)]" />
                          <span className="text-xs text-gray-400 font-bold uppercase leading-tight italic">
                            {incident}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-12 flex justify-end">
                      <div className="text-[9px] font-mono text-gray-600 uppercase">
                        Archive ID: CORP_LOG_V{idx + 1}7
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
