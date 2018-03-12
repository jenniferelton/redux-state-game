export const CHOICE = 'CHOICE';
export const WINNER_WINNER_CHICKEN_DINNER = 'WINNER_WINNER_CHICKEN_DINNER';


export const initialState = {
  squares: Array(9).fill(''),
  activePlayer: 'X',
  nextPlayer: '0',
  winner: ''
};

export function game(state = initialState, { type, payload }) {
  switch(type) {
    case CHOICE: {
      let updatedGame = [...state.squares];
      const { activePlayer } = state;
      const nextPlayer = (activePlayer === 'X') ? 'O' : 'X';
    
      if(updatedGame)
        updatedGame[payload] = activePlayer;
      

      return {
        ...state, 
        squares: updatedGame,
        activePlayer: nextPlayer
      
      };
    }
    case WINNER_WINNER_CHICKEN_DINNER:
      return {
        ...state,
        winner: payload
      };
  
    default:
      return state;
  }
} 
