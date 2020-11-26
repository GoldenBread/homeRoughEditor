import React from 'react';
import FloorPlan from './FloorPlan';
import { HUDWrapper } from './HUDWrapper';

const Application: React.FunctionComponent = () => (
  <div className="App">
    <HUDWrapper>
      <FloorPlan src="./floorplan/" height="100%" width="100%"/>
    </HUDWrapper>
  </div>
)

export { Application };