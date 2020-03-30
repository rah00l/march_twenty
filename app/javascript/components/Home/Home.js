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
import Items from './Items'
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
			],
			al_items: [
				{id: 1, name: 'a_one'},
				{id: 2, name: 'a_two'},
				{id: 3, name: 'a_three'},	
			],
			ta_items: [
				{id: 1, name: 't_one'},
				{id: 2, name: 't_two'},
			],
			ca_items: [
				{id: 1, name: 'c_one'},
				{id: 2, name: 'c_two'},
			]
		}
	} 	
	render(){
		return(
			<Section>	
				<div>
					<Header/>
						<Items br_items={this.state.br_items} al_items={this.state.al_items} 
								 ta_items={this.state.ta_items} ca_items={this.state.ca_items} />
					<Footer/>	
				</div>
			</Section>
		)
	}
}

export default Home

