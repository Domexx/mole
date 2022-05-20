import React, { useContext } from 'react';
import Button from '../../Atoms/Button';
import { GameContext, GameContextData } from '../../../states/GameStateProvider';

export type Props = {
  text: string;
  buttonText: string;
};

const Message: React.FC<Props> = ({ text, buttonText }) => {
  const gameState: GameContextData = useContext(GameContext);

  if (!gameState) {
    return <h1>Game not initialized</h1>;
  }

  return (
    <div className="Message" data-testid="Message">
      <h1>{text}</h1>
      <div className="Message-wrapper">
        <div>Correct: {gameState.state.CorrectPicks}</div>
        <div>Incorrect: {gameState.state.IncorrectPicks}</div>
      </div>
      <Button
        onClick={() => {
          gameState.endGame();
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Message;
