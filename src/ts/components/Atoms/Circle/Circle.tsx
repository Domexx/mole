import React, { useContext } from 'react';
import { GameContextData, GameContext } from '../../../states/GameStateProvider';

export type Props = {
  index: number;
  onPicked: (index: number) => void;
};

const Circle: React.FC<Props> = ({ index, onPicked }) => {
  const gameData: GameContextData = useContext(GameContext);

  const active = gameData.state.ActiveCircleIndex === index;
  const picked = gameData.state.PickedCircleIndex === index;
  const otherPicked = gameData.state.PickedCircleIndex && gameData.state.PickedCircleIndex !== index;
  const disabled = gameData.state.PickedCircleIndex;

  const getCircleStateClasses = () => {
    if (active) {
      if (picked) {
        return 'bg-green-300 border-green-600';
      }
      if (otherPicked) {
        return 'bg-red-200 border-red-500';
      }
      return 'bg-yellow-200 border-yellow-500';
    }
    if (picked) {
      return 'bg-gray-400 border-gray-700';
    }
    return 'bg-gray-300 border-gray-300';
  };

  const circleDisabledClasses = disabled ? 'cursor-not-allowed' : 'cursor-pointer';

  const renderContent = () => {
    if (active) {
      if (picked) {
        return <>😀</>;
      }
      if (otherPicked) {
        return <>🤣</>;
      }
      return <>🙂</>;
    }
    if (picked) {
      return <>😜</>;
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  };

  return (
    <div
      onClick={() => {
        if (!disabled) {
          onPicked(index);
        }
      }}
      role="button"
      tabIndex={0}
      className={`w-12 h-12 flex items-center justify-center border-4 text-xl sm:w-20 sm:h-20 rounded-full ${getCircleStateClasses()} ${circleDisabledClasses}`}
      aria-hidden="true"
      data-testid="Circle"
    >
      {renderContent()}
    </div>
  );
};

export default Circle;
