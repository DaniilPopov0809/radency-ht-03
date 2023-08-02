import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Command } from 'commander';

// import visitorsRouter from './routes/api/visitors';
// import authRouter from './routes/api/adminAuth';

const app = express();
const program = new Command();

// Обработка аргументов командной строки с помощью Commander
program
//   .option('-p, --port <port>', 'Set the server port', '3000')
  .parse(process.argv);

// const port = parseInt(program.port, 10);

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use('/visitors', visitorsRouter);
// app.use('/auth', authRouter);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Not found' });
});

interface CustomError extends Error {
    status?: number;
  }

app.use((err: CustomError, _req: Request, res: Response, _next: NextFunction): void => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

// app.listen(3000, () => {
//   console.log(`Server running. Use our API on port: 3000`);
// });
export default app;