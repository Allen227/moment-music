import req from './request';

const host: string | undefined = process.env.REACT_APP_API_SERVER;
const server_url: string = `/api`;

const Api = {
  fetch_recommend_tags: () => req(`${server_url}/playlist/hot`, 'GET'),
  fetch_recommend_tags_detail: (cat: string) => req(`${server_url}/top/playlist?limit=10&cat=${cat}`, 'GET')
}

export default Api;