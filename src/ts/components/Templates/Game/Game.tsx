import React, { useContext } from 'react';
import Start from '../../Organisms/Start';
import Message from '../../Molecules/Message';
import { GameStage } from '../../../states/GameState';
import { GameContext, GameContextData } from '../../../states/GameStateProvider';
import Intro from '../../Organisms/Intro/Intro';

const Game: React.FC = () => {
  const gameState = useContext<GameContextData>(GameContext);

  const renderGameStage = () => {
    switch (gameState.state.Stage) {
      case GameStage.Setup:
        return <Intro />;
      case GameStage.Playing:
        return <Start />;
      case GameStage.Won:
        return <Message text="You won!" buttonText="Play again!" />;
      case GameStage.Lost:
        return <Message text="You lost!" buttonText="Play again!" />;
      default:
        return <>An error happened!</>;
    }
  };

  return (
    <div className="Game">
      <div className="Game-stage">{renderGameStage()}</div>
    </div>
  );
};

export default Game;
