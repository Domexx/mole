import React, { useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { GameContext, GameContextData } from '../../../states/GameStateProvider';
import Button from '../../Atoms/Button';
import { GameStage } from '../../../states/GameState';

const Intro: React.FC = () => {
  const gameData: GameContextData = useContext(GameContext);

  return (
    <div data-testid="Intro" className="flex flex-col items-center space-y-5 min-w-[10rem]">
      <div className="flex flex-col sm:flex-row space-x-2 items-center">
        <div className="text-center sm:text-right">Select the number of circles to get started:</div>
        <Select
          id="count-select"
          value={gameData.state.CircleCount}
          label="Number of circles"
          onChange={(event) => {
            return gameData.setCircleCount(event.target.value as number);
          }}
          variant="standard"
        >
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </div>
      <Button
        onClick={() => {
          return gameData.setStage(GameStage.Playing);
        }}
      >
        Start
      </Button>
    </div>
  );
};

export default Intro;
