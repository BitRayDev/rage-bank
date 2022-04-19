import React from 'react';

import './Splitter.scss';

export interface SplitterProps {
  orientation?: "horizontal" | "vertical",
  thickness?: string
}

const Splitter = (props: SplitterProps) => {

  let style: React.CSSProperties = {}
  if(props.orientation === "vertical") {
    style = {
      width: props.thickness
    }
  } else {
    style = {
      height: props.thickness
    }
  }

  return (
    <div className='splitter' style={style}/>
  );
};
export default Splitter;
