import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {

  return (
    <div className="base full_width_container">

      {
        <div>
          <Link to="/Home">
            <button className="back_button">Back</button>
          </Link>
        </div>
      }

      <div className="project_block">

        <h3>Laravel Backend</h3>
        {
          <div className="Project Section">
            <Link to={{ pathname: "https://github.com/deepak0023/laravel_backend" }} target="_blank">
              <button className="tag_button">Company Experience</button>
            </Link>
            <Link to="/AboutProject" target="_blank">
              <button className="tag_button">Project Link</button>
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


    </div>
  )
}

export default Experience;