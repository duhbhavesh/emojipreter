import React, { useState } from "react";
import "./styles.css";

const emojiData = {
  "🤪": "zany",
  "😉": "winking",
  "😅": "grinning face with sweat",
  "😊": "smiling",
  "😪": "sleepy",
  "🤤": "drooling",
  "🤩": "star-struck",
  "❤️": "love",
  "🤑": "money-mouth",
  "🤓": "nerd"
};

let emojisInData = Object.keys(emojiData);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function handleUserInput(event) {
    let userInput = event.target.value;
    let meaning = emojiData[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in database!";
    }
    setMeaning(meaning);
  }

  function handleUserClick(emoji) {
    let meaning = emojiData[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emojipreter</h1>
      <input
        placeholder="Enter Emoji or Click on Emoji's"
        onChange={handleUserInput}
      />
      <h2>{meaning}</h2>
      <h3>Emoji's List</h3>

      {emojisInData.map((emoji) => {
        return (
          <span
            onClick={() => handleUserClick(emoji)}
            style={{ padding: "0.4rem", fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
