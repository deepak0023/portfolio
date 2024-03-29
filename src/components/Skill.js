import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Skill = () => {
  const frameworks = ['PHP', 'Laravel', 'React', 'Node', 'Jquery', 'Js', 'HTML', 'CSS'];
  const environments = ['linux', 'windows', 'composer', 'npm' ];
  const cache_systems = ['redis', 'memcache'];
  const databases = ['Mysql', 'sqlite', 'Postgres', 'Mongodb'];
  const project_management_tools = ['git', 'github', 'bitbucket', 'docker', 'aws', 'kubernetes', 'jira', 'zoho', 'teams', 'slack', 'confluence']

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

      <div className="skill_block">

        <h3>Languages & Frameworks Known</h3>
        {frameworks.map(framework => {
          return (
            <button className="tag_button">{ framework }</button>
          )
        })}

      </div>
      <div className="skill_block">

        <h3>Environments</h3>
          {environments.map(environment => {
          return (
              <button className="tag_button">{ environment }</button>
            )
          })}

      </div>
      <div className="skill_block">

        <h3>Caching Systems known</h3>
          {cache_systems.map(cache_system => {
            return (
              <button className="tag_button">{ cache_system }</button>
            )
          })}

       </div>
      <div className="skill_block">

        <h3>Databases Known</h3>
          {databases.map(database => {
            return (
              <button className="tag_button">{ database }</button>
            )
          })}

      </div>
      <div className="skill_block">

        <h3>Project management tools known</h3>
          {project_management_tools.map(project_management_tool => {
            return (
              <button className="tag_button">{ project_management_tool }</button>
            )
          })}

      </div>

    </motion.div>
  )
}

export default Skill;