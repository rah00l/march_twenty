// Main Page
// 	- Home
// 		- Home.js
// 		- Bravo
// 			- Bravo.js
// 		- Alpha
// 			- Alpha.js
// 		- Tango
// 			- Tango.js
// 		- Charli
// 			- Charli.js
import React, { Component } from 'react';
import Main from './Main'

class Home extends Component {
	constructor(){
		super()	
		this.state = {
			br_items: [
				{id: 1, name: 'br_one'},
				{id: 2, name: 'br_two'},
				{id: 3, name: 'br_three'},
				{id: 4, name: 'br_four'},
			]
		}
	} 	
	render(){
		return(
			<div>
				<Main/>
			</div>
		)
	}
}

export default Home

