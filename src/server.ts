import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: 3000`);
});