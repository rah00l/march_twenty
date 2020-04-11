import React, { Component } from 'react';
import Alpha from './Alpha'
import axios from 'axios';

class AlphaList extends Component {
		state = {
			loadedAlphas: []
		}
		componentDidUpdate() {
			if (this.props.id){
				// debugger
				// if (this.state.loadedAlphas) {
				axios.get('bravo/' + this.props.id + '/alpha.json')
							.then(response => {
								console.log(response.data.data.alphas);
								this.setState({loadedAlphas: response.data.data.alphas})
							})
					// }		
				}
		}
	render(props){
			// let alpha = (this.props.id) ? 'Select Bravo Item to view related Alpha Items!' : <p>Loading ...</p>
			let alpha = 'Select any Bravo Item to view related Alpha Items!'
			if (this.state.loadedAlphas) {
				const alphas = this.state.loadedAlphas.map(item => {
				return <Alpha 
									key={item.id} 
									name={item.name} />
									// clicked={() => this.itemSelectedHandler(item.id)} />
				})

			return(
				<div>
					{alpha}
					{alphas}
				</div>
			) 
		}	
	}
}

export default AlphaList