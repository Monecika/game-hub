import bullEye from "../../assets/bulls-eye.webp";
import thumbsUp from "../../assets/thumbs-up.webp";
import meh from "../../assets/meh.webp";
import type { ImgHTMLAttributes } from "react";
import "./Emoji.css";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  const emojiMap: { [key: number]: ImgHTMLAttributes<HTMLImageElement> } = {
    3: { src: meh, alt: "meh", className: "emoji-img-meh align-bottom ms-1" },
    4: {
      src: thumbsUp,
      alt: "recommended",
      className: "emoji-img-thumb align-bottom ms-1",
    },
    5: {
      src: bullEye,
      alt: "exceptional",
      className: "emoji-img-bulls-eye align-bottom ms-1",
    },
  };

  const emoji = emojiMap[rating];

  return <img {...emoji} />;
};

export default Emoji;
