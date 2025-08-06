/*
 * http://24.144.81.34:3001/api/get-stock-info?stockNm=%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90
 *
 */

import log4js from "log4js";

const logger = log4js.getLogger("app");

export default async function getStockInfo(req, res) {

  logger.info("getStockInfo() start...");

  logger.info("req.query = " + JSON.stringify(req.query));

  let resData = [];
  let a = {};
  a.stockNm = "하하하"
  resData.push(a);

  res.json(resData);

  logger.info("getStockInfo() end...");
}
