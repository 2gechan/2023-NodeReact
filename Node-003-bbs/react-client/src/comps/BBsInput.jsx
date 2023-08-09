import { useState } from "react";
import { filePreview, filesPreview } from "../modules/ImagePreview";

const BBsInput = () => {
  const [image, setImage] = useState("");

  const fileChangeHandler = async (e) => {
    const imgSrc = filePreview(e.target.files[0]);
    console.log(imgSrc);
    // setImage(filePreview(e.target.files[0]));
  };
  return (
    <section>
      <div className="bbs input">
        <input type="text" name="b_title" placeholder="제목" />
        <input type="text" name="b_nickname" placeholder="작성자" />
        <input type="text" name="b_content" placeholder="내용" />
      </div>
      <div className="image main">
        <label htmlFor="main_image">대표이미지</label>
        <input
          id="main_image"
          type="file"
          accept="image/*"
          onChange={fileChangeHandler}
        />
        <div className="thumb main">
          <img src={image ? image : ``} width="100px" />
        </div>
      </div>
      <div className="image gallery">
        <label htmlFor="gallery_images">갤러리</label>
        <input
          id="gallery_images"
          type="file"
          accept="image/*"
          multiple="multiple"
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
