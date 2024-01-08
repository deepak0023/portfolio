import React from 'react';
import { Link } from 'react-router-dom';

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
            <button className="back_button">Back</button>
          </Link>
        </div>
      }

    </div>
  )
}

export default PersonalInfo;