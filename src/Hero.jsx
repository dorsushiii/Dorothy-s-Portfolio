import "./Hero.css"; // Import the CSS file if you're using separate styles

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer creating amazing web experiences.</p>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
