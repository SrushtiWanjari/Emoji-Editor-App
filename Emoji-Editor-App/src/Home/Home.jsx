import { useState } from "react";
import "./Home.css";
import EmojiButton from "../components/EmojiButton/EmojiButton";

function Home() {
  const [emoji, setEmoji] = useState("🥰");
  return (
    <div className="container">
      <h1 className="heading">Emoji Editor App</h1>

      <p className="description">
        This is a simple React app that demonstrates how to use the useState
        hook to manage state in a functional component.{" "}
      </p>

      <div className="main-emoji-box">{emoji}</div>

      <div className="emoji-picker">
        <EmojiButton emoji={"📸"} setEmoji={setEmoji} />
        <EmojiButton emoji={"👻"} setEmoji={setEmoji} />
        <EmojiButton emoji={"🦋"} setEmoji={setEmoji} />
        <EmojiButton emoji={"🎀"} setEmoji={setEmoji} />
        <EmojiButton emoji={"🔎"} setEmoji={setEmoji} />
        <EmojiButton emoji={"🍫"} setEmoji={setEmoji} />
        <EmojiButton emoji={"🚀"} setEmoji={setEmoji} />
        <EmojiButton emoji={"🪂"} setEmoji={setEmoji} />
        <EmojiButton emoji={"🌞"} setEmoji={setEmoji} />
        <EmojiButton emoji={"🧡"} setEmoji={setEmoji} />
      </div>
    </div>
  );
}

export default Home;
