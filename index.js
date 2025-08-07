import express from "express";
import log4js from "log4js";

import getStockInfo from "./api/get-stock-info.js";
import getLoanRate from "./api/get-loan-rate.js";

log4js.configure("./config/log4js.json");

const logger = log4js.getLogger("app");
const app = express();
const port = 3001;

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "auto" }));
app.use(express.json());

app.get("/api/get-stock-info", getStockInfo);
app.get("/api/get-loan-rate", getLoanRate);

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});
