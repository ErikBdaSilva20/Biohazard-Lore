import { AnimatePresence, motion } from 'framer-motion';
import { BadgeCheck, ChevronRight, Fingerprint, History, Info, Lock, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PapperFibers from '../assets/PapperFibers.png';

// Importação das faces dos personagens
import AdaFace from '../assets/AdaWondFace.webp';
import ChrisFace from '../assets/ChrisFace.jpg';
import ClaireFace from '../assets/ClarieFace.webp';
import JillFace from '../assets/JillValentineFace.jpg';
import KrauserFace from '../assets/KrauserFace.jpg';
import LeonFace from '../assets/LeonFace.jpg';
import RebeccaFace from '../assets/RebeccaFace.jpg';
import WeskerFace from '../assets/WeskerFace.jpg';

import { characters } from '../data/characters';

const characterFaces = {
  'leon-kennedy': LeonFace,
  'chris-redfield': ChrisFace,
  'jill-valentine': JillFace,
  'albert-wesker': WeskerFace,
  'claire-redfield': ClaireFace,
  'ada-wong': AdaFace,
  'jack-krauser': KrauserFace,
  'rebecca-chambers': RebeccaFace,
};

export default function CharacterDossier() {
  const { id } = useParams();
  const [selectedChar, setSelectedChar] = useState(characters[0]);

  // Handle dynamic routing if an ID is passed in URL
  useEffect(() => {
    if (id) {
      const found = characters.find((c) => c.id === id || c.slug === id);
      if (found) setSelectedChar(found);
    }
  }, [id]);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Estilo Pasta */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col md:flex-row items-center md:items-end justify-between border-b border-white/10 pb-6 gap-6"
      >
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <Lock className="w-5 h-5 text-biohazard-red" />
            <span className="text-biohazard-red text-[10px] font-black uppercase tracking-[0.4em]">
              Sessão: Dossiê de Agentes
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic uppercase text-white tracking-tighter">
            PROFILING<span className="text-biohazard-red">_LOG</span>
          </h1>
        </div>
        <div className="text-center md:text-right font-mono text-[10px] text-gray-500 uppercase">
          CLASSIFIED_DOC // {selectedChar.id.toUpperCase()} <br />
          ACCESS_CONTROL: B.S.A.A. LEVEL 5
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Seletor de Arquivos */}
        <div className="lg:col-span-1 border-r border-white/5 pr-4 space-y-4">
          <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest px-2 group flex items-center gap-2">
            <Users className="w-3 h-3 text-biohazard-red" /> Sujeitos Sob Vigilância
          </p>
          <div className="space-y-1 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            {characters.map((char) => (
              <button
                key={char.id}
                onClick={() => setSelectedChar(char)}
                className={`w-full group relative flex items-center justify-between p-3 transition-all duration-300 rounded-lg mb-1 ${
                  selectedChar.id === char.id
                    ? 'bg-biohazard-red text-white shadow-xl translate-x-1'
                    : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Fingerprint
                    className={`w-4 h-4 ${selectedChar.id === char.id ? 'opacity-100' : 'opacity-20'}`}
                  />
                  <span className="font-bold uppercase tracking-widest text-[10px] italic text-left">
                    {char.name}
                  </span>
                </div>
                {selectedChar.id === char.id && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area - O Documento */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedChar.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="bg-[#3d3d3d] text-gray-950 p-6 md:p-14 shadow-2xl relative min-h-[800px] border-4 border-white/20"
              style={{
                backgroundImage: `url(${PapperFibers})`,
              }}
            >
              {/* Overlay de Arquivo */}
              <div className="absolute top-8 right-8 text-red-700/20 font-black text-4xl border-4 border-red-700/20 px-4 py-1 -rotate-12 select-none pointer-events-none uppercase">
                Restrito
              </div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                  {/* Subject Photo */}
                  <div className="md:col-span-1">
                    <div className="aspect-[3/4] bg-gray-400 border-8 border-white shadow-xl grayscale contrast-125 relative overflow-hidden flex items-center justify-center">
                      {characterFaces[selectedChar.id] ? (
                        <img
                          src={characterFaces[selectedChar.id]}
                          alt={selectedChar.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Users className="w-24 h-24 text-gray-500/50" />
                      )}
                      <div className="absolute inset-0 bg-blue-900/10 mix-blend-color" />
                      <div className="absolute bottom-4 left-0 right-0 py-1 bg-black/60 text-white text-[9px] font-mono text-center tracking-widest">
                        IDENT_FACIAL: OK
                      </div>
                    </div>
                  </div>

                  {/* Subject Info */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tighter uppercase mb-1 leading-none text-gray-900">
                        {selectedChar.name}
                      </h2>
                      <p className="text-red-800 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] italic">
                        ALIAS: {selectedChar.alias}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-8 border-y border-gray-400/30 py-4 md:py-6">
                      <div className="space-y-1">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-tighter">
                          Último Status Conhecido
                        </span>
                        <p className="font-bold text-xs md:text-sm tracking-tight">
                          {selectedChar.status}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-tighter">
                          Primeiro Registro
                        </span>
                        <p className="font-bold text-xs md:text-sm tracking-tight">
                          {selectedChar.firstAppearance}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-[10px] font-black uppercase flex items-center gap-2 text-gray-600">
                        <Info className="w-4 h-4 text-red-800" /> Perfil de Campo
                      </h3>
                      <p className="font-serif leading-relaxed text-gray-800 text-base md:text-lg italic bg-white/30 p-3 md:p-4 border-l-4 border-red-800">
                        "{selectedChar.bio}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Evolution Section */}
                <div className="space-y-8">
                  <h3 className="text-[10px] font-black uppercase flex items-center gap-2 border-b border-gray-400 pb-2 text-gray-600 tracking-widest">
                    <History className="w-4 h-4 text-red-800" /> Histórico de Implantação e Evolução
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectedChar.evolution.map((stage, idx) => (
                      <div
                        key={idx}
                        className="relative p-6 bg-white/40 border border-gray-400/20 group"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-black text-xl uppercase font-sans text-gray-900 leading-none">
                            {stage.game}
                          </h4>
                          <span className="text-[9px] bg-red-800 text-white px-2 py-0.5 font-bold uppercase">
                            {stage.role}
                          </span>
                        </div>
                        <p className="text-sm font-serif text-gray-700 leading-relaxed italic border-l border-gray-300 pl-4 group-hover:border-red-800 transition-colors">
                          {stage.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Data Tags */}
                <div className="mt-16 pt-8 border-t border-gray-400/30 flex flex-wrap gap-12">
                  <div className="space-y-3">
                    <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest block">
                      Títulos Operados
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedChar.relatedGames?.map((g) => (
                        <span
                          key={g}
                          className="text-[10px] px-2 py-1 bg-gray-200 border border-gray-300 font-black uppercase text-gray-600 italic"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest block">
                      Exposição a Patógenos
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedChar.relatedViruses?.map((v) => (
                        <span
                          key={v}
                          className="text-[10px] px-2 py-1 bg-red-100 border border-red-200 font-black uppercase text-red-800 italic"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Rodapé do Documento */}
              <div className="mt-20 pt-8 border-t border-gray-400 flex justify-between items-center text-gray-400 font-mono text-[9px] uppercase tracking-tighter">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-red-800" />
                  <span>Documento Verificado / Unidade Hound Wolf</span>
                </div>
                <span>S_CODE: {selectedChar.id.toUpperCase()}_LOG_V1</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
