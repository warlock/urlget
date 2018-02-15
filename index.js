const { URL } = require('url')
const req = {}
req['http:'] = require('http')
req['https:'] = require('https')

module.exports = (urlobjective, inputOptions) => {
  return new Promise((resolve, reject) => {
    const url = new URL(urlobjective)
    var options = {
      protocol: url.protocol,
      path: url.pathname,
      host: url.hostname
    }
    var protocol = url.protocol

    if (inputOptions) {
      if (inputOptions.proxy) {
        const cutproxy = inputOptions.proxy.split('//')
        const cutnewproxy = cutproxy[1].split(':')
        protocol = cutproxy[0]
        options = {
          protocol: cutproxy[0],
          host: cutnewproxy[0],
          port: parseInt(cutnewproxy[1],0),
          path: urlobjective,
          headers: {
            Host: url.hostname
          }
        }
      }

      if (inputOptions.agent) {
        options.headers = { 'User-Agent': inputOptions.agent }
      }
    }

    req[protocol].get(options, response => {

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
          options,
          body
        }
        resolve(result)
      })
   
    }).on("error", error => {
      reject({ error })
    })
  })
}
