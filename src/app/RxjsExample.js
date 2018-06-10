import React, { Component } from 'react';
import rxpng from '../assets/rxjs.png';
import '../assets/css/animation.css';
import '../assets/css/additionalStyling.css';
import { LandingPage } from './landingPage/LandingPage.js';
// import {TestSuiteIntroduction} from './testSuiteIntroduction/TestSuiteIntroduction.js'
// import {TestSuiteIntroduction} from './testSuiteIntroduction/OldTestSuiteIntroduction.js'

class App extends Component {
  render() {
  let currRoute = window.location.href.substring(21)
    return (
      <div>
        <LandingPage rxpng={rxpng}/>
      </div>
    );
  }
}

export default App;
