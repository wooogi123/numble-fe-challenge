import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: {
    'width-bp1': '(min-width: 640px)',
    'width-bp2': '(min-width: 960px)',
    'width-bp3': '(min-width: 1440px)',
    'width-bp4': '(min-width: 1920px)',
    'width-bp5': '(min-width: 2400px)',
    'height-bp1': '(min-height: 960px)',
    'height-bp2': '(min-height: 1440px)',
    'height-bp3': '(min-height: 2160px)',
    'height-bp4': '(min-height: 2880px)',
    'height-bp5': '(min-height: 3600px)',
  },
  theme: {
    colors: {
      'veryPeri': 'rgb(102, 103, 171)',
    },
    fontSizes: {
      1: '12px',
      2: '16px',
      3: '24px',
    },
    fontWeights: {
      1: '400',
      2: '700',
    },
    fonts: {
      'default': 'IBM Plex Mono, monospace',
    },
  }
});
