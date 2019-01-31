const moment = require('moment');

// var date = new Date();

// console.log(date.getMonth());

var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('h:mm a'));
console.log(date.valueOf());