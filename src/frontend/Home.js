import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import logo from '../assets/logo.jpeg';
import Pic1 from '../assets/Pic1.jpeg';
import Pic2 from '../assets/Pic2.jpeg';
import Pic3 from '../assets/Pic3.jpeg'; // Key Features
import Pic4 from '../assets/Pic4.png'; // Lens Options
import Team1 from '../assets/Team1.jpeg';
import Team2 from '../assets/Team2.jpeg';
import Team3 from '../assets/Team3.png';
import Team4 from '../assets/Team4.jpeg';
import Pic5 from '../assets/Pic5.jpeg'; // Visual Resources
import Pic6 from '../assets/Pic6.jpeg';
import Pic7 from '../assets/Pic7.png';
import Part1 from '../assets/Part1.png';
import Part2 from '../assets/Part2.png';
import Part3 from '../assets/Part3.png';
import Part4 from '../assets/Part4.png';
import Part5 from '../assets/Part5.png';
import Part6 from '../assets/Part6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const partnerBenefits = [
    {
      title: 'Be Part of a Global Mission',
      desc: 'Join a growing network improving access to eyecare worldwide.'
    },
    {
      title: 'Maximize Your Earnings',
      desc: 'Enjoy competitive margins with a profitable business model.'
    },
    {
      title: 'Attract More Customers',
      desc: 'Offer a unique service that increases footfall and brand recognition.'
    },
    {
      title: 'Receive Comprehensive Expert Training',
      desc: 'Get the knowledge and support you need to succeed.'
    },
    {
      title: 'Access Marketing Support',
      desc: 'Benefit from our proven strategies to grow your business.'
    },
    {
      title: 'Sell High–Quality Glasses',
      desc: 'Provide durable, low-cost glasses that make a tangible difference to lives.'
    }
  ];

  const impacts = [
    {
      stat: '100K+',
      description: 'Glasses distributed worldwide',
      quote: 'These glasses changed my life. I can finally see the board at school!',
      author: 'Amina, Student in Kenya'
    },
    {
      stat: '8',
      description: 'Countries of operation',
      quote: 'Dot Glasses made it easy for us to bring vision care to our rural community.',
      author: 'Dr. Rajesh, Partner in India'
    },
    {
      stat: '95%',
      description: 'Customer satisfaction rate',
      quote: 'People love the quality and affordability of these glasses.',
      author: 'Maria, Distributor in Peru'
    }
  ];

  return (
        <><div>
      {/* Hero Section */}
      <div className="home-container">
        <div className="hero-text">
          <span className="tagline">Revolutionary Eyecare</span>
          <h1>Revolutionizing access to <span className="highlight">Eyecare.</span></h1>
          <p className="subtext"><em>Innovative, Quality, and Affordable Eyecare Solutions for All</em></p>
          <p className="description">
            1 billion people around the world struggle with poor eyesight because they can’t afford glasses or don’t have access to eye care services. That’s where we come in.
          </p>
          <a href="/about">
          <button className="cta-button">Explore Here</button>
          </a>
        </div>
        <div className="hero-image">
          <img src={Pic1} alt="Eyecare woman" />
        </div>
      </div>

      {/* Who We Are */}
      <div className="about-section">
        <h2 className="about-heading">Who we are<span className="dot">.</span></h2>
        <p className="about-subheading">Improving lives with Innovative patented and Adjustable Eyeglasses.</p>
        <p className="about-text">
          Dot Glasses is a <strong>global social enterprise</strong> on a mission to revolutionize access to eye care worldwide. Currently operating in <strong>8 countries</strong>, we address the global vision crisis with cost-effective distribution models.
        </p>
        <p className="about-text">
          Whether it’s a student struggling to see the blackboard, or an organization seeking to improve community eye care access.
        </p>
        <p className="about-highlight"><strong>Dot Glasses provides a simple and life–changing solution.</strong></p>
      </div>

      {/* Carousel */}
      <div className="carousel-wrapper" style={{ maxWidth: '600px', margin: '40px auto' }}>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {[Team1, Team2, Team3, Team4].map((img, i) => (
            <div key={i}>
              <img src={img} alt={`Eyecare ${i + 1}`} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Features Section */}
      <div className="features-container">
        <div className="feature-card">
          <h2 className="feature-heading">Key Features<span className="dot">.</span></h2>
          <img src={Pic3} alt="Key Features" className="feature-image" />
          <ul>
            <li><strong><span style={{ color: '#ff6b00', fontWeight: 'bold', marginRight: '10px' }}>✔</span>Patented Adjustable Glasses:</strong> One-size-fits-all design.</li>
            <li><strong><span style={{ color: '#ff6b00', fontWeight: 'bold', marginRight: '10px' }}>✔</span>Durable & Stain-Resistant:</strong> Built for tough conditions.</li>
            <li><strong><span style={{ color: '#ff6b00', fontWeight: 'bold', marginRight: '10px' }}>✔</span>Ultra-Affordable & High-Quality:</strong> Modular and cost-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;efficient.</li>
          </ul>
        </div>
        <div className="feature-card">
          <img src={Pic4} alt="Lens Options" className="feature-image" />
          <h2 className="feature-heading">Customizable Lens Options for Every Need</h2>
          <ul>
            <li><strong><span style={{ color: '#ff6b00', fontWeight: 'bold', marginRight: '10px' }}>✔</span>Single Vision Lenses:</strong> Near or distance correction.</li>
            <li><strong><span style={{ color: '#ff6b00', fontWeight: 'bold', marginRight: '10px' }}>✔</span>Photochromic Lenses:</strong> Light-adaptive indoor/outdoor.</li>
            <li><strong><span style={{ color: '#ff6b00', fontWeight: 'bold', marginRight: '10px' }}>✔</span>Blue Light Blocking Lenses:</strong> Ideal for screen use.</li>
          </ul>
        </div>
      </div>

      {/* Partner With Us */}
      <div className="partner-section" style={{ display: 'flex', flexWrap: 'wrap', margin: '50px 0', gap: '30px', padding: '0 20px' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{
            display: 'inline-block',
            backgroundColor: '#f97316',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '20px',
          }}>Partner With Us.</h2>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {partnerBenefits.map((item, index) => (
              <li key={index} style={{ display: 'flex', marginBottom: '15px' }}>
                <span style={{ color: '#ff6b00', fontWeight: 'bold', marginRight: '10px' }}>●</span>
                <div><strong>{item.title}:</strong> {item.desc}</div>
              </li>
            ))}
          </ul>

          <Link to = '/contact'>
          <button
            style={{
              backgroundColor: isHovered ? '#063d12' : '#ff6a00',
              color: 'white',
              padding: '12px 20px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '20px'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Become a distributor
          </button>
          </Link>
        </div>

        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
          <img src={Pic2} alt="Partner" style={{ maxWidth: '100%', borderRadius: '8px' }} />
        </div>
      </div>

      {/* Our Impact */}
      <div className="homepage-container">
        <h4 className="subheading">Guaranteed Accountability</h4>
        <h2 className="heading">Our Impact.</h2>
        {impacts.map((impact, index) => (
          <div key={index} className="impact-item">
            <div>
              <div className="impact-stat">{impact.stat}</div>
              <div className="impact-description">{impact.description}</div>
            </div>
            <blockquote className="impact-quote">“{impact.quote}”</blockquote>
            <div className="impact-author">- {impact.author}</div>
          </div>
        ))}
      </div>

      {/* Visual Resources */}
      <section className="visual-resources">
        <div className="resources-header">
          <div>
            <p className="resources-label">Visual resources</p>
            <h2 className="resources-title">
              Valuable resources for people looking to partner with <span className="dot-highlight">Dot Glasses.</span>
            </h2>
          </div>
          <a href="https://www.dotglasses.org" target="_blank" rel="noopener noreferrer">
                <button className="resources-button">View all articles</button>
          </a>
        </div>
        <div className="resources-grid">
          <div className="resource-card">
            <img src={Pic5} alt="Article 1" />
            <p className="resource-tag">dotglasses</p>
            <h3 className="resource-heading">How Dot Glasses Are Changing Lives with Clear Vision</h3>
          </div>
          <div className="resource-card">
            <img src={Pic6} alt="Article 2" />
            <p className="resource-tag">dotglasses</p>
            <h3 className="resource-heading">How Dot Glasses Work</h3>
          </div>
          <div className="resource-card">
            <img src={Pic7} alt="Article 3" />
            <p className="resource-tag">dotglasses</p>
            <h3 className="resource-heading">Bringing Clear Vision to Those Who Need It Most</h3>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="our-partners">
        <h2 className="partners-title">Our Partners</h2>
        <div className="partners-logos">
          <img src={Part1} alt="Partner 1" />
          <img src={Part2} alt="Partner 2" />
          <img src={Part3} alt="Partner 3" />
          <img src={Part4} alt="Partner 4" />
          <img src={Part5} alt="Partner 5" />
          <img src={Part6} alt="Partner 6" />
        </div>
      </section>
    </div><footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logo} alt="Dot Glasses Logo" className="footer-logo" />
            <p>Empowering vision for all.</p>
          </div>

          <div className="footer-center">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/products">Product</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/our-team">Our Team</a></li>
              <li><a href="/our-impact">Our Impact</a></li>
              <li><a href="/wherewework">Where We Work</a></li>
              <li><a href="/faqs">Faqs</a></li>
              <li><a href="/lens-concept">Lens Concept</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-right">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/dotglasses/"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://x.com/dotglasses"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com/dotglasses_international/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://ke.linkedin.com/company/dotglasses"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dot Glasses. All rights reserved.</p>
        </div>
      </footer></>
  );
};

export default Home;
