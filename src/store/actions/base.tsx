import * as actionTypes from '../../const/index';
import {songTrack} from '../../types/index';

const pushPlayTracks = function (track: songTrack) {
  return {
    type: actionTypes.PUSH_TRACKS,
    payload: track
  }
}

const deleteInTracks = function (index: number) {
  return {
    type: actionTypes.DELETE_TRACKS,
    payload: index
  }
}

export {
  pushPlayTracks,
  deleteInTracks
}