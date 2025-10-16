import express, { type Application } from "express";
import dotenv from "dotenv";
import { setupRoutes } from "./routes";
import cors from "cors";
import { appConfig } from "config/appConfig";
import path from "path";

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(cors({
  origin: appConfig.FRONTEND_URL,
  credentials: true,
}));

setupRoutes(app);
app.use("/files", express.static(path.resolve(__dirname, "../files")));

const PORT = appConfig.PORT || 8000; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});