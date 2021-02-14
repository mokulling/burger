const orm = require('../config/orm')


//Create code that will call the ORM functions using burger specific input for the ORM 
const burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        });

    },
    create: function(cols, vals, cb){

    },
    update: function(objColVals, condition, cb) {
        
    }


}



module.exports = burger;