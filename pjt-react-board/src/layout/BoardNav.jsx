import { NavLink } from "react-router-dom";
const BoardNav = () => {
  return (
    <nav className="main menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/boardlist">게시판보기</NavLink>
        </li>
        <li>
          <NavLink to="/boardwrite">글쓰기</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BoardNav;
