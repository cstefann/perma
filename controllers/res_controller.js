const fs = require('fs')

async function getCSS(req, res)
{
  try {
    fs.readFile('public/' + req.url, 'utf8', function (err, data) {
      if (err) {
        res.statusCode = 404
        res.write(`not found at ${req.url}`)
        res.end()
      } else {
        try {
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/css')
          res.write(data)
          res.end()
        } catch (e) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'text/css')
          res.write('Internal server error')
          res.end()
        }
      }
    })
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/css')
    res.write('Internal server error')
    res.end()
  }
}

async function getHtml(req, res)
{
  try {
    await fs.readFile('public/' + req.url, 'utf8', function (err, data) {
      if (err) {
        res.statusCode = 404
        res.write(`not found at ${req.url}`)
        res.end()
      } else {
        try {
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html')
          res.write(data)
          res.end()
        } catch (e) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'text/html')
          res.write('Internal server error')
          res.end()
        }
      }
    })
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
    res.end()
  }
}

async function getJS(req, res)
{
  try {
    await fs.readFile('public/' + req.url, 'utf8', function (err, data) {
      if (err) {
        res.statusCode = 404
        res.write(`not found at ${req.url}`)
        res.end()
      } else {
        try {
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/javascript')
          res.write(data)
          res.end()
        } catch (e) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'text/javascript')
          res.write('Internal server error')
          res.end()
        }
      }
    })
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/javascript')
    res.write('Internal server error')
    res.end()
  }
}

async function getPhoto(req, res)
{
  try {
    fs.readFile('public' + req.url, (err, data) => {
      const image = data
      if (err) {
        res.statusCode = 404
        res.write(`not found at ${req.url}`)
        res.end()
      } else {
        try {
          res.writeHead(200, { 'Content-Type': 'image/jpg' })
          res.end(image, 'utf-8')
        } catch (e) {
          res.writeHead(500)
          res.write()
          res.end()
        }
      }
    })
  } catch (e) {
    res.writeHead(500)
    res.write()
    res.end()
  }
}

module.exports = {
    getCSS,
    getHtml,
    getJS,
    getPhoto
}