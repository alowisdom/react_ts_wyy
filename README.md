# react_ts_wyy

## craco.config.js  配置

```
import path from "path"

const resolve = (dir) => path.resolve(__dirname,dir)

module.exports = {

    webpack:{
        alias:{
            "@":resolve("src")
        }
    }
}
```



## tsconfig.js  配置



```
    "baseUrl": ".",
    "paths": {
        "@/*":[
            "src/*"
        ]
    }
```

## 修改package.json

```
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
  },
```

