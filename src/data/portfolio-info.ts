// Informações Pessoais
export const personalInfo = {
  name: 'Ailton Maturana',
  title: 'Senior Full-Stack | Python • React • DevOps | AI/ML Specialist',
  email: 'ailtonmaturanaj@gmail.com',
  whatsapp: '15988001726',
  github: 'https://github.com/Maturanajr',
  githubUsername: 'Maturanajr',
  location: 'Sorocaba, SP',
  profileImage: '/foto_perfil.jpg',
  logo: 'AM',
  resumeUrl: '/curriculo.pdf',
};

// Educação
export const education = {
  degree: 'Engenharia',
  institution: 'Universidade Paulista (UNIP)',
  period: '2017 - 2022',
};

// Resumo Profissional para PDF
export const professionalSummary = 'Senior Full-Stack com 8+ anos de experiência em desenvolvimento de software, especializado em Python, FastAPI, React, TypeScript e arquitetura de microsserviços. Expertise em automação (RPA), integração de sistemas, AI/ML pipelines (LangChain, OpenAI), e infraestrutura cloud (Docker, Kubernetes, AWS). Atualmente Product Owner liderando times ágeis (Scrum/Kanban) e entregando soluções que impactam 2000+ usuários. Track record comprovado em otimização de performance, CI/CD, e desenvolvimento de APIs RESTful de alta disponibilidade (99.9% uptime).';

// Competências-Chave para PDF (formato ATS-friendly)
export const coreCompetencies = [
  'Python • FastAPI • Node.js • REST APIs • GraphQL • Microservices',
  'React • TypeScript • JavaScript • Next.js • Tailwind CSS • HTML/CSS',
  'Docker • Kubernetes • AWS • CI/CD • Airflow • Git',
  'PostgreSQL • MongoDB • Redis • SQL',
  'LangChain • OpenAI APIs • AI/ML Pipelines • Vector Databases',
  'Playwright • Selenium • RPA • Pytest • Test Automation',
  'Agile/Scrum • Technical Leadership • Code Review • Mentoring'
];

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
  description: 'Senior Full-Stack com 8+ anos de experiência em Python, React, e arquitetura de microsserviços. Especializado em automação, AI/ML, e liderança técnica de equipes ágeis.',
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
    'Senior Full-Stack com 8+ anos de experiência desenvolvendo soluções escaláveis e de alta performance. Expertise em arquitetura de microsserviços, automação inteligente e integração de sistemas complexos.',
    'Atualmente Product Owner na Embracon, liderando times de desenvolvimento em metodologias ágeis (Scrum/Kanban), definindo roadmaps técnicos e entregando soluções que impactam 2000+ usuários ativos diariamente.',
    'Track record comprovado em desenvolvimento de APIs RESTful, automação de processos (RPA), interfaces React modernas, e orquestração de infraestrutura cloud com Docker, Kubernetes e Airflow. Experiência hands-on com AI/ML pipelines usando LangChain e frameworks modernos.',
    'Engenheiro com forte background analítico, combinando visão estratégica de negócios com excelência técnica em desenvolvimento de software. Experiência em code review, mentoria técnica e gestão de projetos end-to-end.',
  ],
  stats: [
    { label: 'Anos de Experiência', value: '8+' },
    { label: 'Projetos Entregues', value: '50+' },
    { label: 'Stack Tecnológico', value: '20+' },
    { label: 'Usuários Impactados', value: '2000+' },
  ],
};

