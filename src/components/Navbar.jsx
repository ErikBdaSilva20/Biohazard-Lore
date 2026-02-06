import { AnimatePresence, motion } from 'framer-motion';
import {
  Archive,
  Biohazard,
  Book,
  Building2,
  ChevronDown,
  Clock,
  Ghost,
  Menu,
  Sparkles,
  Target,
  Tv,
  Users,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Cronologia', path: '/chronology', icon: Clock },
  { name: 'Jogos', path: '/games', icon: Book },
  { name: 'Virologia', path: '/viruses', icon: Biohazard },
  { name: 'Personagens', path: '/characters', icon: Users },
  { name: 'Corporações', path: '/corporations', icon: Building2 },
];

const moreItems = [
  { name: 'Teorias', path: '/theories', icon: Sparkles },
  { name: 'Mídia Animada', path: '/animations', icon: Tv },
  { name: 'Conteúdo Cortado', path: '/cut-content', icon: Archive },
  { name: 'Monitoramento Global', path: '/map', icon: Target },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-biohazard-dark/80 backdrop-blur-lg border-b border-biohazard-red/20 h-20">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Ghost className="w-8 h-8 text-biohazard-red group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
              Biohazard<span className="text-biohazard-red">Lore</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link text-xs font-black uppercase tracking-widest flex items-center gap-2"
              >
                <item.icon className="w-3.5 h-3.5 text-biohazard-red/50" />
                {item.name}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="nav-link text-xs font-black uppercase tracking-widest flex items-center gap-2"
              >
                <span>Extra</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="absolute top-full right-0 mt-2 w-56 bg-biohazard-gray border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2"
                  >
                    {moreItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-left hover:bg-white/5 rounded-lg transition-colors group"
                      >
                        <item.icon className="w-4 h-4 text-biohazard-red" />
                        <span className="text-gray-300 group-hover:text-white text-[10px] font-black uppercase tracking-widest">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                    <div className="border-t border-white/5 mt-2 pt-2">
                      <Link
                        to="/re4-comparison"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-left hover:bg-biohazard-red/10 rounded-lg transition-colors group"
                      >
                        <Ghost className="w-4 h-4 text-biohazard-red" />
                        <span className="text-biohazard-red text-[10px] font-black uppercase tracking-widest">
                          Legacy RE4
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-biohazard-dark z-[1001] lg:hidden flex flex-col h-[100dvh]"
          >
            {/* Mobile Header (Fixed) */}
            <div className="h-20 flex items-center justify-between px-6 border-b border-biohazard-red/20 shrink-0 bg-biohazard-dark/95 backdrop-blur-md">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                <Ghost className="w-8 h-8 text-biohazard-red" />
                <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                  Biohazard<span className="text-biohazard-red">Lore</span>
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 hover:text-biohazard-red transition-colors"
                aria-label="Fechar Menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="flex-grow overflow-y-auto overflow-x-hidden">
              <div className="p-8 space-y-12 pb-20">
                {/* Main Links Area */}
                <div className="space-y-6">
                  <p className="text-biohazard-red text-[11px] font-black uppercase tracking-[0.4em] opacity-60">
                    Sistemas Centrais
                  </p>
                  <div className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-6"
                      >
                        <item.icon className="w-7 h-7 text-biohazard-red group-hover:scale-110 transition-transform" />
                        <span className="text-3xl font-black italic uppercase text-white group-hover:text-biohazard-red transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Additional Content Grid */}
                <div className="space-y-6">
                  <p className="text-gray-500 text-[11px] font-black uppercase tracking-[0.4em]">
                    Dados de Campo
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {moreItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 rounded-2xl border border-white/10 text-gray-400 active:bg-biohazard-red/20 active:text-white transition-all transform active:scale-95"
                      >
                        <item.icon className="w-8 h-8 text-biohazard-red" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-center leading-tight">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Tactical Footer Button */}
                <div className="pt-4">
                  <Link
                    to="/re4-comparison"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-biohazard-red/20 to-transparent rounded-2xl border border-biohazard-red/30 text-biohazard-red active:from-biohazard-red active:text-white transition-all transform active:scale-95 w-full"
                  >
                    <Ghost className="w-6 h-6 animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-[0.3em]">
                      Legacy RE4 Archive
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
