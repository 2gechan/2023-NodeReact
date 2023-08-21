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
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import BucketList from "./BucketList";
import BucketItem from "./BucketItem";
import BucketContent from "./BucketContent";
import BucketInput from "./BucketInput";

const AsideBar = styled.aside`
  width: 20rem;
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

// const bucketRouter = createBrowserRouter([
//   { path: "content/:id", element: <h1>컨텐츠보기</h1> },
// ]);

const mainAction = () => {
  return <Navigate to="content/3" />;
};

const BucketMain = () => {
  const [bucket, setBucket] = useState();
  const [bucketList, setBucketList] = useState([
    "개발자 되기",
    "리액트 정복",
    "Spring 정복",
  ]);

  const BucketItemListView = bucketList.map((item) => {
    return <BucketItem>{item}</BucketItem>;
  });
  return (
    <>
      <AsideBar>
        <BucketInput />
        <BucketList>
          <ul>{BucketItemListView}</ul>
        </BucketList>
      </AsideBar>
      <div>
        <Outlet />
      </div>
    </>
  );
};

// const BucketMain = () => {
//   /**
//    * path : "content/:id", element: <BucketContent/>
//    * 만약 `content/우리나라` 라는 요청이 오면
//    * content/* 의 path를 찾고, 우리나라 라는 문자열을 id 변수에 저장하여
//    * BucketContent component에게 전달하라
//    */
//   const routing = useRoutes([
//     {
//       path: "/",
//       element: <BucketMainBody />,
//       children: [{ path: "content/:id", element: <BucketContent /> }],
//     },
//   ]);
//   return routing;
// };

export default BucketMain;
