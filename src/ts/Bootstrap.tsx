import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Game from './components/Templates/Game';
import { GameStateProvider } from './states/GameStateProvider';
import Layout from './layout';

const Bootstrap: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#d1591d',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout title="Mole punch" subtitle="Score 5 points to win!">
        <GameStateProvider>
          <Game />
        </GameStateProvider>
      </Layout>
    </ThemeProvider>
  );
};

export default Bootstrap;
