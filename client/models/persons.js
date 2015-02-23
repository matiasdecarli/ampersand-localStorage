var Collection = require('ampersand-rest-collection');
var Person = require('./person');
var localStorageSync = require('../vendor/localStorageSync');
var localStorageModel = 'persons';


module.exports = Collection.extend({
	sync: localStorageSync(localStorageModel),
    model: Person,
    url: '/api/people',
    fetch: function(data){		
    	this.set(JSON.parse(localStorage.getItem(localStorageModel)));
    	return Collection.prototype.fetch.call(this);
    }
});
