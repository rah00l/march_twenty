import React from 'react';
import SyncBox from './SyncBox'

const main = () => {
	return (
		<div class="container">
		  <div class="jumbotron">
		    <h1>Sync Box</h1>
		    <p>Sync Box - Systems that operate with all parts in synchrony are said to be 
		    synchronous or in sync-and those that are not are asynchronous!
		     </p>
			</div>
		  <SyncBox /><br/>
		  <SyncBox /><br/>
		  <SyncBox /><br/>
		</div>
	)
}

export default main;
