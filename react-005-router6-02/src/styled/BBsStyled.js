import styled from "styled-components";

export const Table = styled.table`
  width: 80%;
  margin: 10px auto;
  border-collapse: collapse;
  border: 1px solid #ddd;
  & > .list-tr {
    border-bottom: 1px solid #ddd;
  }
  & th {
    padding: 5px;
    backgorund-color: #aaa;
  }
`;

export const Form = styled.form`
  width: 80%;
  margin: 10px auto;
  border-collapse: collapse;
  border: 1px solid #ddd;
  padding: 10px;
`;

/*
${({color}) => color ?}
{color} : 부모로부터 받은 props.color 를 전개한 변수

${({bgColor}) => bgColor ?} 에서
{bgColor} : 부모로부터 받은 props.bgColor를 전개한 변수
*/
export const Button = styled.button`
  border: 0;
  outline: none;
  padding: 12px 16px;
  color: ${({ color }) => (color ? color : "white")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "black")};
  border-radius: 8px;
  &:hover {
    box-shadow: 1px 1px 1px 1px black;
    cursor: pointer;
  }
`;

export const InputDiv = styled.div`
  width: 90%;
  display: flex;

  & label,
  input,
  textarea {
    margin: 5px;
    padding: 8px;
  }
  & label {
    flex: 1;
    text-align: right;
  }
  & input {
    flex: 3;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  & textarea {
    flex: 3;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;
