import "../css/BucketItem.css";

const BucketItem = ({ item, titleClick }) => {
  return (
    <div className="item" onClick={(e) => titleClick(item.id)}>
      <img src="" alt="" />

      <span>{item.title}</span>
    </div>
  );
};
export default BucketItem;
