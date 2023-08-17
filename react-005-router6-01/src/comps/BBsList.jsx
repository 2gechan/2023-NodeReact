// import styled from "styled-components";
import { Table } from "../styled/BBsStyled";
import BBsItem from "./BBsItem";
/**
 * 원래 제공되는 react comps인 table에 styled를 적용하여
 * 새로운 Component로 재 생성하기
 */
// const Table = styled.table`
//   width: 80%;
//   margin: 10px auto;
//   border-collapse: collapse;
//   border: 1px solid #ddd;
//   & > .list-tr {
//     border-bottom: 1px solid #ddd;
//   }
//   & th {
//     padding: 5px;
//     backgorund-color: #aaa;
//   }
// `;

const BBsList = ({ bbsList }) => {
  const bbsListItemView = bbsList.map((item) => {
    return <BBsItem item={item} key={item.id} />;
  });
  return (
    <Table>
      <thead>
        <tr className="list-tr">
          <th>No</th>
          <th>제목</th>
          <th>작성일자</th>
          <th>작성자</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>{bbsListItemView}</tbody>
    </Table>
  );
};

export default BBsList;
