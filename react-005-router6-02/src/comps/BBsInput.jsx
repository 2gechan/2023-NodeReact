// import styled from "styled-components";
import { Form, InputDiv } from "../styled/BBsStyled";
// const Form = styled.form`
//   width: 80%;
//   margin: 10px auto;
//   border-collapse: collapse;
//   border: 1px solid #ddd;
//   padding: 10px;
// `;

// const InputDiv = styled.div`
//   width: 90%;
//   display: flex;

//   & label,
//   input,
//   textarea {
//     margin: 5px;
//     padding: 8px;
//   }
//   & label {
//     flex: 1;
//     text-align: right;
//   }
//   & input {
//     flex: 3;
//     background-color: #eee;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//   }
//   & textarea {
//     flex: 3;
//     background-color: #eee;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//   }
// `;

const BBsInput = () => {
  return (
    <Form>
      <InputDiv>
        <label htmlFor="">작성자</label>
        <input type="text" placeholder="작성자" />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">제목</label>
        <input type="text" placeholder="제목" />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">내용</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </InputDiv>
    </Form>
  );
};

export default BBsInput;
