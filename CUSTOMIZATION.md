# Guia de Personalização do Portfólio

Este guia explica como personalizar facilmente todas as informações do seu portfólio.

## 📝 Arquivo de Informações Centralizado

Todas as informações do portfólio estão no arquivo: `src/data/portfolio-info.ts`

### Estrutura do Arquivo

#### 1. Informações Pessoais

```typescript
export const personalInfo = {
  name: 'Seu Nome',
  title: 'Seu Título Profissional',
  email: 'seu@email.com',
  github: 'https://github.com/seu-usuario',
  githubUsername: 'seu-usuario',
  location: 'Sua Cidade, Estado',
  profileImage: '/foto_perfil.jpg',
  logo: 'SN', // Suas iniciais
};
```

#### 2. Menu de Navegação

```typescript
export const menuItems = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  // Adicione ou remova itens conforme necessário
];
```

#### 3. Seção Hero (Primeira Seção)

```typescript
export const heroSection = {
  greeting: 'Olá, eu sou',
  name: personalInfo.name,
  title: personalInfo.title,
  description: 'Sua descrição profissional aqui...',
  cta: {
    primary: 'Texto do Botão Principal',
    secondary: 'Texto do Botão Secundário',
  },
};
```

#### 4. Redes Sociais

```typescript
export const socialLinks = [
  {
    name: 'GitHub',
    url: personalInfo.github,
    icon: 'github', // Opções: 'github', 'email'
  },
  // Adicione mais redes sociais
];
```

#### 5. Seção Sobre

```typescript
export const aboutSection = {
  title: 'Sobre Mim',
  paragraphs: [
    'Primeiro parágrafo sobre você...',
    'Segundo parágrafo...',
    // Adicione quantos parágrafos quiser
  ],
  stats: [
    { label: 'Anos de Experiência', value: '5+' },
    { label: 'Projetos Concluídos', value: '50+' },
    // Personalize suas estatísticas
  ],
};
```

#### 6. Experiências Profissionais

```typescript
export const experiences = [
  {
    title: 'Cargo',
    company: 'Nome da Empresa',
    period: 'MM/AAAA - MM/AAAA',
    description: 'Descrição do cargo...',
    highlights: [
      'Conquista 1',
      'Conquista 2',
      'Conquista 3',
    ],
  },
  // Adicione mais experiências
];
```

#### 7. Habilidades Técnicas

```typescript
export const skillCategories = [
  {
    category: 'Backend',
    skills: [
      { name: 'Python', level: 95, icon: '🐍' },
      { name: 'Node.js', level: 85, icon: '💚' },
      // Adicione suas habilidades
    ],
  },
  // Adicione mais categorias
];

export const additionalSkills = [
  'Metodologias Ágeis',
  'BDD',
  // Adicione habilidades complementares
];
```

#### 8. Informações de Contato

```typescript
export const contactInfo = [
  {
    label: 'Email',
    value: personalInfo.email,
    link: `mailto:${personalInfo.email}`,
    icon: 'email', // Opções: 'email', 'github', 'location'
  },
  // Adicione mais formas de contato
];

export const contactSection = {
  title: 'Entre em Contato',
  subtitle: 'Vamos Conversar!',
  description: 'Sua mensagem de convite...',
  form: {
    nameLabel: 'Nome',
    namePlaceholder: 'Seu nome',
    emailLabel: 'Email',
    emailPlaceholder: 'seu@email.com',
    messageLabel: 'Mensagem',
    messagePlaceholder: 'Sua mensagem...',
    submitButton: 'Enviar Mensagem',
  },
};
```

## 🎨 Personalização de Temas

### Arquivo de Temas: `src/themes/themeConfig.ts`

#### Temas Disponíveis

- `default`: Tema padrão (azul e roxo)
- `halloween`: Tema Halloween (laranja e roxo escuro)
- `christmas`: Tema Natal (vermelho e verde)

#### Criar um Novo Tema

```typescript
export const themes = {
  // ... temas existentes
  meuTema: {
    name: 'Meu Tema',
    colors: {
      primary: 'bg-cor-600',
      secondary: 'bg-cor-600',
      accent: 'bg-cor-500',
      background: 'bg-cor-50',
      backgroundDark: 'bg-gray-900',
      text: 'text-gray-900',
      textDark: 'text-gray-100',
      card: 'bg-white',
      cardDark: 'bg-gray-800',
    },
    gradients: {
      hero: 'from-cor1-600 via-cor2-600 to-cor3-600',
      card: 'from-cor1-500 to-cor2-600',
    }
  }
};
```

#### Ativar um Tema

No componente onde você quer mudar o tema:

```typescript
import { useTheme } from './context/ThemeContext';

const MeuComponente = () => {
  const { changeTheme } = useTheme();
  
  // Mudar para tema Halloween
  changeTheme('halloween');
  
  // Voltar ao tema padrão
  changeTheme('default');
};
```

## 🖼️ Personalizar Imagens

### Foto de Perfil

1. Coloque sua foto na pasta `public/`
2. Atualize o caminho em `portfolio-info.ts`:

```typescript
export const personalInfo = {
  // ...
  profileImage: '/sua-foto.jpg',
};
```

### Favicon

O favicon está em `public/favicon.svg` e usa suas iniciais com gradiente.
Para personalizar, edite o arquivo SVG ou substitua por sua própria imagem.

## 🌐 Tradução

Para traduzir o portfólio para outro idioma, basta editar os textos em `portfolio-info.ts`:

```typescript
// Exemplo em inglês
export const heroSection = {
  greeting: 'Hello, I am',
  name: personalInfo.name,
  title: 'Full-Stack Developer',
  description: 'Product Owner with experience in Full-Stack development...',
  cta: {
    primary: 'Get in Touch',
    secondary: 'View GitHub',
  },
};
```

## 💡 Dicas

1. **Mantenha a consistência**: Use o mesmo tom de voz em todos os textos
2. **Seja específico**: Números e conquistas concretas chamam mais atenção
3. **Atualize regularmente**: Mantenha suas experiências e habilidades atualizadas
4. **Teste em diferentes dispositivos**: Verifique como fica em mobile e desktop
5. **Use emojis com moderação**: Eles ajudam a destacar informações, mas não exagere

## 🚀 Deploy

Após personalizar, faça o deploy:

```bash
npm run build
npm run deploy
```

Seu portfólio estará disponível em: `https://seu-usuario.github.io/portfolio`
