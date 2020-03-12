import React, {useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {wordType} from '../../types/index';
import parseTime from '../../plugin/parseTime';
import {currentTimeContext} from '../../plugin/currentTimeContext';
import './style.pcss';

interface locationType {
  state: any
}

interface Props {
  currentTime: number,
  fetchLyric: Function,
  songWord: any
}

export default function Song ({fetchLyric, songWord}: Props) {
  let location: locationType = useLocation();
  let timeContext = useContext(currentTimeContext);
  const songId = location.state.id;
  // fetch lyric
  /* eslint-disable */
  useEffect(() => {
    fetchLyric(songId);
  }, []);
  let wordStr: string = '';
  if (songWord && songWord.lrc) {
    wordStr = songWord.lrc.lyric;
  }
  let parsedResult: any = [];
  /** parse lyric **/
  parsedResult = (function parseWord() {
    // split string for get LYRIC array
    const wordArr = wordStr.split('\n');
    let matchInfo: any = [];
    // listen audio time
    wordArr.map(line => {
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
  // get current line that is active of lyric
  // get node of lyric
  let songWordDom = parsedResult.map((word: wordType, index: number) => {
    const wordStyle = ['word-item'];
    if (word.time.includes(parseTime(timeContext.value * 1e3))) {
      wordStyle.push('active');
    }
    return (
      <li className={wordStyle.join(' ')} key={word.time}>{word.value}</li>
    )
  })
  return (
    <div>
      <ul className="word-list">{songWordDom}</ul>
    </div>
  )
}