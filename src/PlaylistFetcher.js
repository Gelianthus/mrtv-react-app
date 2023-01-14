import React, { useState } from 'react';
import playlistsArr from "./data-playlist-ID";


function PlaylistFetcher({ clicked, playlistSetup, restart}) {
  const [isSpotifyInstalled, setIsSpotifyInstalled] = useState(null);
  const [notice, setNotice] = useState(false);

  const selectedPlaylist =  playlistsArr.filter((playlistObj) => playlistObj[playlistSetup])[0];

  const openSpotify = () => {
    try {
      window.location.href = `spotify:playlist:${selectedPlaylist.urlID}`;
      setIsSpotifyInstalled(true);
    } catch(e) {
      setIsSpotifyInstalled(false);
      const popUp = () => {
        setNotice(true);
        setTimeout(() => {
          setNotice(false)
        }, 2000)
      }
      popUp();
    }
  }

  return (
    <div className="survey-sub-section">
      {selectedPlaylist && (
        <div className="result-container">
          <div className={`pop-up-notice ${notice === false && "hidden"}`}>
            <p>Spotify is not installed!</p>
          </div>
          <div className="options-container">
            {isSpotifyInstalled === false ? <a className="btn" target="_blank" rel="noreferrer" href="https://open.spotify.com/download">Get Spotify Free</a> : <button type="button" className="btn" onClick={openSpotify}>Listen on Spotify</button>}
            <button className="btn restart-btn" onClick={restart}>My mood changed, get new playlist.</button>
          </div>
          <ul className="tracklist">
            {selectedPlaylist[playlistSetup].map(songObj => {
              return (
              <li className="track" key={songObj.title}>{`${songObj.title} - (${songObj.artist})`}</li>
            )})}
          </ul>
        </div>
      ) 
      }
    </div>
  );
}

export default PlaylistFetcher;