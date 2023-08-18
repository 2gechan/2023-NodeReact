import BucketInput from "./BucketInput";
import BucketList from "./BucketList";
import "../css/BucketMain.css";
import { useState } from "react";
import { InitData } from "../data/InitData";

const BucketMain = () => {
  const [bucket, setBucket] = useState(InitData);
  const [bucketList, setBucketList] = useState([]);

  const inputClear = () => {
    setBucket(InitData);
  };

  const addBucketList = () => {
    setBucketList(...bucketList, bucket);
    inputClear();
  };
  //   const addBucketList = () => {
  //     const bucketUpdate = bucketList.filter((item) => {
  //       console.log("asd");
  //       if (item.id === bucket.id) {
  //         return { ...item, title: bucket.title, content: bucket.content };
  //       }
  //       return item;
  //     });
  //     if (bucketUpdate) {
  //       setBucketList(bucketUpdate);
  //     } else {
  //       setBucketList(...bucketList, bucket);
  //     }

  //     inputClear();
  //   };

  const titleClick = (id) => {
    const selectBucket = bucketList?.filter((item) => {
      return item.id === id;
    });
    setBucket({ ...selectBucket[0] });
    console.log(id);
  };

  return (
    <>
      <header>
        <h1>오늘은 내 생의 가장 젊은날</h1>
      </header>
      <section>
        <BucketList
          bucketList={bucketList}
          setBucket={setBucket}
          inputClear={inputClear}
          titleClick={titleClick}
        />
        <BucketInput
          bucket={bucket}
          setBucket={setBucket}
          addBucketList={addBucketList}
        />
      </section>
    </>
  );
};

export default BucketMain;
