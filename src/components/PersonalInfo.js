import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PersonalInfo = () => {
  const languages = ['English', 'Kannada', 'Malayalam'];

  return (
    <motion.div className="base container"
      initial={{ x: '200vh' }}
      animate={{ x: 0 }}
      transition={{ type:'spring', delay: 1 }}
    >

      <h3>Languages Known</h3>
      <ul>
        {languages.map(language => {
          return (
            <motion.li key={language}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="active">{ language }</span>
            </motion.li>
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
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}
          >Back</motion.button>
          </Link>
        </div>
      }

    </motion.div>
  )
}

export default PersonalInfo;