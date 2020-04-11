import React, { Component } from 'react'
import Bravo from './Bravo/Bravo'
import Alpha from './Alpha'
// import Tango from './Tango'
// import Charli from './Charli'

class Items extends Component {
	// state = {
	// 		selectedBrItem: null
	// }

	// bravoSelectedHandler = (id) => {
	// 	this.setState({selectedBrItem: id})
	// }

	render(){
		// const br_items = this.state.br_items.map( (bravo) => {
		// 	return <Bravo 
		// 			key={bravo.id} 
		// 			name={bravo.name} 
		// 			clicked={() => this.bravoSelectedHandler(bravo.id)}/>
		// })


		// const al_items = this.props.al_items.map( (data) => {
		// 	return <Alpha key={data.id} 
		// 								name={data.name} 
		// 								id={this.state.selectedBrItem} />
		// })

		// const ta_items = this.state.ta_items.map( (data) => {
		// 	return <Tango key={data.id} name={data.name} />
		// })

		// const ca_items = this.state.ca_items.map( (data) => {
		// 	return <Charli key={data.id} name={data.name} />
		// })

	// return(
	// <div className="container">
	//   <div className="row">
	//   	<div className="col-lg-4 col-sm-6 mb-4">
	//   	  <div className="card h-100">
	//   	    <div className="card-body  overflow-auto">
	//   				{br_items}
	//   			</div>
	//   		</div>
	//   	</div>

	//   	<div className="col-lg-4 col-sm-6 mb-4">
	//   	  <div className="card h-100">
	//   	    {/*<a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></a>*/}
	//   	    <div className="card-body  overflow-auto">
	//   				{al_items}
	//   			</div>
	//   		</div>
	//   	</div>

	//   	<div className="col-lg-4 col-sm-6 mb-4">
	//   	  <div className="card h-100">
	//   	    {/*<a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></a>*/}
	//   	    <div className="card-body  overflow-auto">
	//   			</div>
	//   		</div>
	//   	</div>	    
	//   </div>

	//   <div className='row'>
	//   	  <div className="card h-100">
	//   	    {/*<a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></a>*/}
	//   	    <div className="card-body  overflow-auto">
	//   			</div>
	//   		</div>
	//   </div>
	// </div>
	// 	)
	}
}

export default Items 