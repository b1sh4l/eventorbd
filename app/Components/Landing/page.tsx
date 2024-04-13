import eventorbdLogo from "../../assets/eventorbdLogo.svg";
import eventorbdText from "../../assets/eventorbdText.svg";
import Image from "next/image";
import Link from "next/link";
import "./page.css"; // Import CSS file

function LandingPage(): JSX.Element {
  return (
    <>
    <div className="container">
      <div className="mainLogo">
        <Image
          className="logo"
          src={eventorbdLogo}
          alt="eventorbdLogo"
          width={50}
          height={50}
          layout="intrinsic"
        />
        <Image
          className="logoText"
          src={eventorbdText}
          alt="eventorbdText"
          width={140}
          height={49}
          layout="intrinsic"
        />
      </div>
      <div className="authButtons">
        <Link href="/Components/Auth/SignIn" className="signinLink">
          <button className="signinBtn">Sign In</button>
        </Link>
        <Link href="/Components/Auth/SignUp" className="signupLink">
          <button className="signupBtn">Sign Up</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default LandingPage;
