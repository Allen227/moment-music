export default function parseTime (timestamp: number) {
  // filter timestamp that is undefined
  if (!timestamp) timestamp = 0;
  const totalSec = timestamp / 1e3;
  const seconds = Math.floor(totalSec % 60);
  const minute = Math.floor(totalSec / 60);
  const result = `${minute < 10 ? '0' + minute : minute}:${seconds < 10 ? '0' + seconds : seconds}`;
  return result;
}