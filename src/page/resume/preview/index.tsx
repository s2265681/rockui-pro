import React,{useState} from "react";
import ContentInfo from '../component/ContentInfo'

interface Props {
  name: string;
}

const Index: React.FC<Props> = (props) => {
  let localData = localStorage.getItem('resume_content')
  let initData:any[] = localData ? JSON.parse(localData) : []
  return (
    <div className="resume_wrapper">
      <div className="box_wrapper">
        <h2>简历预览</h2>
        {initData.map((item,index)=>{
          return(
             <div key={index}>
             <ContentInfo type={item.type}  content={initData[index].content} isEdit={false}/>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Index;
