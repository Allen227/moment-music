import req from './request';

const server_url: string = `http://192.168.124.6:3000`;

const Api = {
  fetch_recommend_tags: () => req(`${server_url}/playlist/hot`, 'GET'),
  fetch_recommend_tags_detail: (cat: string) => req(`${server_url}/top/playlist?limit=30&cat=${cat}`, 'GET'),
  fetch_playlist_detail: (playlistId: number) => req(`${server_url}/playlist/detail?id=${playlistId}`, 'GET'),
  fetch_song_url: (songId: number) => req(`${server_url}/song/url?id=${songId}`, 'GET'),
  fetch_rank_list: () => req(`${server_url}/toplist`, 'GET'),
  fetch_lyric: (songId: number) => req(`${server_url}/lyric?id=${songId}`, 'GET')
}

export default Api;