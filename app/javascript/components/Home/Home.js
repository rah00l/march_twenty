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
import styled from 'styled-components'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'


const Section = styled.section`
	background-color: orange;
` 

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
			<Section>	
				<div>
					<Header/>
					<Main/>
					<Footer/>	
				</div>
			</Section>
		)
	}
}

export default Home

