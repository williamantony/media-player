import React, { Component } from 'react';
import './PlayerControlsButtons.css';

class PlayerControlsButtons extends Component {

  render() {
    return (
      <div className="PlayerControlsButtons">
        <div className="button button--rewind">
          <div className="img" />
        </div>
        <div className="primaryButtons">
          <div className="button button--prev">
            <div className="img" />
          </div>
          <div className="button button--playpause button--play">
            <div className="img" />
          </div>
          <div className="button button--next">
            <div className="img" />
          </div>
        </div>
        <div className="button button--volume">
          <div className="img" />
        </div>
      </div>
    );
  }

}

export default PlayerControlsButtons;
