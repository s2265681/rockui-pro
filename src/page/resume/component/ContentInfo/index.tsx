import React,{useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import "./index.css";

interface Props {
  type?:string;
  // height?:number;
  content?:string;
  isEdit?:boolean;
  onChange?:(value:string)=>void
}

const Index: React.FC<Props> = (props) => {
  const domRef= useRef<HTMLDivElement>(null)
  const {type,content,isEdit,onChange} = props;

  useEffect(() => {
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

 console.log(type,'type++++');

  return (
    <div onBlur={(e)=>handleChange(e)}>
          {type==='label-bar' && <div className="label_wrapper"  ref={domRef}  style={{minHeight:100}} contentEditable={isEdit}>
              {content}
          </div>}

          {type==='one-column' && <div className="one-wrapper" ref={domRef} style={{minHeight:300}} contentEditable={isEdit}>
               {content}
          </div>}
          
          {type==='two-column' && <div className="two_wrapper" style={{minHeight:300}}>
              <div className="left_wrapper" ref={domRef}  contentEditable={isEdit}>left</div>
              <div className="right_wrapper" ref={domRef}  contentEditable={isEdit}>right</div>
          </div>}
    </div>
  
  );
};

Index.defaultProps={
  //  height:100,
   content:'输入标题',
   isEdit:true
}

export default Index;
