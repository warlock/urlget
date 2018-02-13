const { URL } = require('url')
const req = {}
req['http:'] = require('http')
req['https:'] = require('https')

module.exports = (urlobjective, inputOptions) => {
  return new Promise((resolve, reject) => {
    const url = new URL(urlobjective)
    var options = {
      path: url.pathname,
      host: url.host
    }

    if (inputOptions) {
      if (inputOptions.proxy) {
        const cutproxy = inputOptions.proxy.split(':')
        options.proxy = cutproxy[0]
        options.port = parseInt(cutproxy[1],0)
      }

      if (inputOptions.agent) {
        options.headers = { 'User-Agent': inputOptions.agent }
      }
    }

    req[url.protocol].get(options, response => {

      var data = ''

   
      response.on('data', chunk => {
        data += chunk
      })
   
      response.on('end', () => {
        var body
        try {
          body = JSON.parse(data)
        } catch (error) {
          body = data
        }

        const result = {
          statusCode: response.statusCode,
          headers: response.headers,
          body
        }
        resolve(result)
      })
   
    }).on("error", error => {
      reject({ error })
    })
  })
}
