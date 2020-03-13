import React, {useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {lyricType} from '../../types/index';
import parseTime from '../../plugin/parseTime';
import {currentTimeContext} from '../../plugin/currentTimeContext';
import './style.pcss';

interface locationType {
  state: any
}

interface Props {
  curSongInfo: any,
  currentTime: number,
  fetchLyric: Function,
  lyricData: any
}

let parsedResult: any = [];
// get current line that is active of lyric
const getActiveIndex = (function () {
  let preIndex = 0;
  return function getActiveIndex (searchTime: string) {
    let index = 0;
    let resultIndex: number | undefined = void 0;
    for (let currentLine of parsedResult) {
      if (currentLine.time.includes(searchTime)) {
        resultIndex = index;
        break;
      }
      index++;
    }
    if (resultIndex === void 0) {
      resultIndex = preIndex;
    } else {
      preIndex = resultIndex;
    }
    return resultIndex;
  }
})();

export default function Song ({fetchLyric, lyricData}: Props) {
  let location: locationType = useLocation();
  let timeContext = useContext(currentTimeContext);
  const songId = location.state.id;
  // fetch lyric
  /* eslint-disable */
  useEffect(() => {
    fetchLyric(songId);
  }, []);
  // initial parsedResult
  useEffect(() => {
    parsedResult = [];
    let lyricStr: string = '';
    if (lyricData && lyricData.lrc) {
      lyricStr = lyricData.lrc.lyric;
    }
    /** parse lyric **/
    parsedResult = (function parseLyric() {
      // split string for get lyric array
      const lyricArr = lyricStr.split('\n');
      let matchInfo: any = [];
      // listen audio time
      lyricArr.map(line => {
        matchInfo = line.match(/\[\d{2}:\d{2}.(\d{2}|\d{3})\]/);
        if (matchInfo) {
          // push into result stack
          parsedResult.push({
            time: matchInfo[0].slice(1, -1),
            value: line.slice(matchInfo[0].length).trim()
          })
        }
      });
      return parsedResult;
    })();
  });
  // get node of lyric
  let lyricDom = parsedResult.map((line: lyricType, index: number) => {
    const lyricStyle = ['lyric-line'];
    if (getActiveIndex(parseTime(timeContext.value * 1e3)) === index) {
      lyricStyle.push('active');
    }
    return (
      <li className={lyricStyle.join(' ')} key={index}>{line.value}</li>
    )
  })
  return (
    <div>
      <ul className="lyric-list">{lyricDom}</ul>
    </div>
  )
}