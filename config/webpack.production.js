const path = require("path");
module.exports = {
    entry:[rootPath+'/src/webapp/entry-server.js'],
    output: {
        filename: "scripts/[name].[hash:5].bundle.js"
    },
    plugins: [
       
    ],
}
