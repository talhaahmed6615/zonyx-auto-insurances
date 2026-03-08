import './About.css';

const Contact = () => {
  return (
    <div className="page-container fade-in visible">
      <div className="page-header">
        <h1>Contact <span className="gold-text">Us</span></h1>
        <p>We are here to help you 24/7. Reach out to our dedicated support team.</p>
      </div>
      <div className="page-content">
        <div className="about-text">
          <h2>Get in Touch</h2>
          <p>Whether you need a new quote, want to update your policy, or need to file a claim, our team is standing by.</p>
          <br/>
          <ul>
            <li><strong>Email:</strong> support@zonyxinsurance.com</li>
            <li><strong>Phone:</strong> +44 800 123 4567</li>
            <li><strong>Office:</strong> 123 Premium Way, London, UK</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
