import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv';
import { customerRouter } from './routes/customerRouter';
import { errorHandler } from './middleware/ErrorHandler';
import { authenticationRouter } from './routes/authenticationRouter';

const app = express();

app.use(express.json())

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}
app.use(cors(corsOptions))

configDotenv()

app.use('/', authenticationRouter)
app.use('/', customerRouter)


app.use(errorHandler)

const PORT = process.env.PORT ?? 7777

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}!`))