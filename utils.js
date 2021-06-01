const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

function writetofile(fname, content)
{
    fs.writeFileSync(fname, JSON.stringify(content), 'utf8', (err) => {
        if (err)
        {
            console.log(err)
        }
    })
}

function getPostData(req)
{
    return new Promise((resolve, rejects) => {
        try
        {
            let body = ''
            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on('end', () => {
                resolve(body)
            })
        }
        catch (err)
        {
            reject(err)
        }
    })
}

module.exports = {
    writetofile,
    getPostData
}