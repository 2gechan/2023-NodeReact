import "../Arith.css";
import ArithInput from "./ArithInput";
import ArithResult from "./ArithResult";
import { useState } from "react";

const ArithMain = () => {
  // input 해야할 대상이 2개 이상일 때는 JSON 객체로 선언
  const [nums, setNums] = useState({ num1: 0, num2: 0 });

  // Input Comp 에는 데이터를 저장할 nums 객체와
  // nums 객체의 데이터를 변경할 setNums 함수를 같이 전달하고
  // Result Comp는 데이터를 읽어서 표현만 할 것이므로
  // nums 객체만 전달한다
  return (
    <div className="Arith">
      <h3>the four fund</h3>
      <ArithInput nums={nums} setNums={setNums} />
      <ArithResult nums={nums} />
    </div>
  );
};
export default ArithMain;
