const { URL } = require('url')
const req = {}
req['http:'] = require('http')
req['https:'] = require('https')

module.exports = urlobjective => {
  return new Promise((resolve, reject) => {
    const url = new URL(urlobjective)
    console.log('getting ' + url.protocol)
    req[url.protocol].get('https://www.debian.org', resp => {
      let data = ''
   
      resp.on('data', chunk => {
        data += chunk
      })
   
      resp.on('end', () => {
        resolve(data)
      })
   
    }).on("error", error => {
      reject({ error })
    })
  })
}
