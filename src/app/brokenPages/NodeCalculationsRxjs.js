import React from 'react';
import '../../assets/css/additionalStyling.css';
import 'rxjs/add/observable/of';
  import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
  import { map, filter, switchMap } from 'rxjs/operators';
// const  EntryMessage = () => {
//   return (
//    <div className="reposition">

//    </div>
//   )
// }
function map_explination_marks(){

  range(1, 200)
    .pipe(filter(x => x % 2 === 1), map(x => x + x))
    .subscribe(x => console.log(x));
  return <div>Observable.of(1,2,3).map(x => x + '!!!')</div>
}

export const NodeCalculationsRxjs = ({rxpng}) => {
  return (
    <div>
      future efforts will go into this implementation
      {map_explination_marks()}
      <a href="/brokenPages/game.html">click here</a>
    </div>
  )
}
