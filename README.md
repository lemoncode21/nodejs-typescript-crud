# Step init project nodejs express typescript sequelize

<!-- init project -->
1. yarn init  
<!-- add dependecies -->
2. yarn add -D typescript ts-node @types/node @types/express nodemon
<!-- add tsconfig -->
3. ./node_modules/.bin/tsc --init
<!-- tsconfig script must be uncomment -->
4. "outDir": "./build"
<!-- add script -->   
5. add script tsc :dev "tsc && nodemon ./build/index.js"


# How to start

1. yarn install
2. yarn start-dev