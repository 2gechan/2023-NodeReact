import _tbl_board from "./tbl_board.js";

const initModels = (sequelize) => {
  const tbl_board = _tbl_board(sequelize);

  return {
    tbl_board,
  };
};

export default initModels;
