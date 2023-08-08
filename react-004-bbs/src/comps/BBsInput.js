import { useState, useRef } from "react";
import { BBsDto } from "../data/BBsDto";

const BBsInput = () => {
  const [bbs, setBbs] = useState(BBsDto);
  const [image, setImage] = useState("");
  const imageRef = useRef(null);
  const imagesRef = useRef(null);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBbs({ ...bbs, [name]: value });
  };

  // type이 file인 input에서 파일이 선택되었을때 발생하는 event
  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (fe) => {
      setImage(fe.target.result);
    };
    fileReader.readAsDataURL(file);
    // console.log(file.name);
  };
  return (
    <section>
      <div className="bbs input">
        <input
          type="text"
          name="b_title"
          placeholder="제목"
          value={bbs.b_title}
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          name="b_nickname"
          placeholder="작성자"
          value={bbs.b_nickname}
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          name="b_content"
          placeholder="내용"
          value={bbs.b_content}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="image main">
        <label htmlFor="main_image">대표이미지</label>
        <input
          id="main_image"
          type="file"
          accept="image/*"
          onChange={fileChangeHandler}
          ref={imageRef}
        />
        <div className="thumb main">
          <img src={image ? image : ``} />
        </div>
      </div>
      <div className="image gallery">
        <label htmlFor="gallery_images">갤러리</label>
        <input
          id="gallery_images"
          type="file"
          accept="image/*"
          multiple="multiple"
          onChange={fileChangeHandler}
          // React에서 각 요소의 key 역할을 하는 속성
          ref={imagesRef}
        />
        <div className="thumb gallery"></div>
      </div>
      <div className="button">
        <button>저장</button>
      </div>
      <div className="view"></div>
    </section>
  );
};
export default BBsInput;
