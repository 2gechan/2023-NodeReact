import { useParams } from "react-router-dom";
const BBsDetail = () => {
  const { seq } = useParams();
  return (
    <>
      <h1>여기는 자세히보기 화면</h1>
      <h2>선택한 게시판 SEQ : {seq}</h2>
    </>
  );
};

export default BBsDetail;
