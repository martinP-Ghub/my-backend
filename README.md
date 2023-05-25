
# node js BackEnd

## Available Scripts

In the project directory, you can run:

## `1. MySQL 설치 및 실행`

#### `$ brew install mysql`
#### `$ mysql -u root -p`


## `2. project 내부 설치 사항`
#### `$ npm install mysql`
#### `$ npm install express`
#### `$ npm install cors`
#### `$ npm install dotenv`

## `3. node 시작`
#### `$ node index.js` or  `$ npm run start`
```
//실행 정상 화면

> my-backend@1.0.0 start 
> node index.js 

 Server listening at http://localhost:4000
``` 

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

index.js 는 변경 가능(기본 페이지 설정)

단, npm run start 로 실행 js 파일 변경시 package.json->scripts->start 코드 변경

port 수정은 index.js -> const port 수정

## `4. node 종료`
#### `커멘트 창 내부에서 ctrl + c 클릭`