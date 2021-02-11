const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');

(async () => {

    await User.sync();
    await Product.sync();
    await Order.sync();
   
})();

