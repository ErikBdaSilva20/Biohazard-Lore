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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-biohazard-dark/80 backdrop-blur-lg border-b border-biohazard-red/20 h-20">
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
            className="fixed inset-0 top-20 bg-biohazard-dark z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6 space-y-8">
              <div className="space-y-4">
                <p className="text-biohazard-red text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                  Arquivos Principais
                </p>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-2xl font-black italic uppercase text-white hover:text-biohazard-red transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-biohazard-red/50" />
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-6 pt-10 border-t border-white/5">
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 px-2">
                  Relatórios Adicionais
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {moreItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 text-gray-400 active:bg-biohazard-red/20 active:text-white transition-all"
                    >
                      <item.icon className="w-6 h-6 text-biohazard-red" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-center">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                  <Link
                    to="/re4-comparison"
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col items-center gap-2 p-4 bg-biohazard-red/10 rounded-2xl border border-biohazard-red/20 text-biohazard-red active:bg-biohazard-red transition-all col-span-2"
                  >
                    <Ghost className="w-6 h-6" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
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
