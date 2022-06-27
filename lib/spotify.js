import SpotifyWebApi from "spotify-web-api-node";

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=6d4b4c7762614c639a4fc45f90d0a43c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-top-read%20user-read-currently-playing%20user-read-recently-played%20user-follow-read%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-collaborative%20playlist-read-private"

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyApi;

export { AUTH_URL };