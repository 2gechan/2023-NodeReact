const usState = (num) => {
  const setNum = (num1) => (num = num1);
  return [num, setNum];
};
const [num, setNum] = usState(0);

const nations1 = ["대한민국", "우리나라"];
console.log(nations1);
const [a, b] = nations1;
console.log("a", a);
console.log("b", b);

const nations2 = [...nations1, "korea"];
console.log(nations2);

// nations 배열을 nations3에 복사하라
const nations3 = nations1;
console.log("1", nations1);
console.log("3", nations3);
nations3[0] = "Republic";
console.log("1", nations1);

const nations4 = [...nations1];
nations1[0] = "Republic of Korea";
console.log("4", nations4);

const nations5 = [];
for (let nation of nations1) {
  nations5.push(nation);
}
console.log(nations5);
