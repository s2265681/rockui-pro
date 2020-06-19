import React, { useState, useEffect } from "react";
import {Data} from './data';
import  './index.css'
import { List } from "antd/lib/form/Form";

let lineHeight:number = 48;
const Drag: React.FC<any> = (props) => {
  const [draging,setDrag] = useState(false)
  const [startPageY,setStartPageY] = useState(0)
  const [currentPageY,setCurrentPageY] = useState(0)
  const [offsetPageY,setOffsetPageY] = useState(0)
  const [draggingIndex,setDraggingIndex] = useState(-1)
  const [List,setList] = useState(Data)


  function handleMouseDown(evt: React.MouseEvent<HTMLLIElement, MouseEvent>, index:number){
      console.log(evt.pageY,'pageY')
      setDraggingIndex(index)
      setCurrentPageY(evt.pageY)
      setStartPageY(evt.pageY)
      setDrag(true)
  }



  function getLiStyle(index:number){
    if(index!==draggingIndex) return {}
     return {
       background:'#f00',
       transform:`translate(10px,${offsetPageY}px)`,
       opacity:'0.3'
     }
  }



  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    let offset = e.pageY - startPageY
    // debugger
    if(offset > lineHeight && draggingIndex < List.length){
       offset -= lineHeight;
       let newList = move(List,draggingIndex,draggingIndex+1)
       console.log(newList,'newList>>>>')
       setList(newList)
       setDraggingIndex(draggingIndex+1)
       setStartPageY(startPageY + lineHeight)
    }else if(offset < -lineHeight && draggingIndex > 0){
       offset += lineHeight;
       let newList = move(List,draggingIndex,draggingIndex-1)
       setDraggingIndex(draggingIndex-1)
       setStartPageY(startPageY - lineHeight)
    }
    setOffsetPageY(offset)
    // setOffsetPageY(e.pageY-currentPageY)
  }

  function move(arr: { id: number; title: string; content: string; }[],startIndex: number,toIndex: number){
      console.log(arr,startIndex,toIndex)
      arr = arr.slice()
      arr.splice(toIndex,0,arr.splice(startIndex,1)[0]);
      console.log(arr,'arr')
      return arr
  }

  function handleMouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    console.log('ip')
    setDrag(false)
    // setList(List)
    setStartPageY(0)
    setDraggingIndex(-1)
  }

  return (
    <div className="drag_wrapper">
      <h3>react实现拖拽</h3>
      <hr/>
      <ul>
          {List.map((el,index)=>
              <li 
                onMouseDown={(evt)=>handleMouseDown(evt,index)}
                key={el.id}
                style={getLiStyle(index)}
               > 
               {el.id} —— {el.title}—— {el.content}
             </li>)}
      </ul>

      {draging&&
        <div 
          className="show—mask"
          onMouseMove={(e)=>handleMouseMove(e)}
          onMouseUp={(e)=>handleMouseUp(e)}
        />}

    </div>
  );
};

export default Drag;