// Experiências Profissionais
export const experiences = [
  {
    title: 'Product Owner',
    company: 'Embracon Adm. de Consórcios',
    period: '02/2025 - Atual',
    description: 'Liderança de produto e times de desenvolvimento em ambiente ágil, gerenciando backlog de 100+ histórias e coordenando entregas.',
    highlights: [
      'Navegação em framework BDD que reduz bugs em produção',
      'Gestão de roadmap técnico com priorização baseada em OKRs e métricas de negócio',
      'Facilitação de cerimônias ágeis (Sprint Planning, Retrospectives, Refinements)',
      'Definição de arquitetura de soluções em conjunto com Tech Leads',
    ],
  },
  {
    title: 'Analista de T.I. Pleno',
    company: 'Embracon Adm. de Consórcios',
    period: '09/2024 - 02/2025',
    description: 'Suporte técnico N3 para sistemas críticos de negócio, garantindo SLA de 99.5% de disponibilidade e resolução de incidentes complexos.',
    highlights: [
      'Redução de 60% no tempo médio de resolução de incidentes através de automação de diagnósticos',
      'Implementação de monitoramento proativo que prevene incidentes críticos',
      'Documentação técnica de sistemas legados, facilitando onboarding de novos desenvolvedores',
    ],
  },
  {
    title: 'Full-Stack Developer (PJ)',
    company: 'Fattureweb',
    period: '01/2022 - 02/2025',
    description: 'Desenvolvimento end-to-end de plataforma de automação fiscal, processando 10k+ documentos/dia com arquitetura de microsserviços e orquestração de workflows complexos.',
    highlights: [
      'Desenvolveu 40+ robôs RPA (Playwright/Selenium) orchestrados via Airflow para extração e padronização de dados',
      'Desenvolveu APIs RESTful em FastAPI com 99.9% uptime, servindo 5k+ requisições/dia',
      'Construiu interfaces React responsivas com TypeScript, reduzindo tempo de operação em 50%',
      'Manutenção em pipeline CI/CD com Docker, Airflow e AWS SQS',
      'Integração IMAP para processamento automatizado de 1k+ emails/dia',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Plataforma de Copy Trading',
    period: '01/2019 - 12/2021',
    description: 'Desenvolvimento de plataforma SaaS de trading algorítmico com operação 24/7, processamento real-time via WebSockets e gestão de 500+ usuários simultâneos.',
    highlights: [
      'Arquitetou sistema de alta disponibilidade (99.8% uptime) com Python e MongoDB',
      'Implementou dashboard administrativo para gestão de licenças e monitoramento de usuários',
      'Desenvolveu engine de sincronização de trades em tempo real com latência <100ms',
      'Sistema de billing automatizado que facilitou o funil de vendas',
    ],
  },
];

// Habilidades Técnicas
export const skillCategories = [
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Python', level: 100, icon: '🐍' },
      { name: 'FastAPI', level: 100, icon: '⚡' },
      { name: 'Node.js', level: 85, icon: '💚' },
      { name: 'REST APIs', level: 100, icon: '🔌' },
      { name: 'GraphQL', level: 70, icon: '📊' },
      { name: 'Microservices', level: 85, icon: '🔧' },
    ],
  },
  {
    category: 'Frontend & UI',
    skills: [
      { name: 'React', level: 100, icon: '⚛️' },
      { name: 'TypeScript', level: 100, icon: '📘' },
      { name: 'JavaScript', level: 100, icon: '📜' },
      { name: 'Tailwind CSS', level: 90, icon: '💨' },
      { name: 'Next.js', level: 80, icon: '▲' },
      { name: 'HTML/CSS', level: 100, icon: '🎨' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      { name: 'Agno AI', level: 90, icon: '🧠' },
      { name: 'OpenAI APIs', level: 90, icon: '�' },
      { name: 'N8N Workflows', level: 90, icon: '🔄' },
      { name: 'LangChain', level: 85, icon: '⛓️' },
      { name: 'LangGraph', level: 80, icon: '🔗' },
      { name: 'Vector DBs', level: 85, icon: '🎯' },
    ],
  },
  {
    category: 'Database & Storage',
    skills: [
      { name: 'PostgreSQL', level: 90, icon: '🐘' },
      { name: 'MongoDB', level: 90, icon: '🍃' },
      { name: 'Redis', level: 85, icon: '⚡' },
      { name: 'SQL', level: 95, icon: '📊' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', level: 95, icon: '🐳' },
      { name: 'Kubernetes', level: 85, icon: '☸️' },
      { name: 'AWS', level: 80, icon: '☁️' },
      { name: 'CI/CD', level: 90, icon: '🔄' },
      { name: 'Airflow', level: 85, icon: '🌊' },
      { name: 'Git', level: 100, icon: '📦' },
    ],
  },
  {
    category: 'Automation & Testing',
    skills: [
      { name: 'Playwright', level: 100, icon: '🎭' },
      { name: 'Selenium', level: 100, icon: '🤖' },
      { name: 'Pytest', level: 90, icon: '✅' },
      { name: 'RPA', level: 95, icon: '🔧' },
    ],
  },
];

export const additionalSkills = [
  // Metodologias & Frameworks
  'Agile/Scrum',
  'Kanban',
  'BDD/TDD',
  'Clean Architecture',
  'SOLID Principles',
  'Design Patterns',
  
  // Soft Skills & Leadership
  'Technical Leadership',
  'Code Review',
  'Mentoring',
  'Team Management',
  'Stakeholder Management',
  'Problem Solving',
  
  // Ferramentas & Práticas
  'CI/CD Pipelines',
  'API Design',
  'System Architecture',
  'Performance Optimization',
  'Security Best Practices',
  
  // Idiomas & Comunicação
  'Inglês Avançado',
  'Technical Writing',
  'Documentation',
];

// Informações de Contato
export const contactInfo = [
  {
    label: 'WhatsApp',
    value: personalInfo.whatsapp, // Será formatado no componente
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
