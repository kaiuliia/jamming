let accessToken; 

const Spotify = {
getAccessToken() {
if  (accessToken) {
    return accessToken;
}

const accessToken = window.location.href.match(/access_token=([^&]*)/);
const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);


}
}


export default Spotify;