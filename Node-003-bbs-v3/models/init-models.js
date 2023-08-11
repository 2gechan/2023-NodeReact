import _tbl_bbs from "./tbl_bbs.js";
import _tbl_files from "./tbl_files.js";
const initModels = (sequelize) => {
  const tbl_bbs = _tbl_bbs(sequelize);
  const tbl_files = _tbl_files(sequelize);

  /**
   * tbl_bbs와 tbl_files 테이블은 1:N의 관계가 설정되어 있다
   * sequelize에서 1:N Association 관계가 설정되어 있을때
   * 그 설정을 model에 미리 정해줌으로써 select join 이 매우 쉽게 구현될 수있다.
   */
  tbl_bbs.hasMany(tbl_files, { as: "F_BBS", foreinKey: "f_bseq" });
  tbl_files.belongsTo(tbl_bbs, { as: "F_FILES", foreinKey: "f_bseq" });

  return {
    tbl_bbs,
    tbl_files,
  };
};

export default initModels;
