import { useState } from "react";
import "./Home.css";
import EmojiButton from "../components/EmojiButton/EmojiButton";
import ImgRotate from "../Home/rotate.png";
import ColorButton from "../components/ColorButton/ColorButton";

function Home() {
  const [emoji, setEmoji] = useState("😊");
  const [emojiSize, setEmojiSize] = useState("30");
  const [angle, setAngle] = useState("0");
  const [bgColor, setBgColor] = useState("#ccccb3");

  return (
    <div className="container">
      <h1 className="heading"> 😍 Emoji Editor 😍</h1>

      <p className="description">
        Create, customize, and share expressive emojis with an intuitive editor.. 🤖{" "}
      </p>

      <div className="main-emoji-box" style={{ fontSize: `${emojiSize}px`, backgroundColor: bgColor }}>
        <span style={{ transform: `rotate(${angle}deg)` }} >{emoji}</span>
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

      <div className="angle-container">
        <img src={ImgRotate} alt="rotate" height="20px"  className="angle-img" 
        onClick={()=> {
          setAngle(angle + 45);
        }}/>
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
        <EmojiButton emoji={"😶‍🌫️"} setEmoji={setEmoji} />
        <EmojiButton emoji={"👌"} setEmoji={setEmoji} />
        <EmojiButton emoji={"☂️"} setEmoji={setEmoji} />
        <EmojiButton emoji={"👑"} setEmoji={setEmoji} />
        <EmojiButton emoji={"💅"} setEmoji={setEmoji} />
        <EmojiButton emoji={"😸"} setEmoji={setEmoji} />
       
        
      </div>

      <div className="color-picker">
        <ColorButton bgColor={"#990000"} setBgColor={setBgColor} />
        <ColorButton bgColor={"#668cff"} setBgColor={setBgColor} />
        <ColorButton bgColor={"  #4d4dff"} setBgColor={setBgColor} />
        <ColorButton bgColor={"#b2b266"} setBgColor={setBgColor} />
        <ColorButton bgColor={"#c65353"} setBgColor={setBgColor} />
        <ColorButton bgColor={" #ff80ff"} setBgColor={setBgColor} />
        <ColorButton bgColor={"#85adad"} setBgColor={setBgColor} />
        <ColorButton bgColor={"#ffc266"} setBgColor={setBgColor} />
        <ColorButton bgColor={"#cc9966"} setBgColor={setBgColor} />
        <ColorButton bgColor={"#cc6666"} setBgColor={setBgColor} />
        <ColorButton bgColor={"#9999ff"} setBgColor={setBgColor} />
        <ColorButton bgColor={" #ffa64d"} setBgColor={setBgColor} />
        <ColorButton bgColor={"#70db70"} setBgColor={setBgColor} />
        <ColorButton bgColor={" #d966ff"} setBgColor={setBgColor} />
        <ColorButton bgColor={"#a3a3c2"} setBgColor={setBgColor} />
        <ColorButton bgColor={"#d27979"} setBgColor={setBgColor} />
      </div>
    </div>
  );
}

export default Home;
