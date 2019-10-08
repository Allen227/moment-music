import req from './request';
const server_url: string = 'http://m.kugou.com/';

const Api = {
  songs_list: req(`${server_url}?json=true`, 'GET')
}

export default Api;