import { Link } from "react-router-dom";
import "./style.css";
import wedManImg from "../../assets/ashish.jpg";
import wedWomanImg from "../../assets/shashi-swing.jpg";
import wedVenueImg from "../../assets/couple.jpg";
import wedImg from "../../assets/couple.jpg";
import Slideshow from "../../components/SlideShow";
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";
import mandir from "../../assets/mandir.jpg";
import Image from "../../assets/Image.jpg";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useEffect } from "react";
import Sound from "../../assets/sound.mp3";

const images = [three, Image, one, two, mandir, wedVenueImg];

const HomePage = () => {
  const { load } = useGlobalAudioPlayer();
  
  useEffect(() => {
    load(Sound, {
      autoplay: true,
    });
  }, []);

  return (
    <div className="container">
      <div className="banner" style={{ backgroundImage: `url(${wedImg})` }}>
        <div className="nav">
          <b>Shashi and Ashish</b>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/images">Images</Link>
            <Link to="/videos">Videos</Link>
          </div>
        </div>
        <div className="text">
          <h3>Shashi and Ashish</h3>
          <span className="date">On 2nd March, 2024</span>
        </div>
      </div>
      <div className="section">
        <div className="us">
          <h2>
            <a name="us">Us</a>
          </h2>
          <div className="us1">
            <img src={wedManImg} alt="Man" />
            <span>Shashi is mine!</span>
          </div>
          <div className="us1">
            <img src={wedWomanImg} alt="Woman" />
            <span>Ashish is mine!</span>
          </div>
        </div>
        <div className="venue">
          <h2>
            <a name="venue">Family</a>
          </h2>
          <Slideshow images={images} />
          <p>
            In Indian culture, family is the cornerstone of society, deeply
            intertwined with every aspect of life. During a wedding, the
            blessings of family members are particularly significant. Elders,
            especially grandparents, are revered, and their aashirwad
            (blessings) are sought for a prosperous and happy married life.
            Parents, too, bestow their heartfelt blessings, offering prayers for
            health, happiness, and longevity. This deep respect for family
            blessings underscores the cultural belief that the support and good
            wishes of loved ones are essential for the couple successful and
            harmonious journey together.
          </p>
        </div>
        <footer></footer>
      </div>
    </div>
  );
};

export default HomePage;
