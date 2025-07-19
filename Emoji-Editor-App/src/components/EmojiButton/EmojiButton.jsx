import "./EmojiButton.css";

function EmojiButton({emoji, setEmoji}) {
  return (
    <div
          className="emojis"
          onClick={() => {
            setEmoji(emoji);
          }}
        >
          {emoji}
        </div>
  );
}

export default EmojiButton;
