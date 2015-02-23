var Collection = require('ampersand-rest-collection');
var Person = require('./person');
var localStorageSync = require('../vendor/localStorageSync')

module.exports = Collection.extend({
	sync: localStorageSync('persons'),
    model: Person,
    url: '/api/people'
});
