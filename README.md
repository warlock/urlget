urlGet
===
> A lightweight http/https request for Nodejs

```
This request only use native http and https library for make a simple request.
```


## INSTALL/DOWNLOAD
```sh
npm install urlget -S
```


## Basic usage:
```javascript
const urlGet = require("urlget")
urlGet('https://now.httpbin.org/')
  .then(response => {
    console.log(`RES: ${JSON.stringify(response.statusCode)}`)
  })
  .catch(error => {
    console.log(`ERROR: ${JSON.stringify(error)}`)
  })
```

```
RES: 200
```


## Using options:
```js
urlGet('http://httpbin.org/user-agent', {
  proxy: 'http://127.0.0.1:8080',
  agent: 'urlGet'
})
  .then(response => {
    console.log(`RES: ${JSON.stringify(response)}`)
  })
  .catch(error => {
    console.log(`ERROR: ${JSON.stringify(error)}`)
  })
```

```json
{"statusCode":200,"headers":{"connection":"close","server":"meinheld/0.6.1","date":"Tue, 13 Feb 2018 07:52:13 GMT","content-type":"application/json","access-control-allow-origin":"*","access-control-allow-credentials":"true","x-powered-by":"Flask","x-processed-time":"0.000569820404053","content-length":"29","via":"1.1 vegur"},"body":"{\n  \"user-agent\": \"urlGet\"\n}\n"}
```

## Options:
* proxy
* agent

## Response:
* statusCode
* headers
* body

## License
The MIT License (MIT)
Copyright (c) 2018 Josep Subils (js@js.gl)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
