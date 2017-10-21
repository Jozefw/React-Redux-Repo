import React from 'react';


// rewrite from functional based componenet to a class based component which is more self aware
// const SearchBar = () =>{
// 	return <input />
// }

class SearchBar extends React.Component{
	// add render function es6 style
	render(){
		// if we dont return som jsx it will barf
		return <input />;
	}
	onInputChange(){
		
	}

}

export default SearchBar;