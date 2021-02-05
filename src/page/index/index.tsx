import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import StartSpace from '../../components/StartSpace';
import { Bg } from "rockui";

interface Props {
  name: string;
}

let timer: any;
const Index: React.FC<Props> = (props) => {

let [timestr , setTimer] = useState('')
  useEffect(() => {
    timer = setInterval(() => {
      getTimeFn();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  function getTimeFn() {
    let time: any = new Date();
    let hour: any = time.getHours();
    hour = hour < 10 ? "0" + hour : hour;
    let minutes = time.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = time.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let timestr = `${hour}:${minutes}:${seconds}`
    setTimer(timestr)
  }
  return (
    <div className="index_wrapper">
      <div className="text_wrapper">
        <div>
          <div className="timer">
            {timestr}
          </div>
          <br />
          <Link to="/home" className="into_text_color">
            点击进入
          </Link>
        </div>
      </div>
      <Bg type="start" animationType="down" />
    </div>
  );
};

export default Index;
