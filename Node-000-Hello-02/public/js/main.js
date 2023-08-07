/**
 * 현재 화면의 모든 html tag가 다 그려진 다음에 시작하라
 */

const $ = (x, parent = document) => {
  return parent.querySelector(x);
};

/**
 * Element는 html로 구현하는 모든 tag의 부모 tag
 * .prototype : 기본적으로 JS, HTML에서 제공하지 않는
 *    함수를 추가할 때 사용하는 키워드
 * Element.prototype.css = function() : Element tag에 css라는 이름으로
 *    새로운 함수를 하나 등록하겠다.
 * prototype으로 함수를 등록할 때는 function 키워드로 함수를 만든다.
 */
Element.prototype.css = function (key, value) {
  // this는 Element를 가리키게 된다.
  this.style[key] = value;
};

Element.prototype.html = function (value) {
  this.innerHTML = value;
};

document.addEventListener("DOMContentLoaded", () => {
  // document.querySelector("div.home").style.backgroundColor = "blue";
  $("div.home").style.backgroundColor = "blue";

  // document.querySelector("div.,bbs").css("backgroundColor", "red");
  // document.querySelector("div.,bbs").style["backgroundColor"] = "red";
  // document.querySelector("div.bbs").style.backgroundColor = "red";
  $("div.bbs").css("backgroundColor", "red");
  $("div.notice").css("backgroundColor", "yellow");

  // document.querySelector("div.mypage").innerHTML = "qwe123";
  $("div.mypage").html("여기는 나의 페이지, 접근 금지");
});
