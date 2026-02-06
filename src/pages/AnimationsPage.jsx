import { motion } from 'framer-motion';
import {
  Biohazard,
  ChevronRight,
  Film,
  Play,
  ShieldCheck,
  Target,
  Tv,
  Users,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import { animatedMedia } from '../data/animations';

export default function AnimationsPage() {
  const [selectedMedia, setSelectedMedia] = useState(animatedMedia[0] || null);

  if (!selectedMedia) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex items-center justify-center text-white">
        Aguardando dados de mídia...
      </div>
    );
  }

  return (
    <div className="relative z-0 min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-biohazard-red selection:text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <div className="inline-block p-4 rounded-full bg-blue-500/10 mb-6 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <Tv className="w-12 h-12 text-blue-500 animate-pulse" />
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black italic uppercase text-white mb-6 tracking-tighter">
          ARQUIVO <span className="text-blue-500">ANIMADO</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto font-light leading-relaxed text-base md:text-xl px-4">
          Expandindo o cânone além dos consoles. Explore as operações cinematográficas que preenchem
          as lacunas vitais da cronologia Biohazard.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Selector */}
        <div className="lg:col-span-1 space-y-4">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2 flex items-center gap-2">
            <Film className="w-4 h-4 text-blue-500" /> Registros Disponíveis
          </p>
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 px-2 lg:px-0 custom-scrollbar-blue">
            {animatedMedia.map((media) => (
              <button
                key={media.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedMedia(media);
                }}
                className={`flex-shrink-0 lg:w-full text-left p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  selectedMedia.id === media.id
                    ? 'bg-blue-600 text-white shadow-xl translate-x-1'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="relative z-10">
                  <span className="text-[9px] font-mono block opacity-50 mb-1">
                    {media.year} // {media.id.toUpperCase()}
                  </span>
                  <span className="font-bold uppercase tracking-tighter italic text-xs sm:text-sm whitespace-nowrap lg:whitespace-normal block">
                    {media.title}
                  </span>
                </div>
                {selectedMedia.id === media.id && (
                  <div className="absolute inset-0 bg-blue-400/10 border-l-4 border-blue-500" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-4 lg:mt-8 p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl hidden md:block">
            <div className="flex items-center gap-2 mb-3 text-blue-500 font-black text-xs uppercase italic">
              <ShieldCheck className="w-4 h-4" /> Nota de Inteligência
            </div>
            <p className="text-xs text-blue-300 leading-relaxed font-light">
              Todas as produções listadas aqui são consideradas **Cânone Oficial** pela Capcom e
              ocorrem dentro da mesma linha do tempo dos jogos principais.
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <motion.div
            key={selectedMedia.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-6 md:p-12 border-blue-500/20 relative overflow-hidden"
          >
            {/* Watermark */}
            <h2 className="absolute -top-6 md:-top-10 -right-6 md:-right-10 text-6xl md:text-[120px] font-black text-white/[0.03] select-none pointer-events-none uppercase italic">
              {selectedMedia.id}
            </h2>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 md:mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded">
                      Cânone Oficial
                    </span>
                    <span className="text-gray-500 font-mono text-xs">{selectedMedia.year}</span>
                  </div>
                  <h2 className="text-3xl md:text-6xl font-black italic text-white uppercase tracking-tighter leading-none mb-4">
                    {selectedMedia.title}
                  </h2>
                  <p className="text-blue-400 text-lg md:text-xl font-light italic max-w-2xl bg-blue-500/5 p-4 border-l-2 border-blue-500">
                    "{selectedMedia.summary}"
                  </p>
                </div>
                <div className="flex items-center gap-2 px-6 py-4 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                  <Target className="w-6 h-6 text-red-500" />
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-black block">
                      Ameaça Central
                    </span>
                    <span className="text-white font-bold uppercase italic text-sm">
                      {selectedMedia.antagonist}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="space-y-6">
                  <h3 className="text-white font-black uppercase text-sm border-b border-white/10 pb-2 flex items-center gap-2">
                    <Play className="w-4 h-4 text-blue-500" /> Operação e Contextualização
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light text-lg">
                    {selectedMedia.description}
                  </p>

                  <div className="p-6 bg-red-950/20 border-l-4 border-red-600 rounded-r-2xl">
                    <h4 className="text-red-500 font-black uppercase text-[10px] mb-2 tracking-widest">
                      Causa do Incidente
                    </h4>
                    <p className="text-red-200 text-sm italic font-light">
                      {selectedMedia.incidentCause}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-white font-black uppercase text-sm border-b border-white/10 pb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-500" /> Conexão com os Jogos
                  </h3>
                  <ul className="space-y-4">
                    {selectedMedia.connectionToGames.map((conn, idx) => (
                      <li key={idx} className="flex gap-3 items-start group">
                        <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                        <span className="text-gray-300 text-sm leading-relaxed">{conn}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-white font-black uppercase text-sm border-b border-white/10 pb-2 flex items-center gap-2 pt-6">
                    <Biohazard className="w-4 h-4 text-green-500" /> Patógenos Detectados
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMedia.pathogens.map((pathId) => (
                      <span
                        key={pathId}
                        className="px-3 py-1 bg-green-950/30 border border-green-500/30 text-green-400 text-xs font-bold uppercase italic rounded"
                      >
                        {pathId}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Character Tags */}
              <div className="mt-12 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">
                    Agentes Envolvidos
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  {[
                    'Leon S. Kennedy',
                    'Claire Redfield',
                    'Chris Redfield',
                    'Jill Valentine',
                    'Rebecca Chambers',
                  ]
                    .filter((agent) => {
                      if (selectedMedia.id === 'degeneration')
                        return agent === 'Leon S. Kennedy' || agent === 'Claire Redfield';
                      if (selectedMedia.id === 'damnation') return agent === 'Leon S. Kennedy';
                      if (selectedMedia.id === 'vendetta')
                        return (
                          agent === 'Leon S. Kennedy' ||
                          agent === 'Chris Redfield' ||
                          agent === 'Rebecca Chambers'
                        );
                      if (selectedMedia.id === 'infinite-darkness')
                        return agent === 'Leon S. Kennedy' || agent === 'Claire Redfield';
                      if (selectedMedia.id === 'death-island') return true;
                      return false;
                    })
                    .map((agent) => (
                      <span
                        key={agent}
                        className="px-4 py-2 bg-blue-900/10 border border-blue-500/20 text-white text-[10px] font-black uppercase tracking-widest"
                      >
                        {agent}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
