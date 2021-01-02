import { ADD_TILE, REMOVE_TILE } from "./constants";

export function addTile(color) {
  return {
    type: ADD_TILE,
    color,
  };
}

export function removeTile(id) {
  return {
    type: REMOVE_TILE,
    id,
  };
}

export function addTileWithChecking(color) {
  return function (dispatch, getState) {
    if (getState().grid.length < 20) {
      dispatch(addTile(color));
    }
  };
}
