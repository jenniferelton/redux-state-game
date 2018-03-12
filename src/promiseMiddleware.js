import { ADD_MOVE, RESET } from './reducers/player';

const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => action => {

  const { type, payload } = action;
  // if(!isPromise(payload)) return next(action);

  dispatch({ type: ADD_MOVE })

  return payload
    .then(
      result => {
        dispatch({
          type,
          payload: result
        });

        dispatch({ type: RESET });
        return result;
      }
    );
};