
// got to the react folder get that info and name it React
import React from 'react';
// react-dom places components into the dom
import ReactDOM from 'react-dom';
// files that we create need to be given a relative path
import SearchBar from './components/search_bar';
const API_KEY = "AIzaSyCOPF0Mc76x79YcZlmOBv0955Bjg3oEHLA";
// App is a class, we need to instantiate our class by wrapping it in tags (self closing is JSX) so <app></app> or <app /> insantiates APP
const App = function() {
	return (<div>
		<SearchBar />
	</div>)
}

// second argument tells us where to render it
ReactDOM.render(<App />, document.querySelector('.container'));

