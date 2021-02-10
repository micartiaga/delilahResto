const User = require('../models/User');

(async () => {

    await User.sync();
   
})();

