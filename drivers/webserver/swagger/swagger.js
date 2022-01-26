const swaggerAutogen = require('swagger-autogen')()
const outputFile = process.cwd()+'/drivers/webserver/swagger/swagger_output.json'
const endpointsFiles = [process.cwd()+'/drivers/webserver/routes/index.js']
const config = require('../../../config')


const doc = {
    host: "localhost:"+config.PORT
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(()=> {
    require('../server')
});

