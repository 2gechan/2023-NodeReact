import { useBBsContext } from "../provide/BBsProvider";
import css from "../css/BBsList.module.css";

const sampleData = [
  { b_seq: 0, b_nickname: "홍길동", b_title: "게시판1" },
  { b_seq: 1, b_nickname: "이몽룡", b_title: "게시판2" },
  { b_seq: 2, b_nickname: "성춘향", b_title: "게시판3" },
  { b_seq: 3, b_nickname: "임꺽정", b_title: "게시판4" },
  { b_seq: 4, b_nickname: "엄복동", b_title: "게시판5" },
];

const BBsList = () => {
  const { bbsList, setBBsList } = useBBsContext();

  const bbsItems = bbsList.map((bbs) => {
    return (
      <tr key={bbs.b_seq} data-seq={bbs.b_seq}>
        <td>{bbs.b_seq}</td>
        <td>{bbs.b_nickname}</td>
        <td>{bbs.b_title}</td>
        <td>0</td>
      </tr>
    );
  });

  return (
    <>
      <table className={css.main}>
        <thead>
          <tr>
            <th>SEQ</th>
            <th>작성자</th>
            <th>제목</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>{bbsItems}</tbody>
      </table>
    </>
  );
};

export default BBsList;
