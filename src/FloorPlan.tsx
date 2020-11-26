import React from 'react';

export interface FloorPlanProps {
  src: string;
  width: string;
  height: string;
}

export const FloorPlan: React.FunctionComponent<FloorPlanProps> = ({
  src,
  width,
  height
}: FloorPlanProps) => {
    return (
      <iframe id="floorPlanPlayground" src={src} height={height} width={width}  className="fullheight"/>
    )
  }
  