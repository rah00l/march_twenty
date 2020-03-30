import React, { Component } from 'react'

const Bravo = (props) => {
	return(
			<div>
	      <h4 className="card-title">
	        <button type="button" className="btn btn-primary">{props.name}</button>
	      </h4>
	      	<p className="card-text">Lorem ipsum dolor sit amet, 
	      		consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? 
	      		Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum 
	      		tempora ex quae? Nihil, dolorem!
	      	</p>
	    </div>  	
		)
}

export default Bravo