const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Validator = require('validator');

var privateKey = 'private.key';

// bcrypt.genSalt(10, function(err, salt) {
//     console.log(salt);
//     bcrypt.hash("Rabin Mallick", salt, function(err, hash) {
//        console.log(hash);
//     });
// });

jwt.sign({ foo: 'bar' }, privateKey, function(err, token) {
    console.log(token);
});

console.log(Validator.equals('12','12'));