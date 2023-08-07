const CalcOutput = (props) => {
  const { num1, num2 } = props;

  return (
    <div>
      <div>
        <label htmlFor="">덧셈 : </label>
        <span>
          {num1} + {num2} = {num1 + num2}
        </span>
      </div>
      <div>
        <label htmlFor="">뺄셈 : </label>
        <span>
          {num1} - {num2} = {num1 - num2}
        </span>
      </div>
      <div>
        <label htmlFor="">곱셈 : </label>
        <span>
          {num1} * {num2} = {num1 * num2}
        </span>
      </div>
      <div>
        <label htmlFor="">나눗셈 : </label>
        <span>
          {num1} / {num2} = {num1 / num2}
        </span>
      </div>
    </div>
  );
};
export default CalcOutput;
