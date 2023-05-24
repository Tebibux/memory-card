import React, { useState } from 'react';
import StartingBoard from './cardBoard/StartingBoard';
import ScoreBoard from './cardBoard/ScoreBoard';
import CardBoard from './cardBoard/CardBoard';
import StatusBoard from './cardBoard/StatusBoard';


function Main() {
	const [started, setStarted] = useState(false);
	const [score, setScore] = useState(0);

	const handleScoreData = (newScoreData) => {
		setScore(newScoreData);
	}

	return started ? (
		<div className="main-starting">
			<StartingBoard />
		</div>
	) : (

		<div className="main">
			<ScoreBoard scoreData={score} />
			<CardBoard onScoreUpdate={handleScoreData} />
			<StatusBoard />
		</div>
	);
}

export default Main;