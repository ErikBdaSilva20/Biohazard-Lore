import { motion } from 'framer-motion';
import { Activity, Book, Search, Target, Users } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { games } from '../data/games';

export default function GamesList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = games.filter(
    (game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-biohazard-red selection:text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <div className="inline-block p-4 rounded-full bg-biohazard-red/10 mb-6 border border-biohazard-red/20 text-biohazard-red shadow-[0_0_20px_rgba(139,0,0,0.2)]">
          <Book className="w-12 h-12 animate-pulse" />
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black italic uppercase text-white mb-4 tracking-tighter leading-none">
          REGISTRO DE <span className="text-biohazard-red">INCIDENTES</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto font-light leading-relaxed text-base md:text-xl px-4">
          Acesso tático aos dados operacionais de cada surto biológico registrado. Inclui dados
          confidenciais do projeto{' '}
          <span className="text-white font-black italic underline decoration-biohazard-red underline-offset-4">
            REQUIEM (RE9)
          </span>
          .
        </p>
      </motion.div>

      {/* Search Interface */}
      <div className="mb-12 md:mb-16 max-w-3xl mx-auto relative group px-2">
        <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
          <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-focus-within:text-biohazard-red transition-colors" />
        </div>
        <input
          type="text"
          placeholder="PESQUISAR..."
          className="w-full bg-black/40 border-2 border-white/5 rounded-2xl md:rounded-3xl py-4 md:py-6 pl-14 md:pl-16 pr-8 text-white font-black uppercase tracking-[0.2em] md:tracking-[0.3em] focus:outline-none focus:border-biohazard-red/50 focus:bg-black/60 transition-all placeholder:text-gray-700 text-xs md:text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {filteredGames.map((game, idx) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group"
          >
            <Link to={`/games/${game.id}`} className="block h-full">
              <div className="glass-card h-full p-0 border-white/5 hover:border-biohazard-red/50 transition-all duration-500 flex flex-col relative overflow-hidden bg-black/40">
                {/* Background Grid Pattern for each card */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Status Bar */}
                <div className="bg-white/5 px-6 md:px-8 py-3 border-b border-white/5 flex justify-between items-center group-hover:bg-biohazard-red/10 transition-colors">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Activity className="w-3 h-3 text-biohazard-red" />
                    <span className="text-[8px] md:text-[10px] font-black text-white/50 uppercase tracking-[0.4em]">
                      ARQUIVO_OPERACIONAL
                    </span>
                  </div>
                  <span className="text-[8px] md:text-[10px] font-black text-biohazard-red bg-biohazard-red/20 px-2 py-0.5 rounded">
                    {game.id === 're9' ? 'CLASSIFIED' : 'UNLOCKED'}
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <span className="text-[10px] md:text-xs font-mono text-biohazard-gold font-black italic tracking-widest">
                      {game.year}
                    </span>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {game.pathogens?.map((p) => (
                        <div
                          key={p}
                          className="p-1 px-2 bg-white/5 border border-white/10 rounded text-[8px] md:text-[9px] font-black uppercase text-gray-500 group-hover:text-biohazard-red transition-colors"
                        >
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white uppercase mb-4 leading-none group-hover:text-biohazard-red transition-colors tracking-tighter">
                    {game.title}
                  </h2>

                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed md:leading-loose mb-6 md:mb-8 line-clamp-3 md:line-clamp-4 italic border-l-2 border-white/10 pl-4 group-hover:border-biohazard-red/30 transition-all">
                    "{game.description}"
                  </p>

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-[11px] font-black uppercase text-biohazard-red tracking-widest mb-3 flex items-center gap-2">
                        <Target className="w-3 h-3" /> Evento Central
                      </h4>
                      <p className="text-[11px] text-gray-500 font-bold uppercase leading-relaxed line-clamp-2">
                        {game.mainEvent}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase text-biohazard-gold tracking-widest mb-3 flex items-center gap-2">
                        <Users className="w-3 h-3" /> Agentes
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {game.characters?.slice(0, 3).map((char) => (
                          <span
                            key={char}
                            className="text-[9px] text-white/40 uppercase font-black"
                          >
                            {char.replace('-', ' ')}{' '}
                            {idx < game.characters.slice(0, 3).length - 1 ? '•' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-600 font-black uppercase tracking-widest">
                        Acesso de Log:
                      </span>
                      <span className="text-[10px] text-white/30 font-mono">
                        RE_USR_00{idx + 1}_LOG
                      </span>
                    </div>
                    <div className="px-6 py-2 bg-white/5 group-hover:bg-biohazard-red transition-all border border-white/10 group-hover:border-transparent">
                      <span className="text-[10px] font-black text-white uppercase group-hover:scale-110 block transition-transform">
                        Ver Lore Completa
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 pt-12 border-t border-white/5 text-center">
        <p className="text-gray-600 text-xs font-black uppercase tracking-[1em] opacity-40">
          Sincronizado com o Arquivo Central | B.S.A.A. INTEL DIV.
        </p>
      </div>
    </div>
  );
}
