var AmpersandModel = require('ampersand-model');
var syncFactory = require('../vendor/ampersand-sync-localstorage');
var localStorageSync = require('../vendor/localStorageSync');

module.exports = AmpersandModel.extend({
    sync: localStorageSync('person'),
    props: {
        id: 'any',
        firstName: ['string', true, ''],
        lastName: ['string', true, ''],
        coolnessFactor: ['number', true, 5]
    },
    session: {
        selected: ['boolean', true, false]
    },
    derived: {
        fullName: {
            deps: ['firstName', 'lastName'],
            fn: function() {
                return this.firstName + ' ' + this.lastName;
            }
        },
        avatar: {
            deps: ['firstName', 'lastName'],
            fn: function() {
                return 'http://robohash.org/' + encodeURIComponent(this.fullName) + '?size=80x80';
            }
        },
        editUrl: {
            deps: ['id'],
            fn: function() {
                return '/person/' + this.id + '/edit';
            }
        },
        viewUrl: {
            deps: ['id'],
            fn: function() {
                return '/person/' + this.id;
            }
        }
    }
});
