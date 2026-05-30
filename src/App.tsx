import { useState } from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Cpu,
  Layers,
  Globe,
  Compass,
} from "lucide-react";

const Github = ({
  size = 20,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({
  size = 20,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const personalInfo = {
  name: "Kauan Kelvin Alves Macedo",
  title: "Desenvolvedor de Sistemas & Entusiasta em Redes",
  location: "Curitiba, PR",
  email: "kauan@kauanmacedo.com",
  phone: "+55 41 99543-4960",
  linkedin: "https://www.linkedin.com/in/kauanmacedo",
  github: "https://github.com/kauan-macedo",
  bio: "Atualmente no 5º período de Análise e Desenvolvimento de Sistemas na UFPR e 1º período de Redes de Computadores na Universidade Positivo. Tenho interesse em desenvolvimento full stack, com foco em React + Tailwind, Node + Express, Docker, além de Linux, Git e infraestrutura de redes. Busco entender como os dados realmente trafegam pela rede, unindo frontend, backend e operações, com foco em computação em nuvem.",
};

const experiences = [
  {
    role: "Desenvolvedor de Sistemas e Automação",
    company: "GRÁFICA E EDITORA POSIGRAF",
    period: "NOVEMBRO/2025 - ATUALMENTE",
    description: [
      "Desenvolvimento de painéis em B.I e ETL de dados",
      "Desenvolvimento Fullstack com tecnologias modernas",
      "Automatização de processos internos e integrações",
      "Desenvolvimento de Software proprietário para gestão da Logística, com módulos de inventário, produtividade e planejamento do estoque",
    ],
  },
  {
    role: "Estagiário de T.I",
    company: "GRÁFICA E EDITORA POSIGRAF",
    period: "JUNHO/2025 - OUTUBRO/2025",
    description: [
      "Automatização de relatórios de sistema ERP e WMS",
      "Desenvolvimento de painéis em B.I",
      "Desenvolvimento Front-End",
      "Desenvolvimento de plataforma de controle da Logística em React",
    ],
  },
  {
    role: "Jovem Aprendiz",
    company: "CASSOL PRÉ-FABRICADOS",
    period: "AGOSTO/2024 - MAIO/2025",
    description: [
      "Gerenciamento de faturas e notas fiscais",
      "Organização e classificação de dados",
      "Gerenciamento de requisições em sistema ERP",
      "Geração e automação de relatórios",
    ],
  },
];

const education = [
  {
    institution: "Universidade Federal do Paraná - UFPR",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "FEVEREIRO/2024 - DEZEMBRO/2026",
    status: "5° Período - Noturno",
  },
  {
    institution: "Universidade Positivo",
    course: "Redes de Computadores",
    period: "FEVEREIRO/2026 - DEZEMBRO/2027",
    status: "1° Período - EAD",
  },
];

const skillCategories = [
  {
    title: "Linguagens & Frameworks",
    icon: <Cpu size={20} className="text-indigo-400" />,
    skills: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "TailwindCSS",
      "SQL",
      "MongoDB",
      "Python",
    ],
  },
  {
    title: "DevOps & Ferramentas",
    icon: <Layers size={20} className="text-emerald-400" />,
    skills: ["Git", "GitHub Actions", "CI/CD", "Docker", "Linux"],
  },
  {
    title: "Redes & Cloud",
    icon: <Globe size={20} className="text-cyan-400" />,
    skills: ["Redes de Computadores", "Cloud Computing"],
  },
  {
    title: "Soft Skills",
    icon: <Compass size={20} className="text-pink-400" />,
    skills: [
      "Trabalho em equipe",
      "Comunicação",
      "Tomada de decisão",
      "Adaptabilidade",
      "Proatividade",
    ],
  },
];

const qualifications = [
  {
    title: "Introduction to DevOps",
    issuer: "COURSERA - IBM",
    duration: "9 Horas de Duração",
  },
  {
    title: "Curso de Inglês (Avançado)",
    issuer: "KNN IDIOMAS",
    duration: "Julho/2018 - Julho/2020",
  },
  {
    title: "Curso de Desenvolvimento Front-End e Introdução a Python",
    issuer: "Atividade de Complementação Curricular - SEED PR",
    duration: "87 Horas (Durante o Ensino Médio | 2023)",
  },
];

export default function App() {
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col selection:bg-indigo-500 selection:text-white relative">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-1/4 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-1/3 w-[600px] h-[600px] bg-emerald-950/10 rounded-full blur-[140px] pointer-events-none"></div>

      <header className="sticky top-0 z-50 glassmorphism border-b border-gray-800/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-900/40">
              K
            </div>
            <span className="font-bold text-lg tracking-tight bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Kauan Macedo
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
            <a
              href="#about"
              className="hover:text-indigo-400 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#experience"
              className="hover:text-indigo-400 transition-colors"
            >
              Experiência
            </a>
            <a
              href="#skills"
              className="hover:text-indigo-400 transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#education"
              className="hover:text-indigo-400 transition-colors"
            >
              Formação
            </a>
          </nav>
          <div className="flex items-center"></div>
        </div>
      </header>

      <main className="grow max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <section
          id="hero"
          className="relative rounded-2xl overflow-hidden glassmorphism border border-gray-800/80 shadow-2xl"
        >
          <div className="h-44 sm:h-56 relative w-full overflow-hidden bg-linear-to-r from-indigo-950/80 via-slate-900/80 to-cyan-950/80">
            <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
          </div>

          <div className="px-6 pb-8 pt-0 sm:px-10 relative flex flex-col md:flex-row md:items-end md:space-x-8 -mt-16 sm:-mt-20">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-linear-to-br from-indigo-950 to-gray-900 border-4 border-gray-950 shadow-xl flex flex-col items-center justify-center relative overflow-hidden group select-none">
              <div className="absolute inset-0 bg-linear-to-tr from-indigo-900/30 to-cyan-900/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <User
                size={56}
                className="text-indigo-400 group-hover:scale-110 transition-transform"
              />
            </div>

            <div className="mt-6 md:mt-0 flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {personalInfo.name}
                </h1>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Disponível para Projetos
                </span>
              </div>
              <p className="text-indigo-400 font-semibold text-lg">
                {personalInfo.title}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 pt-2">
                <span className="flex items-center space-x-1">
                  <MapPin size={16} className="text-gray-500" />
                  <span>{personalInfo.location}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Mail size={16} className="text-gray-500" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </span>
                <span className="flex items-center space-x-1">
                  <Phone size={16} className="text-gray-500" />
                  <span>{personalInfo.phone}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-900 px-6 py-4 sm:px-10 bg-gray-950/40 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-400 hover:text-white transition-all shadow-sm"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-400 hover:text-white transition-all shadow-sm"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => copyToClipboard(personalInfo.email, "email")}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 text-xs text-gray-300 transition-all font-medium active:scale-95"
              >
                {copiedText === "email" ? (
                  <Check size={14} className="text-emerald-400" />
                ) : (
                  <Copy size={14} />
                )}
                <span>
                  {copiedText === "email" ? "E-mail copiado!" : "Copiar E-mail"}
                </span>
              </button>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 text-xs text-gray-300 transition-all font-medium active:scale-95"
              >
                {copiedText === "phone" ? (
                  <Check size={14} className="text-emerald-400" />
                ) : (
                  <Copy size={14} />
                )}
                <span>
                  {copiedText === "phone"
                    ? "Telefone copiado!"
                    : "Copiar Telefone"}
                </span>
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold flex items-center space-x-2 text-white">
              <User size={20} className="text-indigo-400" />
              <span>Sobre Mim</span>
            </h2>
            <div className="p-6 rounded-xl glassmorphism border border-gray-800/60 leading-relaxed text-gray-300">
              {personalInfo.bio}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold flex items-center space-x-2 text-white">
              <Award size={20} className="text-cyan-400" />
              <span>Foco & Interesse</span>
            </h2>
            <div className="p-6 rounded-xl glassmorphism border border-gray-800/60 space-y-4 text-sm">
              <div className="flex items-center space-x-3 p-3 bg-gray-900/40 rounded-lg border border-gray-800/40">
                <div className="w-8 h-8 rounded bg-indigo-950 flex items-center justify-center text-indigo-400 font-semibold text-xs border border-indigo-500/20">
                  FS
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Desenvolvimento Fullstack
                  </h4>
                  <p className="text-xs text-gray-400">
                    React + Tailwind e Node + Express
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-900/40 rounded-lg border border-gray-800/40">
                <div className="w-8 h-8 rounded bg-cyan-950 flex items-center justify-center text-cyan-400 font-semibold text-xs border border-cyan-500/20">
                  OPS
                </div>
                <div>
                  <h4 className="font-semibold text-white">DevOps & Cloud</h4>
                  <p className="text-xs text-gray-400">
                    Docker, CI/CD pipelines & Linux
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-900/40 rounded-lg border border-gray-800/40">
                <div className="w-8 h-8 rounded bg-emerald-950 flex items-center justify-center text-emerald-400 font-semibold text-xs border border-emerald-500/20">
                  NET
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Redes de Computadores
                  </h4>
                  <p className="text-xs text-gray-400">
                    Fluxo de dados & infraestrutura de redes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="space-y-6">
          <h2 className="text-xl font-bold flex items-center space-x-2 text-white">
            <Briefcase size={20} className="text-indigo-400" />
            <span>Experiência Profissional</span>
          </h2>

          <div className="relative border-l border-gray-800 ml-4 pl-6 sm:pl-8 space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute left-[-31px] sm:left-[-39px] top-1.5 w-4 h-4 rounded-full bg-gray-950 border-2 border-indigo-500 group-hover:border-cyan-400 transition-colors duration-300 z-10"></div>

                <div className="p-6 rounded-xl glassmorphism border border-gray-800/60 hover:border-gray-700/80 transition-all duration-300 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-gray-400">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-semibold bg-gray-900 px-3 py-1.5 rounded-full border border-gray-800 text-cyan-400">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside marker:text-indigo-500">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-6">
          <h2 className="text-xl font-bold flex items-center space-x-2 text-white">
            <Cpu size={20} className="text-indigo-400" />
            <span>Habilidades Técnicas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl glassmorphism border border-gray-800/60 flex flex-col space-y-4 hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="flex items-center space-x-2.5 pb-3 border-b border-gray-900">
                  {category.icon}
                  <h3 className="font-semibold text-sm text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 grow">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-900/80 text-gray-300 border border-gray-800/80 hover:border-gray-700/80 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="education"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold flex items-center space-x-2 text-white">
              <GraduationCap size={20} className="text-cyan-400" />
              <span>Formação Acadêmica</span>
            </h2>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl glassmorphism border border-gray-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base">
                      {edu.course}
                    </h3>
                    <p className="text-sm text-gray-400">{edu.institution}</p>
                    <span className="inline-block text-xs font-medium px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {edu.status}
                    </span>
                  </div>
                  <span className="text-xs font-semibold bg-gray-900 text-cyan-400 px-3 py-1.5 rounded-full border border-gray-800 shrink-0 self-start sm:self-center">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center space-x-2 text-white">
              <Award size={20} className="text-indigo-400" />
              <span>Certificações</span>
            </h2>
            <div className="space-y-3">
              {qualifications.map((qual, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl glassmorphism border border-gray-800/60 text-xs space-y-1"
                >
                  <h4 className="font-bold text-white">{qual.title}</h4>
                  <p className="text-gray-400">{qual.issuer}</p>
                  <p className="text-indigo-400 font-medium">{qual.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-gray-900 bg-gray-950 py-10 text-center text-xs text-gray-500">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <p>
            © {new Date().getFullYear()} - Kauan Kelvin Alves Macedo. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
