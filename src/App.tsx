import * as React from 'react';
import { globalCss } from './stitches.config';
import { AppContainer } from './components';
import Game from './features/game';

const App: React.FC = () => {
  globalStyles();

  return (
    <AppContainer>
      <Game />
    </AppContainer>
  );
};

export default App;

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html, body': {
    overscrollBehavior: 'none',
    height: '100%',
  },
  'body': {
    overflow: 'hidden',
    overscrollBehavior: 'none',
    paddingTop: 'env(safe-area-inset-top, 0)',
    paddingRight: 'env(safe-area-inset-right, 0)',
    paddingBottom: 'env(safe-area-inset-bottom, 0)',
    paddingLeft: 'env(safe-area-inset-left, 0)',
  },
  '#root': {
    width: '100vw',
    height: '100%',
  },
  'span': {
    userSelect: 'none',
  }
});
