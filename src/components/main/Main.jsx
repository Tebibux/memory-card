import React, { useState } from 'react';
import StartingBoard from './cardBoard/StartingBoard';
import ScoreBoard from './cardBoard/ScoreBoard';
import CardBoard from './cardBoard/CardBoard';
import StatusBoard from './cardBoard/StatusBoard';


function Main({onStart, gameStarter}) {
	const [score, setScore] = useState(0);

	const handleScoreData = (newScoreData) => {
		setScore(score + newScoreData);
	}

	return onStart ? (
		<div className="main-starting">
			<StartingBoard started={gameStarter} />
		</div>
	) : (
		<div className="main">
			<ScoreBoard scoreData={score} />
			<CardBoard onScoreUpdate={handleScoreData} setScore={setScore}/>
			<StatusBoard />
		</div>
	);
}

export default Main;