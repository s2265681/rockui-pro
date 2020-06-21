import React,{useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import "./index.css";

interface Props {
  height?:number;
  content?:string;
  isEdit?:boolean;
  onChange?:(value:string)=>void
}

const Index: React.FC<Props> = (props) => {
  const domRef= useRef<HTMLDivElement>(null)
  const {height,content,isEdit,onChange} = props;

  useEffect(() => {
    console.log(domRef,'domRef')
    if(domRef&&domRef.current){
       console.log(domRef.current.innerHTML);
    }
  },[])

 const handleChange=(e: React.FormEvent<HTMLDivElement>)=>{
      if(domRef&&domRef.current){
        let value = domRef.current.innerHTML;
        onChange&&onChange(value)
      }
 }

  return (
    <div className="label_wrapper" style={{height:height}} onBlur={(e)=>handleChange(e)}  ref={domRef} contentEditable={isEdit}>
             {content}
    </div>
  );
};

Index.defaultProps={
   height:100,
   content:'输入标题',
   isEdit:true
}

export default Index;
