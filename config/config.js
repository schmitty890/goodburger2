const dotenv = require('dotenv').config();

module.exports = {
  development: {
    username: "root",
    password: null,
    database: "goodburger2_db",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql"
  },
  production: {
    username: "d56yrr0jbwhwha5e",
    password: "lz52b8otwmh6gcwi",
    database: "efi4hxf1pyzigm9n",
    host: "k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql"
  }
}