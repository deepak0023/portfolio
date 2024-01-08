import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HobbyProject = () => {

  return (
    <motion.div className="base full_width_container"
      initial={{ x: '200vh' }}
      animate={{ x: 0 }}
      transition={{ type:'spring', delay: 1 }}
    >

      {
        <div>
          <Link to="/Home">
          <motion.button className="back_button"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type:'spring', stiffness: 120 }}
            >Back</motion.button>
          </Link>
        </div>
      }

      <div className="project_block">

        <h3>Laravel Backend</h3>
        {
          <div className="Project Section">
            <Link to={{ pathname: "https://github.com/deepak0023/laravel_backend" }} target="_blank">
              <button className="tag_button">GitHub</button>
            </Link>
            <Link to="/AboutProject" target="_blank">
              <button className="tag_button">Project details</button>
            </Link>
            <p>The project mainly covers the backend feature of laravel. The project mainly covers the backend feature of laravel. The project mainly covers the backend feature of laravel</p>
            <p>The project mainly covers the backend feature of laravel</p>
            <p>The project mainly covers the backend feature of laravel</p>
            <ul>
              <li>feature 1</li>
              <li>feature 2</li>
              <li>feature 3</li>
            </ul>
          </div>
        }

      </div>

      <div className="project_block">

        <h3>Laravel Backend</h3>
        {
          <div className="Project Section">
            <Link to={{ pathname: "https://github.com/deepak0023/laravel_backend" }} target="_blank">
              <button className="tag_button">GitHub</button>
            </Link>
            <Link to="/AboutProject" target="_blank">
              <button className="tag_button">Project details</button>
            </Link>
            <p>The project mainly covers the backend feature of laravel. The project mainly covers the backend feature of laravel. The project mainly covers the backend feature of laravel.</p>
            <p>The project mainly covers the backend feature of laravel</p>
            <p>The project mainly covers the backend feature of laravel</p>
            <ul>
              <li>feature 1</li>
              <li>feature 2</li>
              <li>feature 3</li>
            </ul>
          </div>
        }

      </div>

      <div className="project_block">

        <h3>Laravel Backend</h3>
        {
          <div className="Project Section">
            <Link to={{ pathname: "https://github.com/deepak0023/laravel_backend" }} target="_blank">
              <button className="tag_button">GitHub</button>
            </Link>
            <Link to="/AboutProject" target="_blank">
              <button className="tag_button">Project details</button>
            </Link>
            <p>The project mainly covers the backend feature of laravel . The project mainly covers the backend feature of laravel. The project mainly covers the backend feature of laravel</p>
            <p>The project mainly covers the backend feature of laravel</p>
            <p>The project mainly covers the backend feature of laravel</p>
            <ul>
              <li>feature 1</li>
              <li>feature 2</li>
              <li>feature 3</li>
            </ul>
          </div>
        }

      </div>


    </motion.div>
  )
}

export default HobbyProject;