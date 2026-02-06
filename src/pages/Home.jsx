import { motion } from 'framer-motion';
import { Activity, AlertTriangle, Biohazard, Shield, Skull } from 'lucide-react';
import { Link } from 'react-router-dom';
import Re9Home from '../assets/Re9Home.jpg';

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-biohazard-dark selection:bg-biohazard-red selection:text-white">
      {/* Hero Section - Bioterrorism Focus */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-biohazard-red/20">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-biohazard-red/5 via-transparent to-transparent opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-biohazard-dark via-transparent to-biohazard-dark z-10" />

          {/* Animated Grid / Scanlines */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(139, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl px-4 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative z-20"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="h-[2px] w-8 md:w-12 bg-biohazard-red" />
                <span className="text-biohazard-red text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">
                  Inteligência Global de Bioterrorismo
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter text-white uppercase leading-[0.85] md:leading-[0.8] mb-6 md:mb-8">
                BIOLOGICAL <br />
                <span className="text-biohazard-red">CATASTROPHE</span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-xl font-light leading-relaxed mb-8 md:mb-12 border-l-2 border-biohazard-red/30 pl-4 md:pl-6">
                Do incidente inicial nas montanhas Arklay à dominação global do C-Vírus e o terror
                fúngico na Louisiana. Explore a cronologia completa das ameaças que moldaram o fim
                da humanidade.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link
                  to="/chronology"
                  className="group relative px-10 py-5 bg-biohazard-red text-white font-black uppercase italic tracking-widest overflow-hidden transition-all"
                >
                  <span className="relative z-10">Cronologia Completa</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-difference" />
                </Link>
                <Link
                  to="/viruses"
                  className="px-10 py-5 border border-white/20 text-white font-black uppercase italic tracking-widest hover:bg-white/5 transition-all flex items-center gap-3"
                >
                  <Biohazard className="w-5 h-5 text-biohazard-red" />
                  Banco de Dados Viral
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="absolute inset-0 bg-biohazard-red/20 blur-[120px] rounded-full animate-pulse" />
              <div className="relative border-4 border-white/5 p-8 bg-black/40 backdrop-blur-xl rounded-2xl">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-biohazard-red animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">
                      Live Monitoring: Raccoon City
                    </span>
                  </div>
                  <Activity className="w-4 h-4 text-biohazard-red" />
                </div>
                <div className="space-y-6">
                  {[
                    { label: 'T-Virus Strain', val: 'Infected', color: 'text-biohazard-red' },
                    { label: 'G-Virus Mutation', val: 'Critical', color: 'text-orange-500' },
                    { label: 'Las Plagas Colony', val: 'Active', color: 'text-biohazard-gold' },
                    { label: 'Megamycete Network', val: 'Stable', color: 'text-green-500' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-white/5 pb-3"
                    >
                      <span className="text-xs text-gray-500 uppercase font-bold">
                        {stat.label}
                      </span>
                      <span className={`text-xs font-black uppercase ${stat.color}`}>
                        {stat.val}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-biohazard-red/10 border border-biohazard-red/20 rounded">
                  <p className="text-[10px] text-biohazard-red font-bold uppercase tracking-tighter leading-tight">
                    Atenção: Múltiplos avisos de perigo biológico detectados em nível global.
                    Arquivos RE9 identificados em codinome REQUIEM.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RE9 / Future Spotlight */}
      <section className="w-full bg-white/5 py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-biohazard-red/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-1 bg-gradient-to-br from-biohazard-red to-transparent">
                  <div className="bg-biohazard-dark p-1">
                    <img
                      src={Re9Home}
                      alt="Future Horror"
                      className="grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <span className="px-3 py-1 bg-biohazard-red text-white text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                Flash: RE9 Information
              </span>
              <h2 className="text-5xl font-black italic text-white uppercase mb-6 tracking-tighter leading-none">
                O Futuro: <br />
                <span className="text-biohazard-red">RE9 Requiem</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
                O capítulo final da saga que unificará décadas de horror. Novos vazamentos sugerem
                um fechamento massivo para heróis lendários como Chris e Leon. Explore as teorias
                mais recentes baseadas nos arquivos interceptados.
              </p>
              <Link
                to="/theories"
                className="flex items-center gap-4 text-white font-black uppercase text-xs tracking-[0.3em] hover:text-biohazard-red transition-colors"
              >
                Investigar Teorias <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components of the Saga */}
      <section className="py-32 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-12">
        <div className="group border border-white/5 p-12 hover:bg-white/5 transition-all">
          <Skull className="w-16 h-16 text-biohazard-red mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-black italic text-white uppercase mb-6 tracking-tight">
            O Vírus
          </h3>
          <p className="text-gray-400 leading-relaxed font-light mb-8">
            Do Progenitor ao T-Vírus. Entenda a ciência cruel por trás da reanimação celular e das
            mutações Tyrant que destruíram Raccoon City.
          </p>
          <Link
            to="/viruses"
            className="text-biohazard-red font-bold uppercase text-[10px] tracking-widest border-b-2 border-biohazard-red pb-1"
          >
            Analisar Dados
          </Link>
        </div>

        <div className="group border border-biohazard-red/30 p-12 bg-biohazard-red/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <AlertTriangle className="w-32 h-32 text-biohazard-red" />
          </div>
          <Shield className="w-16 h-16 text-biohazard-red mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-black italic text-white uppercase mb-6 tracking-tight">
            Agentes
          </h3>
          <p className="text-gray-400 leading-relaxed font-light mb-8">
            Os arquivos confidenciais de Leon Kennedy, Chris Redfield, Jill Valentine e os
            enigmáticos planos de Albert Wesker.
          </p>
          <Link
            to="/characters"
            className="text-biohazard-red font-bold uppercase text-[10px] tracking-widest border-b-2 border-biohazard-red pb-1"
          >
            Ver Dossiês
          </Link>
        </div>

        <div className="group border border-white/5 p-12 hover:bg-white/5 transition-all">
          <Biohazard className="w-16 h-16 text-biohazard-red mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-black italic text-white uppercase mb-6 tracking-tight">
            Shadows
          </h3>
          <p className="text-gray-400 leading-relaxed font-light mb-8">
            Umbrella, Tricell, The Family. Descubra as corporações que transformaram a ganância
            farmacêutica em genocídio biológico.
          </p>
          <Link
            to="/corporations"
            className="text-biohazard-red font-bold uppercase text-[10px] tracking-widest border-b-2 border-biohazard-red pb-1"
          >
            Listar Impérios
          </Link>
        </div>
      </section>

      {/* Tactical Footer Overlay */}
      <div className="w-full py-2 bg-biohazard-red text-center">
        <marquee className="text-white text-[9px] font-black uppercase tracking-[1em]">
          BIO-HAZARD DETECTADO // ACESSO RESTRITO AO BANCO DE DADOS HOUND WOLF // RE9 SEARCHING FOR
          UPDATES...
        </marquee>
      </div>
    </div>
  );
}
