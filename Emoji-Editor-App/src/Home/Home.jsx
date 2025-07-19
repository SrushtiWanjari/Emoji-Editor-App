import { useState } from "react";
import "./Home.css";
import EmojiButton from "../components/EmojiButton/EmojiButton";
import ColorButton from "../components/ColorButton/ColorButton";

function Home() {
  const [emoji, setEmoji] = useState("🥰");
  const [emojiSize, setEmojiSize] = useState("30");
  const [color, setColor] = useState("#000");

  return (
    <div className="container">
      <h1 className="heading">Emoji Editor App</h1>

      <p className="description">
        This is a simple React app that demonstrates how to use the useState
        hook to manage state in a functional component.{" "}
      </p>

      <div className="main-emoji-box" style={{ fontSize: `${emojiSize}px` }}>
        {emoji}
      </div>

      <div className="emoji-range">
        <input
          type="range"
          min="0"
          max="100"
          onChange={(e) => {
            setEmojiSize(e.target.value);
          }}
          value={emojiSize}
        />
      </div>

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


      <div className="color-picker">
        <ColorButton color={"#ccffcc"} setColor={setColor} />
        <ColorButton color={"#cce0ff"} setColor={setColor} />
        <ColorButton color={" #ff6666"} setColor={setColor} />
        <ColorButton color={" #d24dff"} setColor={setColor} />
        <ColorButton color={" #ff7733"} setColor={setColor} />
        <ColorButton color={" #990099"} setColor={setColor} />
        <ColorButton color={" #999966"} setColor={setColor} />
        <ColorButton color={"#33adff"} setColor={setColor} />
        <ColorButton color={"#7575a3"} setColor={setColor} />
        <ColorButton color={" #ac3973"} setColor={setColor} />
      </div>
    </div>
  );
}

export default Home;
