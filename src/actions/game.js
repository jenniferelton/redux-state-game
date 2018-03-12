export const addMove = (square, player) => {
  return {
    type: 'ADD_MOVE',
    square: square,
    player: player
  };
};

export const resetGame = () => {
  return {
    type: 'RESET'
  };
};