import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {wordType} from '../../types/index';
import './style.pcss';

interface locationType {
  state: any
}

interface Props {
  fetchSongWord: Function,
  songWord: any
}

export default function Song ({fetchSongWord, songWord}: Props) {
  let location: locationType = useLocation();
  const songId = location.state.id;
  // fetch song word
  /* eslint-disable */
  useEffect(() => {
    fetchSongWord(songId);
  }, []);

  let wordStr: string = '';
  if (songWord && songWord.lrc) {
    wordStr = songWord.lrc.lyric;
  }
  // split string for get song word array
  const wordArr = wordStr.split('\n');
  const parsedResult: any = [];
  let matchInfo: any = [];
  wordArr.map(line => {
    matchInfo = line.match(/\[\d{2}:\d{2}.(\d{2}|\d{3})\]/);
    if (matchInfo) {
      // push into result stack
      parsedResult.push({
        time: matchInfo[0].slice(1, -1),
        value: line.slice(matchInfo[0].length, -1).trim()
      })
    }
  });
  // get song word dom
  let songWordDom = parsedResult.map((word: wordType) => {
    return (
      <li className="word-item" key={word.time}>{word.value}</li>
    )
  })
  return (
    <div>
      <ul className="word-list">{songWordDom}</ul>
    </div>
  )
}