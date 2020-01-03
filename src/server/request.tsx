/**
 * @param {String} url 请求的URL
 * @param {String} method 请求方法: POST, DELETE, PUT, GET
 * @param {Object} data 请求JSON数据
 */
function fetchUtil (url: string, method: string, data?: object): Promise<object> {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data)
  }).then(res => {
    return res.json();
  })
}

export default fetchUtil;