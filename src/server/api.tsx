import req from './request';
const server_url: string = '/api';

const Api = {
  recommend_list: async () => await req(`${server_url}?json=true`, 'GET')
}

export default Api;