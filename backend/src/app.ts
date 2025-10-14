import express, { type Application } from "express";
import dotenv from "dotenv";
import { setupRoutes } from "./routes";

dotenv.config();

const app: Application = express();
app.use(express.json());

setupRoutes(app);

const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});