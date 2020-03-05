import * as actionTypes from '../../const/index';

export function playMusic () {
  return {
    type: actionTypes.MUSIC_PLAYER.PLAY_MUSIC,
    payload: true
  }
}

export function stopMusic () {
  return {
    type: actionTypes.MUSIC_PLAYER.STOP_MUSIC,
    payload: false
  }
}

export function loadSource () {
  return {
    type: actionTypes.MUSIC_PLAYER.LOAD_SOURCE,
    payload: null
  }
}


export function setSource (source: object) {
  return {
    type: actionTypes.MUSIC_PLAYER.SET_SOURCE,
    payload: source
  }
}

export function setPlayIndex (index: number) {
  return {
    type: actionTypes.MUSIC_PLAYER.SET_PLAY_INDEX,
    payload: index
  }
}

export function setLoop () {
  return {
    type: actionTypes.MUSIC_PLAYER.SET_LOOP
  }
}