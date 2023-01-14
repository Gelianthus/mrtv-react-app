import { useState } from "react";
import PlaylistFetcher from "./PlaylistFetcher";

function ShortSurvey () {

    
    const [playlistSetup, setPlaylistSetup] = useState("");
    const [slide, setSlide] = useState(0);
    const [clicked, setClicked] = useState(false);

    const start = () => {
        setSlide((prevSlide) => prevSlide - 100)
    }

    const selectMood = (mood) => {
        setSlide((prevSlide) => prevSlide - 100)
        setPlaylistSetup((prevPlaylistSetup) => prevPlaylistSetup.concat(mood))
    }

    const prefPlaylist = (pref) => {
        setSlide((prevSlide) => {
            return prevSlide - 100;
        });
        setPlaylistSetup((prevPlaylistSetup) => prevPlaylistSetup.concat(pref));
        setClicked(true);
    }

    const restart = () => {
        window.location.reload();
    }

    return (
        <section style={{transform: `translateX(${slide}%)`}} className="survey-section">
            <div className="start-button-container survey-sub-section">
                <button onClick={start} className="btn start-btn">Start</button>
            </div>
            <div className="question-card survey-sub-section">
                <p className="question">How are you feeling today?</p>
                <ul className="options-container">
                    <li><button onClick={() => selectMood("P")} className="btn option-btn" type="button">Refreshed / So relaxed, it's almost scary / Really happy</button></li>
                    <li><button onClick={() => selectMood("N")} className="btn option-btn" type="button">Anxious / Sad for whatever reason / In a bad mood</button></li>
                    <li><button onClick={() => selectMood("M")} className="btn option-btn" type="button">I don't know / Could use a bit of hype / Just right</button></li>
                </ul>
            </div>
            <div className="question-card survey-sub-section">
                <p className="question">Do you prefer a playlist that only contains Taylor Swift's song?</p>
                <ul className="options-container">
                    <li><button onClick={() => prefPlaylist("ATS")} className="btn option-btn" type="button">Taylor Swift only</button></li>
                    <li><button onClick={() => prefPlaylist("M")} className="btn option-btn" type="button">Add other artists</button></li>
                </ul>
            </div>
            <PlaylistFetcher clicked={clicked} playlistSetup={playlistSetup} restart={restart} />
        </section>
    )
}

export default ShortSurvey;