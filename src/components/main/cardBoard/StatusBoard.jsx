import React from 'react';
import StartingBoard from './StartingBoard';

// {scoreData} or  or 
const StatusBoard = ({ scoreData }) => {
	if (scoreData <= 6) {
	  return (
		<div>
		  <h2>You are Novice</h2>
		</div>
	  );
	} else if (scoreData > 6 && scoreData < 14) {
	  return (
		<div>
		  <h2>You are Skilled</h2>
		</div>
	  );
	} else {
	  return (
		<div>
		  <h2>You are Expert</h2>
		</div>
	  );
	}
  };
  

export default StatusBoard;