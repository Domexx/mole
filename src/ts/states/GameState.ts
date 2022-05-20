export type GameState = {
  Stage: GameStage;
  CircleCount: number;
  ActiveCircleIndex?: number | undefined;
  PickedCircleIndex?: number | undefined;
  CorrectPicks: number;
  IncorrectPicks: number;
};

export enum GameStage {
  Setup = 0,
  Playing = 1,
  Won = 2,
  Lost = 3,
  Ended = 4,
}
