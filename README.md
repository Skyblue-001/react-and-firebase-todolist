# react-and-firebase-todolist

flow : 

#A

create-react-app my-app
cd my-app/
yarn build
yarn start

#B

npm install -g firebase-tools

#C

firebase login
firebase init (Database & Hosting)

deploy folder : build
did not overwrite (N)

#D

firebase serve
firebase deploy

#E

npm install -S firebase

src/shared/config.js

```javasciprt
export const DB_CONFIG = {
    apiKey: "xxxxxxxx",
    authDomain: "xxxxxxxx",
    databaseURL: "xxxxxxxx",
    projectId: "xxxxxxxx",
    storageBucket: "xxxxxxxx",
    messagingSenderId: "xxxxxxxx"
  };
```
