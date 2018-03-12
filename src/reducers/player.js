export const ADD_MOVE = 'ADD_MOVE';
export const RESET = 'RESET';


export function player(state = 'X', action ){
  switch(action.type) {
    case 'ADD_MOVE':
      return (state === 'X') ? 'O' : 'X';
    case 'RESET':
      return 'X';
    default:
      return state;
  }
};

export function squares(state = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], action) {
  switch(action.type) {
    case 'ADD_MOVE':
      return state.map((item, square) => {
        return square === action.square ? action.player : item;
      });
    case 'RESET':
      return [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    default:
      return state;
  }
}


