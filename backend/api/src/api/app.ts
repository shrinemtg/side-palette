import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import contactRouter from './routes/contact'

dotenv.config()

const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORSの設定
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'https://side-palette.com',
  'https://www.side-palette.com',
  'https://side-palette.vercel.app',
  'https://side-palette-git-develop-ub-mtg.vercel.app'
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('CORS blocked for origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
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
