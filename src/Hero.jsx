import "./Hero.css"; // Import the CSS file
import heroImage from "./assets/me-formal.jpg"; // Import your image

const Hero = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      {/* Left Side: Text Content */}
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer creating amazing web experiences.</p>
        <button className="hero-btn" onClick={handleScroll}>Get Started</button>
      </div>

      {/* Right Side: Hero Image */}
      <div className="hero-image">
        <img src={heroImage} alt="Hero Section" />
      </div>
    </section>
  );
};

export default Hero;
