export const SELECT = 'SELECT';
export const END_GAME = 'END_GAME';
export const NEW_GAME = 'NEW_GAME';

export function selections(state = [], { type, payload }) {
  switch(type) {
    case SELECT: {
      const { index, selection } = payload;
      const copy = state.slice
    }
  }
}