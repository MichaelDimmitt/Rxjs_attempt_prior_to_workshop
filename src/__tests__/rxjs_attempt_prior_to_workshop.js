// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import * as TestUtils from 'react-dom/test-utils';
import RxjsExample from '../app/RxjsExample.js';
import context from 'jest-plugin-context';

it('should render correctly', () => {
    const tree = renderer
      .create(<RxjsExample/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

describe('LandingPage section', () => {
  it('should dangerously be importing Rxjs and able to handle an rxjs block', () => {

    //    let foo = function () { Rx.Observable.of(`Hello World`)
    //      .subscribe(result => console.log(result)); };
    //
    //    const rxjsExample = TestUtils.renderIntoDocument(
    //      <RxjsExample check={foo} />
    //    const rxjsExampleNode = ReactDOM.findDOMNode(rxjsExample);
    //  })
    //  context('Rxjs Subscribing to images', () => {
    //    it('should render the image after Rxjs subscription.', () => {
    //      // Render the landing page. With the image subscribed.
    //      const checkboxNode = ReactDOM.findDOMNode(checkbox);
    //
    //      // Verify that it's Off by default
    //      expect(checkboxNode.textContent).toEqual('Off');
    //
    //      // Simulate a click and verify that it is now On
    //      TestUtils.Simulate.change(
    //        TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    //      );
    //      expect(checkboxNode.textContent).toEqual('On');
    //    });
  });
})

 describe('brokenPages section', () => {
   // context('Request', () => {
   // });
   // context('NodeCalculationRxjs', () => {
   // });
   // context('GameRxjs', () => {
   // });
 })
