const name1 = "홍길동";
const name2 = "이몽룡";

// [ {이름: "홍길동"}, {이름: "이몽룡"}]
const student1 = [{ 이름: name1 }, { 이름: name2 }];

/*
 * JavaScript 계산된 속성(expression property)
 * JS의 json 객체는 []로 묶인 연산(계산)식을 사용하여
 * 속성 이름을 만들 수 있다.
 * 일반적으로 프로그래밍에서 변수의 이름은 고정된 영문자를 사용한다.
 * 변수의 이름을 또다른 변수를 사용하거나 연산식을 사용하여 만드는 것은
 * 거의 불가능하다
 * 하지만 JS의 JSON 객체를 만들때는 다양한 연산식을 사용하여
 * 속성(변수)이름을 만들 수 있다.
 */
const student2 = {
  [name1]: "서울특별시",
  [name2]: "광주광역시",
};

const student3 = {
  ["num" + 1]: "홍길동",
  ["num" + 2]: "홍길동",
  ["num" + 3]: "홍길동",
};

const nation = "대한민국";
const 우리나라 = {
  [nation]: "Republic of Korea",
};

// blank JSON 객체
const num1 = {};
for (let i = 0; i < 10; i++) {
  num1 = { ...num1, [`num${i + 1}`]: i + 1 };
}
