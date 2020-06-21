import React,{useState} from "react";
import { Link } from "react-router-dom";
// import StartSpace from '../../components/StartSpace';
import { Bg } from "rockui";
import TwoColumn from '../component/TwoColumn';
import OneColumn from '../component/OneColumn';
import LabelBar from '../component/LabelBar'
import "./index.css";

interface Props {
  name: string;
}

const Index: React.FC<Props> = (props) => {
  let localData = localStorage.getItem('resume_content')
  let initData:any[] = localData ? JSON.parse(localData) : []
  console.log(initData,'initData')
  const [content, setContent] = useState<any[]>(initData)
  return (
    <div className="resume_wrapper">
      <div className="box_wrapper">
        <h2>简历预览</h2>
        {content.map((item,index)=>{
          return(
             <div key={index}>
                  {item.type=='one-column' && <OneColumn isEdit={false}/>}
                  {item.type=='two-column' && <TwoColumn isEdit={false} />}
                  {item.type=='nav-bar' && <LabelBar  isEdit={false} />}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Index;
