import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config()

const isDevMode = process.env.ENVIRONMENT === 'dev'
const ssl = () => {
  if(isDevMode){ 
    return undefined
  }
  if(!isDevMode){
    // for using ssl to connect to heroku DB
    const s = {        
      ca: process.env.URI,
      rejectUnauthorized: false
    }
    return s
  }
}

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntities: true,
  synchronize: true,
    ssl: ssl(),
};
