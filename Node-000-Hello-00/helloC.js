// JSON 객체(JavaScript Object Notation)
const obj = {
  이름: "홍길동",
  나이: 16,
  전화: "010-1111-1111",
};
console.log(obj);
console.log(obj.이름);
console.log(obj.나이);
console.log(obj.전화);

console.log(obj["이름"]);
console.log(obj["나이"]);
console.log(obj["전화"]);

const searchKey = "이름";
console.log(obj[searchKey]);

const address = [
  {
    이름: "홍길동",
    나이: 16,
    전화: "010-1111-1111",
  },
  {
    이름: "이몽룡",
    나이: 26,
    전화: "010-2222-2222",
  },
  {
    이름: "성춘향",
    나이: 36,
    전화: "010-3333-3333",
  },
];

console.log(address[1].이름);
console.log(address[1].나이);
console.log(address[1].전화);

address.forEach((item) => {
  console.log(item.이름);
});
