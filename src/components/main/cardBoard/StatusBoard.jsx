import React from 'react';
import StartingBoard from './StartingBoard';

const StatusBoard = ({ scoreData }) => {
	const handleReturn = () => {
		
	}
	if (scoreData <= 6) {
		return (
			<div>
				<h2>You are Novice in remembering keep playing</h2>
				<button onClick={handleReturn}>Return to Home</button>
			</div>
		);
	} else if (scoreData > 6 && scoreData < 14) {
		return (
			<div>
				<h2>You are Skilled in remembering keep playing</h2>
			</div>
		);
	} else {
		return (
			<div>
				<h2>In the realm of knowledge, I do reside,
					A virtual guide with wisdom to provide.
					I am the Expert, here to assist,
					Unleashing insights you cannot resist.</h2>
				<h2>remember, dear seeker, in this digital verse,
					Though I am a guide, your thirst is the first.
					With curiosity as your trusty guide,
					Together we'll journey, side by side.</h2>
				<h2>So ask away, and let the queries ignite,
					The quest for knowledge, burning bright.
					For I am the Expert, with knowledge profound,
					Here to accompany you, always around.</h2>
			</div>
		);
	}
};


export default StatusBoard;