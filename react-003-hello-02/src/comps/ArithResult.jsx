const ArithResult = ({ nums }) => {
  const { num1, num2 } = nums;
  // const intNum1 = parseInt(num1)
  // const intNum2 = parseInt(num2)
  const [intNum1, intNum2] = [Number(num1), Number(num2)];

  const [maxNum, minNum] =
    intNum1 > intNum2 ? [intNum1, intNum2] : [intNum2, intNum1];
  //   let minNum = 0;
  //   let maxNum = 0;
  //   if (intNum1 > intNum2) {
  //     maxNum = intNum1;
  //     minNum = intNum2;
  //   } else {
  //     maxNum = intNum2;
  //     minNum = intNum1;
  //   }

  // 여기 위쪽은 Rendering이 시작되기전에 실행되는 코드
  // nums State가 변화되면 ArithResult 함수가 실행되고
  // return 함수를 만나기 전에 코드들을 실행하여 변수를 다시 만들고
  // 만들어진 변수 값으로 화면을 Rendering한다.

  // Redndering이 시작되는 부분
  return (
    <div>
      <div>
        <strong>
          덧셈({intNum1} + {intNum2}) :
        </strong>
        <span>{intNum1 + intNum2}</span>
      </div>
      <div>
        <strong>
          뺄셈({maxNum} &minus; {minNum}) :
        </strong>
        <span>{maxNum - minNum}</span>
      </div>
      <div>
        <strong>
          곱셈({intNum1} &times; {intNum2}) :
        </strong>
        <span>{intNum1 * intNum2}</span>
      </div>
      <div>
        <strong>
          나눗셈({maxNum} &divide; {minNum}) :
        </strong>
        <span>{maxNum / minNum}</span>
      </div>
    </div>
  );
};
export default ArithResult;
