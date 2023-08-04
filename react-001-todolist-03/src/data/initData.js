// 1개의 Todo Data를 생성하기 위한 함수
// java Dto 클래스 선언
import moment from "moment";

// initData 함수를 호출하면 새로운 Todo Data 생성하여 return
const initData = () => {
  return {
    id: null,
    sdate: moment().format("YYYY[-]MM[-]DD"),
    stime: moment().format("HH:mm:ss"),
    content: "",
    complete: false,
  };
};

const func1 = () => {};
const func2 = () => {};
const func3 = () => {};

export { initData, func1, func2, func3 };
