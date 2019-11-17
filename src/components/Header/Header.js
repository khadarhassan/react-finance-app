import React from 'react';
import './header.scss';

const Header = ({ title }) => {
  return (
    <header className="hero is-primary has-text-centered content">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
