// 부모 Comp에서 전달받은 값의 개수가 제한적일때는
// 함수의 매개변수에서 즉시 구조분해가 가능하다
const ArithInput = ({ nums, setNums }) => {
  const onChangeHandler = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;
    const { name, value } = e.target;
    setNums({ ...nums, [name]: value });
    console.log(name);
    console.log(value);
  };

  return (
    <div>
      <div>
        <label htmlFor="">숫자</label>
        <input
          name="num1"
          type="text"
          placeholder="num2"
          value={nums.num1}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="">숫자</label>
        <input
          name="num2"
          type="text"
          placeholder="num2"
          value={nums.num2}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};
export default ArithInput;
