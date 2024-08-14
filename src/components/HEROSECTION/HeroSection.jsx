import { useState } from "react";
import "./HeroSection.css";
// import Video  from '../../assets/experienceair.mp4'

const HeroSection = () => {
  let [toggle, settoggle] = useState(false);
  return (
    <>
      <div className="main">
        <video muted loop autoPlay>
          <source src="../../nikevideo.mp4" type="video/mp4" />
        </video>
      </div>
      <marquee style={{ color: "black" }}>NIKE</marquee>
      <div className="heading">
        <h1>WIN ON AIR</h1>
        <p>
          Meet the next generation of Nike Air. Engineered to the exact
          specifications of championship athletes.
        </p>
        <div className="btn">
          <button
            onClick={() => {
              settoggle(!toggle);
              console.log(toggle);
            }}
          >
            Experience Air
          </button>
          {toggle ? (
            <div className="togglename">
              <video muted loop autoPlay>
                <source src="../../experienceair.mp4" type="video/mp4" />
              </video>
            </div>
          ) : null}
          <button>Shop Air</button>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
