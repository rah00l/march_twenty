import React from 'react'
import ReactDOM from 'react-dom'

const Welcome = (props) => {
	return(
			<div>
			<h1>
				Welcome from React!!
			</h1>
			</div>
		)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Welcome />,
    document.getElementById('welcome'),
  )
})