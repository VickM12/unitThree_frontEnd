import React from 'react';

export default function MusicInfo(props) {
	return (
		<>
			<div className="music-info">
				<h1>Artist Name: {props.allMusic.data[0].artist.name}</h1>
				<img src={props.allMusic.data[0].artist.picture} alt={props.allMusic.data[0].artist.picture} />
				<h3>Track Title: {props.allMusic.data[0].title_short}</h3>
			</div>
		</>
	);
}
