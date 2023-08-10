import { useState } from "react";
import { filePreview, filesPreview } from "../modules/ImagePreview";

import css from "../css/BBsInput.module.css";
import { useBBsContext } from "../provide/BBsProvider";

const BBsInput = () => {
  /**
   * BBsProvider Store에 보관되어 있는 bbs와 setBbs() 함수를 가져와서 사용해야 하는데
   * 그 함수를 가져오기 위하여 useContext() 라는 Hook 함수를 사용한다.
   * useContext() 함수는 어떤 스토어에서 값들을 가져오는지 명시 해주어야 한다.
   * 그런데 BBsInput에서는 스토어에 이름, 키 등을 알 방법이 없다.
   * 알아낼 방법은 있지만 너무 많은 코드가 필요하다.
   * 그래서 BBsProvider에서는 자신으 스토어 정보를 포함한 사용자 정의 useContext()를
   * 만들어 두었다.
   */

  // const {bbs, setBbs} = useContext();
  const { bbs, setBBs, bbsInsertCB, imgRef, imgsRef } = useBBsContext();

  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  // const imgRef = useRef(null);
  // const imgsRef = useRef(null);

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

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBBs({ ...bbs, [name]: value });
  };

  /**
   * fetch를 통해서 서버로 데이터, 이미지를 전송하기
   * 1. formData 만들기
   * 2. formData에 각 데이터를 append
   * 3. fetch 보내기
   */
  const insertButtonClickHandler = async (e) => {
    bbsInsertCB();
    // // alert("hello");
    // // js에서 제공하는 Http 객체다
    // const formData = new FormData();
    // const file = imgRef?.current.files[0];
    // const files = imgsRef.current.files;
    // // formData에 bbs(JSON 객체)를 실어서 서버로 보낼때는
    // // 객체를 직접 보낼 수 없다.
    // // 객체를 Serialize(직렬화, 문자열화)
    // const bbsStr = JSON.stringify(bbs);
    // // node의 router Upload 미들웨어에서 받을 이름에
    // // 모든 파일 정보를 append()
    // // 대표이미지
    // formData.append("b_images", file);
    // // 갤러리 이미지들
    // for (let file of files) {
    //   formData.append("b_images", file);
    // }
    // formData.append("bbs", bbsStr);
    // // formData.append("bbs", bbs);
    // // document.querySelector("#b_img").files[0] 와 같다.
    // // formData.append("b_img", imgRef.current.files[0]);
    // // formData.append("b_title", bbs.b_title);
    // // formData.append("b_nickname", bbs.b_nickname);
    // // formData.append("b_content", bbs.b_content);
    // await bbsInsert(formData);
  };

  return (
    <section className={css.main}>
      <div className={css.input_container}>
        <div>
          <label>제목</label>
          <input
            type="text"
            name="b_title"
            placeholder="제목"
            value={bbs.b_title}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label>작성자</label>
          <input
            type="text"
            name="b_nickname"
            placeholder="작성자"
            value={bbs.b_nickname}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label>내용</label>
          <input
            type="text"
            name="b_content"
            placeholder="내용"
            value={bbs.b_content}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className={css.image_box}>
        <div>
          <label htmlFor="main_image">대표이미지를 선택하세요</label>
          <input
            id="main_image"
            type="file"
            accept="image/*"
            onChange={fileChangeHandler}
            ref={imgRef}
          />
          <div className={css.thumb}>
            <img src={image ? image : ``} width="100px" />
          </div>
        </div>

        <div>
          <label htmlFor="gallery_images">갤러리 이미지를 선택하세요</label>
          <input
            id="gallery_images"
            type="file"
            accept="image/*"
            multiple="multiple"
            onChange={filesChangeHandler}
            ref={imgsRef}
          />
          <div className={css.thumb}>{thumbImages}</div>
        </div>
      </div>
      <div className={css.button}>
        <button onClick={insertButtonClickHandler}>저장</button>
      </div>
      <div className="view"></div>
    </section>
  );
};
export default BBsInput;
