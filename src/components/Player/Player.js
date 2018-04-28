import React, { Component } from 'react';
import './Player.css';
import PlayerControls from '../PlayerControls/PlayerControls';

class Player extends Component {

  render() {
    return (
      <div className="Player">
        <PlayerControls />
      </div>
    );
  }

}

export default Player;
