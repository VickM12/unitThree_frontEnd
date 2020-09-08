import React from 'react';

export default function MusicInfo(props) {
	return (
		<>
			<div className="music-info">
				<h1>{props.allMusic.className}</h1>
				<img src={props.allMusic.picture} alt={props.allMusic.name} />
				<h3>Genre: {props.allMusic.tracklist}</h3>
			</div>
		</>
	);
}
