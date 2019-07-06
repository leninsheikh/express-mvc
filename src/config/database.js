export default {
  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABSE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": process.env.DATABASE_TYPE ||"mysql"
  },
}