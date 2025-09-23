import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <nav className="homepage-nav">
          <div className="logo">Medchain</div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-buttons">
            <Link to="/login" className="btn btn-secondary">Login</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>The Future of Secure Medical Records</h1>
            <p>Medchain provides a secure, decentralized platform for your health data, putting you in control.</p>
            <button className="btn btn-primary btn-large">Get Started</button>
          </div>
        </section>

        <section id="features" className="features-section">
          <h2>Why Medchain?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Secure & Immutable</h3>
              <p>Leveraging blockchain technology, your health records are tamper-proof and stored with the highest level of security.</p>
            </div>
            <div className="feature-card">
              <h3>Patient-Controlled Access</h3>
              <p>You have the ultimate say. Grant or revoke access to your medical data to doctors, hospitals, or researchers with a single click.</p>
            </div>
            <div className="feature-card">
              <h3>Seamless & Interoperable</h3>
              <p>Your health history is unified in one place, accessible by any authorized provider, ensuring better and faster care.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="homepage-footer">
        <p>&copy; {new Date().getFullYear()} Medchain. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;