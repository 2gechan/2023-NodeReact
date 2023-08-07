import { useState } from "react";
import CalcInput from "./CalcInput";
import CalcOutput from "./CalcOutput";
const CalcMain = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const [max, min] = num1 > num2 ? [num1, num2] : [num2, num1];
  return (
    <div>
      <CalcInput setNum1={setNum1} setNum2={setNum2} />
      <CalcOutput num1={max} num2={min} />
    </div>
  );
};
export default CalcMain;
