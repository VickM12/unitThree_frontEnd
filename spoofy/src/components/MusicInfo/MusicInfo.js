import React from 'react';

export default function MusicInfo(props) {
	return (
		<>
			<div className="music-info">
<<<<<<< HEAD
				<h1>{props.allMusic.name}</h1>
				<img src={props.allMusic.picture} alt={props.allMusic.name} />
				<h3>Genre: {props.allMusic.tracklist}</h3>
=======
				<h1>Artist Name: {props.allMusic.data[0].artist.name}</h1>
				<img src={props.allMusic.data[0].artist.picture} alt={props.allMusic.data[0].artist.picture} />
				<h3>Track Title: {props.allMusic.data[0].title_short}</h3>
>>>>>>> 107011f5c86a9388317f5dd6a367cda257d9ee26
			</div>
		</>
	);
}
