import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div className="home container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
    >
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
    </motion.div>
  )
}

export default Home;