const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const Token = require('../models/Tokens');
const OrdersAndMeals = require('../models/Orders_Meals');

(async () => {

    await User.sync();
    await Product.sync();
    await Order.sync();
    await Token.sync();
    await OrdersAndMeals.sync();

})();

