
const app = require('./app')
const database = require('./database')

require(`dotenv`).config()

const port = 3010;

app.listen(port, () => {
    console.log(`Succesfull start in http://localhost:${port}`);
})