const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const transporter =require('./src/config/mailer.js')
const PORT = 3001;



conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(
      `Server listening at ${PORT}, running on ${process.env.NODE_ENV.toUpperCase()}_DB enviroment`
    ); // eslint-disable-line no-console
  });
});