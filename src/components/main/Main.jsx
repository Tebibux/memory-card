import React from 'react';
import StartingBoard from './cardBoard/StartingBoard';
import ScoreBoard from './cardBoard/ScoreBoard';
import CardBoard from './cardBoard/CardBoard';
import StatusBoard from './cardBoard/StatusBoard';

function Main() {
  return (
	<div>
		<StartingBoard />
		<ScoreBoard />
		<CardBoard />
		<StatusBoard />		  
	</div>
  );
}

export default Main;