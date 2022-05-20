/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, createContext, useState } from 'react';
import { GameState, GameStage } from './GameState';

const initialGameSettings: GameState = {
  Stage: GameStage.Setup,
  CircleCount: 3,
  ActiveCircleIndex: undefined,
  PickedCircleIndex: undefined,
  CorrectPicks: 0,
  IncorrectPicks: 0,
};

const initialState: GameContextData = {
  state: initialGameSettings,
  endGame(): void {},
  setStage(): void {},
  setCircleCount(): void {},
  setActiveCircleIndex(): void {},
  setPickedCircleIndex(): void {},
  incrementCorrectPicks(): void {},
  incrementIncorrectPicks(): void {},
  resetCircles(): void {},
};

export const GameContext = createContext<GameContextData>(initialState);

export type GameContextData = {
  state: GameState;
  setStage: (stage: GameStage) => void;
  setCircleCount: (count: number) => void;
  setActiveCircleIndex: (index: number | null) => void;
  endGame: () => void;
  setPickedCircleIndex: (index: number | null) => void;
  incrementCorrectPicks: () => void;
  incrementIncorrectPicks: () => void;
  resetCircles: () => void;
};

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState(initialGameSettings);

  const setStage = (stage: GameStage) => {
    setGameState({ ...gameState, Stage: stage });
  };

  const setCircleCount = (count: number) => {
    setGameState({ ...gameState, CircleCount: count });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setActiveCircleIndex = (index: any) => {
    setGameState({ ...gameState, ActiveCircleIndex: index });
  };

  const endGame = () => {
    setGameState(initialGameSettings);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setPickedCircleIndex = (index: any) => {
    setGameState({ ...gameState, PickedCircleIndex: index });
  };

  const incrementCorrectPicks = () => {
    setGameState({ ...gameState, CorrectPicks: gameState.CorrectPicks + 1 });
  };

  const incrementIncorrectPicks = () => {
    setGameState({
      ...gameState,
      IncorrectPicks: gameState.IncorrectPicks + 1,
    });
  };

  const resetCircles = () => {
    setGameState({
      ...gameState,
      PickedCircleIndex: undefined,
      ActiveCircleIndex: undefined,
    });
  };

  return (
    <GameContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        state: gameState,
        setStage,
        setCircleCount,
        setActiveCircleIndex,
        endGame,
        setPickedCircleIndex,
        incrementCorrectPicks,
        incrementIncorrectPicks,
        resetCircles,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
