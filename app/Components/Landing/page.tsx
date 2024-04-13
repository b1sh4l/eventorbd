import eventorbdLogo from "../../assets/eventorbdLogo.svg";
import eventorbdText from "../../assets/eventorbdText.svg";
import Image from "next/image";
import "./page.css";

const LandingPage = () => {
  return (
    <div className="main-container">
      <Image
      className="logo"
        src={eventorbdLogo}
        alt="eventordbdLogo"
        width={70}
        height={70}
        layout="intrinsic"
      />
        <Image
        className="logo-text"
        src={eventorbdText}
        alt="eventorbdText"
        width={200}
        height={70}
        layout="intrinsic"
        />
      
    </div>
  );
};

export default LandingPage;
