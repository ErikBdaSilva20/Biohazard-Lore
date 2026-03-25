import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, AlertOctagon } from 'lucide-react';
import umbrellaImg from '../assets/Umbrella.jpg';

export default function SpoilerWarning() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenInfo = sessionStorage.getItem('re_spoiler_warning_seen');
    if (!hasSeenInfo) {
      // Small delay to make the popup more impactful
      const timer = setTimeout(() => setIsOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem('re_spoiler_warning_seen', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-black border-2 border-biohazard-red shadow-[0_0_80px_rgba(220,38,38,0.4)] overflow-hidden flex flex-col md:flex-row"
          >
            {/* Background scanline effect */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none z-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(220, 38, 38, 0.2) 1px, transparent 1px)',
                backgroundSize: '100% 4px',
              }}
            />

            {/* Left Image Section */}
            <div className="relative w-full md:w-2/5 h-48 md:h-auto border-b-2 md:border-b-0 md:border-r-2 border-biohazard-red/50">
              <div className="absolute inset-0 bg-biohazard-red/20 mix-blend-multiply z-10" />
              <img
                src={umbrellaImg}
                alt="Umbrella Corporation"
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            </div>

            {/* Right Content Section */}
            <div className="relative flex flex-col justify-between w-full md:w-3/5 p-6 md:p-10 z-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert className="w-8 h-8 text-biohazard-red animate-pulse" />
                  <span className="text-biohazard-red text-xs md:text-sm font-black uppercase tracking-[0.4em]">
                    Alerta de Segurança
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase mb-4 tracking-tighter leading-none">
                  AVISO DE <br />
                  <span className="text-biohazard-red">SPOILERS EXTREMOS</span>
                </h2>

                <div className="space-y-4 mb-8 border-l-4 border-biohazard-red/50 pl-4">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                    Acesso a arquivos restritos detectado. Nossa base de dados contém informações confidenciais altamente sensíveis, incluindo detalhes cruciais sobre o recém-lançado <strong className="text-white">Resident Evil Requiem</strong>.
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    Se você não deseja comprometer sua experiência e evitar spoilers da nova narrativa, teorias confirmadas e o desfecho do Projeto Elpis, recomendamos que <strong>não consulte profundamente</strong> nossa aplicação ainda.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAccept}
                  className="group relative flex-1 py-4 bg-biohazard-red hover:bg-red-700 text-white font-black uppercase text-xs md:text-sm tracking-widest transition-all duration-300 overflow-hidden flex items-center justify-center gap-2"
                >
                  <AlertOctagon className="w-4 h-4" />
                  <span className="relative z-10">Estou Ciente e Assumo os Riscos</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-overlay opacity-20" />
                </button>
              </div>
              
              {/* Small details */}
              <div className="absolute top-4 right-4 text-[10px] text-biohazard-red/50 font-mono tracking-widest uppercase">
                ID: UMB-RQ-9942
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
