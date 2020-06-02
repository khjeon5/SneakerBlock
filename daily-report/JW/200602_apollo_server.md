# Daily Report

> 오늘 괜찮았나 모르겠다.
> 확실한건 일찍 퇴근하는건 아주 환상적이다.

## Apollo-server 

1. apollo-server 기본 필요 모듈 설치

        ```sh
        sudo apt-get update
        curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
        sudo apt-get install nodejs
        sudo apt-get install yarn
        mkdir apollo-server
        yarn init
        yarn add apollo-server graphql express express-graphql graphql-tools mogoose babel-cli babel-preset-env babel-preset-stage-3 nodemon
        ```

2. ./babelrc 및 package.json 수정

> babel 오타 조심!!

        ```sh
        {
                "presets": ["env","stage-3"]}
        ```
> package.json 수정

        ```sh
        "scripts": {
                "start": "nodemon --exec babel-node index.js"
        }
        ```

>package.json 까시 수정 완료 후, 모듈 install

        ```sh
        npm install
        ```

3. index.js 설정

> import가 되지 않으면 express 설정 잘못 한 것. npm install 됐는지 혹은 node  버전 10.x 버전인지 확인(npm version 6.x)

4. MongoDB connect

> MongoDB 연결 시, 연결이 되지 않으면 connect 버전을 2.2.12로 바꿔야 한다.

        ```sh
        import mongoose from 'mongoose'
        const dbName = "test"
        const dbPassword = "testpassword"
        const uri = `mongodb://playground4:${dbPassword}@cluster0-shard-00-00-2xvk8.gcp.mongodb.net:27017,cluster0-shard-00-01-2xvk8.gcp.mongodb.net:27017,cluster0-shard-00-02-2xvk8.gcp.mongodb.net:27017/${dbName}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`
        mongoose.Promise = global.Promise;
        mongoose.connect(uri, { useNewUrlParser: true });
        ```

5. nodemon을 이용한 graphql 열결 확인

> yarn start 혹은 npm start를 통하여 graphql-server가 동작이 되는지 확인한다.
> graphql-server가 동작이 되지 않을 시, url이 뜨지 않는다.
>  Mongodb 연결이 되지 않을 시, MongoDB 오류가 뜬다.

## 오늘의 총평

> github에 push 할 때, password를 한번 더 확인하다.
> Mongodb에 연결을 할 때, 버전을 확인하자.
> 당황하지 말고 처음부터 다시 차근차근 확인하자.
> 팀원들을 잘 만난 것 같다.
> 다음에도 이렇게 쨌으면 좋겠다.
> 애정합니다. 여러분.
