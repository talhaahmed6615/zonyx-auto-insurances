import './About.css';

const About = () => {
  return (
    <div className="page-container fade-in visible">
      <div className="page-header">
        <h1>About <span className="gold-text">Zonyx</span></h1>
        <p>Premium auto insurance backed by decades of trust and cutting-edge technology.</p>
      </div>
      <div className="page-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>At Zonyx Auto Insurance, we believe that high-end vehicles and daily commuters alike deserve uncompromising protection. We blend modern technology with industry-leading coverage to give you peace of mind on every journey.</p>
          <br/>
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Premium Protection:</strong> Coverage tailored to your exact lifestyle.</li>
            <li><strong>24/7 Support:</strong> Our dedicated agents are always ready.</li>
            <li><strong>Fast Claims:</strong> Smart technology ensures lightning-fast resolutions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
