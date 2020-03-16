import React from 'react'
import ReactDOM from 'react-dom'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="Rahul" />,
    document.body.appendChild(document.createElement('div')),
  )
})
