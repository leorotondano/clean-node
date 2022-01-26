const swaggerAutogen = require('swagger-autogen')()

const outputFile = process.cwd()+'/drivers/webserver/swagger/swagger_output.json'
const endpointsFiles = [process.cwd()+'/drivers/webserver/routes/index.js']

swaggerAutogen(outputFile, endpointsFiles).then(()=> {
    require('../server')
});

