// 함수 모듈
// const sum = (num1, num2) = {return num1 + num2}
const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => {
  const [numA, numB] = [num2, num1];
  return numA - numB;
};

const mul = (num1, num2) => num1 * num2;
const Rt = () => "대한민국";

// js 코드에서 한개의 함수에만 지정할 수 있다.
export default Rt;

export { sum, sub, mul };
