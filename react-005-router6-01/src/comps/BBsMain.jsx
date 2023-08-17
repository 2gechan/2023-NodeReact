import { useState, useEffect } from "react";
import { useRoutes, Outlet, NavLink } from "react-router-dom";
import BBsList from "./BBsList";
import BBsInput from "./BBsInput";
import { BBsDto as bbsData, BBsList as bbsListData } from "../data/BBsData";

const BBsMain = () => {
  const [bbsDto, setBbsDto] = useState(bbsData);
  const [bbsList, setBbsList] = useState(bbsListData);

  const BBsBody = () => {
    return (
      <>
        <h3>자유게시판</h3>
        <Outlet />
      </>
    );
  };
  const bbsRouter = useRoutes([
    {
      // rootPath : /bbs로 요청
      path: "/",
      element: <BBsBody />,
      children: [
        // path에 ""이 연결된 경우
        // rootPath와 함께 제일먼저 보여질 Component
        {
          path: "",
          element: (
            <>
              <BBsList bbsList={bbsList} />
              <NavLink to={"/"}>메인으로</NavLink>
              <NavLink to={"/bbs/writer"}>글쓰기</NavLink>
            </>
          ),
        },
        { path: "writer", element: <BBsInput /> },
      ],
    },
  ]);
  return bbsRouter;
};

export default BBsMain;
