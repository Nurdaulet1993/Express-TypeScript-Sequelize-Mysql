import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";

config();

const sequelize = new Sequelize({
    dialect:    'mysql',
    host:       process.env.DB_HOST,
    database:   process.env.DB_NAME,
    username:   process.env.DB_USER,
    password:   process.env.DB_PASS,
    models:     [__dirname + '/models']
});

export default sequelize;

