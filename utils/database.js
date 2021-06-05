let mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'perma';
  
function connectFunc() {
     mongoose.connect(`mongodb://${server}/${database}`,
    { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => {
         console.log('[mongoose-log] Database connection successful')
       })
       .catch(err => {
         console.error('[mongoose-log] Database connection error')
       })
  }

module.exports = {
    connectFunc
}