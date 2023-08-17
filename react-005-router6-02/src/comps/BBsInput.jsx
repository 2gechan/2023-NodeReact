// import styled from "styled-components";
import { Button, Form, InputDiv } from "../styled/BBsStyled";
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

const BBsInput = ({ bbsDto, setBbsDto }) => {
  const inputOnChange = (e) => {
    const { name, value } = e.target;
    setBbsDto({ ...bbsDto, [name]: value });
  };
  return (
    <Form>
      <InputDiv>
        <label htmlFor="">작성자</label>
        <input
          type="text"
          placeholder="작성자"
          value={bbsDto.bWriter}
          name="bWriter"
          onChange={inputOnChange}
        />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">제목</label>
        <input
          type="text"
          placeholder="제목"
          value={bbsDto.bSubject}
          name="bSubject"
          onChange={inputOnChange}
        />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">내용</label>
        <textarea
          id=""
          cols="30"
          rows="10"
          value={bbsDto.bContent}
          name="bContent"
          onChange={inputOnChange}
        ></textarea>
      </InputDiv>
      <Button type="button" />
    </Form>
  );
};

export default BBsInput;
