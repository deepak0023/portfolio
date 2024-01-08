import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home container">
      <h2>
        Welcome to my portfolio
      </h2>
      <Link to="/experience">
        <button>
          Experience
        </button>
      </Link>
      <Link to="/hobby_projects">
        <button>
          Hobby Project
        </button>
      </Link>
      <Link to="/skill">
        <button>
          Skills Known
        </button>
      </Link>
      <Link to="/personal_info">
        <button>
          Personal Information
        </button>
      </Link>
    </div>
  )
}

export default Home;