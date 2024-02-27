import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB();
/** 
import express from "express";

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

const app = express();
const port = process.env.PORT;


(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
    app.listen(port, () => {
      console.log(`Example app is listing on port ${port}`);
    });
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
})();
*/
