/**
 * timestamp convert to time
 * @param timestamp
 */
function convertToTime (timestamp: number) {
  // filter timestamp that is undefined
  if (!timestamp) timestamp = 0;
  const totalSec = timestamp / 1e3;
  const seconds = Math.floor(totalSec % 60);
  const minute = Math.floor(totalSec / 60);
  const result = `${minute < 10 ? '0' + minute : minute}:${seconds < 10 ? '0' + seconds : seconds}`;
  return result;
}

/**
 * time convert to timestamp
 * @param time
 */
function convertToTimestamp (time: string) {
  const minuteArr = time.split(':');
  const secondArr = minuteArr[1].split('.');
  const msStack = [parseInt(minuteArr[0]) * 6e4, parseInt(secondArr[0]) * 1e3, parseInt(secondArr[1])];
  return msStack.reduce((pre, next) => {
    return pre + next;
  })
}

export {
  convertToTime,
  convertToTimestamp
}