import React, { Component } from 'react';
import './PlayerControlsSeekBar.css';

class PlayerControlsSeekBar extends Component {

  render() {
    return (
      <div className="PlayerControlsSeekBar">
        <div className="PlayerControlsSeekBar__progress"></div>
      </div>
    );
  }

}

export default PlayerControlsSeekBar;
