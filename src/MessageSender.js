import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import './MessageSender.css'
import VideoCamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'

function MessageSender() {
    const [input, setInput] = useState("");
    const [image, setImageURL] = useState("");
    const handleSubmit = e => {
        e.preventDefault();

        setInput("");
        setImageURL("");
    };

    return <div className="messageSender">
      <div className="messageSender__top">
        <Avatar 
            src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-1/45364186_2372535586152465_6937581834809114624_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fNc0SavaO2sAX-GNgyG&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8UVWAdUPR_kyAzv-XDLtDE_tPrUs9WV4DbfHkCdsaYMg&oe=62558387'/>
        <form>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="messageSender__input"
                placeholder="What's on your mind" />
            <input 
                value={image}
                onChange={(e) => setImageURL(e.target.value)}
                placeholder="Image URL (Optional)" />

            <button onClick={handleSubmit} type='submit'>
                Hidden submit
            </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
            <VideoCamIcon style={{color: 'red'}}/>
            <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
            <PhotoLibraryIcon style={{color: 'green'}}/>
            <h3>Photo/Video</h3>
        </div>
        
        <div className="messageSender__option">
            <InsertEmoticonIcon style={{color: 'orange'}}/>
            <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>;
}

export default MessageSender