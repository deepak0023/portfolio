import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Experience = () => {

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
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}
          >Back</motion.button>
          </Link>
        </div>
      }

      <div className="experience_block">

        <h3>Laerdal Bangalore LLP</h3>
        {
          <div className="Experience Section">
            <Link to={{ pathname: "https://laerdal.com/in/about-us/working-at-laerdal/work-in-india/" }} target="_blank">
              <button className="tag_button">Company Profile</button>
            </Link>
            <p>Being part of Laerdal we were working on a Edtech solution that that help to train the medical staffs seamlessly through customised web application .</p>
          </div>
        }

      </div>

      <div className="experience_block">

        <h3>Omniware Technologies Pvt Ltd</h3>
        {
          <div className="Project Section">
            <Link to={{ pathname: "https://omniware.in/" }} target="_blank">
              <button className="tag_button">Company Profile</button>
            </Link>
            <p>Being part of Omniware technologies we were working on a fintech solution that enables merchants to connect with the bank seamlessly through various payment integration connecting various providers with different payment modes .</p>
          </div>
        }

      </div>

      <div className="experience_block">

        <h3>Inurture Education Solutions</h3>
        {
          <div className="Project Section">
            <Link to={{ pathname: "https://inurture.co.in/" }} target="_blank">
              <button className="tag_button">Company Profile</button>
            </Link>
            <p>Being part of Inurture education solutions we were working on a edtech solution that enables effective management of student portfolio with college, professor and corporations .</p>
          </div>
        }

      </div>

      <div className="experience_block">

        <h3>Wisys Technologies Pvt Ltd (Now acquired by Pyrotech)</h3>
        {
          <div className="Project Section">
            <Link to={{ pathname: "https://pyrotechindia.com/" }} target="_blank">
              <button className="tag_button">Company Profile</button>
            </Link>
            <p>Being part of Wisys Technologies I was involved in working on IOT/Smart systems that enables effective management street lighting and office lighting with the help of pir sensor response and light brightness scheduling .</p>
          </div>
        }

      </div>

    </motion.div>
  )
}

export default Experience;