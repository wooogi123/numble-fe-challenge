import * as React from 'react';
import { styled } from '../stitches.config';

import Image640x960 from '../assets/img/bg@640x960.jpg';
import Image960x1440 from '../assets/img/bg@960x1440.jpg';
import Image1440x2160 from '../assets/img/bg@1440x2160.jpg';
import Image1920x2880 from '../assets/img/bg@1920x2880.jpg';
import Image2400x3600 from '../assets/img/bg@2400x3600.jpg';

const AppContainer: React.FC = ({ children }) =>
  (
    <Background
      background={{
        '@initial': 'initial',
        '@width-bp1': 'bp1',
        '@height-bp1': 'bp1',
        '@width-bp2': 'bp2',
        '@height-bp2': 'bp2',
        '@width-bp3': 'bp3',
        '@height-bp3': 'bp3',
        '@width-bp4': 'bp4',
        '@height-bp4': 'bp4',
      }}
    >
      {children}
    </Background>
  );

export default AppContainer;

const Background = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'center center',
  variants: {
    background: {
      'initial': {
        backgroundImage: `url(${Image640x960})`,
      },
      'bp1': {
        backgroundImage: `url(${Image960x1440})`,
      },
      'bp2': {
        backgroundImage: `url(${Image1440x2160})`,
      },
      'bp3': {
        backgroundImage: `url(${Image1920x2880})`,
      },
      'bp4': {
        backgroundImage: `url(${Image2400x3600})`,
      },
    }
  }
});
