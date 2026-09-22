import PageHero from './PageHero';

const CookiePolicy = () => {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie policy"
        intro="How we use cookies and similar technologies on this website."
      />

      <div className="page-body">
        <div className="container">
          <div className="prose">
          <h2>What Are Cookies?</h2>
          <p>Cookies are small pieces of data stored on your browser or device. They help us remember information about your visit to Zonyx Auto Insurance, such as your preferences and login information.</p>

          <h3>Types of Cookies We Use</h3>
          
          <h4>Essential Cookies</h4>
          <p>These cookies are necessary for the website to function properly. They enable core functionality like security, network management, and accessibility.</p>

          <h4>Performance Cookies</h4>
          <p>These cookies help us understand how visitors interact with our website. They collect information about the pages you visit, the time you spend on them, and any errors you encounter.</p>

          <h4>Functional Cookies</h4>
          <p>These cookies allow us to remember your preferences and provide personalized features. For example, we may remember your preferred language or the contents of your shopping cart.</p>

          <h4>Marketing Cookies</h4>
          <p>These cookies are used to track your activity across websites to deliver targeted advertising based on your interests and browsing history.</p>

          <h3>How We Use Cookie Information</h3>
          <ul>
            <li>To personalize your experience on our website</li>
            <li>To improve website performance and functionality</li>
            <li>To analyze website traffic and user behavior</li>
            <li>To deliver targeted advertising and marketing content</li>
            <li>To comply with legal and regulatory requirements</li>
          </ul>

          <h3>Managing Your Cookie Preferences</h3>
          <p>Most web browsers allow you to control cookies through their settings. You can choose to decline cookies, but this may affect your ability to use certain features on our website. If you choose not to accept cookies, some functionality may not work as intended.</p>

          <h3>Third-Party Cookies</h3>
          <p>We may allow third-party service providers to place cookies on your device for analytics, advertising, and other purposes. These third parties have their own privacy policies governing their use of cookies.</p>

          <h3>Cookie Retention</h3>
          <p>Session cookies are deleted when you close your browser. Persistent cookies remain on your device until they expire or you delete them manually.</p>

          <h3>Contact Us</h3>
          <p>If you have any questions about our cookie policy, please contact us at info@zonyxautoinsurance.com or call +44 7932 578446.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
