const CalcInput = (props) => {
  const { setNum1, setNum2 } = props;
  //   const inputChangeHandler1 = (e) => {
  //     const num1 = e.target.value;
  //     const intNum1 = parseInt(num1);
  //     setNum1(intNum1);
  //   };
  //   const inputChangeHandler2 = (e) => {
  //     const num1 = e.target.value;
  //     const intNum2 = parseInt(num2);
  //     setNum2(intNum2);
  //   };
  const btnClick = () => {
    const num1 = document.querySelector(".num1").value;
    const intNum1 = parseInt(num1);
    setNum1(intNum1);

    const num2 = document.querySelector(".num2").value;
    const intNum2 = parseInt(num2);
    setNum2(intNum2);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="숫자1"
        className="num1"
        // onChange={inputChangeHandler1}
      />
      <input
        type="text"
        placeholder="숫자2"
        className="num2"
        // onChange={inputChangeHandler2}
      />
      <button type="submit" onClick={btnClick}>
        계산
      </button>
    </div>
  );
};
export default CalcInput;
