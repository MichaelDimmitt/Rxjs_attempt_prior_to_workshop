import React from 'react';
import '../../assets/css/additionalStyling.css';
import '../../assets/css/suiteIntroductionPageStyling.css';
const  EntryMessage = () => {
  return (
   <div className="reposition">
     <h1><span role="img" aria-label="Robot">🤖</span></h1>
     <h1>Introduction. Start Your Engines!</h1>
     <p>Step 1. Lets impact the browser in some way using RxJS.</p>
     <p>Subscribe to the image event. Jumanji adventure begins.</p>

     <p>then, onward to the test suite!,</p>
   </div>
  )
}

export const TestSuiteIntroduction = ({rxpng}) => {
  return (
    <div>
      <img src={rxpng} id="loading2" alt="" />
      <EntryMessage/>
    </div>
  )
}
