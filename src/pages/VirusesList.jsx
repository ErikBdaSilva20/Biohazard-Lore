import { motion } from 'framer-motion';
import {
  AlertCircle,
  Beaker,
  Biohazard,
  Dna,
  FileText,
  Microscope,
  ShieldAlert,
  Zap,
} from 'lucide-react';
import { viruses } from '../data/viruses';

export default function VirusesList() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const getDangerStyles = (level) => {
    switch (level) {
      case 'Bio-Apocalíptico':
      case 'Global':
      case 'Catástrofe Global':
        return 'bg-red-600/30 text-red-500 animate-[pulse_0.8s_ease-in-out_infinite] border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]';
      case 'Extremo':
      case 'Nível Divindade':
        return 'bg-orange-500/20 text-orange-500 animate-[pulse_1.5s_ease-in-out_infinite] border-orange-500';
      case 'Estratégico / Militar':
      case 'Nível Realeza':
        return 'bg-biohazard-gold/20 text-biohazard-gold border-biohazard-gold';
      default:
        return 'bg-green-600/20 text-green-500 border-green-500';
    }
  };

  const getCardBorder = (level) => {
    if (level === 'Bio-Apocalíptico' || level === 'Catástrofe Global')
      return 'hover:border-red-500/50';
    if (level === 'Extremo' || level === 'Nível Divindade') return 'hover:border-orange-500/50';
    return 'hover:border-green-500/50';
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto selection:bg-green-500 selection:text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <div className="inline-block p-4 rounded-full bg-green-500/10 mb-6 border border-green-500/20 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
          <Biohazard className="w-12 h-12 animate-pulse" />
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black italic uppercase text-white mb-4 tracking-tighter leading-none">
          ARQUIVOS DE <span className="text-green-500">VIROLOGIA</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-xl font-light leading-relaxed px-4">
          Análise espectrográfica e molecular dos patógenos que definiram o bioterrorismo moderno.
          <span className="text-red-500 font-bold block mt-4 text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-widest">
            Acesso de Nível 5 Necessário
          </span>
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {viruses.map((virus) => (
          <motion.div
            key={virus.id}
            variants={item}
            className={`glass-card overflow-hidden group transition-all duration-500 ${getCardBorder(virus.dangerLevel)}`}
          >
            {/* Header do Card */}
            <div className="bg-white/5 p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h2 className="text-3xl font-black text-white uppercase italic mb-2 group-hover:text-green-500 transition-colors">
                  {virus.name}
                </h2>
                <div className="flex flex-wrap gap-4">
                  <span className="text-[10px] font-black text-biohazard-gold uppercase tracking-[0.2em] flex items-center gap-2">
                    <Microscope className="w-3 h-3" /> {virus.type}
                  </span>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2 border-l border-white/10 pl-4">
                    <Dna className="w-3 h-3" /> SEED: {virus.id.toUpperCase()}
                  </span>
                </div>
              </div>
              <div
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-tighter border ${getDangerStyles(virus.dangerLevel)} flex items-center gap-2 whitespace-nowrap`}
              >
                <ShieldAlert className="w-4 h-4" />
                SINAL DE ALERTA: {virus.dangerLevel}
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <h3 className="text-green-500 text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                    <Beaker className="w-4 h-4" /> Origem & Descoberta
                  </h3>
                  <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                    <p className="text-sm text-gray-300 leading-relaxed italic mb-2">
                      {virus.origin}
                    </p>
                    <p className="text-gray-500 not-italic text-[10px] uppercase font-black tracking-widest">
                      IDENTIFICADO POR: <span className="text-white">{virus.discoverer}</span>
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-green-500 text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Mecanismo de Ação
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    {virus.description}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-green-500/5 blur-xl rounded-full" />
                <div className="relative bg-black/40 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-white text-[11px] font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-green-500" /> Manifestações Clínicas &
                    Patologia
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {virus.symptoms.map((symptom, idx) => (
                      <li
                        key={idx}
                        className="text-[11px] text-gray-400 flex items-start gap-3 group"
                      >
                        <span className="text-green-500 font-black mt-[-4px] text-lg group-hover:animate-ping">
                          •
                        </span>
                        <span className="group-hover:text-white transition-colors">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                <div className="w-full flex items-center gap-3 mb-2">
                  <FileText className="w-4 h-4 text-gray-500" />
                  <span className="text-[10px] text-gray-500 uppercase font-black tracking-[0.3em]">
                    Incidências Documentadas:
                  </span>
                </div>
                {virus.relatedGames?.map((game, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-white/5 px-4 py-2 rounded-full border border-white/10 text-gray-400 uppercase font-black tracking-tighter hover:border-green-500 hover:bg-green-500/10 hover:text-white transition-all cursor-crosshair"
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
