import React from 'react';
import StartingBoard from './cardBoard/StartingBoard';
import ScoreBoard from './cardBoard/ScoreBoard';
import CardBoard from './cardBoard/CardBoard';
import StatusBoard from './cardBoard/StatusBoard';

function Main() {
	const started = false;

	return started ? (
		<div className="main">
			<ScoreBoard />
			<CardBoard />
			<StatusBoard />
		</div>
	) : (
		<div className="main-starting">
			<StartingBoard />
		</div>
	);
}

export default Main;