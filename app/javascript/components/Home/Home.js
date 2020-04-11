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
// import Items from './Items'
import Bravo from './Bravo/Bravo'
import AlphaList from './AlphaList'
import Footer from './Footer'
import axios from 'axios'


const Section = styled.section`
	background-color: orange;
` 

class Home extends Component {
	state = {
		bravo_items: [],
		selectedBravoId: null
	}

	componentDidMount() {
		axios.get('bravo_list.json')
		.then(response => {
			this.setState({bravo_items: response.data.data.bravos});
		})
	}

	itemSelectedHandler = (id) => {
		this.setState({selectedBravoId: id});
	}

	render(){
		const bravos = this.state.bravo_items.map(item => {
			return <Bravo 
								key={item.id} 
								name={item.name}
								clicked={() => this.itemSelectedHandler(item.id)} />
		})
		return(
			<Section>	
				<div>
					<Header/>
						<div className="container">
						  <div className="row">
						  	<div className="col-lg-4 col-sm-6 mb-4">
						  		<div className="card h-100">
						  		<br/>
										{bravos}
									</div>
									</div>

									<div className="col-lg-4 col-sm-6 mb-4">
										<div className="card h-100">
										<br/>
										 <AlphaList id={this.state.selectedBravoId} />
										</div>
									</div>

									<div className="col-lg-4 col-sm-6 mb-4">
										<div className="card h-100">
										</div>
									</div>
								</div>
							</div>	
					<Footer/>	
				</div>
			</Section>
		)
	}
}

export default Home

