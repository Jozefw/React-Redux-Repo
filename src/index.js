
// got to the react folder get that info and name it React
import React from 'react';
// react-dom places components into the dom
import ReactDOM from 'react-dom';
// Make a new component that renders html and then is inserted into the dom

// App is a class, we need to instantiate our class by wrapping it in tags (self closing is JSX) so <app></app> or <app /> insantiates APP
const App = function() {
	return <div>Hola!</div>
}

// second argument tells us where to render it
ReactDOM.render(<App />, document.querySelector('.container'));

