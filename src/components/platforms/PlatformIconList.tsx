import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "../../services/platforms/platformService";

interface PlatformIconProp {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconProp) => {
  const iconMap: Record<string, React.ElementType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <div className="d-flex gap-1">
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        if (!IconComponent) return null;
        return <IconComponent key={platform.slug} className="opacity-75" />;
      })}
    </div>
  );
};

export default PlatformIconList;
