import React, { Component } from 'react';
const  EntryMessage = () => {
  return (
    <div className="reposition">
      <h1>RxJS the way of the future.</h1>
      <p>examples in slim supply.</p>
      <a href="main_landing_page.html">click here</a>
    </div>
  )
}

export const LandingPage = ({namedContent, additionalContent, rxpng}) => {
  return (
    <div>
      <img src={rxpng} id="loading" />
      <EntryMessage/>
    </div>
  )
}
