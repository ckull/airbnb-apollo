import { createConnection } from "typeorm";
const config = require('../../ormconfig')
export const createTypeORM = async () => {
 
  return createConnection({ ...config, name: "default" });
};