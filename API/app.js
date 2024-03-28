// 引入 morgan 模組 用來顯示連線資訊在console上的
import morgan from "morgan";

// 引入debug 模式 ("app是用來標記說目前是哪一個程式的 debug 模式跳出來的訊息")
import Debug from "debug";
const debug = Debug("app");

// 引入 chalk 模組 來改變字體顏色
import chalk from 'chalk';

// 引入 express 模組
import express from 'express';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// 動態的取得環境變數
const PORT = process.env.PORT || 3010;

// 產生一個 express 實例 - app
const app = express(); 

// 使用morgan
//app.use(morgan('combined'));  // 顯示全部資訊
app.use(morgan('tiny'));        // 只顯示部分資訊


// 獲取當前文件的路徑
const __filename = fileURLToPath(import.meta.url);

// 獲取當前目錄的路徑
const __dirname = dirname(__filename);

// session的router變數
const sessionsRouter = express.Router();

// 使用express.static中間件來設置靜態文件目錄
app.use(express.static(join(__dirname, 'public')));

// 使用ejs 動態的進行渲染
app.set('views','./src/views');
app.set('view engine','ejs');

sessionsRouter.route('/')
  .get((req,res)=>{
    res.send('hello sessions');
  })

sessionsRouter.route('/1')
.get((req,res)=>{
  res.send('hello single sessions');
})
  

// 網頁連到sessions取資料回去
app.use('/sessions', sessionsRouter);


// Express 的核心功能! 稍後解釋
app.get('/', (req, res) => {
  res.render('index',{title:'Globomantics', data: ['a','b','c']});
});

app.post('/123', (req, res) => {
  res.send('Hello World AK');
});

// 讓 express 服務器運行在 port 3001   使用命令 $ node app.js 就能啟動
app.listen(PORT, () => {
    
  // 用 debug 模式就平常不會跳這個出來 開debug模式才會跳出來  用 $ DEBUG=* node app.js  來啟動 用果用 DEBUG='app' 就只會有app的debug訊息
  /*
    Windows Command: set DEBUG=* & node ./app.js

    PowerShell: $env:DEBUG='*'; node app.js

    Terminal/WSL (Ubuntu): DEBUG=* node ./app.js
  */
  debug("debug mode on")
  
  console.log(`Listening on port ${chalk.green(PORT)} ${chalk.blue("http://localhost:"+PORT+"/")}`);
});