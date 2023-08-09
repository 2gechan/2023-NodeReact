// import express from "export";
// const router = express.Router();
import { Router } from "express";
const router = Router();

/**
 * bbs API Router 설정
 * 보통 API 서버는 view 가 없이 JSON(또는 XML) 데이터를
 * return 하는 서버를 말한다.
 *
 * res.send() 또는 res.json() 함수로 마감한다.
 */

const Hello = {
  title: "Node Server 연결 성공!!!",
  message: "Node compete",
};
router.get("/", async (req, res, next) => {
  res.json(Hello);
});

router.post("/insert", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send("OK");
});

export default router;
