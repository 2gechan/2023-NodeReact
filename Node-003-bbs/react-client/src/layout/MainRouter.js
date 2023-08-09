import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BBsMain from "../comps/BBsMain";
import App from "../App";

// Nav Provider 컴포넌트
// Nav의 모든 설정(IA)를 한곳에서 설정하는 컴포넌트
const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <h1>나는 홈이다</h1> },
        { path: "/notice", element: <h1>나는 공지사항</h1> },
        { path: "/bbs", element: <BBsMain /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default MainRouter;
