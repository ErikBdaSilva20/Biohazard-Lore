import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Re4Comparision2004 from '../assets/Re4Comparision2004.jpg';
import Re4Comparision2023 from '../assets/Re4Comparision2023.jpg';
import { re4Comparison } from '../data/lore';

export default function ComparisonPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-black italic text-white uppercase tracking-tighter mb-6">
          RE4: <span className="text-biohazard-red">Conexões</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          A ponte entre o clássico que mudou os jogos de ação e a reimaginação visceral que trouxe o
          horror de volta.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-20">
        {/* Original */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="glass-card overflow-hidden flex flex-col"
        >
          <div className="relative h-64 overflow-hidden">
            <img src={Re4Comparision2004} className="w-full h-full object-cover" alt="RE4 2005" />
            <div className="absolute inset-0 bg-gradient-to-t from-biohazard-gray to-transparent" />
            <div className="absolute bottom-6 left-8">
              <h2 className="text-3xl font-black text-white uppercase italic">
                {re4Comparison.original.title}
              </h2>
            </div>
          </div>
          <div className="p-8 flex-1">
            <p className="text-gray-300 mb-8 leading-relaxed font-light italic">
              {re4Comparison.original.details}
            </p>
            <ul className="space-y-4">
              {re4Comparison.original.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-gray-400 border-l-2 border-biohazard-red/20 pl-4 py-1"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Remake */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="glass-card overflow-hidden flex flex-col border-biohazard-red/30"
        >
          <div className="relative h-64 overflow-hidden">
            <img src={Re4Comparision2023} className="w-full h-full object-cover" alt="RE4 2023" />
            <div className="absolute inset-0 bg-gradient-to-t from-biohazard-gray to-transparent" />
            <div className="absolute bottom-6 left-8">
              <h2 className="text-3xl font-black text-biohazard-red uppercase italic">
                {re4Comparison.remake.title}
              </h2>
            </div>
          </div>
          <div className="p-8 flex-1">
            <p className="text-gray-300 mb-8 leading-relaxed font-light italic">
              {re4Comparison.remake.details}
            </p>
            <ul className="space-y-4">
              {re4Comparison.remake.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-gray-200 border-l-2 border-biohazard-red pl-4 py-1"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="relative py-16 px-8 bg-biohazard-red/5 border border-biohazard-red/30 rounded-3xl overflow-hidden">
        <Zap className="absolute -top-10 -left-10 w-40 h-40 text-biohazard-red opacity-5 rotate-12" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <label className="text-biohazard-red font-black text-xs uppercase tracking-[0.3em] mb-4 block">
            A Conexão Final
          </label>
          <h3 className="text-4xl font-black text-white italic mb-8 uppercase">
            Um Legado de Terror
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            {re4Comparison.connection}
          </p>
        </div>
      </div>
    </div>
  );
}
