const User = require('./models/User');
const Order = require('./models/Order');
const Product = require('./models/Product');
const Token = require('./models/Tokens');


Order.belongsToMany(Product, { through: "Orders_Meals"});
Product.belongsToMany(Order, { through: "Orders_Meals"});

User.hasMany(Token);

User.hasMany(Order, {as : "pedidos"});

