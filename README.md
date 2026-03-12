# Portfolio Ailton Maturana

Portfolio interativo e profissional desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## 🚀 Características

- ⚡ **Performance**: Construído com Vite para carregamento ultra-rápido
- 🎨 **Design Moderno**: Interface clean e profissional com animações suaves
- 🌓 **Dark Mode**: Alternância entre tema claro e escuro
- 🎭 **Temas Sazonais**: Fácil customização para datas especiais (Halloween, Natal, etc.)
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos
- 🧩 **Componentes Modulares**: Arquitetura componentizada para fácil manutenção
- ✨ **Interatividade**: Animações e transições que demonstram habilidades técnicas
- 📝 **TypeScript**: Tipagem estática para maior segurança e manutenibilidade
- 🎯 **Dados Centralizados**: Todas as informações em um único arquivo para fácil atualização

## 🛠️ Tecnologias

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Context API para gerenciamento de estado

## 📦 Instalação

```bash
npm install
```

## 🏃 Executar Localmente

```bash
npm run dev
```

Acesse: http://localhost:5173

## 🏗️ Build para Produção

```bash
npm run build
```

## 🎨 Personalização

### Atualizar Informações do Portfólio

Todas as informações do portfólio estão centralizadas no arquivo:

```
src/data/portfolio-info.ts
```

Este arquivo contém:
- Informações pessoais (nome, email, links)
- Textos de todas as seções
- Experiências profissionais
- Habilidades técnicas
- Informações de contato
- Menu de navegação

### Alterar Temas

Para alterar o tema (ex: Halloween, Natal), edite o arquivo:

```
src/themes/themeConfig.ts
```

Exemplo de uso no componente:

```typescript
const { changeTheme } = useTheme();
changeTheme('halloween'); // ou 'christmas', 'default'
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Icons.tsx
│   │   └── DarkModeToggle.tsx
│   ├── layout/          # Componentes de layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/        # Seções da página
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       └── Contact.tsx
├── context/             # Context API
│   └── ThemeContext.tsx
├── data/                # Dados centralizados
│   └── portfolio-info.ts
├── themes/              # Configuração de temas
│   └── themeConfig.ts
├── types/               # Tipos TypeScript
│   └── index.ts
└── App.tsx
```

## 🎯 Deploy no GitHub Pages

Siga o guia completo de deploy: [DEPLOY.md](DEPLOY.md)

Resumo rápido:

1. Crie um repositório no GitHub chamado `Maturanajr.github.io`
2. Configure o Git local e faça push
3. Execute `npm run deploy`

Seu site estará em: **https://maturanajr.github.io**

## 📝 Licença

MIT © Ailton Maturana
