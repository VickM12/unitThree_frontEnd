import React from 'react';

export default function MusicInfo(props) {
	return (
		<>
			<div className="music-info">
				<h1>Artist Name: {props.allMusic.data[0].artist.name}</h1>
				<img class="artist-pic" src={props.allMusic.data[0].artist.picture_xl} width="300px" alt={props.allMusic.data[0].artist.picture} />
				<h3>Track Title: {props.allMusic.data[0].title_short}</h3>
				<a href={props.allMusic.data[0].preview}><button>Click Here to listen to {props.allMusic.data[0].title_short}</button></a>
				<h3>Track Title: {props.allMusic.data[1].title_short}</h3>
				<a href={props.allMusic.data[1].preview}><button>Click Here to listen to {props.allMusic.data[1].title_short}</button></a>
				<h3>Track Title: {props.allMusic.data[2].title_short}</h3>
				<a href={props.allMusic.data[2].preview}><button>Click Here to listen to {props.allMusic.data[2].title_short}</button></a>
				<h3>Track Title: {props.allMusic.data[3].title_short}</h3>
				<a href={props.allMusic.data[3].preview}><button>Click Here to listen to {props.allMusic.data[3].title_short}</button></a>
				<h3>Track Title: {props.allMusic.data[4].title_short}</h3>
				<a href={props.allMusic.data[4].preview}><button>Click Here to listen to {props.allMusic.data[4].title_short}</button></a>
				<h3>Track Title: {props.allMusic.data[5].title_short}</h3>
				<a href={props.allMusic.data[5].preview}><button>Click Here to listen to {props.allMusic.data[5].title_short}</button></a>
				<h3>Track Title: {props.allMusic.data[6].title_short}</h3>
				<a href={props.allMusic.data[6].preview}><button>Click Here to listen to {props.allMusic.data[6].title_short}</button></a>
				<h3>Track Title: {props.allMusic.data[7].title_short}</h3>
				<a href={props.allMusic.data[7].preview}><button>Click Here to listen to {props.allMusic.data[7].title_short}</button></a>
				<h3>Track Title: {props.allMusic.data[8].title_short}</h3>
				<a href={props.allMusic.data[8].preview}><button>Click Here to listen to {props.allMusic.data[8].title_short}</button></a>
				<h3>Track Title: {props.allMusic.data[9].title_short}</h3>
				<a href={props.allMusic.data[9].preview}><button>Click Here to listen to {props.allMusic.data[9].title_short}</button></a>
				<h3>Track Title: {props.allMusic.data[10].title_short}</h3>
				<a href={props.allMusic.data[10].preview}><button>Click Here to listen to {props.allMusic.data[10].title_short}</button></a>
				<h3>Track Title: {props.allMusic.data[11].title_short}</h3>
				<a href={props.allMusic.data[11].preview}><button>Click Here to listen to {props.allMusic.data[11].title_short}</button></a>
				<h3>Track Title: {props.allMusic.data[12].title_short}</h3>
				<a href={props.allMusic.data[12].preview}><button>Click Here to listen to {props.allMusic.data[12].title_short}</button></a>
			</div>
		</>
	);
}
