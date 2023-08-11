import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import BoardWrite from "../comps/BoardWrite";
import BoardList from "../comps/BoardList";
import BoardMain from "../comps/BoardMain";
import BoardDetail from "../comps/BoardDetail";
import BoardUpdate from "../comps/BoardUpdate";
const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <BoardMain /> },
        { path: "/boardwrite", element: <BoardWrite /> },
        { path: "detail/:id", element: <BoardDetail /> },
        { path: "/update/:id", element: <BoardUpdate /> },
        {
          path: "/boardlist",
          element: <BoardList />,
          children: [],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
