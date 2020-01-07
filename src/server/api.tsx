import req from './request';
const server_url: string = '/api';

const host: string | undefined = process.env.REACT_APP_API_SERVER

const Api = {
  fetch_category_list: () => req(`${server_url}/playlist/hot`, 'GET')
}

export default Api;