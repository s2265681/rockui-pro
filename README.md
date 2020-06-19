
# 使用TypeScript结合React打造Ui组件库

## 项目初始化
npx create-react-app rockui --typescript
npx和npm比较，不用全局安装项目，会拉最新的库初始化项目后自动删除，可以直接path到node_module/.bin中执行库，代替拉npm run package.js / script中的sheel脚本

## 什么是React Hook
- react hook是react16.8带来的全新特性，即将替代class组件的写法
- 没有破坏性改动
- 完全可选
- 百分之百向后兼容，没有计划从React移除class，可以渐进式的尝试使用Hook

## 为什么使用hooks，解决了什么问题
1、解决了组件很难复用状态逻辑
2、复杂组件难以理解，尤其是生命周期函数，容易造成逻辑不一致，不清晰
3、React组件一直是函数，使用Hook完全拥抱函数

## React-Hooks
是什么？特殊的函数
什么时候使用useState Hook？
下面实现一个点赞组件
```js
import React,{useState} = 
const LikeButton : React.FC = () => {
    const [obj,setLikeObj] = useState({like:0,on:true});
    return(
        <>
        <button onClick={()=>setLike({like: obj.like+1, on:obj.on})}>
            {like} 👍
        </button>
         <button onClick={()=>setLike({like: obj.like+1, on:!obj.on})}>
           {obj.on? "ON":"OFF"}
        </button>
        </>
    ) 
}
export default LikeButton;
```


<!-- 随机获取网络请求 -->
<!-- https://dog.ceo/api/breeds/image/random -->


# 是一种模式，react中
高阶组件是一个函数，接受一个组件作为参数，返回一个新的组件

把一个组件转化为另一个组件

区别： 多了一些属性供以后使用 。

HOC的弊端，需要添加节点，难以理解，HOC概念不好理解
数据不明白哪里来


自定义hook解决这个问题


# useRef
解决了什么问题

组件中的state，问题是什么

在任意一次渲染中，state和props是独立的
验证，点击事件中加一个延迟产生alert(count)

怎么让不同的渲染中的state产生联系呢

-----》 useRef 产生了

// {current:0}
// ref在不同渲染中拿到的是最终的值
修改ref是不会触发再次渲染的
如果需要触发更新，需要useEffect配合


## 安装react-router

cnpm i @types/react-router-dom
npm i react-router-dom

配置路由懒加载
。。。。

## 安装less
npm install less-loader less --save

npm run eject

[tip](https://www.jianshu.com/p/d5dd8b108461)


## 默认为sass
 cnpm i  node-sass


## 打包部署
修改package.json
添加"homepage": ".",

## port
port 3001


## 项目集 
[服务器地址](http://project.rockshang.cn/items/)
[github地址](https://s2265681.github.io/code/React_Hook_UI/HookWithTypeScript/build/index.html)
