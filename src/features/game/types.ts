export interface State {
  remainingTime: number;
  stage: number;
  score: number;
  isStarted: boolean;
  isGameOver: boolean;
  isClear: boolean;
}

export type Action =
  | { type: 'init' }
  | { type: 'done' }
  | { type: 'tick', payload: number }
  | { type: 'nextStage' }
  | { type: 'deduct' }
;