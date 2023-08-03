import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import { Command } from "commander";

import noteRouter from "./routes/api/notes";

const app: express.Express = express();
const program: Command = new Command();

program.parse(process.argv);

const formatsLogger: string =
  app.get("env") === "development" ? "dev" : "short";

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/notes", noteRouter);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});

interface CustomError extends Error {
  status?: number;
}

app.use(
  (
    err: CustomError,
    _req: Request,
    res: Response,
    _next: NextFunction
  ): void => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
  }
);

export default app;
