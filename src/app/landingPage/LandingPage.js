import React from 'react';
const  EntryMessage = () => {
  return (
    <div>
      <h1>RxJS the way of the future.</h1>
      <p>examples in slim supply.</p>
      <a href="main_landing_page.html">click here</a>
    </div>
  )
}

export const LandingPage = ({namedContent, additionalContent, rxpng}) => {
  return (
    <div>
      <img src={rxpng} id="loading" alt="" className="reposition-image"/>
      <EntryMessage/>
      <br/><br/><br/><br/>Important to know, use npm as go to website for rxjs: https://www.npmjs.com/package/rxjs
    </div>
  )
}
