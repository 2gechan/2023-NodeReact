import { Router } from "express";
const router = Router();

import multer from "multer";
import fs from "fs";

import DB from "../models/index.js";

const { tbl_bbs: BBS, tbl_files: FILES } = DB.models;

const Hello = {
  title: "Node Server 연결 성공!!!",
  message: "Node compete",
};

const storageOption = {
  filename: (req, file, cb) => {
    const originName = file.originalname;
    const filePrix = `${Date.now()}-${Math.round(Math.random() * 100000)}`;
    const fileName = `${filePrix}-${originName}`;
    cb(null, fileName);
  },
  destination: (req, file, cb) => {
    if (!fs.existsSync(req.uploadPath)) {
      fs.mkdirSync(req.uploadPath);
    }
    cb(null, req.uploadPath);
  },
};

const storage = multer.diskStorage(storageOption);
const uploadMiddleWare = multer({ storage });

router.get("/", async (req, res, next) => {
  res.json(Hello);
});

router.post("/insert", uploadMiddleWare.array("b_images"), async (req, res) => {
  const body = req.body;

  const files = req.files;
  const bbsDto = JSON.parse(body.bbs);

  // console.log("body", bbsDto, files);

  bbsDto.b_image = files[0]?.filename;
  bbsDto.b_origin_image = files[0]?.originalname;
  const result = await BBS.create(bbsDto);

  for (let i = 1; i < files.length; i++) {
    const fileDto = {};
    fileDto.f_image = files[i].filename;
    fileDto.f_origin_image = files[i].originalname;
    fileDto.f_bseq = result.b_seq;
    await FILES.create(fileDto);
  }

  res.send("OK");
});

router.get("/list", async (req, res) => {
  const bbsList = await BBS.findAll({
    include: { model: FILES, as: "F_FILES", where: { f_seq: b_seq } },
  });

  return res.json(bbsList);
});

export default router;
