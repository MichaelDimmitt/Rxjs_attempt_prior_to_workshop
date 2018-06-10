import React, { Component } from 'react';
import rxpng from '../assets/rxjs.png';
import '../assets/css/animation.css';
import '../assets/css/additionalStyling.css';

const  EntryMessage = () => {
  return (
    <div className="reposition">
      <h1>RxJS the way of the future.</h1>
      <p>examples in slim supply.</p>
      <a href="main_landing_page.html">click here</a>
    </div>
  )
}

const LandingPage = ({namedContent, additionalContent, rxpng}) => {
  return (
    <div>
      <img src={rxpng} id="loading" />
      <EntryMessage/>
    </div>
  )
}

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
