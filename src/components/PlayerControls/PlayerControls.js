import React, { Component } from 'react';
import './PlayerControls.css';
import PlayerControlsSeekBar from './components/PlayerControlsSeekBar/PlayerControlsSeekBar';
import PlayerControlsButtons from './components/PlayerControlsButtons/PlayerControlsButtons';

class PlayerControls extends Component {

  render() {
    return (
      <div className="PlayerControls">
      
        <PlayerControlsSeekBar />

        <PlayerControlsButtons />

      </div>
    );
  }

}

export default PlayerControls;
