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
            © 2026{' '}
            <span className="font-black italic text-biohazard-red hover:text-biohazard-red/80 text-lg mr-2">
              Biohazard Lore Project.
            </span>
            Todas as imagens e marcas pertencem à{' '}
            <span className="font-black italic text-biohazard-red hover:text-biohazard-red/80 text-lg border-b-2 border-biohazard-red">
              <a href="https://www.capcom.com/" target="_blank" rel="noopener noreferrer">
                CAPCOM
              </a>
            </span>
            .
            <br />
            Desenvolvido para fins de estudo por{' '}
            <a
              href="https://www.linkedin.com/in/erik-borgessilva20/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-biohazard-red hover:text-biohazard-red/80"
            >
              <span className="font-black italic text-biohazard-red hover:text-biohazard-red/80 text-lg border-b-2 border-biohazard-red animate-pulse cursor-pointer transition-all duration-300 hover:scale-105">
                Erik Borges
              </span>
            </a>
            <br />
          </p>
        </div>
      </footer>
    </div>
  );
}
