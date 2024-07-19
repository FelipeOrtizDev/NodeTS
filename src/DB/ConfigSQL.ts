import { DataSource } from "typeorm";
import dotenv from 'dotenv'

dotenv.config()

export const AppDataSource = new DataSource ({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: ['src/model/**/*.ts']
});

AppDataSource.initialize().then( () => {
    console.log('DataSource has been Initialazed')
}).catch( (error) => {
    console.error( "Error during DataSource Initialazed", error)
})

