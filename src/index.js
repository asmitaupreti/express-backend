import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`Server is running at ${port}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed !!!", err);
  });
