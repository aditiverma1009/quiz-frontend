import React from 'react';
import axios from 'axios';
import './Container.css';
import LoginBox from '../LoginBox/LoginBox';
import QuizPlatform from '../QuizPlatform/QuizPlatform';

import Leader from '../Leader/Leader';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }


  render() {
    console.log();
    if (this.props.page === 0) {
      return (

        <div className="login">
          <LoginBox
            usernameSet={event => this.props.usernameSet(event)}
            setUserScore={() => this.props.setUserScore()}
          />
        </div>

      );
    } else if (this.props.page === 1) {
      return (
        <div>
          <QuizPlatform
            page={this.props.page}
            setUserScore={() => this.props.setUserScore()}
            usrnm={this.props.usrnm}
          />
          <div className="btncontainer">
            <button type="submit" value="Submit" className="QuesDeckBtn" onClick={() => this.props.onSubmitQuiz()}>Submit</button>
          </div>
        </div>
      );
    } else if (this.props.page === 2) {
      return (
        <div className="leader">
          <Leader />
        </div>
      );
    }

    return (<div>in else</div>);
  }// render close
}// class close

export default Container;

