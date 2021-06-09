const fs = require('fs')

async function getCSS(req, res)
{
  try {
    fs.readFile('public/' + req.url, 'utf8', function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('not found at %s', req.url)
      } else {
        try {
          res.writeHead(200, { 'Content-Type': 'text/css' })
          res.end(data)
        } catch (e) {
          res.writeHead(500, { 'Content-Type': 'text/html' })
          res.end('Internal server error')
        }
      }
    })
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/html' })
    res.end('Internal server error')
  }
}

async function getHtml(req, res)
{
  try {
    await fs.readFile('public/' + req.url, 'utf8', function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('not found at %s', req.url)
      } else {
        try {
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end(data)
        } catch (e) {
          res.writeHead(500, { 'Content-Type': 'text/html' })
          res.end('Internal server error')
        }
      }
    })
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/html' })
    res.end('Internal server error')
  }
}

async function getJS(req, res)
{
  try {
    await fs.readFile('public/' + req.url, 'utf8', function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('not found at %s', req.url)
      } else {
        try {
          res.writeHead(200, { 'Content-Type': 'text/javascript' })
          res.end(data)
        } catch (e) {
          res.writeHead(500, { 'Content-Type': 'text/html' })
          res.end('Internal server error')
        }
      }
    })
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/html' })
    res.end('Internal server error')
  }
}

async function getPhoto(req, res)
{
  try {
    fs.readFile('public/images/' + req.url, (err, data) => {
      const image = data
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('not found at %s', req.url)
      } else {
        try {
          res.writeHead(200, { 'Content-Type': 'image/jpg' })
          res.end(image, 'utf-8')
        } catch (e) {
          res.writeHead(500, { 'Content-Type': 'text/html' })
          res.end('Internal server error')
        }
      }
    })
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/html' })
    res.end('Internal server error')
  }
}

module.exports = {
    getCSS,
    getHtml,
    getJS,
    getPhoto
}