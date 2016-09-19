import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    return(
      <div>
        {this.props.projectList.map(function(project) {
            return <ProjectItem key={project.id} data={project}/>;
        })}
      </div>
    )
  }
}

export default Projects;
