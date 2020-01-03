import req from './request';
const server_url: string = '/api';

const Api = {
  fetch_recommend_list: () => req(`${server_url}?json=true`, 'GET')
}

export default Api;