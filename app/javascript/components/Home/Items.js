import React, { Component } from 'react'
import Bravo from './Bravo'
import Alpha from './Alpha'
import Tango from './Tango'
import Charli from './Charli'

class Items extends Component {
	render(){
	return(
	<div className="container">
	  <div className="row">
	  	<Bravo />
	    <Alpha />
	    <Tango />
	  </div>
	  <div className='row'>
	  	<Charli />
	  </div>
	</div>
		)
	}
}

export default Items 