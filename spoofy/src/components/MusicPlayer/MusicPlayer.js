import React from "react";
import MusicInfo from '../MusicInfo/MusicInfo'

const MusicPlayer =(props) => {

//    let audio_info = document.getElementById('audio1');
// document.getElementById('play').addEventListener('click', function(){
//     audio_info.play();
// }, false);
// //
// document.getElementById('stop').addEventListener('click', function(){
//     audio_info.pause();
// }, false); 
return (
<div>
<audio id="audio1">
<source src={`${props.MusicInfo.data[0].artist.preview}`} />
</audio>
<button id="play">Play</button><button id="stop">Stop</button>

</div>
);
};

export default MusicPlayer