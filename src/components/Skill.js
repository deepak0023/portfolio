import React from 'react';
import { Link } from 'react-router-dom';

const Skill = () => {
  const frameworks = ['PHP', 'Laravel', 'React', 'Node', 'Jquery', 'Js', 'HTML', 'CSS'];
  const environments = ['linux', 'windows', 'composer', 'npm' ];
  const cache_systems = ['redis', 'memcache'];
  const databases = ['Mysql', 'sqlite', 'Postgres', 'Mongodb'];
  const project_management_tools = ['git', 'github', 'bitbucket', 'docker', 'aws', 'kubernetes', 'jira', 'zoho', 'teams', 'slack', 'confluence']

  return (
    <div className="base skill_container">

      {
        <div>
          <Link to="/Home">
            <button className="back_button">Back</button>
          </Link>
        </div>
      }

      <div className="skill_block">

        <h3>Languages & Frameworks Known</h3>
        {frameworks.map(framework => {
          return (
            <button className="skill_button">{ framework }</button>
          )
        })}

      </div>
      <div className="skill_block">

        <h3>Environments</h3>
          {environments.map(environment => {
          return (
              <button className="skill_button">{ environment }</button>
            )
          })}

      </div>
      <div className="skill_block">

        <h3>Caching Systems known</h3>
          {cache_systems.map(cache_system => {
            return (
              <button className="skill_button">{ cache_system }</button>
            )
          })}

       </div>
      <div className="skill_block">

        <h3>Databases Known</h3>
          {databases.map(database => {
            return (
              <button className="skill_button">{ database }</button>
            )
          })}

      </div>
      <div className="skill_block">

        <h3>Project management tools known</h3>
          {project_management_tools.map(project_management_tool => {
            return (
              <button className="skill_button">{ project_management_tool }</button>
            )
          })}

      </div>

    </div>
  )
}

export default Skill;