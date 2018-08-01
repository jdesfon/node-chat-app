var moment = require('moment');

var createdAt = 1234; // timestamp value
var date = moment(createdAt);
console.log(date.format('MMM Do, YYYY'));