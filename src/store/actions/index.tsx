import {fetchRemmendTags, fetchRecommendDetail} from './recommend';
import {fetchPlaylistDetail, fetchSongUrl} from './playlist';
import {playMusic, stopMusic, loadSource, setSource, setLoop, setPlayIndex, setStatus} from './audio';
import {fetchRankList} from './rank';
import {fetchLyric} from './song';
import {pushPlayTracks, deleteInTracks} from './base';

export {
  fetchRemmendTags,
  fetchRecommendDetail,
  fetchPlaylistDetail,
  fetchSongUrl,
  pushPlayTracks,
  playMusic,
  stopMusic,
  loadSource,
  setSource,
  setLoop,
  setPlayIndex,
  setStatus,
  fetchRankList,
  fetchLyric,
  deleteInTracks
};