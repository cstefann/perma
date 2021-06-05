var path = require('path');

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
    getPostData
}