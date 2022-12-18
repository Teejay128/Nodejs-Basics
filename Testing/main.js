const app = require('./app');

const startServer = (port) => {
    try{
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`)
        })
    }
    catch(err){
        console.error(err)
        process.exit();
    }
}

startServer(5000)