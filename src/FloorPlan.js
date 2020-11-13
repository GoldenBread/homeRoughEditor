import React from 'react';

export default class FloorPlan extends React.Component {
    render() {
      return (
        <iframe id="floorPlanPlayground" src={this.props.src} height={this.props.height} width={this.props.width}  className="fullheight"/>
      )
    }
  }
  