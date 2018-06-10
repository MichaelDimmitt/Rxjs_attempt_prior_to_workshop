import React, { Component } from 'react';
import rxpng from '../assets/rxjs.png';
import '../assets/css/animation.css';
import '../assets/css/additionalStyling.css';
import { LandingPage } from './landingPage/LandingPage.js';
import { TestSuiteIntroduction } from './testSuiteIntroduction/TestSuiteIntroduction.js'
import { RequestManipulationRxjs } from './brokenPages/RequestManipulationRxjs.js'
import { NodeCalculationsRxjs } from './brokenPages/NodeCalculationsRxjs.js'

// import {TestSuiteIntroduction} from './testSuiteIntroduction/OldTestSuiteIntroduction.js'

function determineComponents(currRoute) {
  {
    console.log(currRoute)
    switch (currRoute) {
      case '/': return (<LandingPage rxpng={rxpng}/>); break;
      case '/main_landing_page.html': return (<TestSuiteIntroduction rxpng={rxpng}/>); break;
      case '/brokenPages/requests.html': return (<RequestManipulationRxjs rxpng={rxpng}/>); break;
      case '/brokenPages/calc.html': return (<NodeCalculationsRxjs rxpng={rxpng}/>); break;
      
      // case '/main_rxjs_page.html': return (<RxjsRunner/>); break;
      default: return (<LandingPage rxpng={rxpng}/>);
    }
  }
}

class App extends Component {
  render() {
  let currRoute = window.location.href.substring(21)
    return (
      <div>
        {determineComponents(currRoute)}
      </div>
    );
  }
}

export default App;
