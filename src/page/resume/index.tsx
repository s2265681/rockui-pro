import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bg, Button, Icon } from "rockui";
import ContentInfo from "./component/ContentInfo";
import { Menu } from "rockui";
import "./index.css";

const { MenuItem, SubMenu } = Menu;

interface Props {
  name: string;
}
const Index: React.FC<Props> = (props) => {
  let localData = localStorage.getItem("resume_content");
  let initData: any[] = localData ? JSON.parse(localData) : [];
  const [content, setContent] = useState<any[]>(initData);
  let _id = content.length;
  const handleChoose = (type?: string) => {
    let data = { type: type, typeId: _id++ };
    setContent([...content, data]);
  };

  const handleContent = (type: string, id?: number, valNode?: any) => {
    let index: number = content.findIndex(
      (item: { typeId: number }) => item.typeId === id
    );
    if (type === "two-column") {
      let leftVal = valNode.children[0].innerText;
      let rightVal = valNode.children[1].innerText;
      content[index].content = [leftVal, rightVal];
    } else {
      content[index].content = [valNode.innerText];
    }
    setContent([...content]);
  };

  useEffect(() => {
    localStorage.setItem("resume_content", JSON.stringify(content));
  }, [content]);

  const handleDelete = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setContent([...content.filter((item, idx) => idx !== index)]);
  };

  return (
    <div className="resume_wrapper">
      <div className="resume_left_wrapper">
        <Menu mode="vertical" defaultIndex={"0"}>
          <SubMenu title="选择布局">
            <MenuItem>
              <Button onClick={() => handleChoose("one-column")}>
                一栏布局
              </Button>
            </MenuItem>
            <MenuItem>
              <Button onClick={() => handleChoose("two-column")}>
                两栏布局
              </Button>
            </MenuItem>
            <MenuItem>
              <Button onClick={() => handleChoose("label-bar")}>
                LabelBar
              </Button>
            </MenuItem>
          </SubMenu>
          <SubMenu title="拖拽组件">
            <MenuItem>
              <Button onClick={() => handleChoose("one-column")}>
                图片组件
              </Button>
            </MenuItem>
            <MenuItem>
              <Button onClick={() => handleChoose("two-column")}>时间轴</Button>
            </MenuItem>
            <MenuItem>
              <Button onClick={() => handleChoose("label-bar")}>。。。</Button>
            </MenuItem>
          </SubMenu>
          <MenuItem key={2}></MenuItem>
        </Menu>
      </div>
      <div className="resume_right_wrapper">
        <div className="resume_edit_wrapper">
          编辑区
          {content.map((item, index) => {
            return (
              <div key={item.typeId}>
                <a
                  onClick={(e) => {
                    handleDelete(e, index);
                  }}
                  className="resume_delete_btn"
                >
                  <Icon icon="times-circle" size="1x" />
                </a>

                <ContentInfo
                  type={item.type}
                  onChange={(valNode) =>
                    handleContent(item.type, item.typeId, valNode)
                  }
                  content={content[index].content}
                />
              </div>
            );
          })}
        </div>
        <div className="btn_preview">
          <Link to="/resume/preview">
            <Button btnType="primary">预览</Button>
          </Link>
          <br />
          <Button btnType="primary" onClick={() => setContent([])}>
            清空
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
