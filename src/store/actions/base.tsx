import * as actionTypes from '../../const/index';
import {songTrack} from '../../types/index';

const pushPlayTracks = function (track: songTrack) {
  return {
    type: actionTypes.PUSH_TRACKS,
    payload: track
  }
}

export {
  pushPlayTracks
}