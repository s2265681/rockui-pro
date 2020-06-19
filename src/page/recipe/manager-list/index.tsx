import React from 'react'
import List from './component/List';
import './index.css'

interface Props{
}

const Recipe:React.FC<Props>=(props)=>{
    return (
        <div className="wrapper"> 
             <h2 style={{margin:20}}>编辑列表</h2>
             <List/>
        </div>
    )
}

export default Recipe;