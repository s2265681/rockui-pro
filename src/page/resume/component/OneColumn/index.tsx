import React from "react";
import { Link } from "react-router-dom";
// import StartSpace from '../../components/StartSpace';
import { Bg } from "rockui";

import "./index.css";

interface Props {
  height?: number;
  isEdit?:boolean
}

const Index: React.FC<Props> = (props) => {
  const {height,isEdit} = props;
  return (
    <div className="one-wrapper" style={{minHeight:height}} contentEditable={isEdit}>
        <div >编辑内容区</div>
    </div>
  );
};
Index.defaultProps={
  height:300,
  isEdit:true
}

export default Index;
