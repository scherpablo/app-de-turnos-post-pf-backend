require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { BDD_LOCAL }  = process.env;
const quotesModel=require('./models/QuotesModels/quotesModels')
const serviceModel=require('./models/ServicesModels/servicesModels')
const usersModel=require('./models/UserModels/usersModels')
const userLoginModel=require('./models/UserModels/userLoginModels')

const sequelize = new Sequelize(
   `${BDD_LOCAL}`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);

const modelDefiners = [quotesModel,serviceModel,userLoginModel,usersModel];
const basename = path.basename(__filename); // Aquí está la definición de basename

fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Quotes, Service, User, UserLogin } = sequelize.models;

UserLogin.hasOne(User, { foreignKey: 'userLoginId' });
User.belongsTo(UserLogin, { foreignKey: 'userLoginId' });

User.hasMany(Quotes, { foreignKey: 'userId' });
Quotes.belongsTo(User, { foreignKey: 'userId' });

Service.belongsToMany(Quotes, { through: 'ServiceQuotes' });
Quotes.belongsToMany(Service, { through: 'ServiceQuotes' });

module.exports = {
   ...sequelize.models,
   conn: sequelize,
};
