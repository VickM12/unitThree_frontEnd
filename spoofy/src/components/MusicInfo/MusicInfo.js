import React from 'react';

export default function MusicInfo(props) {
	return (
		<>
			<div className="music-info">
				<h1>Artist Name: {props.allMusic.name}</h1>
				<img src={props.allMusic.picture_big} alt={props.allMusic.name} />
				<h3>Tracklist: {props.allMusic.tracklist}</h3>
			</div>
		</>
	);
}
