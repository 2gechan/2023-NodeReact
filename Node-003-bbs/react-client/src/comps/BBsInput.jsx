import { useState } from "react";
import { filePreview, filesPreview } from "../modules/ImagePreview";

const BBsInput = () => {
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);

  const setMainImage = (image) => {
    setImage(image);
  };

  const thumbImages = images.map((image) => {
    return (
      <img
        src={image}
        width="50px"
        alt=""
        onClick={(e) => setMainImage(image)}
      />
    );
  });

  const fileChangeHandler = async (e) => {
    const imgSrc = await filePreview(e.target.files[0]);

    setImage(imgSrc);
  };

  const filesChangeHandler = async (e) => {
    const files = e.target.files;
    const imgSrcList = await Promise.all(filesPreview(files));
    console.log(imgSrcList.length);
    setImages(imgSrcList);
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
          onChange={filesChangeHandler}
        />
        <div className="thumb gallery">{thumbImages}</div>
      </div>
      <div className="button">
        <button>저장</button>
      </div>
      <div className="view"></div>
    </section>
  );
};
export default BBsInput;
