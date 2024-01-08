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
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}
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
            <p>Headless application created in laravel . It hosts several API's. </p>
            <br />
            <p>The follwing areas are covered in the project</p>
            <ul>
              <li>Providing API Services</li>
              <li>Authentication using JWT token</li>
              <li>Authorisation using gates and policies</li>
              <li>Model Relationship</li>
              <li>Adding dummy data using faker library</li>
              <li>Creating Postman Collection and hosting it</li>
            </ul>
          </div>
        }

      </div>


      <div className="project_block">

        <h3>Laravel Backend</h3>
        {
          <div className="Project Section">
            <Link to={{ pathname: "https://github.com/deepak0023/laravel_test" }} target="_blank">
              <button className="tag_button">GitHub</button>
            </Link>
            <p>The Project was mainly built to test out github actions . It basically hosts two API which could be tested</p>
            <br />
            <p>The follwing areas are covered in the project</p>
            <ul>
              <li>Api Creation</li>
              <li>Eloquent queries</li>
              <li>Unit testing</li>
              <li>CI using Github Actions</li>
              <li>Understanding functionality of style CI</li>
            </ul>
          </div>
        }

      </div>

      <div className="project_block">

        <h3>Laravel Advanced</h3>
        {
          <div className="Project Section">
            <Link to={{ pathname: "https://github.com/deepak0023/laravel_advanced" }} target="_blank">
              <button className="tag_button">GitHub</button>
            </Link>
            <p>The project mainly created to check some advanced features in laravel</p>
            <br />
            <p>The follwing areas are covered in the project</p>
            <ul>
              <li>Know how the pusher sends notification to frontend</li>
              <li>Check several configurations with the batch queue to run parallaly</li>
              <li>Understand the functioning of Horizon and Telescope</li>
              <li>Understand several unit testing configurations</li>
              <li>Understand service providers and service containers</li>
              <li>Creating custom package and publishing in packagist</li>
              <li>Functionality of Pint which is built on php-cs-fixer </li>
              <li>Understanding the Docker functionality</li>
            </ul>
          </div>
        }

      </div>

      <div className="project_block">

        <h3>React Project</h3>
        {
          <div className="Project Section">
            <Link to={{ pathname: "https://github.com/deepak0023/react_project" }} target="_blank">
              <button className="tag_button">React Project Github</button>
            </Link>
            <Link to={{ pathname: "https://github.com/deepak0023/react_query" }} target="_blank">
              <button className="tag_button">React Query Github</button>
            </Link>
            <Link to={{ pathname: "https://github.com/deepak0023/react_hooks" }} target="_blank">
              <button className="tag_button">React Context/Hooks Github</button>
            </Link>
            <p>The project mainly created to check different functionalities in the frontend React system</p>
            <p>As a backend developer it will help in understanding how the fronend communicates </p>
            <br />
            <p>The follwing areas are covered in the project</p>
            <ul>
              <li>Understanding how the static functional compoenet </li>
              <li>Understanding pacakge management using npm</li>
              <li>Understanding the props used to pass paramter to another componenet</li>
              <li>Understanding react context which is now used instaed of redux</li>
              <li>Understanding react hooks and also creating custom hooks</li>
              <li>Understanding Routing and fetch API with promises</li>
              <li>Understanding React query and how to cache data also debug tool</li>
              <li>Adding skeleton layout in between page loads</li>
            </ul>
          </div>
        }

      </div>

      <div className="project_block">

        <h3>Node Project</h3>
        {
          <div className="Project Section">
            <Link to={{ pathname: "https://github.com/deepak0023/node_project" }} target="_blank">
              <button className="tag_button">Node Monolith Project Github</button>
            </Link>
            <Link to={{ pathname: "https://github.com/deepak0023/node_backend" }} target="_blank">
              <button className="tag_button">Node Backend API Github</button>
            </Link>
            <Link to={{ pathname: "https://github.com/deepak0023/node_websocket" }} target="_blank">
              <button className="tag_button">Node Socket Communication Github</button>
            </Link>
            <Link to={{ pathname: "https://github.com/deepak0023/node_oauth_passport" }} target="_blank">
              <button className="tag_button">Node Oauth Passport Setup Github</button>
            </Link>

            <p>These were the things that I tried to understand how the node js works</p>
            <p>The Js provides async features and we will need to rely on it for some features . Node is created using V8 engine built on c++ </p>
            <br />
            <p>The follwing areas are covered in the project</p>
            <ul>
              <li>Understanding node and express framwork functionalities </li>
              <li>Understanding mongodb and cloud mongodb provider [Mongodb Atlas]</li>
              <li>Understanding mangoose ODM to connect to mongodb</li>
              <li>Understanding EJS templating in the frontend</li>
              <li>Understanding how to cteate API with node</li>
              <li>Understanding Sockets system using node</li>
              <li>Understanding login with google functionalty using node</li>
            </ul>
          </div>
        }

      </div>

      <div className="project_block">

        <h3>Portfolio Website</h3>
        {
          <div className="Project Section">
            <Link to={{ pathname: "https://github.com/deepak0023/portfolio" }} target="_blank">
              <button className="tag_button">Portfolio Website</button>
            </Link>

            <p>A Portfolio website was created to show my work .</p>
            <br />
            <p>The follwing areas are covered in the project</p>
            <ul>
              <li>Understanding the create a normal wesite wit react </li>
              <li>Understanding animations unsing Framer-motion using react</li>
              <li>Understanding Css functionality</li>
              <li>Understanding SVG and also animating it </li>
              <li>Drag and drop functionalities along with page slide animation features</li>
            </ul>
          </div>
        }

      </div>

    </motion.div>
  )
}

export default HobbyProject;