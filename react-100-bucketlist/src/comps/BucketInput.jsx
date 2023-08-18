import "../css/BucketInput.css";
import uuid from "react-uuid";

const BucketInput = (props) => {
  const { bucket, setBucket, addBucketList } = props;
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (!bucket.id) {
      setBucket({ ...bucket, id: uuid() });
    } else {
      setBucket({ ...bucket, [name]: value });
    }
  };
  const BucketBlur = () => {
    addBucketList();
  };

  return (
    <div className="main">
      <h1>버킷리스트 작성하기</h1>
      <div className="input">
        <div>
          <input
            name="title"
            type="text"
            placeholder="제목을 입력하세요"
            value={bucket.title}
            onChange={inputChangeHandler}
            onBlur={BucketBlur}
          />
          <textarea
            name="content"
            id=""
            rows="10"
            placeholder="내용을 입력하세요"
            value={bucket.content}
            onChange={inputChangeHandler}
            onBlur={BucketBlur}
          />
        </div>
        <div>이미지영역</div>
      </div>
    </div>
  );
};
export default BucketInput;
