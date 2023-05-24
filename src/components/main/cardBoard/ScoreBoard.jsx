import React, { useState } from 'react';


function ScoreBoard({ scoreData }) {
	const [highScore, sethighScore] = useState(scoreData)
	return (
		<div className='score-board'>
			<h3>Your Score: {scoreData}</h3>
			{
				scoreData > highScore ? (
					<h3>High Score: {highScore}</h3>
				) : (
					<h3>High Score: {highScore}</h3>
					)
			}
		</div>
	);
}

export default ScoreBoard;