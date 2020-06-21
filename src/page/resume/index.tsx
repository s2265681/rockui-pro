import React,{useState,useEffect} from 'react'
import {  Link } from "react-router-dom";
// import StartSpace from '../../components/StartSpace';
import { Bg, Button } from 'rockui';
import TwoColumn from './component/TwoColumn';
import OneColumn from './component/OneColumn';
import LabelBar from './component/LabelBar'
import ContentInfo from './component/ContentInfo'

import './index.css';
import { findIndex } from 'lodash';

interface Props{
   name:string
}

const Index:React.FC<Props>=(props)=>{
    let localData = localStorage.getItem('resume_content')
    let initData:any[] = localData ? JSON.parse(localData) : []
    console.log(initData,'initData')
    const [content, setContent] = useState<any[]>(initData)
    let _id = content.length;
    const handleChoose=(type?:string)=>{
       let data = {type:type,typeId:_id++ }
       setContent([...content,data])
    }

    const handleContent=(type:string, id?: number , val?:string)=>{
         console.log(content,type,val)
         let index:number = content.findIndex((item: { typeId: number; })=>item.typeId===id)
         content[index].content = val
         setContent([...content])
    }


    useEffect(() => {
        localStorage.setItem('resume_content',JSON.stringify(content))
    }, [content])

    return (
        <div className="resume_wrapper">
            <div className="resume_left_wrapper">
                 选择布局
                 <Button onClick={()=>handleChoose('one-column')}>一栏布局</Button><br/>
                 <Button onClick={()=>handleChoose('two-column')}>两栏布局</Button><br/>
                 <Button onClick={()=>handleChoose('label-bar')}>LabelBar</Button><br/>
            </div>
            <div className="resume_right_wrapper">
                  <div  className="resume_edit_wrapper">
                      编辑区
                      {content.map((item,index)=>{
                          return(
                             <div key={item.typeId}>
                               <ContentInfo type={item.type} onChange={(val)=>handleContent('label-bar', item.typeId ,val)} content={content[index].content}/>
                            </div>
                          )
                      })}
                  </div>
                  <div className="btn_preview">
                   <Link to="/resume/preview">
                       <Button btnType="primary" >预览</Button>
                    </Link>
                    <br/>
                    <Button btnType="primary" onClick={()=>
                        setContent([])
                    }>清空</Button>
                  </div>
            </div>
        </div>
    )
}

export default Index;