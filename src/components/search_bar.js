import React from 'react';


// rewrite from functional based componenet to a class based component which is more self aware
// const SearchBar = () =>{
// 	return <input />
// }

class SearchBar extends React.Component{
	// initialize the state method
	constructor(props){
		super(props);

		this.state = {term:''};
	}
	// add render method es6 style
	render(){
		// if we dont return som jsx it will barf...
		// return <input onChange = {event => console.log(event.target.value)}/>
		// set state to change
		return (
			<div>
		 		<input value = {this.stat.term}
		 		onChange = {event => this.setState({term:event.target.value})}/>
		 		The value is : {this.state.term}
		 	</div>	
		 );
	}
	

}

export default SearchBar;