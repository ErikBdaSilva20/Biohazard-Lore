import { motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowLeft,
  Biohazard,
  BookOpen,
  Calendar,
  Info,
  Link as LinkIcon,
  Quote,
  Users,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { games } from '../data/games';

export default function GamePage() {
  const { id } = useParams();
  // We can search by ID or slug
  const game = games.find((g) => g.id === id || g.slug === id);

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-biohazard-dark px-4">
        <AlertCircle className="w-16 h-16 text-biohazard-red mb-4 animate-pulse" />
        <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter">
          Arquivo Não Encontrado
        </h1>
        <p className="text-gray-500 mt-2">O código de acesso fornecido é inválido ou restrito.</p>
        <Link to="/games" className="mt-8 text-biohazard-red font-bold hover:underline">
          VOLTAR PARA LISTA DE TÍTULOS
        </Link>
      </div>
    );
  }

  const Section = ({ title, icon: Icon, children, color = 'text-biohazard-red' }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
        <Icon className={`w-6 h-6 ${color}`} />
        <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">{title}</h3>
      </div>
      <div className="text-gray-300 leading-relaxed font-light text-lg space-y-4">{children}</div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-biohazard-dark">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-end pb-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-biohazard-dark via-biohazard-dark/40 to-transparent" />
        <div className="absolute top-24 left-4 md:left-8 z-20">
          <Link
            to="/games"
            className="inline-flex items-center text-biohazard-red hover:gap-2 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-bold uppercase tracking-widest text-xs">
              Acessar Banco de Dados
            </span>
          </Link>
        </div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="relative z-10 w-full"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-biohazard-red/20 text-biohazard-red text-[10px] font-black uppercase tracking-widest border border-biohazard-red/30">
              RE_ARCHIVE_{game.id.toUpperCase()}
            </span>
            <div className="flex items-center text-gray-400 gap-1 text-sm font-bold font-mono">
              <Calendar className="w-4 h-4" />
              <span>{game.year}</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black italic text-white uppercase tracking-tighter leading-none mb-4">
            {game.title}
          </h1>
          <p className="text-xl md:text-2xl text-biohazard-gold font-light italic max-w-3xl">
            "{game.summary}"
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <Section title="Contexto Operacional" icon={BookOpen}>
            <p className="whitespace-pre-line">{game.description}</p>
            <div className="mt-8 p-6 bg-white/5 border-l-2 border-biohazard-gold italic text-biohazard-gold">
              {game.context}
            </div>
          </Section>

          <Section title="O Evento Central" icon={AlertCircle}>
            <p>{game.mainEvent}</p>
          </Section>

          <Section title="Consequências para a Saga" icon={Biohazard}>
            <p>{game.consequences}</p>
          </Section>

          <Section title="Curiosidades e Bastidores" icon={Info} color="text-blue-400">
            <p>{game.trivia}</p>
          </Section>

          {/* Special Section for RE4 Comparison */}
          {(game.id === 're4' || game.id === '4') && (
            <div className="mt-8 p-8 border border-biohazard-red/30 bg-biohazard-red/5 rounded-2xl">
              <h4 className="text-2xl font-black text-white mb-4 uppercase">
                Evolução do Pesadelo
              </h4>
              <p className="text-gray-400 mb-8">
                Esta obra-prima de 2004 foi totalmente reimaginada em 2023. Confira as diferenças
                mecânicas e narrativas entre as eras.
              </p>
              <Link
                to="/re4-comparison"
                className="inline-block px-8 py-3 bg-biohazard-red text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Comparativo RE4 (2004 vs 2023)
              </Link>
            </div>
          )}
        </div>

        {/* Sidebar Contextual Links */}
        <aside className="space-y-12">
          <div className="glass-card p-6 border-biohazard-red/20 shadow-2xl">
            <h4 className="flex items-center gap-2 text-white font-black uppercase text-sm mb-6 pb-2 border-b border-white/10">
              <Users className="w-4 h-4 text-biohazard-red" /> Personagens Envolvidos
            </h4>
            <div className="flex flex-wrap gap-2">
              {game.characters?.map((charId) => (
                <Link
                  key={charId}
                  to={`/characters/${charId}`}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-bold text-gray-400 hover:text-white hover:border-biohazard-red transition-all uppercase"
                >
                  {charId.replace('-', ' ')}
                </Link>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 border-biohazard-red/20 shadow-2xl">
            <h4 className="flex items-center gap-2 text-white font-black uppercase text-sm mb-6 pb-2 border-b border-white/10">
              <Biohazard className="w-4 h-4 text-biohazard-red" /> Patógenos Relacionados
            </h4>
            <div className="flex flex-wrap gap-2">
              {game.pathogens?.map((pathId) => (
                <Link
                  key={pathId}
                  to={`/viruses/${pathId}`}
                  className="px-3 py-1 bg-biohazard-red/10 border border-biohazard-red/20 text-xs font-bold text-biohazard-red hover:bg-biohazard-red hover:text-white transition-all uppercase"
                >
                  {pathId.replace('-', ' ')}
                </Link>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 border-biohazard-red/20 shadow-2xl">
            <h4 className="flex items-center gap-2 text-white font-black uppercase text-sm mb-6 pb-2 border-b border-white/10">
              <LinkIcon className="w-4 h-4 text-biohazard-red" /> Conexões Diretas
            </h4>
            <div className="space-y-3">
              {game.connections?.map((conn) => (
                <div key={conn} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 bg-biohazard-red rounded-full" />
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                    {conn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Internal Navigation Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-20 border-t border-white/5 flex flex-col items-center">
        <Quote className="w-12 h-12 text-biohazard-red/20 mb-6" />
        <p className="text-gray-500 text-center font-serif italic max-w-2xl mb-8">
          "A saga Resident Evil não é sobre zumbis, é sobre o que a humanidade faz com o poder de
          moldar a vida e a morte."
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/games"
            className="px-6 py-2 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest text-white hover:bg-white/5 transition-all"
          >
            Outros Jogos
          </Link>
          <Link
            to="/chronology"
            className="px-6 py-2 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest text-white hover:bg-white/5 transition-all"
          >
            Linha do Tempo
          </Link>
        </div>
      </footer>
    </div>
  );
}
