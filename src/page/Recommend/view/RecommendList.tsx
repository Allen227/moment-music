import * as React from 'react';

export interface Props {
  dispatch?: Function
}

export default class Recommend extends React.Component {
  constructor(props: Props) {
    super(props);
  }
  render () {
    return (
      <div className="music-list">
      </div>
    )
  }
};