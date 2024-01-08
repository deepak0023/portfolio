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
        <motion.button
            whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
        >
          Experience
        </motion.button>
      </Link>
      <Link to="/hobby_projects">
      <motion.button
            whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
        >
          Hobby Project
        </motion.button>
      </Link>
      <Link to="/skill">
      <motion.button
            whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
        >
          Skills Known
        </motion.button>
      </Link>
      <Link to="/personal_info">
      <motion.button
            whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
        >
          Personal Information
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;