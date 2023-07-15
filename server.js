import express from "express";
import dotenv from "dotenv";
dotenv.config();
import todosRouters from "./src/routes/todosRoute.js";
import connectDB from "./src/config/db.js";

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", todosRouters);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
