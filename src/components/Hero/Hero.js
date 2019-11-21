import React from 'react';

const Hero = ({ title }) => {
  return (
    <section
      className="hero is-info is-medium has-text-centered content"
      style={{ marginBottom: '60px' }}
    >
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
