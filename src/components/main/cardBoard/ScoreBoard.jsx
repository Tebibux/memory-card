import React, { useEffect, useState } from 'react';


const ScoreBoard = ({ scoreData }) => {
	const [highScore, setHighScore] = useState(scoreData);

	useEffect(() => {
		const storedHighScore = localStorage.getItem('highScore');
		if (storedHighScore) {
			setHighScore(parseInt(storedHighScore));
		}
	}, []);

	useEffect(() => {
		if (scoreData > highScore) {
			setHighScore(scoreData);
			localStorage.setItem('highScore', scoreData);
		}
	}, [scoreData]);

	return (
		<div className='score-board'>
			<h3>Your Score: {scoreData}</h3>
			<h3>High Score: {highScore}</h3>
		</div>
	);
}
export default ScoreBoard;