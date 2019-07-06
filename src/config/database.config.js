
if (process.env.ENV === 'development')  {
    require('dotenv').config();
}
module.exports = {
    development: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABSE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_TYPE
    }
}
