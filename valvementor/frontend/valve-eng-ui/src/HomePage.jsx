export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Precision Engineering for a Global Future</h1>
        <p>Providing world-class valve solutions and engineering expertise to industrial leaders since 1970.</p>
      </section>

      <section className="section">
        <h2>Leading the Way in Flow Control</h2>
        <p>Valvementor specializes in high-performance valves and control systems designed for the most demanding environments, from deep-sea extraction to aerospace applications.</p>
        
        <div className="video-placeholder">
          <h3>Video Placeholder: Our Manufacturing Excellence</h3>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Ready to optimize your infrastructure?</h2>
        <p>Connect with our specialists for a custom consultation.</p>
      </div>

      <section className="section">
        <div className="grid-3">
          <div className="card">
            <h3>Global Reach</h3>
            <p>Support and distribution centers in over 45 countries ensuring timely delivery and service.</p>
          </div>
          <div className="card">
            <h3>Engineering Support</h3>
            <p>Our 24/7 technical helpdesk provides immediate troubleshooting and system design advice.</p>
          </div>
          <div className="card">
            <h3>Technical Expertise</h3>
            <p>Decades of experience in chemical, oil & gas, and renewable energy sectors.</p>
          </div>
        </div>
      </section>

      <section className="section assistance-grid">
        <div>
          <h3>Need Specialized Assistance?</h3>
          <p>Contact our engineering core team.</p>
        </div>
        <div>
          <h3>Looking for Pricing?</h3>
          <p>Request a quote through our portal.</p>
        </div>
        <div>
          <h3>Need More Information?</h3>
          <p>Download our latest technical whitepapers.</p>
        </div>
      </section>
    </div>
  );
}