import { motion } from 'framer-motion';
import { AlertCircle, Beaker, Biohazard, Dna, Microscope, Zap } from 'lucide-react';
import { infectionsData } from '../data/infections';

export default function InfectionDatabase() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <div className="inline-block p-3 rounded-full bg-biohazard-red/10 mb-4 border border-biohazard-red/20">
          <Biohazard className="w-10 h-10 text-biohazard-red animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-4 tracking-tighter">
          Banco de Dados de <span className="text-biohazard-red">Patógenos</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
          Análise técnica dos agentes biológicos que moldaram a história do bioterrorismo global.
          Arquivos restritos da Umbrella Corporation e B.S.A.A.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {infectionsData.map((infection) => (
          <motion.div
            key={infection.id}
            variants={item}
            className="glass-card overflow-hidden group hover:border-biohazard-red/50 transition-all duration-500"
          >
            {/* Header do Card */}
            <div className="bg-white/5 p-6 border-b border-white/5 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-black text-white uppercase italic mb-1 group-hover:text-biohazard-red transition-colors">
                  {infection.name}
                </h2>
                <div className="flex gap-4">
                  <span className="text-xs font-bold text-biohazard-gold uppercase tracking-widest flex items-center gap-1">
                    <Microscope className="w-3 h-3" /> {infection.type}
                  </span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                    <Dna className="w-3 h-3" /> {infection.id}
                  </span>
                </div>
              </div>
              <div
                className={`px-3 py-1 rounded text-[10px] font-black uppercase tracking-tighter ${
                  infection.dangerLevel === 'Extremo'
                    ? 'bg-orange-500/20 text-orange-500'
                    : infection.dangerLevel === 'Bio-Apocalíptico'
                      ? 'bg-red-600/30 text-red-500 animate-pulse'
                      : 'bg-biohazard-red/20 text-biohazard-red'
                } border border-current`}
              >
                Risco: {infection.dangerLevel}
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Descrição Técnica */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-biohazard-red text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Beaker className="w-3 h-3" /> Origem & Descoberta
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed italic">
                    {infection.origin} <br />
                    <span className="text-gray-500 not-italic">Por: {infection.discoverer}</span>
                  </p>
                </div>
                <div>
                  <h3 className="text-biohazard-red text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Zap className="w-3 h-3" /> Mecanismo
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                    {infection.description}
                  </p>
                </div>
              </div>

              {/* Sintomas */}
              <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                <h3 className="text-white text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                  <AlertCircle className="w-3 h-3 text-biohazard-red" /> Manifestações Clínicas
                </h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {infection.symptoms.map((symptom, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="text-biohazard-red mt-0.5">•</span> {symptom}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Casos Notáveis */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] text-gray-500 uppercase font-bold w-full mb-1">
                  Incidentes Registrados:
                </span>
                {infection.cases.map((caseName, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/10 text-gray-400 uppercase tracking-tighter"
                  >
                    {caseName}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Educacional */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 p-8 border-t border-biohazard-red/20 text-center"
      >
        <p className="text-gray-500 text-sm font-light italic">
          "A ciência sem consciência é a ruína da alma." <br />
          Este banco de dados é mantido para fins educacionais e de preservação da memória histórica
          das vítimas do bioterrorismo.
        </p>
      </motion.div>
    </div>
  );
}
