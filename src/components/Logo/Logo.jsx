import React from 'react';
import './logo.css';
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
      <Link to="/"><img className="logo" src="logo.PNG" alt="A la tabla logo" /></Link>
  );
};

export default Logo;
