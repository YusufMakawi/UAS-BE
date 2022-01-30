(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1642254641213
//APP_KEY=W9iKm2CJjvMYrPQhN1x5MfG5kyG9k_KhqAhllvWkxU6JG3pL_iC8wzXUnkNkm6yjwKUc9_atDuzo_OGYi9ybLg