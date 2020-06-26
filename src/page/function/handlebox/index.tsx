import React, { useState } from "react";
import Mask from "../../../components/Mask";
interface Props {}

const Index: React.FC<Props> = (props) => {
  const [Point, setPoint] = useState({ x: 0, y: 0 });
  const [isdragging, setIsdraging] = useState(false);

  const handleMoveDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsdraging(true);
    let startX = e.pageX;
    let startY = e.pageY;
    let handle_box = document.querySelector("#handle_box");
    let width: any = handle_box?.clientWidth;
    let height: any = handle_box?.clientHeight;

    setPoint({ x: startX - width / 2, y: startY - height / 2 });
  };

  const handleMoveUp = (e: any) => {
    setIsdraging(false);
    console.log(Point, "Point");
  };

  const handleMove = (e: any) => {
    let startX = e.pageX;
    let startY = e.pageY;

    let handle_box = document.querySelector("#handle_box");
    let width: any = handle_box?.clientWidth;
    let height: any = handle_box?.clientHeight;

    setPoint({ x: startX - width / 2, y: startY - height / 2 });
  };
  return (
    <div className="handle_box_wrapper">
      <div
        className="box"
        style={{ left: Point.x, top: Point.y }}
        onMouseDown={(e) => handleMoveDown(e)}
        id="handle_box"
      >
        1212
      </div>
      <Mask
        visible={isdragging}
        onMouseMove={handleMove}
        onMouseUp={handleMoveUp}
      />
    </div>
  );
};

export default Index;
