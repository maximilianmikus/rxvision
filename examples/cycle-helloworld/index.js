'use strict';

var _CycleDOM = CycleDOM;
var div = _CycleDOM.div;
var input = _CycleDOM.input;
var label = _CycleDOM.label;
var h1 = _CycleDOM.h1;
var hr = _CycleDOM.hr;
var makeDOMDriver = _CycleDOM.makeDOMDriver;

function main(sources) {
  return {
    DOM: sources.DOM.select('.myinput').events('input').map(function (ev) {
      return ev.target.value;
    }).startWith('').map(function (name) {
      return div([label('Name:'), input('.myinput', { attributes: { type: 'text' } }), hr(), h1('Hello ' + name)]);
    })
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('#main-container')
});
