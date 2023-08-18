import BucketItem from "./BucketItem";
import "../css/BucketList.css";
import moment from "moment";

const BucketList = (props) => {
  const { bucketList, inputClear, titleClick } = props;
  const buttonClick = () => {
    inputClear();
  };

  const bucketListItemView = bucketList?.map((item, index) => {
    return <BucketItem item={item} key={index} titleClick={titleClick} />;
  });

  return (
    <div className="main">
      <h1>나의 버킷리스트</h1>
      <div className="list">
        <input placeholder="날짜" value={moment().format("YYYY[-]MM[-]DD")} />
        <input placeholder="시간" value={moment().format("HH:mm:ss")} />
        <button type="button" onClick={buttonClick}>
          새로작성
        </button>
      </div>

      <div>{bucketListItemView}</div>
    </div>
  );
};

export default BucketList;
