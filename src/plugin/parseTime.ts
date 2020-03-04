export default function parseTime (timestamp: number) {
  const seconds = Math.floor(timestamp / 1000) % 60;
  return `${Math.floor(timestamp / 6e4)}分${seconds < 10 ? '0' + seconds : seconds}秒`;
}