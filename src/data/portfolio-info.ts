// Informações Pessoais
export const personalInfo = {
  name: 'Ailton Maturana',
  title: 'Desenvolvedor Full-Cycle',
  email: 'ailtonmaturanaj@gmail.com',
  whatsapp: '15988001726',
  github: 'https://github.com/Maturanajr',
  githubUsername: 'Maturanajr',
  location: 'Sorocaba, SP',
  profileImage: '/foto_perfil.jpg',
  logo: 'AM',
  resumeUrl: '/curriculo.pdf',
};

// Menu de Navegação
export const menuItems = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contato', href: '#contact' },
];

// Seção Hero
export const heroSection = {
  greeting: 'Olá, eu sou',
  name: personalInfo.name,
  title: personalInfo.title,
  description: 'Desenvolvedor senior com experiência Full-Cycle, especializado em Python, React, infraestrutura e automações.',
  cta: {
    primary: 'Entre em Contato',
    secondary: 'Ver GitHub',
  },
};

// Redes Sociais
export const socialLinks = [
  {
    name: 'GitHub',
    url: personalInfo.github,
    icon: 'github',
  },
  {
    name: 'Email',
    url: `mailto:${personalInfo.email}`,
    icon: 'email',
  },
];

// Seção Sobre
export const aboutSection = {
  title: 'Sobre Mim',
  paragraphs: [
    'Desenvolvedor Full-Cycle com sólida experiência desde 2019, especializado em criar soluções robustas e escaláveis.',
    'Atualmente atuando como Product Owner na Embracon, liderando equipes de desenvolvimento e definindo estratégias tecnológicas para otimização de processos internos.',
    'Experiência comprovada em desenvolvimento de robôs de automação, APIs backend, interfaces React, e gerenciamento de infraestrutura com Docker, Airflow e cloud services.',
    'Formado em Engenharia Civil pela UNIP, combinando habilidades analíticas e de gestão de projetos com expertise técnica em programação.',
  ],
  stats: [
    { label: 'Anos de Experiência', value: '8+' },
    { label: 'Projetos Concluídos', value: '50+' },
    { label: 'Tecnologias', value: '15+' },
    { label: 'Usuários Ativos', value: '500+' },
  ],
};

// Experiências Profissionais
export const experiences = [
  {
    title: 'Product Owner',
    company: 'Embracon Adm. de Consórcios',
    period: '02/2025 - Atual',
    description: 'Atuação direta com times de desenvolvimento, levantamento de requisitos com stakeholders, priorização de backlog e liderança na definição de soluções tecnológicas.',
    highlights: [
      'Escrita de histórias de usuário em BDD',
      'Acompanhamento de efforts/capacities',
      'Gestão de equipes de desenvolvimento',
    ],
  },
  {
    title: 'Analista de T.I. Pleno',
    company: 'Embracon Adm. de Consórcios',
    period: '09/2024 - 02/2025',
    description: 'Responsável pelo suporte técnico de sistemas internos, acompanhamento de incidentes e manutenção de soluções de TI.',
    highlights: [
      'Suporte técnico de sistemas críticos',
      'Resolução de incidentes',
      'Manutenção de infraestrutura',
    ],
  },
  {
    title: 'Desenvolvedor Full-Stack (PJ)',
    company: 'Fattureweb',
    period: '01/2022 - 02/2025',
    description: 'Desenvolvimento de robôs de captura com automação, APIs backend e funcionalidades front-end.',
    highlights: [
      'Automação com Playwright e Selenium',
      'Criação de APIs com FastAPI',
      'Desenvolvimento React',
      'Infraestrutura Docker, Airflow, SQS',
      'Automação de emails via IMAP',
    ],
  },
  {
    title: 'Desenvolvedor de Software',
    company: 'Software de CopyTrade',
    period: '01/2019 - 12/2021',
    description: 'Desenvolvimento de software de Copy Trading em Python com interface PySimpleGUI e conectividade via WebSockets.',
    highlights: [
      'Software com operação 24/7',
      'Mais de 500 usuários cadastrados',
      'Dashboard para gestão de licenças',
      'Integração MongoDB',
    ],
  },
];

// Habilidades Técnicas
export const skillCategories = [
  {
    category: 'Backend',
    skills: [
      { name: 'Python', level: 100, icon: '🐍' },
      { name: 'FastAPI', level: 100, icon: '⚡' },
      { name: 'Node.js', level: 85, icon: '💚' },
      { name: 'Java', level: 50, icon: '☕︎' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 100, icon: '⚛️' },
      { name: 'JavaScript', level: 100, icon: '📜' },
      { name: 'HTML/CSS', level: 100, icon: '🎨' },
      { name: 'Tailwind CSS', level: 80, icon: '💨' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 90, icon: '🍃' },
      { name: 'PostgreSQL', level: 90, icon: '🐘' },
      { name: 'SQL', level: 90, icon: '📊' },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 90, icon: '🐳' },
      { name: 'Git', level: 100, icon: '📦' },
      { name: 'Airflow', level: 80, icon: '🌊' },
      { name: 'Kubernetes', level: 90, icon: '🔌' },
    ],
  },
  {
    category: 'Automation',
    skills: [
      { name: 'Playwright', level: 100, icon: '🎭' },
      { name: 'Selenium', level: 100, icon: '🤖' },
      { name: 'OCR', level: 80, icon: '👁️' },
      { name: 'Agno AI', level: 80, icon: '֎' },
    ],
  },
];

export const additionalSkills = [
  'Metodologias Ágeis',
  'BDD',
  'JWT',
  'REST APIs',
  'Inglês Avançado',
  'Gestão de Equipes',
  'Product Management',
  'AI flows & Chains'
];

// Informações de Contato
export const contactInfo = [
  {
    label: 'WhatsApp',
    value: '(15) 98800-1726',
    link: `https://wa.me/55${personalInfo.whatsapp}`,
    icon: 'whatsapp',
  },
  {
    label: 'Email',
    value: personalInfo.email,
    link: `mailto:${personalInfo.email}`,
    icon: 'email',
  },
  {
    label: 'GitHub',
    value: `github.com/${personalInfo.githubUsername}`,
    link: personalInfo.github,
    icon: 'github',
  },
  {
    label: 'Localização',
    value: personalInfo.location,
    link: null,
    icon: 'location',
  },
];

export const contactSection = {
  title: 'Entre em Contato',
  subtitle: 'Vamos Conversar!',
  description: 'Estou sempre aberto a discutir novos projetos, oportunidades criativas ou parcerias.',
  form: {
    nameLabel: 'Nome',
    namePlaceholder: 'Seu nome',
    emailLabel: 'Email',
    emailPlaceholder: 'seu@email.com',
    messageLabel: 'Mensagem',
    messagePlaceholder: 'Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade...',
    submitButton: 'Enviar via WhatsApp',
  },
};

// Footer
export const footerInfo = {
  copyright: `© ${new Date().getFullYear()} ${personalInfo.name}. Todos os direitos reservados.`,
  links: [
    { label: 'GitHub', url: personalInfo.github },
    { label: 'Email', url: `mailto:${personalInfo.email}` },
  ],
};
