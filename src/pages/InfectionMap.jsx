import { AnimatePresence, motion } from 'framer-motion';
import { Biohazard, Info, MapPin, Navigation, Skull, Target } from 'lucide-react';
import { useState } from 'react';
import { infectionMapData } from '../data/dossier';

export default function InfectionMap() {
  const [selectedPoint, setSelectedPoint] = useState(null);

  // Helper para posicionar os pontos no SVG (mapa fictício)
  const getPointPos = (coords) => ({
    left: `${coords.x}%`,
    top: `${coords.y}%`,
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-biohazard-red animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-black italic uppercase text-white tracking-widest leading-none">
            Monitoramento <br />
            <span className="text-biohazard-red">Global de Surtos</span>
          </h1>
        </div>
        <p className="text-gray-400 font-light max-w-2xl">
          Interface tática da B.S.A.A. para visualização de incidentes biológicos em escala mundial.
          Selecione uma zona quente para análise de dados.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Mapa Estilizado */}
        <div className="lg:col-span-2 relative aspect-square sm:aspect-video lg:aspect-[16/9] bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, #8B0000 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />

          {/* SVG Mapa (Contornos Simplificados Mundiais) */}
          <svg viewBox="0 0 1000 500" className="w-full h-full opacity-10 fill-white">
            {/* Representação simbólica de continentes */}
            <path d="M150,100 Q200,50 300,80 T400,150 Q450,250 350,350 T200,400 Q100,350 50,250 T150,100 Z" />{' '}
            {/* Américas */}
            <path d="M500,150 Q600,100 700,120 T750,200 Q800,300 700,400 T550,450 Q450,400 480,300 T500,150 Z" />{' '}
            {/* Eurafrásia */}
            <path d="M800,350 Q850,330 900,360 T920,420 Q880,450 820,440 T800,350 Z" />{' '}
            {/* Oceania */}
          </svg>

          {/* Pontos de Infecção */}
          {infectionMapData.map((point) => (
            <button
              key={point.id}
              onClick={() => setSelectedPoint(point)}
              className="absolute group transition-transform hover:scale-125 z-20"
              style={getPointPos(point.coordinates)}
            >
              <div className="relative">
                <div
                  className={`absolute -inset-4 rounded-full animate-ping ${
                    selectedPoint?.id === point.id ? 'bg-biohazard-red/50' : 'bg-biohazard-red/20'
                  }`}
                />
                <MapPin
                  className={`w-8 h-8 ${
                    selectedPoint?.id === point.id
                      ? 'text-biohazard-red scale-125'
                      : 'text-gray-500 group-hover:text-biohazard-red'
                  } transition-all drop-shadow-[0_0_10px_rgba(139,0,0,0.5)]`}
                />
              </div>

              {/* Tooltip Hover */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                {point.name}
              </div>
            </button>
          ))}

          {/* Scanner Line Effect */}
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-px bg-biohazard-red/30 shadow-[0_0_15px_rgba(139,0,0,0.5)] pointer-events-none"
          />
        </div>

        {/* Painel de Dados Lateral */}
        <div className="lg:col-span-1 space-y-6">
          <AnimatePresence mode="wait">
            {selectedPoint ? (
              <motion.div
                key={selectedPoint.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass-card p-6 border-biohazard-red/40 bg-biohazard-red/5 relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 opacity-10">
                  <Biohazard className="w-32 h-32 text-biohazard-red" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Navigation className="w-5 h-5 text-biohazard-red" />
                    <span className="text-biohazard-red font-black uppercase text-xs tracking-widest">
                      Relatório de Campo
                    </span>
                  </div>

                  <h2 className="text-3xl font-black italic uppercase text-white mb-1">
                    {selectedPoint.name}
                  </h2>
                  <p className="text-biohazard-gold text-xs font-bold uppercase mb-6 tracking-tighter">
                    {selectedPoint.location} | {selectedPoint.year}
                  </p>

                  <div className="space-y-4">
                    <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                      <span className="block text-[10px] text-gray-500 uppercase font-black mb-1">
                        Agente Etiológico
                      </span>
                      <span className="text-white font-bold">{selectedPoint.virus}</span>
                    </div>

                    <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                      <span className="block text-[10px] text-gray-500 uppercase font-black mb-1">
                        Nível de Baixas
                      </span>
                      <span className="text-red-500 font-bold flex items-center gap-2">
                        <Skull className="w-3 h-3" /> {selectedPoint.casualtyLevel}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase font-black mb-2">
                        Descrição do Incidente
                      </span>
                      <p className="text-sm text-gray-400 leading-relaxed italic">
                        "{selectedPoint.description}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-card p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
              >
                <Info className="w-12 h-12 text-gray-600 mb-4 animate-bounce" />
                <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">
                  Selecione um ponto no mapa para <br /> descriptografar os dados
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Stats Panel */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 text-center">
              <span className="text-[10px] text-gray-500 font-black uppercase">Surtos Ativos</span>
              <span className="block text-2xl font-black text-biohazard-red">00</span>
            </div>
            <div className="glass-card p-4 text-center">
              <span className="text-[10px] text-gray-500 font-black uppercase">
                Protocolo Atual
              </span>
              <span className="block text-2xl font-black text-biohazard-gold italic">RED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
