import React, { Component } from 'react'
import Bravo from './Bravo'
import Alpha from './Alpha'
import Tango from './Tango'
import Charli from './Charli'

class Items extends Component {
	constructor(props){
		super(props)
	}
	render(){
		const br_items = this.props.br_items.map( (data) => {
			return <Bravo key={data.id} name={data.name} />
		})

		const al_items = this.props.al_items.map( (data) => {
			return <Alpha key={data.id} name={data.name} />
		})

		const ta_items = this.props.ta_items.map( (data) => {
			return <Tango key={data.id} name={data.name} />
		})

		const ca_items = this.props.ca_items.map( (data) => {
			return <Charli key={data.id} name={data.name} />
		})

	return(
	<div className="container">
	  <div className="row">
	  	{/*<Bravo />*/}
	  	<div className="col-lg-4 col-sm-6 mb-4">
	  	  <div className="card h-100">
	  	    {/*<a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></a>*/}
	  	    <div className="card-body  overflow-auto">
	  				{br_items}
	  			</div>
	  		</div>
	  	</div>

	  	<div className="col-lg-4 col-sm-6 mb-4">
	  	  <div className="card h-100">
	  	    {/*<a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></a>*/}
	  	    <div className="card-body  overflow-auto">
	  				{al_items}
	  			</div>
	  		</div>
	  	</div>

	  	<div className="col-lg-4 col-sm-6 mb-4">
	  	  <div className="card h-100">
	  	    {/*<a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></a>*/}
	  	    <div className="card-body  overflow-auto">
  					{ta_items}
	  			</div>
	  		</div>
	  	</div>	    
	  </div>

	  <div className='row'>
	  	  <div className="card h-100">
	  	    {/*<a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></a>*/}
	  	    <div className="card-body  overflow-auto">
	  				{ca_items}
	  			</div>
	  		</div>
	  </div>
	</div>
		)
	}
}

export default Items 