// false, falsy, falsey 라는 개념
const yes = true;
const no = false;

const num = 0;
if (num === 0) {
  console.log("num은 0");
} else {
  console.log("num은 0 아님");
}
if (!num) {
  console.log("num은 0 맞음");
}

const strName = null;
if (!strName) console.log("이름이 없어요");
if (strName === null || strNum === "") console.log("이름이 없다");

console.log(strName || "홍길동");

const 구매자 = strName || "구매자 없음";
console.log(구매자);

const 판매자 = "판매자 없음";
if (strName !== null || strName !== "") {
  판매자 = strName;
}
