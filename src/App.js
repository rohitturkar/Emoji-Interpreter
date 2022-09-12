import React, { useState } from "react";
import "./style.css";
var emojiDictionary = {
  "😊": "smiling",
  "❤️": "love",
  "🙄": "disbelief",
  "😡": "annoyance",
  "😞": "sad",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "😐": "Neutral Face",
  "🤩": "Star-Struck",
  "🥡": "takeout box",
  "😃": "Grinning Face with Big Eyes",
  "🤭": "Face with Hand Over Mouth",
  "🥰": "Smiling Face with Hearts",
  "🤣": "Rolling on the Floor Laughing",
  "😉": "Winking Face",
  "😂": "Face with Tears of Joy",
  
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div className="main">

      
      <h1>Emoji Interpreter</h1>
      <input placeholder="Enter Emoji" onChange={emojiInputHandler}></input>
      <h2> meaning: {meaning} </h2>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
            {""}
          </span>
        );
      })}
    </div>
    </div>
  );
}
