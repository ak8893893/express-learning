// 引入 chalk 模組 來改變字體顏色
import chalk from 'chalk';

// 引入 express 模組
import express from 'express';

// 產生一個 express 實例 - app
const app = express();

// Express 的核心功能! 稍後解釋
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/123', (req, res) => {
  res.send('Hello World AK');
});

// 讓 express 服務器運行在 port 3001   使用命令 node app.js 就能啟動
app.listen(3001, () => {
    console.log(`Listening on port ${chalk.green('3001')} ${chalk.blue("http://localhost:3001/")}`);
});