'use strict'

const express = require('express')
const path = require('path')
const app = express();

//public 디렉토리 내의 html 파일들을 띄우기 위한 static 처리
app.use(express.static(path.join(__dirname, 'public')))

const port = 80


const server = app.listen(port, () => {
  console.log('Express server listening on port ' + port)
})