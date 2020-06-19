import React,{useState,useEffect} from "react";
import Page2 from "../page2";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import _ from 'lodash';

import "./index.css";
import {
  Button,
  Alert,
  Table,
  Icon,
  Menu,
  Tabs,
  Spider,
  Spin,
  Animation,
  Commission
} from "rockui";
// const {AlertType}  = Alert;
// import {Table} from "antd";
const { MenuItem, SubMenu } = Menu;
const { TabItem } = Tabs;

interface Props {}

const columns: any = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    width: 100,
  },
  {
    title: "图片",
    dataIndex: "Pic",
    key: "Pic",
    width: 200,
    render: (t: string) => (
      <img style={{ width: 150, height: 150 }} src={t} alt={t}></img>
    ),
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    width: 200,
    sorter: {
      compare: (a: { age: number }, b: { age: number }) => a.age - b.age,
    },
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
    width: 300,
  },
  {
    title: "类型",
    dataIndex: "type",
    key: "type",
    // width: 100,
    render(t: number, r: any, i: any) {
      return (
        <span style={{ color: "#f00" }}>
          {t === 1 ? "蔬菜" : t === 2 ? "水果" : "主食"}
        </span>
      );
    },
  },
];

const dataSource = [
  {
    id: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
    type: 1,
    description: "胡彦斌是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
  {
    id: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
    type: 2,
    description: "胡彦祖是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
  {
    id: "3",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
  {
    id: "4",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
  {
    id: "5",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
  {
    id: "6",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
    description: "王祖蓝是西湖区湖底公园1号的",
  },
  {
    id: "7",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
  {
    id: "8",
    name: "王祖蓝",
    age: 22,
    address: "西湖区湖底公园1号",
    type: 3,
    description: "王祖蓝是西湖区湖底公园1号的",
    Pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",
  },
];


const commissionData = [
  {
    id: 1,
    title: "",
    content: ""
  }
]

const Home: React.FC<Props> = (props) => {
  let localdate:string =localStorage.getItem('PLANDATA')||"";
  let localdateArr:Array<any> =localdate&&JSON.parse(localdate) || [];
  let initDate = localdateArr.length!==0?localdateArr:commissionData||[];
  const [planDate, setPlanDate] = useState(initDate)

  useEffect(()=>{
    localStorage.setItem("PLANDATA",JSON.stringify(planDate))
  },[planDate])

  console.log(planDate,'planDate>>>');
  return (
    <Animation>
        <div className="home_wrapper">
          首页
          <br />
          <h3>使用rockui组件测试</h3>
          <Menu defaultIndex={"0"} onSelect={(index) => console.log(index)}>
            <MenuItem>项目1</MenuItem>
            <MenuItem>项目2</MenuItem>
            <MenuItem disabled>项目3</MenuItem>
            <SubMenu title="dropdown">
              <MenuItem>dropdown1</MenuItem>
              <MenuItem>dropdown2</MenuItem>
              <MenuItem>dropdown3</MenuItem>
            </SubMenu>
          </Menu>
          <br />
          <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
            <TabItem label="Button">
                <Button btnType="primary" size="lg">
                    primary-btn
                </Button>
                  <br />
                  <br />
                <Button btnType="danger" size="lg">
                    danger-btn
                </Button>
                  <br />
                  <br />
                  <Button btnType="danger" size="lg">
                  danger-btn
                  </Button>
                  <br />
                <br />
                <Button btnType="link" size="lg">
                  link-btn
                </Button>
            </TabItem>
            <TabItem label="Alert">
                  <Alert message="Alert Success"/>
                  <Alert message="Alert Success" type="info"/>
                  <Alert message="Alert Success" type="error"/>
            </TabItem>
            <TabItem label="Icon">
                     <a href="https://fontawesome.com/icons?d=gallery" target="_blank">您可以使用这里面的icon</a>
                     <br/>
                     <br/>
                    <Icon icon="coffee" theme="warning" size="2x" />
                    <br />
                    <br/>
                    <Icon icon="angle-down" theme="info" size="2x" />
                    <br />
                    <br/>
                    <Icon icon="bell-slash" theme="success" size="2x" />
                    <br />
                    <br/>
                    <Icon icon="allergies" theme="danger" size="2x" />
                    <br />
                    <br/>
                    <Icon icon="ambulance" theme="success" size="3x" />
            </TabItem>
          </Tabs>
          
          <Spider autoplay={false} initIdx={0} deployTime={3000} height={400}>
            <img
              src="http://img3.imgtn.bdimg.com/it/u=1553709961,3652782060&fm=26&gp=0.jpg"
              alt="图一"
            />
            <img
              src="http://img4.imgtn.bdimg.com/it/u=3471735586,1899139408&fm=26&gp=0.jpg"
              alt="图二"
            />
            <img
              src="http://img2.imgtn.bdimg.com/it/u=1303806583,1572175195&fm=26&gp=0.jpg"
              alt="图三"
            />
          </Spider>
          <br />
          <Table
            dataSource={dataSource}
            columns={columns}
          />
          <div style={{display:'flex'}}>
            <Commission 
              dataSource={planDate} 
              isHandle 
              theme="info"
              onChange={(e,itemId,_newData)=>{
                setPlanDate(_.cloneDeep(_newData))
              }}
              isEditable
             />
          </div>
        </div>
        </Animation>
  );
};

export default Home;
