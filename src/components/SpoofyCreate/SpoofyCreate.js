import React, { useState } from 'react';
import axios from 'axios'


function SpoofyCreate(props) {
    const [spoofyState, setSpoofyState] = useState({
        username: "",
        artist: "",
        track: "",
        image: "",
    });

    const handleSpoofyInput = (event) => {
        setSpoofyState({ ...spoofyState, [event.target.name]: event.target.value });
    };

    const handleSpoofySubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/music", {
                username: spoofyState.username,
                artist: spoofyState.artist,
                track: spoofyState.track,
                image: spoofyState.image
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h2 class="music-info">Add to Favorites</h2>
            <form class="music-info">
            <div>
                    <label htmlFor="username">
                        Your Username:
                    </label>
                    <input type="text" name="username" onChange={handleSpoofyInput} />
                </div>
                <div>
                    <label htmlFor="artist">
                        Artist:
                    </label>
                    <input type="text" name="artist" onChange={handleSpoofyInput} />
                </div>
                <div>
                    <label htmlFor="track">
                        Track:
                    </label>
                    <input type="text" name="track" onChange={handleSpoofyInput} />
                </div>
                <div>
                    <label htmlFor="image">
                        Artist Image:
                    </label>
                    <input type="text" name="image" onChange={handleSpoofyInput} />
                </div>
                <input value="Submit" type="submit" onClick={handleSpoofySubmit} />
            </form>
        </div>
    );
}

export default SpoofyCreate;
