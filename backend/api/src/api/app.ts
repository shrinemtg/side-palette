import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import contactRouter from './routes/contact'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORSの設定
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))

// ルートの設定
app.use('/api/contact', contactRouter)

// 基本的なエラーハンドリング
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({
    message: 'エラーが発生しました',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    success: false
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}!`))
