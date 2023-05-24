import React, { useState } from 'react';


function ScoreBoard({ scoreData }) {
	return (
		<div className='score-board'>
			<h3>Your Score: {scoreData}</h3>
			<h3>High Score: 17</h3>
		</div>
	);
}

export default ScoreBoard;