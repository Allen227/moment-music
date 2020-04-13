import React, {useState, useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {lyricType, curSongInfoType} from '../../types/index';
import {convertToTime, convertToTimestamp} from '../../plugin';
import {currentTimeContext} from '../../plugin/currentTimeContext';
import './style.pcss';

interface locationType {
  state: any
}

interface Props {
  curSongInfo: curSongInfoType,
  currentTime: number,
  fetchLyric: Function,
  lyricData: any
}

let parsedResult: any = [];
// get current line that is active of lyric
const getActiveIndex = (function () {
  let preIndex = 0;
  return function getActiveIndex (searchTime: number) {
    // get active line according to timestamp range
    let resultIndex: number = -1;
    let preLineTime: number = -1;
    let nextLineTime: number = -1;
    let lyricLength: number = parsedResult.length;
    if (preIndex > 0 && parsedResult[preIndex - 1]) {
      preLineTime = convertToTimestamp(parsedResult[preIndex - 1].time);
    }
    if (preIndex < lyricLength - 1 && parsedResult[preIndex + 1]) {
      nextLineTime = convertToTimestamp(parsedResult[preIndex + 1].time);
    }
    if ((preIndex > 0 && preIndex < lyricLength - 1)
      && (preLineTime < searchTime && searchTime > nextLineTime)) {
      resultIndex = ++preIndex;
    } else if (preIndex === 0 && searchTime > nextLineTime) {
      resultIndex = ++preIndex;
    } else if (preIndex === lyricLength - 2 && searchTime > preLineTime) {
      resultIndex = ++preIndex;
    }
    if (resultIndex === -1) {
      resultIndex = preIndex;
    } else {
      preIndex = resultIndex;
    }
    return resultIndex;
  }
})();

export default function Song ({fetchLyric, lyricData, curSongInfo}: Props) {
  let location: locationType = useLocation();
  let timeContext = useContext(currentTimeContext);
  const [currentLine, setCurrentLine] = useState(0);
  const songId = location.state.id;
  // set lyrics animation that move upward
  useEffect(() => {
    let lyricListDom: any = document.querySelector('.lyric-list');
    if (lyricListDom && currentLine > 7) {
      lyricListDom.style.top = `-${(currentLine - 7) * 30}px`;
    }
  }, [currentLine])
  // fetch lyric
  /* eslint-disable */
  useEffect(() => {
    if (songId) {
      fetchLyric(songId);
    }
  }, []);
  // initial currentLine when song change
  useEffect(() => {
    let lyricListDom: any = document.querySelector('.lyric-list');
    setCurrentLine(0);
    lyricListDom.removeAttribute('style');
  }, [curSongInfo])
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
          });
        }
      });
      return parsedResult;
    })();
  });
  let computedCurLine;
  // get node of lyric
  let lyricDom = parsedResult.map((line: lyricType, index: number) => {
    const lyricStyle = ['lyric-line'];
    computedCurLine = getActiveIndex(timeContext.value * 1e3);
    // set new current line if not find current line
    if (computedCurLine !== currentLine) {
      setCurrentLine(computedCurLine);
    }
    if (currentLine === index) {
      lyricStyle.push('active');
    }
    return (
      <li className={lyricStyle.join(' ')} key={index}>{line.value}</li>
    )
  })
  return (
    <div className="song">
      <ul className="lyric-list">{lyricDom}</ul>
    </div>
  )
}