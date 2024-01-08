import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PersonalInfo = () => {
  const languages = ['English', 'Kannada', 'Malayalam'];

  return (
    <div className="base container">

      <h3>Languages Known</h3>
      <ul>
        {languages.map(language => {
          return (
            <li key={language}>
              <span className="active">{ language }</span>
            </li>
          )
        })}
      </ul>

      {
        <div className="personal_info">
          <Link to="/Home">
          <motion.button className="back_button"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type:'spring', stiffness: 120 }}
            >Back</motion.button>
          </Link>
        </div>
      }

    </div>
  )
}

export default PersonalInfo;