import { motion } from 'framer-motion';
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Biohazard,
  Briefcase,
  Eye,
  FileText,
  Ghost,
  Key,
  Lock,
  Microscope,
  ShieldAlert,
  Skull,
  Terminal,
} from 'lucide-react';

export default function RequiemPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-gray-300 selection:bg-biohazard-red selection:text-white pb-24 font-sans">
      {/* -------------------- HEADER / HERO -------------------- */}
      <section className="relative w-full py-28 md:py-40 flex flex-col items-center justify-center overflow-hidden border-b border-biohazard-red/20">
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-biohazard-red/5 to-transparent z-10" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-4 max-w-5xl"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-biohazard-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <span className="text-biohazard-red text-xs md:text-sm font-black uppercase tracking-[0.5em] shadow-red-500/50 drop-shadow-md">
              Dossiê Mestre Oficial Completo
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter text-white uppercase mb-6 leading-[0.85]">
            RESIDENT EVIL <br />
            <span className="text-biohazard-red drop-shadow-[0_0_25px_rgba(255,0,0,0.6)]">
              REQUIEM
            </span>
          </h1>
          <p className="text-lg md:text-2xl font-light text-gray-400 mt-8 max-w-3xl mx-auto leading-relaxed border-l-2 border-biohazard-red/50 pl-6 text-left">
            O encerramento definitivo de décadas de bioterrorismo. Arquivos vazados expõem o maior
            encobrimento da história: a verdadeira queda de Raccoon City, o projeto Elpis e as
            engrenagens finais da organização "A Conexões".
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-32">
        {/* -------------------- AGENTES DE OPERAÇÃO -------------------- */}
        <section>
          <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-4">
            <Briefcase className="w-8 h-8 text-biohazard-red" />
            <h2 className="text-3xl md:text-4xl font-black uppercase italic text-white tracking-widest">
              Agentes Alocados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Grace Ashcroft Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-[#0d0d0d] border border-white/10 hover:border-biohazard-red/50 transition-colors overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <ShieldAlert className="w-12 h-12 text-white/5 group-hover:text-biohazard-red/20 transition-colors" />
              </div>
              <div className="p-8">
                <span className="text-[10px] text-biohazard-red uppercase font-black tracking-widest bg-biohazard-red/10 px-2 py-1">
                  Protagonista Inédita
                </span>
                <h3 className="text-3xl font-black text-white uppercase mt-4 mb-2">
                  Grace Ashcroft
                </h3>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-6">
                  Analista de Inteligência do FBI
                </p>
                <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                  <p>
                    Filha da lendária jornalista <strong>Alyssa Ashcroft</strong> (sobrevivente de
                    Outbreak). Ao longo da narrativa, revela-se que Grace não é um clone, mas sim
                    uma criança adotada por Ozwell E. Spencer em um raro momento de arrependimento,
                    sendo confiada a Alyssa para proteção.
                  </p>
                  <div className="bg-black/50 p-4 border-l-2 border-white/10">
                    <strong className="text-gray-300 block mb-1 uppercase text-xs tracking-widest">
                      Perfil de Sobrevivência:
                    </strong>
                    Foco total no <em>Survival Horror</em> clássico. Furtividade mandatória,
                    escassez extrema de munição e resolução de enigmas complexos nos escombros das
                    instalações da "Conexões".
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Leon S. Kennedy Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="group relative bg-[#0d0d0d] border border-white/10 hover:border-blue-500/50 transition-colors overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <Activity className="w-12 h-12 text-white/5 group-hover:text-blue-500/20 transition-colors" />
              </div>
              <div className="p-8">
                <span className="text-[10px] text-blue-400 uppercase font-black tracking-widest bg-blue-500/10 px-2 py-1">
                  Veterano D.S.O.
                </span>
                <h3 className="text-3xl font-black text-white uppercase mt-4 mb-2">
                  Leon S. Kennedy
                </h3>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-6">
                  "Ikeoji" (O Herói Calejado)
                </p>
                <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                  <p>
                    O ex-policial retorna com o peso de décadas de guerra viral. Leon agora sofre da{' '}
                    <strong className="text-red-400">Síndrome de Raccoon City (SRC)</strong>, uma
                    doença degenerativa causada pelos resíduos adormecidos do Vírus T acumulados em
                    seu organismo ao longo de suas missões.
                  </p>
                  <div className="bg-black/50 p-4 border-l-2 border-white/10">
                    <strong className="text-gray-300 block mb-1 uppercase text-xs tracking-widest">
                      Perfil Tático:
                    </strong>
                    Ação e combate intenso. Seu arco remete ao estilo de <em>RE4 Remake</em>, mas com
                    a urgência de um homem lutando contra o próprio corpo falhando.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* -------------------- O PROJETO ELPIS -------------------- */}
        <section className="relative p-10 md:p-14 bg-gradient-to-br from-biohazard-red/10 to-transparent border border-biohazard-red/30 isolation-auto">
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 blur-sm">
            <Microscope className="w-96 h-96 text-biohazard-red transform translate-x-1/4 translate-y-1/4" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <span className="flex items-center gap-2 text-biohazard-red font-bold uppercase tracking-[0.3em] mb-4 text-xs">
              <Key className="w-4 h-4" /> Paradigma Spencer
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 shadow-black drop-shadow-lg">
              O Projeto <span className="text-biohazard-red">Elpis</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  A maior revelação de <em>Requiem</em> subverte a história estabelecida em 1998.
                  Durante décadas, governos e facções do submundo procuraram pelo{' '}
                  <strong>Elpis</strong>, acreditando ser a arma de <em>mind-control</em>{' '}
                  definitiva cultivada na instalação subterrânea <strong>ARK</strong>.
                </p>
                <p>
                  A verdade escondida a sete chaves por <strong>Ozwell E. Spencer</strong> era o
                  oposto: Elpis era uma <strong className="text-white">Panaceia Antiviral</strong>.
                  Nos seus últimos anos, tomado pelo remorso e visões de um legado genocida, Spencer
                  projetou a cura absoluta para cancelar todas as contaminações geradas pela Umbrella.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white uppercase mb-4 border-b border-white/10 pb-2">
                  A Grande Mentira de Raccoon City
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  O bombardeio nuclear em Raccoon City não foi um ato desesperado para erradicar os
                  zumbis. <em>Requiem</em> revela que a organização <strong>A Conexões</strong>,
                  junto a espiões no governo dos Estados Unidos, ordenou o ataque deliberadamente
                  para culpar Spencer e encobrir sua usurpação do complexo ARK e do projeto Elpis.
                  Foi um golpe imobiliário biológico banhado no sangue da cidade.
                </p>
                <div className="flex items-center gap-3 p-3 bg-red-950/30 rounded border border-red-900/50">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-xs text-red-200 uppercase font-black tracking-widest">
                    Segredo Desclassificado
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* -------------------- AMEAÇAS REGISTRADAS -------------------- */}
        <section>
          <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-4">
            <Biohazard className="w-8 h-8 text-biohazard-red" />
            <h2 className="text-3xl md:text-4xl font-black uppercase italic text-white tracking-widest">
              Ameaças Primárias
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white/5 bg-[#0a0a0a] p-6 hover:bg-white/5 transition-colors group">
              <Skull className="w-8 h-8 text-gray-600 mb-4 group-hover:text-biohazard-red transition-colors" />
              <h4 className="text-white font-black uppercase text-xl mb-2">Victor Gideon</h4>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-4">
                Cientista Renegado
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Um ex-pesquisador da Umbrella obcecado pelo poder original. Desejando usar o Elpis
                ao contrário para espalhar o caos total global. No clímax da campanha de Leon, sofre
                mutação e se transforma em um horror bio-mecânico massivo, o verdadeiro sucessor
                espiritual do <em>Nemesis</em>.
              </p>
            </div>

            <div className="border border-white/5 bg-[#0a0a0a] p-6 hover:bg-white/5 transition-colors group">
              <Terminal className="w-8 h-8 text-gray-600 mb-4 group-hover:text-blue-400 transition-colors" />
              <h4 className="text-white font-black uppercase text-xl mb-2">Zeno</h4>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-4">
                A Sombra de Wesker
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Agente de elite da <strong>The Connections</strong> fisicamente moldado e
                modificado a imagem de Albert Wesker. Seu destino é marcado por ironia poética:
                tenta usar seus implantes injetando o Elpis (achando ser o vírus definitivo), e o
                antiviral neutraliza todos os seus poderes, anulando-o miseravelmente e levando a sua
                morte.
              </p>
            </div>

            <div className="border border-white/5 bg-[#0a0a0a] p-6 hover:bg-white/5 transition-colors group">
              <Ghost className="w-8 h-8 text-gray-600 mb-4 group-hover:text-white transition-colors" />
              <h4 className="text-white font-black uppercase text-xl mb-2">A Garota</h4>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-4">
                A Caçadora Imortal
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Uma B.O.W. bizarra e fantasmagórica que persegue Grace durante longos trechos furtivos. É
                completamente invulnerável a armamentos convencionais e reage de forma histérica
                apenas à luz intensa, exigindo que o jogador utilize o ambiente inteligentemente para
                sobreviver.
              </p>
            </div>
          </div>
        </section>

        {/* -------------------- O RELATÓRIO DA GRACE (VISUALIZADOR MASSIVO) -------------------- */}
        <section id="graces-report">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-black border-2 border-biohazard-red/40 p-1 rounded-sm shadow-[0_0_50px_rgba(255,0,0,0.1)]"
          >
            {/* Efeitos de fita confidenciais */}
            <div className="absolute -top-3 -left-4 w-32 h-6 bg-yellow-400/90 transform -rotate-3 z-20 shadow-lg flex items-center justify-center overflow-hidden">
              <span className="text-[8px] font-black text-black tracking-[0.3em] uppercase opacity-70">
                / / / CLASSIFIED / / /
              </span>
            </div>
            <div className="absolute -bottom-3 -right-4 w-40 h-6 bg-yellow-400/90 transform rotate-2 z-20 shadow-lg flex items-center justify-center overflow-hidden">
              <span className="text-[8px] font-black text-black tracking-[0.3em] uppercase opacity-70">
                DO NOT DISTRIBUTE
              </span>
            </div>

            <div className="bg-[#111] p-6 md:p-12 relative overflow-hidden">
              {/* Scanlines Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10" />

              <div className="relative z-20 border-b border-white/20 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="text-biohazard-red w-6 h-6" />
                    <span className="text-biohazard-red uppercase font-black tracking-[0.4em] text-sm">
                      Pós-Créditos Desbloqueado
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif font-black text-white uppercase mt-2">
                    Relatório Final
                  </h3>
                  <p className="text-gray-400 text-sm tracking-widest uppercase mt-2 font-mono">
                    Autor: Grace Ashcroft | DPT: Inteligência Analítica FBI
                  </p>
                </div>
                <div className="flex flex-col items-end border border-red-500/50 bg-red-500/10 p-3 rounded">
                  <div className="flex items-center gap-2 text-red-500 mb-1">
                    <Lock className="w-4 h-4" />
                    <span className="text-xs font-black tracking-wider uppercase">
                      Nível Supremo Restrito
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase font-mono">
                    Clearance Code: HOPE
                  </span>
                </div>
              </div>

              {/* Corpo do Relatório */}
              <div className="relative z-20 font-serif prose prose-invert prose-headings:font-black prose-headings:text-biohazard-red max-w-none text-gray-300 leading-loose prose-p:text-lg">
                <p>
                  <em>Para os registros definitivos do incidente.</em>
                </p>

                <h4>O Passwords de Spencer</h4>
                <p>
                  Concluímos a varredura primária na ARK. A câmara final não era protegida por
                  biometria militar complexa, mas sim por uma senha alfabética analógica. A palavra
                  exigida para acessar o repositório da <strong>Elpis</strong> era{' '}
                  <span className="text-white font-black bg-black px-2 mx-1 border border-white/20 uppercase tracking-widest text-sm">
                    Hope
                  </span>{' '}
                  (Esperança). Uma dissonância cruel vinda de um homem que formatou o genocídio
                  farmacêutico global. Esta foi sua instrução final repassada aos cuidados de minha
                  mãe guardiã.
                </p>

                <h4>A Solução e o Pós-Guerra</h4>
                <p>
                  A eficácia da panaceia antiviral foi imediata. A amostra sintetizada sob nossos
                  cuidados neutralizou os traços persistentes nas cobaias latentes. Sherry Birkin e,
                  mais notavelmente, o agente da DSO, Leon S. Kennedy, foram curados em
                  sua totalidade da <strong>Síndrome de Raccoon City</strong>. O relógio
                  terceiro degenerativo de ambos foi desativado. Leon sobreviveu ao próprio corpo.
                </p>
                <p>
                  Gideon e Zeno foram detidos — o último, vitimado por sua própria húbris e equívoco
                  médico, uma morte irônica após servir fielmente aos dogmas da{' '}
                  <strong>The Connections</strong>.
                </p>

                <h4>Análise das Consequências Globais</h4>
                <p>
                  Este jogo na escuridão acabou. O vazamento completo da pasta ARK está neste momento
                  sendo distribuído globalmente. A corrupção enraizada envolvendo altos escalões do
                  governo norte-americano asfixiando os fundos originais da <strong>Umbrella</strong>{' '}
                  cairá perante a luz do dia. E a conspiração responsável pela desolação de 1998,
                  criada para usurpar o Elpis, encerra o sigilo e mergulha o mundo no escândalo mais
                  volátil da história humana moderna.
                </p>

                <div className="bg-black/80 p-6 border-l-4 border-yellow-500 my-8">
                  <h5 className="text-yellow-500 uppercase tracking-widest mb-4">
                    Adendo Oculto - Operação Falha
                  </h5>
                  <p className="text-gray-400 m-0 font-mono text-sm leading-relaxed">
                    Apesar da purificação inicial, nossa saída revelou que fomos seguidos.{' '}
                    <em>Footage</em> interceptado nos últimos 30 minutos após minha extração mostram
                    equipes militares não identificadas adentrando as ruínas de ARK. Eles
                    eliminaram nossa brigada sentinela, liderada pelos operativos sobreviventes do{' '}
                    <strong>Hound Wolf Squad</strong> (comando Redfield). Um objetivo estratégico,
                    não mapeado em meus espectros iniciais, foi extraído com sucesso pela organização
                    de resgate inimiga. Suspeita-se reativação da célula <strong>H.C.F.</strong>
                  </p>
                </div>

                <p className="text-right uppercase tracking-[0.2em] font-bold text-biohazard-red mt-12 mb-0">
                  — Transmissão Encerrada —
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* -------------------- METADADOS DA PRODUÇÃO -------------------- */}
        <section className="border-t border-white/10 pt-16 flex flex-col md:flex-row gap-12 mb-10">
          <div className="flex-1">
            <h3 className="text-2xl font-black italic uppercase text-white mb-6">
              Notas de Produção
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Dirigido pelo visionário <strong>Koshi Nakanishi</strong> (mesmo diretor responsável
              pelo resgate atmosférico de <em>Resident Evil 7</em>). O projeto "Requiem" enfrentou
              um reinício impressionante durante seu ciclo: concebido inicialmente como uma
              iniciativa de multijogador e expansão de mundo-aberto (talvez espelhando as tendências do mercado pós-RE Village), a
              diretoria recuou drasticamente ouvindo aos fãs. Refeito do zero para ser a consagração
              do terror e claustrofobia <em>single-player</em>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              O game se destaca tecnologicamente nas otimizações refinadas da nova era, brilhando na
              recepção de seus portes para hardware avançado e apresentando controles imersivos
              (giroscópio nativo) para consoles portáteis de última geração, garantindo o selo de
              obra-prima terror englobando o legado da antiga Capcom moderna.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex items-center justify-center p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            <div className="text-center">
              <Eye className="w-10 h-10 text-biohazard-red mx-auto mb-4 opacity-50" />
              <p className="text-xs uppercase font-bold tracking-widest text-gray-300">
                O arquivo oficial de fechamento. Uma homenagem de 1996 a 2026.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
