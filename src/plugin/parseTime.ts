export default function parseTime (timestamp: number) {
  // filter timestamp that is undefined
  if (!timestamp) timestamp = 0;
  const seconds = Math.floor(timestamp / 1000) % 60;
  const minute = Math.floor(timestamp / 6e4);
  return `${minute < 10 ? '0' + minute : minute}:${seconds < 10 ? '0' + seconds : seconds}`;
}