import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv';
import { customerRouter } from './routes/customerRouter';

const app = express();

app.use(express.json())

app.use(cors())

configDotenv()

app.use('/', customerRouter)

const PORT = process.env.PORT ?? 7777

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}!`))