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
  },
});
