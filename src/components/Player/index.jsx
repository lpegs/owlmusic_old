import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback"

export function Player({ accessToken, trackUri }) {

    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    if (!accessToken) 
        {return null} 
    else
    return <SpotifyPlayer 
        token={accessToken}
        showSaveIcon
        callback={state => {
            if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        persistDeviceSelection={true}
    />
}