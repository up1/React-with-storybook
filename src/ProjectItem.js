import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return(
      <div>
          <img src={this.props.data.image} width="100" role="presentation"/>
          <h3>{this.props.data.name}</h3>
        </div>
    )
  }
}

export default ProjectItem;
