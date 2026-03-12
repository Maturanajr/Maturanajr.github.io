// Configuração centralizada de temas - fácil de alterar para datas especiais

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  backgroundDark: string;
  text: string;
  textDark: string;
  card: string;
  cardDark: string;
}

interface ThemeGradients {
  hero: string;
  card: string;
}

interface Theme {
  name: string;
  colors: ThemeColors;
  gradients: ThemeGradients;
}

interface Themes {
  [key: string]: Theme;
}

export const themes: Themes = {
  default: {
    name: 'Default',
    colors: {
      primary: 'bg-blue-600',
      secondary: 'bg-purple-600',
      accent: 'bg-indigo-500',
      background: 'bg-gray-50',
      backgroundDark: 'bg-gray-900',
      text: 'text-gray-900',
      textDark: 'text-gray-100',
      card: 'bg-white',
      cardDark: 'bg-gray-800',
    },
    gradients: {
      hero: 'from-blue-600 via-purple-600 to-indigo-600',
      card: 'from-blue-500 to-purple-600',
    }
  },
  halloween: {
    name: 'Halloween',
    colors: {
      primary: 'bg-orange-600',
      secondary: 'bg-purple-800',
      accent: 'bg-black',
      background: 'bg-orange-50',
      backgroundDark: 'bg-gray-900',
      text: 'text-gray-900',
      textDark: 'text-orange-100',
      card: 'bg-white',
      cardDark: 'bg-gray-800',
    },
    gradients: {
      hero: 'from-orange-600 via-purple-800 to-black',
      card: 'from-orange-500 to-purple-700',
    }
  },
  christmas: {
    name: 'Christmas',
    colors: {
      primary: 'bg-red-600',
      secondary: 'bg-green-600',
      accent: 'bg-yellow-500',
      background: 'bg-red-50',
      backgroundDark: 'bg-gray-900',
      text: 'text-gray-900',
      textDark: 'text-red-100',
      card: 'bg-white',
      cardDark: 'bg-gray-800',
    },
    gradients: {
      hero: 'from-red-600 via-green-600 to-yellow-500',
      card: 'from-red-500 to-green-600',
    }
  }
};

export const getCurrentTheme = (themeName: string = 'default'): Theme => {
  return themes[themeName] || themes.default;
};
