import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-biohazard-dark overflow-x-hidden pt-20">
      <div className="fixed inset-0 pointer-events-none grunge-overlay z-0" />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.main>

      <footer className="relative z-10 py-12 border-t border-biohazard-red/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Biohazard Lore Project. Desenvolvido para fins de estudo (React + Tailwind).
            <br />
            Todas as imagens e marcas pertencem à CAPCOM.
          </p>
        </div>
      </footer>
    </div>
  );
}
