const User = require('./models/User');
const Order = require('./models/Order');
const Product = require('./models/Product');
const Token = require('./models/Tokens');
const OrdersAndMeals = require ('./models/Orders_Meals');


Order.belongsToMany(Product, { through: OrdersAndMeals});
Product.belongsToMany(Order, { through: OrdersAndMeals});

User.hasMany(Token);

User.hasMany(Order);

