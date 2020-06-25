import React,{useState} from "react";
import ContentInfo from '../component/ContentInfo'
import { Button } from 'rockui';

interface Props {
}

const Index: React.FC<Props> = (props) => {
  let localData = localStorage.getItem('resume_content')
  let initData:any[] = localData ? JSON.parse(localData) : []

  // 导出
  const exportFile =(name:string)=>{
     let outerHTMl = document.documentElement.outerHTML;
     let urlObject = window.URL || window.webkitURL || window;
     // 创建blob对象，解析流数据
     let export_blob = new Blob([outerHTMl])
     // let export_blob = new Blob([outerHTMl],{type:'application/pdf;chartset=UTF-8'})
     // type word则为word，excel为excel
     let save_link = document.createElement("a")
     save_link.href = urlObject.createObjectURL(export_blob)
     save_link.download = name;
     fake_click(save_link)
  }
  // 点击下载
  const fake_click=(obj:HTMLAnchorElement)=>{
    let ev = document.createEvent("MouseEvents")
    ev.initMouseEvent("click",true,false,window,0,0,0,0,0,false,false,false,false,0,null)
    obj.dispatchEvent(ev);
  }
  return (
    <div className="resume_wrapper">
      <div className="box_wrapper">
        <h2>简历预览</h2>
        {initData.map((item,index)=>{
          return(
             <div key={index}>
             <ContentInfo 
                type={item.type}  
                content={initData[index].content} 
                isEdit={false}
              />
            </div>
          )
        })}
      </div>
      <div className="resumen_preview_right_wrapper">
        <Button onClick={()=>exportFile('resume.html')}>导出html文件</Button>
      </div>
    </div>
  );
};

export default Index;
