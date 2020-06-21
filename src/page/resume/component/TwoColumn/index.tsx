import React from "react";
import { Link } from "react-router-dom";
// import StartSpace from '../../components/StartSpace';
import { Bg } from "rockui";

import "./index.css";

interface Props {
  height?:number;
  isEdit?:boolean
}

const Index: React.FC<Props> = (props) => {
  const {height,isEdit} = props;
  return (
    <div className="two_wrapper" style={{minHeight:height}}>
      <div className="left_wrapper" contentEditable={isEdit}>left</div>
      <div className="right_wrapper" contentEditable={isEdit}>right</div>
    </div>
  );
};

Index.defaultProps={
   height:300,
   isEdit:true
}

export default Index;
