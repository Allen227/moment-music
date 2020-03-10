export default function parseTime (timestamp: number) {
  // filter timestamp that is undefined
  if (!timestamp) timestamp = 0;
  const seconds = Math.floor(timestamp / 1000) % 60;
  return `${Math.floor(timestamp / 6e4)}分${seconds < 10 ? '0' + seconds : seconds}秒`;
}