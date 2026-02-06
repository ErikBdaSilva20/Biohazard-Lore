import { motion } from 'framer-motion';
import { Archive, BookOpen, Clock, HelpCircle, Info, ShieldCheck } from 'lucide-react';
import { events } from '../data/events';

export default function Timeline() {
  const getIcon = (type) => {
    switch (type) {
      case 'game':
        return <BookOpen className="w-5 h-5 text-biohazard-red" />;
      case 'unreleased':
        return <Archive className="w-5 h-5 text-orange-400" />;
      case 'theory':
        return <HelpCircle className="w-5 h-5 text-purple-400" />;
      case 'lore':
        return <ShieldCheck className="w-5 h-5 text-biohazard-gold" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getLabel = (type) => {
    switch (type) {
      case 'game':
        return 'Evento Canônico / Operação';
      case 'lore':
        return 'Contexto Histórico / Descoberta';
      case 'unreleased':
        return 'Protótipo / Lost File';
      case 'theory':
        return 'Teoria de Fãs / Hipótese';
      default:
        return 'Registro';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-6xl mx-auto selection:bg-biohazard-red selection:text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <div className="inline-block p-4 rounded-full bg-biohazard-red/10 mb-6 border border-biohazard-red/20 shadow-[0_0_30px_rgba(139,0,0,0.2)]">
          <Clock className="w-12 h-12 text-biohazard-red animate-pulse" />
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black italic uppercase text-white mb-6 tracking-tighter leading-none">
          LINHA DO <span className="text-biohazard-red">TEMPO</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto font-light leading-relaxed text-base md:text-xl px-4">
          Do despertar do Megamiceto à aniquilação nuclear de Raccoon City e o futuro incerto de
          Requiem. Acompanhe a gênese do horror biológico.
        </p>
      </motion.div>

      <div className="relative space-y-24 before:content-[''] before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-biohazard-red/30 before:to-transparent">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className={`relative flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-biohazard-dark border-2 border-biohazard-red rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(139,0,0,0.8)]">
              <div className="w-full h-full animate-ping bg-biohazard-red rounded-full opacity-30" />
            </div>

            <div
              className={`w-full md:w-[48%] pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
            >
              <div
                className={`glass-card p-10 border-l-4 ${
                  event.type === 'game'
                    ? 'border-l-biohazard-red bg-biohazard-red/5'
                    : event.type === 'lore'
                      ? 'border-l-biohazard-gold bg-biohazard-gold/5'
                      : event.type === 'theory'
                        ? 'border-l-purple-500 bg-purple-500/5'
                        : 'border-l-gray-600'
                } hover:bg-white/10 transition-all duration-500 group relative overflow-hidden`}
              >
                {/* Background ID Watermark */}
                <div className="absolute top-4 right-4 text-[40px] font-black text-white/5 pointer-events-none group-hover:text-white/10 transition-colors">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>

                <div className="flex justify-between items-start mb-6">
                  <span className="text-biohazard-red font-black italic text-2xl uppercase tracking-tighter">
                    {event.date}
                  </span>
                  {getIcon(event.type)}
                </div>

                <div className="mb-6">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] block mb-2">
                    {getLabel(event.type)}
                  </span>
                  <h3 className="text-3xl font-black text-white uppercase italic group-hover:text-biohazard-red transition-colors tracking-tighter leading-none">
                    {event.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-lg font-light leading-relaxed mb-6 italic">
                  {event.description}
                </p>

                {event.details && (
                  <div className="mt-8 pt-6 border-t border-white/5 flex gap-4 items-start">
                    <Info className="w-5 h-5 text-biohazard-gold shrink-0 mt-1" />
                    <p className="text-xs text-biohazard-gold font-bold uppercase tracking-widest leading-relaxed">
                      INTEL: {event.details}
                    </p>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  <div className="px-4 py-1 bg-white/5 rounded border border-white/10">
                    <span className="text-[9px] font-mono text-gray-600 uppercase">
                      ACCESS_LOG: SUCCESS
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-[48%]" />
          </motion.div>
        ))}
      </div>

      {/* Terminal Footer */}
      <div className="mt-32 p-12 bg-black/40 border border-white/5 rounded-3xl text-center">
        <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.5em] mb-4">
          Final do Registro Alcançado
        </p>
        <p className="text-white font-black italic uppercase tracking-tighter text-2xl">
          Próximo Evento Documentado: RE9 REQUIEM
        </p>
      </div>
    </div>
  );
}
