import { Outlet } from "react-router-dom";

const BBsMain = () => {
  /**
   * App
   *  ㄴ BBsMain
   *        ㄴ BBsList : /bbs/""
   *              ㄴ BBsInput : /bbs/insert
   * 계층적(hierarchy)의 화면 Layout을 구현할 때
   * 만약 /bbs/insert로 메뉴 링크가 요청되면
   * BBsMain에 BBsInput을 포함하여 하나의 화면을 구현하게 된다
   * 이때 BBsInput 컴포넌트를 포함할 자리를 BBsMain에 만들어 두어야 한다
   * <Outlet /> 컴포넌트 키워드를 정해 놓으면 그자리에 BBsInput 컴포넌트가
   * 끼워넣어져 하의의 화면을 구현한다.
   */
  return (
    <>
      <Outlet />
    </>
  );
};
export default BBsMain;
