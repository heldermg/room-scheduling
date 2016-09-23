module.exports = function() {
    var faker = require('faker');
    var _ = require('lodash');
    return {
        room: _.times(10, function(n) {
            return {
                id: n+1,
                name: faker.name.findName()
            }
        })
    }
}