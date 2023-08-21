// 완전한 ES6 함수 코드
// 함수 본체에 한줄짜리 코드만 있을 경우
// return 명령과 {} 를 생략할 수 있다.

// const BucketMain = () => (
//   <>
//     <div></div>
//     <div></div>
//   </>
// );

import { useState } from "react";
import styled from "styled-components";
import Input from "../shareComps/Input";

const AsideBar = styled.aside`
  width: 30rem;
  height: 100%;
  background-color: #f7f7f7;
  border-right: solid 2px #aaa;
  display: flex;
  flex-direction: column;
  & > * {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const BucketMain = () => {
  const [bucket, setBucket] = useState();
  return (
    <>
      <AsideBar>
        <Input />
      </AsideBar>
      <div></div>
    </>
  );
};

export default BucketMain;
