import React from 'react';
import { Button } from '@material-ui/core';
import FloorPlan from './FloorPlan';
import { TestIframe } from './test_iframe';
import { HUDWrapper } from './HUDWrapper';

const Application: React.FunctionComponent = () => (
  <div className="App">
    <HUDWrapper>
      <FloorPlan src="./floorplan/" height="800px" width="800px"/>
    </HUDWrapper>
    {/* <TestIframe /> */}
    <Button id="testingButton" color="primary">Test</Button>
  </div>
)

export { Application };